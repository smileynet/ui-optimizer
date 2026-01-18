# Design Tokens

> "Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes." — Salesforce

## Overview

Design tokens are the single source of truth for design values. Instead of hardcoding `#3B82F6` or `16px` throughout your codebase, you use named tokens like `--color-primary` or `--space-4` that can be updated globally.

**Key insight**: Tokens separate design decisions from implementation. Change a token once, and every component using it updates automatically.

## Why Tokens Matter

### Without Tokens

```css
/* File A */
.button { background: #3B82F6; }

/* File B */  
.link { color: #3B82F6; }

/* File C */
.header { border-bottom: 1px solid #3B82F6; }

/* Uh oh, brand color changed... update 47 files */
```

### With Tokens

```css
:root {
  --color-primary: #3B82F6;
}

.button { background: var(--color-primary); }
.link { color: var(--color-primary); }
.header { border-bottom: 1px solid var(--color-primary); }

/* Brand color changed? Update ONE place */
:root {
  --color-primary: #2563EB;  /* Done */
}
```

## Token Types

### Color Tokens

```css
/* Primitive colors */
--blue-50: #eff6ff;
--blue-100: #dbeafe;
--blue-500: #3b82f6;
--blue-900: #1e3a8a;

/* Semantic colors */
--color-primary: var(--blue-500);
--color-primary-hover: var(--blue-600);
--color-text: var(--gray-900);
--color-text-muted: var(--gray-500);
--color-background: var(--white);
--color-surface: var(--gray-50);
--color-border: var(--gray-200);
--color-success: var(--green-500);
--color-warning: var(--yellow-500);
--color-error: var(--red-500);
```

### Spacing Tokens

```css
/* Primitive spacing (4px base unit) */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */

/* Semantic spacing */
--space-component-padding: var(--space-4);
--space-section: var(--space-12);
--space-page: var(--space-16);
```

### Typography Tokens

```css
/* Font families */
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'Fira Code', monospace;

/* Font sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */

/* Font weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Other Token Types

```css
/* Border radius */
--radius-sm: 0.25rem;
--radius-md: 0.375rem;
--radius-lg: 0.5rem;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Transitions */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);

/* Z-index */
--z-dropdown: 1000;
--z-modal: 1100;
--z-popover: 1200;
--z-tooltip: 1300;
```

## Token Hierarchy

Tokens should be organized in layers:

```
SEMANTIC TOKENS (use these in components)
│
│  --color-text-primary
│  --space-section
│  --button-padding
│
├──────────────────────────────────
│
COMPONENT TOKENS (optional middle layer)
│
│  --card-padding: var(--space-4)
│  --card-radius: var(--radius-lg)
│  --card-shadow: var(--shadow-md)
│
├──────────────────────────────────
│
PRIMITIVE TOKENS (raw values)
│
│  --blue-500: #3b82f6
│  --space-4: 1rem
│  --radius-lg: 0.5rem
```

| Layer | Purpose | Example |
|-------|---------|---------|
| **Primitive** | Raw, context-free values | `--blue-500`, `--space-4` |
| **Semantic** | Meaningful, context-aware | `--color-primary`, `--space-section` |
| **Component** | Specific to a component | `--button-padding`, `--card-shadow` |

**Rule**: Components should use semantic or component tokens, rarely primitives.

## Naming Conventions

### CTI Convention (Category-Type-Item)

```
--[category]-[type]-[item]-[state]

--color-text-primary
--color-text-muted
--color-background-surface
--space-component-padding
--font-size-heading-1
```

### Examples by Pattern

| Pattern | Examples |
|---------|----------|
| Color | `--color-{purpose}` → `--color-primary`, `--color-text-muted` |
| Spacing | `--space-{size/purpose}` → `--space-4`, `--space-section` |
| Typography | `--{font/text}-{property}` → `--text-lg`, `--font-bold` |
| Effects | `--{shadow/radius}-{size}` → `--shadow-md`, `--radius-lg` |

## Theming with Tokens

Tokens enable theming by swapping values:

```css
/* Light theme (default) */
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-text-muted: #94a3b8;
  --color-border: #334155;
}
```

Components using these tokens automatically adapt:

```css
.card {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  /* Works in both themes without changes */
}
```

## Multi-Platform Tokens

For design systems spanning web, iOS, Android, use a token format tool:

### Style Dictionary Format

```json
{
  "color": {
    "primary": {
      "value": "#3b82f6",
      "type": "color"
    }
  },
  "space": {
    "4": {
      "value": "16px",
      "type": "dimension"
    }
  }
}
```

Transforms to:

| Platform | Output |
|----------|--------|
| CSS | `--color-primary: #3b82f6;` |
| iOS | `static let colorPrimary = UIColor(hex: "#3b82f6")` |
| Android | `<color name="color_primary">#3b82f6</color>` |

## Design Tokens and AI Agents

For AI agents styling interfaces:

| Token Type | Agent Behavior |
|------------|----------------|
| **Colors** | ONLY use `--color-*` tokens, never hex values |
| **Spacing** | ONLY use `--space-*` tokens, never px values |
| **Typography** | ONLY use `--text-*`, `--font-*` tokens |
| **Effects** | ONLY use `--shadow-*`, `--radius-*` tokens |

**Critical rule**: Never hardcode values. Always use tokens.

```css
/* CORRECT */
.card {
  padding: var(--space-4);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

/* WRONG */
.card {
  padding: 16px;           /* Hardcoded */
  background: #f8fafc;     /* Hardcoded */
  border-radius: 8px;      /* Hardcoded */
}
```

## Common Pitfalls

| Pitfall | Problem | Fix |
|---------|---------|-----|
| **Too many tokens** | Analysis paralysis | Start small, add as needed |
| **Too few tokens** | Hardcoded values creep in | Audit for magic numbers |
| **Poor naming** | `--blue-1` tells you nothing | Use semantic names |
| **Inconsistent hierarchy** | Mixing primitive/semantic | Establish clear layers |
| **No documentation** | Team doesn't know what exists | Maintain token reference |

## Related Reading

- [Design Systems](./design-systems.md) — The larger system tokens support
- [Atomic Design](./atomic-design.md) — Components that consume tokens
- [Create Design Tokens](../how-to/create-design-tokens.md) — Step-by-step guide
- [Design Tokens Reference](../reference/design-tokens.md) — Full token list

## References

- Salesforce, "Design Tokens" (original concept)
- [Style Dictionary](https://amzn.github.io/style-dictionary/) — Token transformation tool
- [Tokens Studio](https://tokens.studio/) — Figma integration
- [Design Tokens W3C Community Group](https://www.designtokens.org/)
