# How to Create Design Tokens

This guide walks you through defining a design token system for your project.

## Prerequisites

- A design direction (colors, fonts chosen)
- Understanding of CSS custom properties
- Access to your project's CSS

## Steps

### 1. Define Primitive Color Tokens

Start with your raw color values:

```css
:root {
  /* Neutral palette */
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e1;
  --gray-400: #94a3b8;
  --gray-500: #64748b;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1e293b;
  --gray-900: #0f172a;
  
  /* Brand colors */
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  
  /* Semantic colors */
  --red-500: #ef4444;
  --yellow-500: #eab308;
  --green-500: #22c55e;
}
```

### 2. Create Semantic Color Tokens

Map primitives to meaningful names:

```css
:root {
  /* Text colors */
  --color-text: var(--gray-900);
  --color-text-muted: var(--gray-500);
  --color-text-inverse: white;
  
  /* Background colors */
  --color-background: white;
  --color-surface: var(--gray-50);
  --color-surface-raised: white;
  
  /* Border colors */
  --color-border: var(--gray-200);
  --color-border-muted: var(--gray-100);
  
  /* Interactive colors */
  --color-primary: var(--blue-500);
  --color-primary-hover: var(--blue-600);
  --color-primary-active: var(--blue-700);
  
  /* Status colors */
  --color-success: var(--green-500);
  --color-warning: var(--yellow-500);
  --color-error: var(--red-500);
  
  /* Focus */
  --color-focus: var(--blue-500);
}
```

### 3. Define Spacing Tokens

Use a consistent base unit (typically 4px or 8px):

```css
:root {
  /* Base: 4px */
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 4. Define Typography Tokens

```css
:root {
  /* Font families */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Consolas', monospace;
  
  /* Font sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  
  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

### 5. Define Effect Tokens

```css
:root {
  /* Border radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### 6. Define Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-modal-backdrop: 1200;
  --z-modal: 1300;
  --z-popover: 1400;
  --z-tooltip: 1500;
}
```

### 7. Add Dark Theme (Optional)

```css
[data-theme="dark"] {
  /* Text colors */
  --color-text: var(--gray-100);
  --color-text-muted: var(--gray-400);
  
  /* Background colors */
  --color-background: var(--gray-900);
  --color-surface: var(--gray-800);
  --color-surface-raised: var(--gray-700);
  
  /* Border colors */
  --color-border: var(--gray-700);
  --color-border-muted: var(--gray-800);
  
  /* Adjust shadows for dark mode */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
}
```

### 8. Create Component Tokens (Optional)

For frequently-used component values:

```css
:root {
  /* Button */
  --button-padding-x: var(--space-4);
  --button-padding-y: var(--space-2);
  --button-radius: var(--radius-md);
  --button-font-weight: var(--font-medium);
  
  /* Card */
  --card-padding: var(--space-4);
  --card-radius: var(--radius-lg);
  --card-shadow: var(--shadow-md);
  
  /* Input */
  --input-padding-x: var(--space-3);
  --input-padding-y: var(--space-2);
  --input-radius: var(--radius-md);
  --input-border-color: var(--color-border);
}
```

### 9. Document Your Tokens

Create a reference showing all tokens and their values:

```markdown
## Color Tokens

| Token | Light | Dark |
|-------|-------|------|
| --color-text | gray-900 | gray-100 |
| --color-background | white | gray-900 |
...
```

### 10. Use Tokens in Components

```css
.button {
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-radius);
  font-weight: var(--button-font-weight);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transition: background var(--duration-fast) var(--ease-default);
}

.button:hover {
  background: var(--color-primary-hover);
}

.button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

## Token Naming Checklist

- [ ] Names describe purpose, not value (`--color-primary` not `--blue`)
- [ ] Consistent naming convention (CTI: category-type-item)
- [ ] Primitive tokens are context-free
- [ ] Semantic tokens are meaningful
- [ ] Component tokens reference semantic tokens

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Values in component CSS | Changes require hunting | Use tokens everywhere |
| Primitives in components | Coupling to specific values | Use semantic tokens |
| Too many tokens | Hard to maintain | Start small, add as needed |
| Inconsistent naming | Confusing to use | Establish convention |

## Related

- [Design Tokens](../explanation/design-tokens.md) — Background on token theory
- [Design Tokens Reference](../reference/design-tokens.md) — Complete token list
