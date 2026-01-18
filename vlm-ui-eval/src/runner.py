from pathlib import Path
import json
from datetime import datetime

from rich.console import Console
from rich.table import Table
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.panel import Panel

from .types import BenchmarkMetrics, EvaluationResult, VIBRANT_MINIMAL_DESCRIPTION
from .evaluators import (
    BaseEvaluator,
    UIClipEvaluator,
    SmolVLMEvaluator,
    MobileVLMEvaluator,
    QwenVLEvaluator,
)


console = Console()


EVALUATOR_CLASSES: list[type[BaseEvaluator]] = [
    UIClipEvaluator,
    SmolVLMEvaluator,
    MobileVLMEvaluator,
    QwenVLEvaluator,
]


def get_screenshots(directory: Path) -> list[Path]:
    return sorted(directory.glob("*.png"))


def run_single_evaluator(
    evaluator_class: type[BaseEvaluator],
    screenshots: list[Path],
    description: str,
) -> tuple[BenchmarkMetrics, list[EvaluationResult]]:
    evaluator = evaluator_class()
    caps = evaluator.capabilities

    console.print(f"\n[bold blue]Loading {caps.name}...[/bold blue]")
    console.print(f"  Parameters: {caps.parameters}, VRAM: {caps.vram_required_gb}GB")

    try:
        evaluator.load_model()
    except Exception as e:
        console.print(f"[red]Failed to load {caps.name}: {e}[/red]")
        return (
            BenchmarkMetrics(
                model_name=caps.name,
                total_images=len(screenshots),
                avg_score=0.0,
                avg_inference_time_ms=0.0,
                peak_vram_mb=0.0,
                errors=[str(e)],
                capabilities=caps,
            ),
            [],
        )

    results: list[EvaluationResult] = []
    peak_vram = 0.0

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        console=console,
    ) as progress:
        task = progress.add_task(f"Evaluating with {caps.name}", total=len(screenshots))

        for img_path in screenshots:
            progress.update(task, description=f"{caps.name}: {img_path.name}")
            result = evaluator.evaluate(img_path, description)
            results.append(result)
            peak_vram = max(peak_vram, result.vram_used_mb)
            progress.advance(task)

    evaluator.unload_model()

    valid_results = [r for r in results if r.error is None]
    errors = [r.error for r in results if r.error is not None]

    avg_score = (
        sum(r.overall_score for r in valid_results) / len(valid_results) if valid_results else 0.0
    )
    avg_time = (
        sum(r.inference_time_ms for r in valid_results) / len(valid_results)
        if valid_results
        else 0.0
    )

    scores_by_image = {r.image_path.name: r.overall_score for r in valid_results}

    return (
        BenchmarkMetrics(
            model_name=caps.name,
            total_images=len(screenshots),
            avg_score=avg_score,
            avg_inference_time_ms=avg_time,
            peak_vram_mb=peak_vram,
            scores_by_image=scores_by_image,
            capabilities=caps,
            errors=errors,
        ),
        results,
    )


def print_results_table(
    all_metrics: list[BenchmarkMetrics],
    all_results: dict[str, list[EvaluationResult]],
    screenshots: list[Path],
) -> None:
    table = Table(title="VLM UI Evaluation Results", show_header=True, header_style="bold magenta")
    table.add_column("Model", style="cyan", width=20)
    table.add_column("Params", justify="right", width=8)
    table.add_column("VRAM (MB)", justify="right", width=10)
    table.add_column("Avg Score", justify="right", width=10)
    table.add_column("Avg Time (ms)", justify="right", width=12)
    table.add_column("Errors", justify="right", width=8)

    for m in sorted(all_metrics, key=lambda x: x.avg_score, reverse=True):
        score_color = "green" if m.avg_score >= 7.0 else "yellow" if m.avg_score >= 5.0 else "red"
        table.add_row(
            m.model_name,
            m.capabilities.parameters if m.capabilities else "?",
            f"{m.peak_vram_mb:.0f}",
            f"[{score_color}]{m.avg_score:.2f}[/{score_color}]",
            f"{m.avg_inference_time_ms:.0f}",
            str(len(m.errors)) if m.errors else "0",
        )
    console.print(table)

    detail_table = Table(title="Scores by Image", show_header=True)
    detail_table.add_column("Image", style="cyan")
    for m in all_metrics:
        detail_table.add_column(m.model_name[:12], justify="right")
    for img in screenshots:
        row = [img.name]
        for m in all_metrics:
            score = m.scores_by_image.get(img.name, 0.0)
            color = "green" if score >= 7.0 else "yellow" if score >= 5.0 else "red"
            row.append(f"[{color}]{score:.1f}[/{color}]")
        detail_table.add_row(*row)
    console.print(detail_table)

    for model_name, results in all_results.items():
        has_criteria = any(r.criteria_scores for r in results if r.error is None)
        if not has_criteria:
            continue

        criteria_names: set[str] = set()
        for r in results:
            for c in r.criteria_scores:
                criteria_names.add(c.name)
        if not criteria_names:
            continue

        criteria_table = Table(
            title=f"Per-Criteria Breakdown: {model_name}",
            show_header=True,
            header_style="bold cyan",
        )
        criteria_table.add_column("Image", style="dim")
        for crit in sorted(criteria_names):
            criteria_table.add_column(crit.replace("_", " ").title()[:10], justify="right")

        for r in results:
            if r.error:
                continue
            row = [r.image_path.name]
            crit_map = {c.name: c for c in r.criteria_scores}
            for crit in sorted(criteria_names):
                if crit in crit_map:
                    score = crit_map[crit].score
                    color = "green" if score >= 7.0 else "yellow" if score >= 5.0 else "red"
                    row.append(f"[{color}]{score:.1f}[/{color}]")
                else:
                    row.append("-")
            criteria_table.add_row(*row)
        console.print(criteria_table)


def print_light_dark_comparison(
    all_results: dict[str, list[EvaluationResult]],
) -> None:
    light_dark_pairs = [
        ("components.png", "components-dark.png"),
    ]

    for model_name, results in all_results.items():
        results_by_name = {r.image_path.name: r for r in results}

        for light_name, dark_name in light_dark_pairs:
            light = results_by_name.get(light_name)
            dark = results_by_name.get(dark_name)

            if not light or not dark or light.error or dark.error:
                continue

            table = Table(
                title=f"Light vs Dark Mode: {model_name}",
                show_header=True,
                header_style="bold yellow",
            )
            table.add_column("Aspect", style="cyan")
            table.add_column("Light", justify="right")
            table.add_column("Dark", justify="right")
            table.add_column("Diff", justify="right")

            table.add_row(
                "Overall",
                f"{light.overall_score:.1f}",
                f"{dark.overall_score:.1f}",
                f"{dark.overall_score - light.overall_score:+.1f}",
            )

            light_crit = {c.name: c.score for c in light.criteria_scores}
            dark_crit = {c.name: c.score for c in dark.criteria_scores}
            all_criteria = set(light_crit.keys()) | set(dark_crit.keys())

            for crit in sorted(all_criteria):
                l_score = light_crit.get(crit, 0)
                d_score = dark_crit.get(crit, 0)
                diff = d_score - l_score
                diff_color = "green" if diff > 0 else "red" if diff < 0 else "dim"
                table.add_row(
                    crit.replace("_", " ").title(),
                    f"{l_score:.1f}",
                    f"{d_score:.1f}",
                    f"[{diff_color}]{diff:+.1f}[/{diff_color}]",
                )

            console.print(table)


def save_results(
    all_metrics: list[BenchmarkMetrics],
    all_results: dict[str, list[EvaluationResult]],
    output_dir: Path,
) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = output_dir / f"benchmark_{timestamp}.json"

    data = {
        "timestamp": timestamp,
        "description": VIBRANT_MINIMAL_DESCRIPTION,
        "results": [
            {
                "model_name": m.model_name,
                "parameters": m.capabilities.parameters if m.capabilities else None,
                "vram_gb": m.capabilities.vram_required_gb if m.capabilities else None,
                "total_images": m.total_images,
                "avg_score": m.avg_score,
                "avg_inference_time_ms": m.avg_inference_time_ms,
                "peak_vram_mb": m.peak_vram_mb,
                "scores_by_image": m.scores_by_image,
                "errors": m.errors,
                "raw_outputs": {
                    r.image_path.name: r.raw_output for r in all_results.get(m.model_name, [])
                },
            }
            for m in all_metrics
        ],
    }

    with open(output_file, "w") as f:
        json.dump(data, f, indent=2)

    return output_file


def run_benchmark(
    screenshots_dir: Path,
    output_dir: Path,
    models: list[str] | None = None,
) -> list[BenchmarkMetrics]:
    screenshots = get_screenshots(screenshots_dir)

    if not screenshots:
        console.print("[red]No screenshots found![/red]")
        return []

    console.print(
        Panel(
            f"[bold]VLM UI Design Evaluation Benchmark[/bold]\n\nScreenshots: {len(screenshots)}\nDescription: vibrant minimal aesthetic"
        )
    )

    evaluators_to_run = EVALUATOR_CLASSES
    if models:
        models_lower = [m.lower() for m in models]
        evaluators_to_run = [
            e
            for e in EVALUATOR_CLASSES
            if e().capabilities.name.lower() in models_lower
            or e().capabilities.evaluator_type.value in models_lower
        ]

    all_metrics: list[BenchmarkMetrics] = []
    all_results: dict[str, list[EvaluationResult]] = {}

    for evaluator_class in evaluators_to_run:
        metrics, results = run_single_evaluator(
            evaluator_class,
            screenshots,
            VIBRANT_MINIMAL_DESCRIPTION,
        )
        all_metrics.append(metrics)
        all_results[metrics.model_name] = results

    print_results_table(all_metrics, all_results, screenshots)
    print_light_dark_comparison(all_results)

    output_file = save_results(all_metrics, all_results, output_dir)
    console.print(f"\n[green]Results saved to: {output_file}[/green]")

    return all_metrics
