# UI Optimizer Documentation

This documentation follows the [Diataxis framework](https://diataxis.fr/) - organizing content into four distinct types based on user needs.

## Documentation Structure

```
docs/
├── product-design/          # Product design methodologies
│   ├── tutorials/           # Learning-oriented guides
│   ├── how-to/              # Task-oriented guides  
│   ├── explanation/         # Understanding-oriented content
│   └── reference/           # Information-oriented content
│
└── ui-design/               # UI design methodologies
    ├── tutorials/           # Learning-oriented guides
    ├── how-to/              # Task-oriented guides
    ├── explanation/         # Understanding-oriented content
    └── reference/           # Information-oriented content
```

## The Four Types

| Type | Purpose | User Question |
|------|---------|---------------|
| **Tutorials** | Learning by doing | "I want to learn" |
| **How-to Guides** | Accomplishing tasks | "I need to do something" |
| **Explanation** | Understanding concepts | "I want to understand why" |
| **Reference** | Looking up information | "I need the details" |

## Quick Navigation

### Product Design
- [Overview](./product-design/README.md) - Product design methodologies
- [How-to Guides](./product-design/how-to/conduct-jtbd-interview.md) - Apply methodologies to real work
- [Explanation](./product-design/explanation/jobs-to-be-done.md) - Understand the theory
- [Reference](./product-design/reference/templates.md) - Quick lookup for frameworks

### UI Design  
- [Overview](./ui-design/README.md) - UI design principles
- [How-to Guides](./ui-design/how-to/create-design-tokens.md) - Implement design patterns
- [Explanation](./ui-design/explanation/design-systems.md) - Understand design theory
- [Reference](./ui-design/reference/design-tokens.md) - Design tokens, components, specs

### Agent Workflow
- [Overview](./workflow/README.md) - 6-phase UI creation workflow
- [Orchestrator](./workflow/orchestrator.md) - How to coordinate agents
- [Quality Gates](./workflow/quality-gates.md) - Pass/fail criteria
- [Agent Prompts](./workflow/agent-prompts.md) - Detailed prompts for each agent

## Progressive Disclosure

Each topic follows progressive disclosure:
1. **Overview** - Quick summary (1 min read)
2. **Core Concepts** - Essential knowledge (5 min read)
3. **Deep Dive** - Comprehensive detail (linked documents)
4. **Reference** - Complete specifications (lookup as needed)
