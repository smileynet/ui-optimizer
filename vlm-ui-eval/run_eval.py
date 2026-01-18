#!/usr/bin/env python3

import argparse
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).parent))

from src.runner import run_benchmark, EVALUATOR_CLASSES
from src.html_report import generate_html_report


def main():
    parser = argparse.ArgumentParser(description="Evaluate UI screenshots with multiple VLM models")
    parser.add_argument(
        "--screenshots",
        type=Path,
        default=Path("screenshots"),
        help="Directory containing screenshots to evaluate",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("results"),
        help="Directory for output results",
    )
    parser.add_argument(
        "--models",
        nargs="+",
        help="Specific models to run (default: all). Options: uiclip, smolvlm, mobilevlm, qwen-vl",
    )
    parser.add_argument(
        "--list-models",
        action="store_true",
        help="List available models and exit",
    )
    parser.add_argument(
        "--html",
        type=Path,
        help="Generate HTML report from latest results file",
    )

    args = parser.parse_args()

    if args.list_models:
        print("\nAvailable VLM Evaluators:")
        print("-" * 60)
        for evaluator_class in EVALUATOR_CLASSES:
            caps = evaluator_class().capabilities
            print(f"\n  {caps.name}")
            print(f"    Type: {caps.evaluator_type.value}")
            print(f"    Parameters: {caps.parameters}")
            print(f"    VRAM Required: {caps.vram_required_gb}GB")
            print(f"    Quality Score: {'✓' if caps.supports_quality_score else '✗'}")
            print(f"    Text Matching: {'✓' if caps.supports_text_matching else '✗'}")
            print(f"    Suggestions: {'✓' if caps.supports_design_suggestions else '✗'}")
        print()
        return

    if args.html:
        results_files = sorted(args.output.glob("benchmark_*.json"))
        if not results_files:
            print(f"Error: No results files found in {args.output}")
            sys.exit(1)
        latest = results_files[-1]
        generate_html_report(latest, args.screenshots, args.html)
        print(f"HTML report generated: {args.html}")
        return

    if not args.screenshots.exists():
        print(f"Error: Screenshots directory not found: {args.screenshots}")
        sys.exit(1)

    run_benchmark(
        screenshots_dir=args.screenshots,
        output_dir=args.output,
        models=args.models,
    )


if __name__ == "__main__":
    main()
