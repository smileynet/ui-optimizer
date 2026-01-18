from pathlib import Path
from datetime import datetime
import base64
import json


def image_to_base64(path: Path) -> str:
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


def generate_html_report(
    results_file: Path,
    screenshots_dir: Path,
    output_file: Path,
) -> None:
    with open(results_file) as f:
        data = json.load(f)

    screenshots = sorted(screenshots_dir.glob("*.png"))
    images_b64 = {img.name: image_to_base64(img) for img in screenshots}

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VLM UI Evaluation Report</title>
    <style>
        * {{ box-sizing: border-box; margin: 0; padding: 0; }}
        body {{ font-family: system-ui, -apple-system, sans-serif; background: #0f0f12; color: #e4e4e7; line-height: 1.6; }}
        .container {{ max-width: 1400px; margin: 0 auto; padding: 2rem; }}
        h1 {{ font-size: 2rem; margin-bottom: 0.5rem; color: #60a5fa; }}
        h2 {{ font-size: 1.5rem; margin: 2rem 0 1rem; color: #a1a1aa; border-bottom: 1px solid #27272a; padding-bottom: 0.5rem; }}
        h3 {{ font-size: 1.1rem; margin: 1rem 0 0.5rem; color: #71717a; }}
        .meta {{ color: #71717a; margin-bottom: 2rem; }}
        .summary {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }}
        .card {{ background: #18181b; border-radius: 0.5rem; padding: 1.5rem; border: 1px solid #27272a; }}
        .card-title {{ font-size: 0.875rem; color: #71717a; margin-bottom: 0.25rem; }}
        .card-value {{ font-size: 2rem; font-weight: 600; }}
        .score-good {{ color: #4ade80; }}
        .score-ok {{ color: #fbbf24; }}
        .score-bad {{ color: #f87171; }}
        .screenshots {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; }}
        .screenshot {{ background: #18181b; border-radius: 0.5rem; overflow: hidden; border: 1px solid #27272a; }}
        .screenshot img {{ width: 100%; height: auto; display: block; }}
        .screenshot-info {{ padding: 1rem; }}
        .screenshot-title {{ font-weight: 600; margin-bottom: 0.5rem; }}
        .scores-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.875rem; }}
        .score-item {{ display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid #27272a; }}
        .model-section {{ margin-bottom: 3rem; }}
        table {{ width: 100%; border-collapse: collapse; margin: 1rem 0; }}
        th, td {{ padding: 0.75rem; text-align: left; border-bottom: 1px solid #27272a; }}
        th {{ color: #a1a1aa; font-weight: 500; }}
        .raw-output {{ background: #09090b; padding: 1rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.75rem; white-space: pre-wrap; max-height: 200px; overflow-y: auto; margin-top: 0.5rem; color: #a1a1aa; }}
    </style>
</head>
<body>
    <div class="container">
        <h1>VLM UI Evaluation Report</h1>
        <p class="meta">Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>

        <h2>Model Comparison</h2>
        <div class="summary">
"""

    for result in sorted(data["results"], key=lambda x: x["avg_score"], reverse=True):
        score = result["avg_score"]
        score_class = "score-good" if score >= 7 else "score-ok" if score >= 5 else "score-bad"
        html += f"""
            <div class="card">
                <div class="card-title">{result["model_name"]}</div>
                <div class="card-value {score_class}">{score:.1f}</div>
                <div style="font-size: 0.75rem; color: #71717a; margin-top: 0.5rem;">
                    {result["parameters"]} params | {result["avg_inference_time_ms"]:.0f}ms
                </div>
            </div>
"""

    html += """
        </div>

        <h2>Screenshots & Scores</h2>
        <div class="screenshots">
"""

    for img_name, img_b64 in images_b64.items():
        html += f"""
            <div class="screenshot">
                <img src="data:image/png;base64,{img_b64}" alt="{img_name}">
                <div class="screenshot-info">
                    <div class="screenshot-title">{img_name}</div>
                    <div class="scores-grid">
"""
        for result in data["results"]:
            score = result["scores_by_image"].get(img_name, 0)
            score_class = "score-good" if score >= 7 else "score-ok" if score >= 5 else "score-bad"
            html += f"""
                        <div class="score-item">
                            <span>{result["model_name"][:15]}</span>
                            <span class="{score_class}">{score:.1f}</span>
                        </div>
"""
        html += """
                    </div>
                </div>
            </div>
"""

    html += """
        </div>
"""

    for result in data["results"]:
        html += f"""
        <div class="model-section">
            <h2>{result["model_name"]} - Detailed Output</h2>
            <table>
                <tr><th>Image</th><th>Score</th><th>Raw Output</th></tr>
"""
        for img_name in images_b64.keys():
            score = result["scores_by_image"].get(img_name, 0)
            raw = result.get("raw_outputs", {}).get(img_name, "")[:500]
            score_class = "score-good" if score >= 7 else "score-ok" if score >= 5 else "score-bad"
            html += f"""
                <tr>
                    <td>{img_name}</td>
                    <td class="{score_class}">{score:.1f}</td>
                    <td><div class="raw-output">{raw}</div></td>
                </tr>
"""
        html += """
            </table>
        </div>
"""

    html += """
    </div>
</body>
</html>
"""

    with open(output_file, "w") as f:
        f.write(html)
