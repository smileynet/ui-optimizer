from pathlib import Path

import torch
from transformers import CLIPProcessor, CLIPModel

from .base import BaseEvaluator
from ..types import CriteriaScore, EvaluationResult, EvaluatorType, ModelCapabilities


class UIClipEvaluator(BaseEvaluator):
    MODEL_ID = "biglab/uiclip_jitteredwebsites-2-224-paraphrased_webpairs_humanpairs"
    BASE_CLIP = "openai/clip-vit-base-patch32"

    @property
    def capabilities(self) -> ModelCapabilities:
        return ModelCapabilities(
            name="UIClip",
            evaluator_type=EvaluatorType.UICLIP,
            parameters="400M",
            vram_required_gb=2.0,
            supports_quality_score=True,
            supports_text_matching=True,
            supports_design_suggestions=False,
        )

    def load_model(self) -> None:
        self.processor = CLIPProcessor.from_pretrained(self.BASE_CLIP)
        self.model = CLIPModel.from_pretrained(self.MODEL_ID).to(self.device)
        self.model.eval()

    def evaluate(self, image_path: Path, description: str) -> EvaluationResult:
        try:
            image = self.load_image(image_path)

            quality_prompts = [
                "A high quality, well-designed user interface",
                "A low quality, poorly designed user interface",
                description,
                f"NOT {description}",
            ]

            def run_inference():
                inputs = self.processor(
                    text=quality_prompts,
                    images=image,
                    return_tensors="pt",
                    padding=True,
                ).to(self.device)

                with torch.no_grad():
                    outputs = self.model(**inputs)
                    logits = outputs.logits_per_image
                    probs = logits.softmax(dim=1)
                return probs[0].cpu().numpy()

            probs, inference_time = self.timed_inference(run_inference)

            quality_score = float(probs[0]) - float(probs[1])
            quality_normalized = (quality_score + 1) * 5

            description_score = float(probs[2]) - float(probs[3])
            description_normalized = (description_score + 1) * 5

            overall = (quality_normalized + description_normalized) / 2

            criteria = [
                CriteriaScore(
                    name="design_quality",
                    score=quality_normalized,
                    passed=quality_normalized >= 6.0,
                    explanation=f"Quality prob: {probs[0]:.3f} vs bad: {probs[1]:.3f}",
                ),
                CriteriaScore(
                    name="description_match",
                    score=description_normalized,
                    passed=description_normalized >= 6.0,
                    explanation=f"Match prob: {probs[2]:.3f} vs not: {probs[3]:.3f}",
                ),
            ]

            return EvaluationResult(
                evaluator=self.capabilities.name,
                image_path=image_path,
                overall_score=overall,
                criteria_scores=criteria,
                raw_output=f"Probs: quality={probs[0]:.3f}, bad={probs[1]:.3f}, match={probs[2]:.3f}, not={probs[3]:.3f}",
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
