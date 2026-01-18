# Design Tokens Reference

Complete reference of design tokens for the UI Optimizer design system.

## Colors

### Primitive Colors

```css
/* Neutral */
--white: #ffffff
--black: #000000

--gray-50:  #f8fafc
--gray-100: #f1f5f9
--gray-200: #e2e8f0
--gray-300: #cbd5e1
--gray-400: #94a3b8
--gray-500: #64748b
--gray-600: #475569
--gray-700: #334155
--gray-800: #1e293b
--gray-900: #0f172a

/* Blue */
--blue-50:  #eff6ff
--blue-100: #dbeafe
--blue-200: #bfdbfe
--blue-300: #93c5fd
--blue-400: #60a5fa
--blue-500: #3b82f6
--blue-600: #2563eb
--blue-700: #1d4ed8
--blue-800: #1e40af
--blue-900: #1e3a8a

/* Red */
--red-50:  #fef2f2
--red-100: #fee2e2
--red-500: #ef4444
--red-600: #dc2626
--red-700: #b91c1c

/* Yellow */
--yellow-50:  #fefce8
--yellow-100: #fef9c3
--yellow-500: #eab308
--yellow-600: #ca8a04

/* Green */
--green-50:  #f0fdf4
--green-100: #dcfce7
--green-500: #22c55e
--green-600: #16a34a
--green-700: #15803d
```

### Semantic Colors

| Token | Light Value | Dark Value | Use |
|-------|-------------|------------|-----|
| `--color-text` | gray-900 | gray-100 | Primary text |
| `--color-text-muted` | gray-500 | gray-400 | Secondary text |
| `--color-text-inverse` | white | white | Text on dark backgrounds |
| `--color-background` | white | gray-900 | Page background |
| `--color-surface` | gray-50 | gray-800 | Card/section backgrounds |
| `--color-surface-raised` | white | gray-700 | Elevated surfaces |
| `--color-border` | gray-200 | gray-700 | Default borders |
| `--color-border-muted` | gray-100 | gray-800 | Subtle borders |
| `--color-primary` | blue-500 | blue-400 | Primary actions |
| `--color-primary-hover` | blue-600 | blue-500 | Primary hover |
| `--color-primary-active` | blue-700 | blue-600 | Primary active |
| `--color-success` | green-500 | green-400 | Success states |
| `--color-warning` | yellow-500 | yellow-400 | Warning states |
| `--color-error` | red-500 | red-400 | Error states |
| `--color-focus` | blue-500 | blue-400 | Focus indicators |

## Spacing

### Spacing Scale

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-0` | 0 | 0px |
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |

### Semantic Spacing

| Token | Value | Use |
|-------|-------|-----|
| `--space-component-padding` | space-4 | Internal component padding |
| `--space-component-gap` | space-3 | Gap between component children |
| `--space-section-padding` | space-8 | Section vertical padding |
| `--space-section-gap` | space-6 | Gap between sections |
| `--space-page-padding` | space-4 to space-8 | Page horizontal padding (responsive) |

## Typography

### Font Families

| Token | Value |
|-------|-------|
| `--font-sans` | 'Inter', system-ui, -apple-system, sans-serif |
| `--font-mono` | 'Fira Code', 'Consolas', monospace |

### Font Sizes

| Token | Value | Pixels | Use |
|-------|-------|--------|-----|
| `--text-xs` | 0.75rem | 12px | Captions, badges |
| `--text-sm` | 0.875rem | 14px | Secondary text, labels |
| `--text-base` | 1rem | 16px | Body text |
| `--text-lg` | 1.125rem | 18px | Lead paragraphs |
| `--text-xl` | 1.25rem | 20px | Small headings |
| `--text-2xl` | 1.5rem | 24px | Section headings |
| `--text-3xl` | 1.875rem | 30px | Page headings |
| `--text-4xl` | 2.25rem | 36px | Hero headings |
| `--text-5xl` | 3rem | 48px | Display headings |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-normal` | 400 |
| `--font-medium` | 500 |
| `--font-semibold` | 600 |
| `--font-bold` | 700 |

### Line Heights

| Token | Value | Use |
|-------|-------|-----|
| `--leading-none` | 1 | Single line headings |
| `--leading-tight` | 1.25 | Headings |
| `--leading-snug` | 1.375 | Subheadings |
| `--leading-normal` | 1.5 | Body text |
| `--leading-relaxed` | 1.625 | Comfortable reading |

### Letter Spacing

| Token | Value |
|-------|-------|
| `--tracking-tight` | -0.025em |
| `--tracking-normal` | 0 |
| `--tracking-wide` | 0.025em |

## Effects

### Border Radius

| Token | Value | Pixels |
|-------|-------|--------|
| `--radius-none` | 0 | 0px |
| `--radius-sm` | 0.25rem | 4px |
| `--radius-md` | 0.375rem | 6px |
| `--radius-lg` | 0.5rem | 8px |
| `--radius-xl` | 0.75rem | 12px |
| `--radius-2xl` | 1rem | 16px |
| `--radius-full` | 9999px | Pill/circle |

### Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | 0 1px 2px 0 rgb(0 0 0 / 0.05) |
| `--shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) |
| `--shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) |
| `--shadow-xl` | 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) |
| `--shadow-inner` | inset 0 2px 4px 0 rgb(0 0 0 / 0.05) |

### Transitions

| Token | Value |
|-------|-------|
| `--duration-fast` | 100ms |
| `--duration-normal` | 200ms |
| `--duration-slow` | 300ms |
| `--ease-default` | cubic-bezier(0.4, 0, 0.2, 1) |
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) |
| `--ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) |

## Z-Index

| Token | Value | Use |
|-------|-------|-----|
| `--z-base` | 0 | Default stacking |
| `--z-dropdown` | 1000 | Dropdowns, select menus |
| `--z-sticky` | 1100 | Sticky headers |
| `--z-modal-backdrop` | 1200 | Modal overlay |
| `--z-modal` | 1300 | Modal content |
| `--z-popover` | 1400 | Popovers, tooltips |
| `--z-tooltip` | 1500 | Tooltips (highest) |

## Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `--breakpoint-sm` | 640px | Large phones |
| `--breakpoint-md` | 768px | Tablets |
| `--breakpoint-lg` | 1024px | Laptops |
| `--breakpoint-xl` | 1280px | Desktops |
| `--breakpoint-2xl` | 1536px | Large screens |

**Usage in media queries:**
```css
@media (min-width: 768px) { /* md and up */ }
@media (min-width: 1024px) { /* lg and up */ }
```

## Component Tokens

### Button

| Token | Value |
|-------|-------|
| `--button-padding-x` | space-4 |
| `--button-padding-y` | space-2 |
| `--button-padding-x-sm` | space-3 |
| `--button-padding-y-sm` | space-1 |
| `--button-padding-x-lg` | space-6 |
| `--button-padding-y-lg` | space-3 |
| `--button-radius` | radius-md |
| `--button-font-weight` | font-medium |

### Input

| Token | Value |
|-------|-------|
| `--input-padding-x` | space-3 |
| `--input-padding-y` | space-2 |
| `--input-radius` | radius-md |
| `--input-border-width` | 1px |
| `--input-focus-ring-width` | 2px |

### Card

| Token | Value |
|-------|-------|
| `--card-padding` | space-4 |
| `--card-radius` | radius-lg |
| `--card-shadow` | shadow-md |

### Modal

| Token | Value |
|-------|-------|
| `--modal-padding` | space-6 |
| `--modal-radius` | radius-xl |
| `--modal-shadow` | shadow-xl |
| `--modal-max-width` | 500px |
