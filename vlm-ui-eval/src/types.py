from dataclasses import dataclass, field
from enum import Enum
from pathlib import Path
from typing import Any


class EvaluatorType(Enum):
    UICLIP = "uiclip"
    SMOLVLM = "smolvlm"
    MOBILEVLM = "mobilevlm"
    QWEN_VL = "qwen-vl"


@dataclass
class CriteriaScore:
    name: str
    score: float  # 0-10
    passed: bool
    explanation: str


@dataclass
class EvaluationResult:
    evaluator: str
    image_path: Path
    overall_score: float  # 0-10
    criteria_scores: list[CriteriaScore] = field(default_factory=list)
    raw_output: str = ""
    inference_time_ms: float = 0.0
    vram_used_mb: float = 0.0
    error: str | None = None

    @property
    def passed(self) -> bool:
        return self.overall_score >= 7.0 and all(c.passed for c in self.criteria_scores)


@dataclass
class ModelCapabilities:
    name: str
    evaluator_type: EvaluatorType
    parameters: str
    vram_required_gb: float
    supports_quality_score: bool
    supports_text_matching: bool
    supports_design_suggestions: bool
    quantization: str = "none"


@dataclass
class BenchmarkMetrics:
    model_name: str
    total_images: int
    avg_score: float
    avg_inference_time_ms: float
    peak_vram_mb: float
    scores_by_image: dict[str, float] = field(default_factory=dict)
    capabilities: ModelCapabilities | None = None
    errors: list[str] = field(default_factory=list)


VIBRANT_MINIMAL_CRITERIA = [
    "color_strategy",
    "white_space",
    "typography",
    "visual_noise",
    "accessibility",
    "emotional_impact",
]

VIBRANT_MINIMAL_DESCRIPTION = """A vibrant minimal design system featuring:
- Blue primary color with rose accent on neutral stone background
- Clean typography with 1.25 modular scale
- 8px grid spacing system with generous whitespace
- Consistent, accessible UI components
- Modern, energetic yet sophisticated aesthetic
- Proper dark mode with maintained contrast"""
