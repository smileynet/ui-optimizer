# Design Systems

> "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications." — Marco Suarez

## Overview

A design system is more than a component library. It's the complete set of standards, documentation, and tools that enable teams to build consistent products efficiently.

**Key insight**: Design systems solve the "how should this look?" question at scale. Instead of every designer/developer making individual decisions, the system provides pre-made answers.

## What's in a Design System?

```
DESIGN SYSTEM
│
├── FOUNDATIONS
│   ├── Design tokens (colors, spacing, typography)
│   ├── Grid system
│   ├── Iconography
│   └── Motion principles
│
├── COMPONENTS
│   ├── UI components (button, input, card)
│   ├── Patterns (forms, navigation, data display)
│   └── Templates (page layouts)
│
├── GUIDELINES
│   ├── Usage documentation
│   ├── Accessibility standards
│   ├── Writing/voice guidelines
│   └── Best practices
│
└── TOOLS
    ├── Design files/Figma library
    ├── Code packages
    ├── Documentation site
    └── Contribution process
```

## Why Design Systems?

### Without a Design System

| Symptom | Impact |
|---------|--------|
| "What blue do we use?" | Designer time wasted on solved problems |
| 47 button variants | Inconsistent UX, confused users |
| Design-dev misalignment | Rework, bugs, frustration |
| Every feature looks different | Reduced trust, increased learning curve |
| New team members lost | Slow onboarding |

### With a Design System

| Benefit | Impact |
|---------|--------|
| Predefined decisions | Faster design and development |
| Consistent components | Cohesive user experience |
| Shared vocabulary | Better team communication |
| Documented standards | Easy onboarding |
| Centralized updates | Change once, update everywhere |

## Famous Design Systems

| System | Organization | Notable For |
|--------|--------------|-------------|
| **Material Design** | Google | Comprehensive, well-documented, cross-platform |
| **Human Interface Guidelines** | Apple | Platform-specific, opinionated |
| **Carbon** | IBM | Enterprise, accessibility-focused |
| **Polaris** | Shopify | E-commerce specific, great documentation |
| **Atlassian Design System** | Atlassian | Thorough guidance, patterns library |
| **Primer** | GitHub | Developer-focused, open source |

## Anatomy of a Component

A well-documented component includes:

```
┌─────────────────────────────────────────────────────────┐
│  BUTTON COMPONENT                                        │
├─────────────────────────────────────────────────────────┤
│  VISUAL EXAMPLES                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Primary  │  │Secondary │  │  Ghost   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
│  VARIANTS: Primary, Secondary, Ghost, Danger            │
│  SIZES: Small, Medium, Large                            │
│  STATES: Default, Hover, Focus, Disabled, Loading       │
├─────────────────────────────────────────────────────────┤
│  USAGE GUIDELINES                                        │
│  ✓ Use primary for main actions                         │
│  ✓ One primary button per view                          │
│  ✗ Don't use for navigation (use links)                 │
│  ✗ Don't disable without explanation                    │
├─────────────────────────────────────────────────────────┤
│  ACCESSIBILITY                                           │
│  • Minimum touch target: 44x44px                        │
│  • Focus indicator required                              │
│  • Loading state announced to screen readers            │
├─────────────────────────────────────────────────────────┤
│  CODE                                                    │
│  <Button variant="primary" size="md">Label</Button>     │
├─────────────────────────────────────────────────────────┤
│  DESIGN TOKENS                                           │
│  --button-padding: var(--space-3) var(--space-4)       │
│  --button-radius: var(--radius-md)                      │
│  --button-primary-bg: var(--color-primary)              │
└─────────────────────────────────────────────────────────┘
```

## Building vs. Adopting

| Approach | When to Use | Trade-offs |
|----------|-------------|------------|
| **Build custom** | Unique brand needs, resources available | High effort, full control |
| **Adopt existing** | Standard needs, limited resources | Fast start, less customization |
| **Extend existing** | Standard base + brand customization | Balanced effort and control |

**Most teams should extend an existing system** (like Radix, Headless UI, or Shadcn) rather than building from scratch.

## Design System Maturity

| Stage | Characteristics | Focus |
|-------|-----------------|-------|
| **1. Ad hoc** | No system, inconsistent | Document what exists |
| **2. Emerging** | Some shared components | Define foundations (tokens) |
| **3. Established** | Documented components, some adoption | Expand coverage, improve docs |
| **4. Integrated** | Full adoption, contribution process | Governance, evolution |
| **5. Optimized** | Measured impact, continuous improvement | Analytics, ROI tracking |

## Governance

Design systems need governance to stay healthy:

| Aspect | Questions to Answer |
|--------|---------------------|
| **Ownership** | Who maintains the system? |
| **Contribution** | How do teams propose changes? |
| **Versioning** | How are updates communicated? |
| **Support** | How do users get help? |
| **Deprecation** | How are components retired? |

### Contribution Process

```
PROPOSAL → REVIEW → BUILD → DOCUMENT → RELEASE → DEPRECATE
    │         │        │         │          │          │
    │         │        │         │          │          └── Communicate, migrate
    │         │        │         │          └── Versioned release
    │         │        │         └── Usage guidelines, examples
    │         │        └── Design + code implementation
    │         └── Design system team review
    └── RFC or proposal document
```

## Design Systems and AI Agents

For AI agents designing interfaces:

| System Component | How Agents Use It |
|------------------|-------------------|
| **Tokens** | Only use defined values for colors, spacing, typography |
| **Components** | Prefer existing components over custom elements |
| **Patterns** | Follow established patterns for common tasks |
| **Guidelines** | Apply documented dos/don'ts |
| **Accessibility** | Meet documented requirements automatically |

**Key principle for agents**: A design system is a constraint, not a limitation. Work within it.

```
GOOD: "Using the Card component with --space-4 padding"
BAD:  "Creating a custom container with 18px padding"
```

## Common Pitfalls

| Pitfall | Problem | Fix |
|---------|---------|-----|
| **Documentation-only** | Looks good, not implemented | Code and design must match |
| **Designer-only** | Developers rebuild from scratch | Include dev from start |
| **No governance** | Forks, inconsistency returns | Establish contribution process |
| **Too rigid** | Teams work around system | Allow for flexibility |
| **Too flexible** | No consistency achieved | Provide clear constraints |
| **Never updated** | System becomes outdated | Regular review cadence |

## Related Reading

- [Atomic Design](./atomic-design.md) — Structuring components hierarchically
- [Design Tokens](./design-tokens.md) — The values that power systems
- [Visual Principles](./visual-principles.md) — The theory behind system decisions

## References

- Nathan Curtis, "Design Systems" (2010s blog series)
- Alla Kholmatova, "Design Systems" (2017)
- Brad Frost, "Atomic Design" (2016)
- [designsystems.com](https://www.designsystems.com/) — Community resource
