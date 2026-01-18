# How to Implement an 8pt Grid System

This guide walks you through implementing a spacing system based on 8-pixel increments.

## Prerequisites

- CSS custom properties support
- Understanding of CSS layout (flexbox, grid)
- Access to your project's styles

## Steps

### 1. Define Your Spacing Scale

Create tokens based on 8px multiples (with 4px half-step):

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px - half step */
  --space-2: 0.5rem;    /* 8px - base unit */
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

### 2. Create Semantic Spacing Tokens

Map spacing to use cases:

```css
:root {
  /* Component internal spacing */
  --space-component-padding: var(--space-4);        /* 16px */
  --space-component-gap: var(--space-3);            /* 12px */
  
  /* Card spacing */
  --space-card-padding: var(--space-4);             /* 16px */
  --space-card-gap: var(--space-4);                 /* 16px */
  
  /* Section spacing */
  --space-section-padding: var(--space-8);          /* 32px */
  --space-section-gap: var(--space-6);              /* 24px */
  
  /* Page spacing */
  --space-page-padding: var(--space-4);             /* 16px mobile */
  --space-page-max-width: 1200px;
}

/* Larger spacing on bigger screens */
@media (min-width: 768px) {
  :root {
    --space-page-padding: var(--space-6);           /* 24px tablet */
  }
}

@media (min-width: 1024px) {
  :root {
    --space-page-padding: var(--space-8);           /* 32px desktop */
  }
}
```

### 3. Apply to Layout Components

**Page container:**
```css
.page-container {
  padding: var(--space-page-padding);
  max-width: var(--space-page-max-width);
  margin: 0 auto;
}
```

**Section:**
```css
.section {
  padding: var(--space-section-padding) 0;
}

.section + .section {
  padding-top: 0; /* Avoid double spacing between sections */
}
```

**Card:**
```css
.card {
  padding: var(--space-card-padding);
}

.card-header {
  margin-bottom: var(--space-3);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.card-footer {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}
```

### 4. Apply to Typography

```css
h1 { margin-bottom: var(--space-4); }
h2 { margin-bottom: var(--space-3); }
h3 { margin-bottom: var(--space-2); }

p { margin-bottom: var(--space-4); }
p:last-child { margin-bottom: 0; }

ul, ol {
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
}

li + li {
  margin-top: var(--space-2);
}
```

### 5. Apply to Form Elements

```css
.form-group {
  margin-bottom: var(--space-4);
}

.form-label {
  display: block;
  margin-bottom: var(--space-1);
}

.form-input {
  padding: var(--space-2) var(--space-3);
}

.form-help {
  margin-top: var(--space-1);
}

.form-error {
  margin-top: var(--space-1);
}

.form-actions {
  margin-top: var(--space-6);
  display: flex;
  gap: var(--space-3);
}
```

### 6. Apply to Buttons

```css
.button {
  padding: var(--space-2) var(--space-4);
}

.button-sm {
  padding: var(--space-1) var(--space-3);
}

.button-lg {
  padding: var(--space-3) var(--space-6);
}

.button-group {
  display: flex;
  gap: var(--space-2);
}
```

### 7. Use CSS Grid with 8pt Gaps

```css
.grid {
  display: grid;
  gap: var(--space-4);
}

.grid-tight {
  gap: var(--space-2);
}

.grid-loose {
  gap: var(--space-6);
}

/* Responsive grid */
.card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

### 8. Create Utility Classes (Optional)

```css
/* Margin utilities */
.m-0 { margin: var(--space-0); }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-3 { margin: var(--space-3); }
.m-4 { margin: var(--space-4); }
/* ... etc */

.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.ml-4 { margin-left: var(--space-4); }
.mr-4 { margin-right: var(--space-4); }
.mx-4 { margin-left: var(--space-4); margin-right: var(--space-4); }
.my-4 { margin-top: var(--space-4); margin-bottom: var(--space-4); }

/* Padding utilities */
.p-0 { padding: var(--space-0); }
.p-1 { padding: var(--space-1); }
/* ... etc */

/* Gap utilities */
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
/* ... etc */
```

### 9. Verify Visual Rhythm

Check your implementation:

```
□ All spacing values come from the scale
□ Related elements have tighter spacing (space-2 to space-4)
□ Unrelated elements have looser spacing (space-6 to space-8)
□ Sections are clearly separated (space-12+)
□ Spacing feels consistent across components
```

## Quick Reference

| Space | Size | Typical Use |
|-------|------|-------------|
| `--space-1` | 4px | Icon gaps, tight inline spacing |
| `--space-2` | 8px | Related text, button groups |
| `--space-3` | 12px | List items, form fields |
| `--space-4` | 16px | Card padding, paragraph spacing |
| `--space-6` | 24px | Section gaps, form group spacing |
| `--space-8` | 32px | Section padding, major breaks |
| `--space-12` | 48px | Page section dividers |
| `--space-16` | 64px | Hero sections, major layout |

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Magic numbers | `margin: 15px` | Use tokens: `var(--space-4)` |
| Inconsistent gaps | Some 8px, some 10px | Stick to the scale |
| Too tight | Everything cramped | Use larger values for sections |
| Too loose | Wasted space | Use smaller values for related items |

## Related

- [Design Tokens](../explanation/design-tokens.md) — Token system overview
- [Visual Principles](../explanation/visual-principles.md) — Spacing theory
