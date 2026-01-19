# UI Design Demo

Interactive demonstration of persona-driven UI design patterns.

## Quick Start

```bash
bun install
bun run dev
# Open http://localhost:5173
```

## Examples

| Example | Personas | Pattern Demonstrated |
|---------|----------|---------------------|
| Dashboard | Executive, Analyst | Progressive Disclosure |
| Settings | Power User, Casual | Layered Complexity |
| E-commerce | Quick Buyer, Researcher | Parallel Paths |
| Data Table | Data Analyst, Team Lead | Context-Aware Revelation |

## Features

- **Persona Switcher** — Toggle between users to see which UI elements serve each persona
- **Design Callouts** — Annotations explaining design rationale
- **Story Pages** — Full design process walkthroughs (personas, JTBD, patterns, resolution)

## Development

```bash
bun run dev      # Start dev server
bun run build    # Production build
bun run preview  # Preview production build
bun run test     # Run Playwright tests
```

## Project Structure

```
src/
├── components/ui/   # Reusable components (Button, Card, Badge, etc.)
├── pages/
│   ├── examples/    # Interactive example pages
│   └── story/       # Design story pages
└── styles/
    └── tokens.css   # Design tokens (colors, spacing, typography)
```
