# UI Design Methodology

This section covers interface design methodologies—the systems, principles, and patterns that create cohesive, usable, and visually appealing user experiences.

## Why UI Design Methodology Matters

Good UI isn't subjective. Research-backed principles and systematic approaches produce interfaces that:
- **Reduce cognitive load** — Users accomplish goals without thinking about the interface
- **Build trust** — Consistent, polished experiences signal quality
- **Scale** — Design systems enable growth without chaos
- **Enable collaboration** — Shared vocabulary aligns designers, developers, and AI agents

## Core Methodologies

### Systems & Structure

| Methodology | Focus | Start Here |
|-------------|-------|------------|
| [Design Systems](./explanation/design-systems.md) | Reusable components and standards | If building for a team or multiple products |
| [Atomic Design](./explanation/atomic-design.md) | Component hierarchy (atoms → pages) | If structuring a component library |
| [Design Tokens](./explanation/design-tokens.md) | Platform-agnostic design values | If working cross-platform or with engineering |

### Visual Principles

| Methodology | Focus | Start Here |
|-------------|-------|------------|
| [Visual Principles](./explanation/visual-principles.md) | Gestalt, hierarchy, typography, color | If making any visual decisions |
| [Interaction Design](./explanation/interaction-design.md) | Affordances, feedback, motion | If designing interactive elements |

### Accessibility & Responsiveness

| Methodology | Focus | Start Here |
|-------------|-------|------------|
| [Accessibility](./explanation/accessibility.md) | WCAG, inclusive design | Always (it's not optional) |
| [Responsive Design](./explanation/responsive-design.md) | Multi-device experiences | If supporting multiple screen sizes |

## Documentation Structure (Diataxis)

This documentation follows the Diataxis framework:

| Type | Purpose | Naming Convention |
|------|---------|-------------------|
| **Explanation** | Understand concepts | `explanation/[topic].md` |
| **How-To** | Complete specific tasks | `how-to/[task].md` |
| **Reference** | Look up specifications | `reference/[resource].md` |
| **Tutorial** | Learn by doing | `tutorials/[lesson].md` |

## Quick Reference

### Component Hierarchy (Atomic Design)

```
PAGES         Full page layouts
    ↑
TEMPLATES     Page-level structures
    ↑
ORGANISMS     Complex components (header, card, form)
    ↑
MOLECULES     Simple component groups (labeled input, nav item)
    ↑
ATOMS         Basic elements (button, input, label, icon)
```

### Token Hierarchy

```
SEMANTIC      --color-text-primary, --space-section
    ↑
COMPONENT     --button-padding, --card-radius
    ↑
PRIMITIVE     --blue-500, --space-4, --font-size-lg
```

### Accessibility Priorities

1. **Perceivable** — Users can perceive the content
2. **Operable** — Users can interact with the interface
3. **Understandable** — Users can understand the information
4. **Robust** — Content works with assistive technologies

## For AI Agents

When designing interfaces, follow this decision process:

```
1. What is the user trying to accomplish? (JTBD)
2. What information/actions support that goal? (Hierarchy)
3. What components exist in the design system? (Reuse)
4. How should those components be arranged? (Layout, spacing)
5. Are accessibility requirements met? (WCAG check)
6. Does the design work across devices? (Responsive)
```

**Key principle**: Always prefer existing components and tokens over custom values. Consistency > novelty.

## Related Resources

- [Product Design](../product-design/README.md) — Understanding what to build and why
- [Design Tokens Reference](./reference/design-tokens.md) — Full token specification
- [WCAG Checklist](./reference/wcag-checklist.md) — Accessibility requirements
