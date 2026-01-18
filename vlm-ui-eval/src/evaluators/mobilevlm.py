from pathlib import Path
import re

import torch
from transformers import AutoProcessor, LlavaOnevisionForConditionalGeneration, BitsAndBytesConfig

from .base import BaseEvaluator
from ..types import CriteriaScore, EvaluationResult, EvaluatorType, ModelCapabilities


EVAL_PROMPT = """Rate this UI design from 1-10.

COLOR: 
LAYOUT: 
TYPOGRAPHY: 
OVERALL: 

Give only numbers 1-10 for each."""


class MobileVLMEvaluator(BaseEvaluator):
    MODEL_ID = "llava-hf/llava-onevision-qwen2-0.5b-ov-hf"

    @property
    def capabilities(self) -> ModelCapabilities:
        return ModelCapabilities(
            name="LLaVA-OneVision-0.5B",
            evaluator_type=EvaluatorType.MOBILEVLM,
            parameters="0.5B",
            vram_required_gb=2.0,
            supports_quality_score=True,
            supports_text_matching=True,
            supports_design_suggestions=True,
        )

    def load_model(self) -> None:
        self.processor = AutoProcessor.from_pretrained(self.MODEL_ID)
        self.model = LlavaOnevisionForConditionalGeneration.from_pretrained(
            self.MODEL_ID,
            torch_dtype=torch.float16,
            device_map="auto",
        )
        self.model.eval()

    def parse_scores(self, text: str) -> tuple[list[CriteriaScore], float]:
        criteria = []
        patterns = [
            (r"[Cc]olor[s]?[:\s]+(\d+)", "color"),
            (r"[Ll]ayout[:\s]+(\d+)", "layout"),
            (r"[Tt]ypograph[y]?[:\s]+(\d+)", "typography"),
            (r"[Oo]verall[:\s]+(\d+)", "overall"),
        ]

        found_scores = {}
        for pattern, name in patterns:
            match = re.search(pattern, text)
            if match:
                try:
                    score = float(match.group(1))
                    if score > 10:
                        score = score / 10
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
            image = self.load_image(image_path)

            conversation = [
                {
                    "role": "user",
                    "content": [
                        {"type": "image"},
                        {"type": "text", "text": EVAL_PROMPT},
                    ],
                },
            ]

            def run_inference():
                prompt = self.processor.apply_chat_template(
                    conversation, add_generation_prompt=True
                )
                inputs = self.processor(
                    images=image,
                    text=prompt,
                    return_tensors="pt",
                ).to(self.model.device, torch.float16)

                with torch.no_grad():
                    output_ids = self.model.generate(
                        **inputs,
                        max_new_tokens=500,
                        do_sample=False,
                    )
                # Properly trim: remove input tokens from output
                generated = output_ids[0][inputs.input_ids.shape[1] :]
                return self.processor.decode(
                    generated, skip_special_tokens=True, clean_up_tokenization_spaces=True
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
