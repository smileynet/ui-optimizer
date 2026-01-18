from pathlib import Path
import re

import torch
from transformers import AutoProcessor, AutoModelForImageTextToText

from .base import BaseEvaluator
from ..types import CriteriaScore, EvaluationResult, EvaluatorType, ModelCapabilities


# Simple prompt - 256M can't handle complex structured output
EVAL_PROMPT = """Look at this UI screenshot and rate its design quality.

Rate these aspects from 1-10:
- Colors: Is the color palette good?
- Layout: Is there enough white space?
- Typography: Are fonts readable?
- Overall: What's the overall quality?

Give short answers with numbers."""


class SmolVLMEvaluator(BaseEvaluator):
    MODEL_ID = "HuggingFaceTB/SmolVLM2-256M-Video-Instruct"

    @property
    def capabilities(self) -> ModelCapabilities:
        return ModelCapabilities(
            name="SmolVLM2-256M",
            evaluator_type=EvaluatorType.SMOLVLM,
            parameters="256M",
            vram_required_gb=1.0,
            supports_quality_score=True,
            supports_text_matching=False,
            supports_design_suggestions=False,
        )

    def load_model(self) -> None:
        self.processor = AutoProcessor.from_pretrained(self.MODEL_ID)
        self.model = AutoModelForImageTextToText.from_pretrained(
            self.MODEL_ID,
            torch_dtype=torch.bfloat16,  # bfloat16 recommended for SmolVLM
            device_map="auto",
        )
        self.model.eval()

    def parse_scores(self, text: str) -> tuple[list[CriteriaScore], float]:
        criteria = []

        # Look for patterns like "Colors: 8" or "Colors: 8/10" or "colors - 8"
        patterns = [
            (r"[Cc]olor[s]?[:\s-]+(\d+)", "color"),
            (r"[Ll]ayout[:\s-]+(\d+)", "layout"),
            (r"[Ww]hite\s*[Ss]pace[:\s-]+(\d+)", "layout"),
            (r"[Tt]ypograph[y]?[:\s-]+(\d+)", "typography"),
            (r"[Ff]ont[s]?[:\s-]+(\d+)", "typography"),
            (r"[Oo]verall[:\s-]+(\d+)", "overall"),
            (r"[Qq]uality[:\s-]+(\d+)", "overall"),
        ]

        found_scores = {}
        for pattern, name in patterns:
            match = re.search(pattern, text)
            if match:
                try:
                    score = float(match.group(1))
                    if score > 10:
                        score = score / 10
                    if name not in found_scores:
                        found_scores[name] = score
                except ValueError:
                    pass

        overall = found_scores.pop("overall", 0.0)

        for name, score in found_scores.items():
            criteria.append(
                CriteriaScore(
                    name=name,
                    score=score,
                    passed=score >= 6.0,
                    explanation="",
                )
            )

        if not overall and criteria:
            overall = sum(c.score for c in criteria) / len(criteria)

        return criteria, overall

    def evaluate(self, image_path: Path, description: str) -> EvaluationResult:
        try:
            # Load image directly
            image = self.load_image(image_path)

            # Use message format with image placeholder
            messages = [
                {
                    "role": "user",
                    "content": [
                        {"type": "image"},
                        {"type": "text", "text": EVAL_PROMPT},
                    ],
                }
            ]

            def run_inference():
                # Apply chat template to get prompt text
                prompt = self.processor.apply_chat_template(
                    messages,
                    add_generation_prompt=True,
                    tokenize=False,
                )

                # Process with image
                inputs = self.processor(
                    text=prompt,
                    images=[image],
                    return_tensors="pt",
                ).to(self.model.device, dtype=torch.bfloat16)

                with torch.no_grad():
                    output_ids = self.model.generate(
                        **inputs,
                        max_new_tokens=100,  # Keep short to prevent repetition
                        do_sample=False,
                    )

                # Decode only new tokens
                generated = output_ids[0][inputs.input_ids.shape[1] :]
                return self.processor.decode(generated, skip_special_tokens=True)

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
