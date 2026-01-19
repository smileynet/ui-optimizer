# UI Optimizer

A comprehensive design system and methodology for AI agents to generate user-centered interfaces.

## What is UI Optimizer?

UI Optimizer provides three things:

1. **A Live Demo** — Interactive examples showing persona-driven UI design
2. **Design Documentation** — Product and UI design methodologies (JTBD, personas, design systems)
3. **Agent Workflow** — A 6-phase workflow with prompts for AI agents to create UIs

## Live Demo

**[View the Demo Site](https://ui-optimizer.example.com)** *(or run locally)*

The demo showcases how the same interface can serve multiple user personas without compromise:

| Example | Personas | Pattern Demonstrated |
|---------|----------|---------------------|
| **Dashboard** | Sarah (Executive), Mike (Analyst) | Progressive Disclosure |
| **Settings** | Chen (Power User), Alex (Casual) | Layered Complexity |
| **E-commerce** | Jessica (Quick Buyer), Tom (Researcher) | Parallel Paths |
| **Data Table** | Alex (Data Analyst), David (Team Lead) | Context-Aware Revelation |
| **Trading Platform** | Marcus (Day Trader), Emma (Beginner) | Mutually Exclusive Needs |

### Interactive Features

- **Persona Switcher** — Toggle between personas to see which UI elements serve each user
- **Design Callouts** — Annotations explaining the design rationale
- **Story Pages** — Deep dives showing the full design process (personas → JTBD → patterns → resolution)

### Run Locally

```bash
cd ui-design-demo
bun install
bun run dev
# Open http://localhost:5173
```

## Documentation

Documentation follows the [Diataxis framework](https://diataxis.fr/) — organized by user intent.

### Product Design (`docs/product-design/`)

Learn methodologies for understanding users before designing:

| Section | What You'll Learn |
|---------|-------------------|
| **Explanation** | Jobs-to-be-Done, Personas, User Stories, Design Thinking |
| **How-to** | Conduct JTBD interviews, Write user stories, Create journey maps |
| **Reference** | Templates and frameworks |

### UI Design (`docs/ui-design/`)

Learn principles for creating effective interfaces:

| Section | What You'll Learn |
|---------|-------------------|
| **Explanation** | Design Systems, Tokens, Accessibility, Atomic Design |
| **How-to** | Create design tokens, Implement 8pt grid, Add accessibility |
| **Reference** | Token definitions, WCAG checklist |

## Agent Workflow

A systematic 6-phase workflow for AI agents to create user-centered UIs.

```
UNDERSTAND → DEFINE → EXPLORE → DESIGN → VALIDATE → REFINE
    │           │         │         │         │         │
  Users      Problems   Solutions   UI      Testing   Polish
```

### The Six Phases

| Phase | Agent | Purpose | Output |
|-------|-------|---------|--------|
| 1. **Understand** | Research Agent | Who are the users? | Personas, JTBD statements |
| 2. **Define** | Strategy Agent | What problem are we solving? | Problem statement, metrics |
| 3. **Explore** | Solution Agent | How might we solve this? | User flows, information architecture |
| 4. **Design** | UI Agent | How do we build it? | Component specs, layouts |
| 5. **Validate** | Critique Agent | Does it work? | Accessibility audit, issues |
| 6. **Refine** | Polish Agent | How do we perfect it? | Micro-interactions, implementation guide |

### Workflow Documentation (`docs/workflow/`)

| Document | Purpose |
|----------|---------|
| [**README**](docs/workflow/README.md) | Overview of the 6-phase workflow |
| [**Orchestrator**](docs/workflow/orchestrator.md) | How to coordinate agents, routing logic, error recovery |
| [**Quality Gates**](docs/workflow/quality-gates.md) | Pass/fail criteria for each phase transition |
| [**Agent Prompts**](docs/workflow/agent-prompts.md) | Detailed prompts with structured output schemas |
| [**Phase Docs**](docs/workflow/phases/) | Deep dive into each phase |

### Why This Workflow?

AI agents can generate UI quickly—but speed without direction produces generic, disconnected interfaces.

This workflow ensures:
- **Every design decision traces back to user needs**
- **Quality gates catch problems early**
- **Structured outputs enable automation**
- **Handoffs between agents are explicit**

### Quick Start for Agents

```python
# Example: Invoke the Research Agent
from ui_optimizer import ResearchAgent

agent = ResearchAgent()
result = agent.invoke("""
PROJECT CONTEXT:
Build a dashboard for sales managers to monitor team pipeline.

TASK:
1. Identify 2-3 primary user types
2. Create persona cards
3. Write JTBD statements
4. Describe usage scenarios
""")

# Result is structured JSON matching the output schema
print(result.personas)
print(result.jtbd_statements)
```

## Project Structure

```
ui-optimizer/
├── ui-design-demo/          # React demo site
│   ├── src/
│   │   ├── components/ui/   # Reusable components (Button, Card, Badge, etc.)
│   │   ├── pages/
│   │   │   ├── examples/    # Interactive example pages
│   │   │   └── story/       # Design story pages with full rationale
│   │   └── styles/
│   │       └── tokens.css   # Design tokens (colors, spacing, typography)
│   └── package.json
│
├── docs/
│   ├── README.md            # Documentation overview
│   ├── product-design/      # Product design methodologies
│   ├── ui-design/           # UI design principles
│   └── workflow/            # Agent workflow system
│       ├── orchestrator.md  # Coordination instructions
│       ├── quality-gates.md # Pass/fail criteria
│       ├── agent-prompts.md # Detailed agent prompts
│       └── phases/          # Phase-by-phase guides
│
└── README.md                # This file
```

## Design Principles

### 1. Users First, Always
Every design decision must trace back to a user need. No "cool features" without user justification.

### 2. Design Tokens, Not Magic Numbers
```css
/* Wrong */
color: #3b82f6;
padding: 16px;

/* Right */
color: var(--color-primary);
padding: var(--space-4);
```

### 3. Accessibility is Not Optional
WCAG 2.2 AA compliance is a quality gate, not a nice-to-have.

### 4. Progressive Disclosure
Show users what they need, when they need it. Don't overwhelm beginners or slow down experts.

### 5. Explicit Over Implicit
Document design decisions. Future you (or future agents) will thank you.

## Contributing

1. **Code changes** must use design tokens (no hardcoded values)
2. **New components** should follow existing patterns in `components/ui/`
3. **Documentation** should follow Diataxis (tutorials, how-to, reference, explanation)
4. **Workflow changes** require updating quality gates

## License

MIT
