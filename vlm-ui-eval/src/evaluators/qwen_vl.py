from pathlib import Path
import re

import torch
from transformers import Qwen2VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig
from qwen_vl_utils import process_vision_info

from .base import BaseEvaluator
from ..types import CriteriaScore, EvaluationResult, EvaluatorType, ModelCapabilities


EVAL_PROMPT = """Analyze this UI screenshot as a professional design reviewer.

FIRST: Check if this is a properly rendered UI with actual styled components, colors, and visual design elements. If the page shows only raw text, unstyled HTML, config dumps, error messages, or code - give all scores 1-2/10.

If it IS a properly rendered UI, evaluate these aspects (score 1-10 each):

1. COLOR_STRATEGY: Strategic use of limited color palette with bold accents
2. WHITE_SPACE: Clean layout with generous negative space  
3. TYPOGRAPHY: Clear type hierarchy and consistent font usage
4. VISUAL_NOISE: Purposeful elements, minimal decorative clutter
5. ACCESSIBILITY: Readable text, sufficient contrast ratios
6. EMOTIONAL_IMPACT: Modern, professional, energetic feel

Format your response exactly as:
IS_RENDERED_UI: [yes/no] - [brief explanation of what you see]
COLOR_STRATEGY: [score]/10 - [explanation]
WHITE_SPACE: [score]/10 - [explanation]
TYPOGRAPHY: [score]/10 - [explanation]
VISUAL_NOISE: [score]/10 - [explanation]
ACCESSIBILITY: [score]/10 - [explanation]
EMOTIONAL_IMPACT: [score]/10 - [explanation]
OVERALL: [score]/10 - [summary assessment]"""


class QwenVLEvaluator(BaseEvaluator):
    MODEL_ID = "Qwen/Qwen2-VL-2B-Instruct"

    @property
    def capabilities(self) -> ModelCapabilities:
        return ModelCapabilities(
            name="Qwen2-VL-2B",
            evaluator_type=EvaluatorType.QWEN_VL,
            parameters="2B",
            vram_required_gb=5.0,
            supports_quality_score=True,
            supports_text_matching=True,
            supports_design_suggestions=True,
            quantization="4bit",
        )

    def load_model(self) -> None:
        quantization_config = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_compute_dtype=torch.float16,
            bnb_4bit_use_double_quant=True,
            bnb_4bit_quant_type="nf4",
        )

        self.processor = AutoProcessor.from_pretrained(self.MODEL_ID)
        self.model = Qwen2VLForConditionalGeneration.from_pretrained(
            self.MODEL_ID,
            quantization_config=quantization_config,
            device_map="auto",
        )
        self.model.eval()

    def parse_scores(self, text: str) -> tuple[list[CriteriaScore], float]:
        criteria = []
        pattern = r"(\w+):\s*\[?(\d+(?:\.\d+)?)\]?/10\s*-?\s*(.*?)(?=\n|$)"
        matches = re.findall(pattern, text, re.IGNORECASE)

        for name, score_str, explanation in matches:
            name_lower = name.lower()
            if name_lower == "overall":
                continue
            try:
                score = float(score_str)
                criteria.append(
                    CriteriaScore(
                        name=name_lower,
                        score=score,
                        passed=score >= 6.0,
                        explanation=explanation.strip(),
                    )
                )
            except ValueError:
                pass

        overall_match = re.search(r"OVERALL:\s*\[?(\d+(?:\.\d+)?)\]?/10", text, re.IGNORECASE)
        overall = float(overall_match.group(1)) if overall_match else 0.0

        if not overall and criteria:
            overall = sum(c.score for c in criteria) / len(criteria)

        return criteria, overall

    def evaluate(self, image_path: Path, description: str) -> EvaluationResult:
        try:
            # Use file:// URL format as recommended by Qwen2-VL docs
            image_url = f"file://{image_path.absolute()}"

            messages = [
                {
                    "role": "user",
                    "content": [
                        {"type": "image", "image": image_url},
                        {"type": "text", "text": EVAL_PROMPT},
                    ],
                }
            ]

            def run_inference():
                # Apply chat template
                text = self.processor.apply_chat_template(
                    messages, tokenize=False, add_generation_prompt=True
                )
                # Use qwen_vl_utils for proper image processing
                image_inputs, video_inputs = process_vision_info(messages)
                inputs = self.processor(
                    text=[text],
                    images=image_inputs,
                    videos=video_inputs,
                    padding=True,
                    return_tensors="pt",
                ).to(self.model.device)

                with torch.no_grad():
                    output_ids = self.model.generate(
                        **inputs,
                        max_new_tokens=500,
                        do_sample=False,
                    )
                # Properly trim: remove input tokens from output
                generated = output_ids[0][inputs.input_ids.shape[1] :]
                return self.processor.decode(
                    generated, skip_special_tokens=True, clean_up_tokenization_spaces=False
                )

            output_text, inference_time = self.timed_inference(run_inference)
            criteria, overall = self.parse_scores(output_text)

            return EvaluationResult(
                evaluator=self.capabilities.name,
                image_path=image_path,
                overall_score=overall,
                criteria_scores=criteria,
                raw_output=output_text,
                inference_time_ms=inference_time,
                vram_used_mb=self.get_vram_usage_mb(),
            )

        except Exception as e:
            return EvaluationResult(
                evaluator=self.capabilities.name,
                image_path=image_path,
                overall_score=0.0,
                error=str(e),
            )
