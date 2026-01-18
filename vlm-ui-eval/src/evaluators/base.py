from abc import ABC, abstractmethod
from pathlib import Path
import time

import torch
from PIL import Image

from ..types import EvaluationResult, ModelCapabilities


class BaseEvaluator(ABC):
    def __init__(self):
        self.model = None
        self.processor = None
        self.device = "cuda" if torch.cuda.is_available() else "cpu"

    @property
    @abstractmethod
    def capabilities(self) -> ModelCapabilities:
        pass

    @abstractmethod
    def load_model(self) -> None:
        pass

    @abstractmethod
    def evaluate(self, image_path: Path, description: str) -> EvaluationResult:
        pass

    def get_vram_usage_mb(self) -> float:
        if torch.cuda.is_available():
            return torch.cuda.memory_allocated() / 1024 / 1024
        return 0.0

    def load_image(self, image_path: Path) -> Image.Image:
        return Image.open(image_path).convert("RGB")

    def timed_inference(self, func, *args, **kwargs) -> tuple[any, float]:
        if torch.cuda.is_available():
            torch.cuda.synchronize()
        start = time.perf_counter()
        result = func(*args, **kwargs)
        if torch.cuda.is_available():
            torch.cuda.synchronize()
        elapsed_ms = (time.perf_counter() - start) * 1000
        return result, elapsed_ms

    def unload_model(self) -> None:
        if self.model is not None:
            del self.model
            self.model = None
        if self.processor is not None:
            del self.processor
            self.processor = None
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
