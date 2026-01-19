# UI Optimizer

**Teach AI agents to design like product designers, not just generate UI.**

AI agents can generate interfaces quickly—but speed without direction produces generic, disconnected experiences. UI Optimizer provides the methodology and documentation to create user-centered designs.

## What You Get

- **Product Design Docs** — JTBD, personas, user stories, design thinking
- **UI Design Docs** — Design systems, tokens, accessibility, atomic design
- **Agent Workflow** — 6-phase process with prompts, quality gates, and handoff schemas
- **Interactive Demo** — See persona-driven UI patterns in action

## Quick Start

**View the documentation:**

```bash
# Clone and serve docs locally
git clone https://github.com/smileynet/ui-optimizer.git
cd ui-optimizer
pip install -r requirements.txt  # or: pip install mkdocs-material
mkdocs serve
# Open http://localhost:8000
```

**Run the interactive demo:**

```bash
cd ui-design-demo
bun install
bun run dev
# Open http://localhost:5173
```

## Documentation

| Section | What You'll Learn |
|---------|-------------------|
| [Product Design](docs/product-design/README.md) | Jobs-to-be-Done, personas, user stories, journey maps |
| [UI Design](docs/ui-design/README.md) | Design systems, tokens, accessibility, atomic design |
| [Agent Workflow](docs/workflow/README.md) | 6-phase process for AI-driven UI creation |

### The Agent Workflow

```
UNDERSTAND → DEFINE → EXPLORE → DESIGN → VALIDATE → REFINE
    │           │         │         │         │         │
  Users      Problems   Solutions   UI      Testing   Polish
```

Each phase has a specialized agent, structured outputs, and quality gates. See [Agent Prompts](docs/workflow/agent-prompts.md) for detailed prompts.

## Interactive Demo

The demo shows how the same interface can serve multiple user personas:

| Example | Personas | Pattern |
|---------|----------|---------|
| Dashboard | Executive, Analyst | Progressive Disclosure |
| Settings | Power User, Casual | Layered Complexity |
| E-commerce | Quick Buyer, Researcher | Parallel Paths |
| Data Table | Data Analyst, Team Lead | Context-Aware Revelation |

Features:
- **Persona Switcher** — Toggle between users to see relevant UI elements
- **Design Callouts** — Annotations explaining rationale
- **Story Pages** — Full design process walkthroughs

## Project Structure

```
ui-optimizer/
├── docs/
│   ├── product-design/    # JTBD, personas, user stories
│   ├── ui-design/         # Design systems, tokens, accessibility
│   └── workflow/          # Agent workflow, prompts, quality gates
├── ui-design-demo/        # Interactive React demo
└── mkdocs.yml             # Documentation site config
```

## Contributing

1. Use design tokens (no hardcoded values)
2. Follow existing component patterns
3. Documentation follows [Diataxis](https://diataxis.fr/) (tutorials, how-to, reference, explanation)

## License

MIT
