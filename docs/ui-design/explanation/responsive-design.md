# Responsive Design

> "Content is like water. If you put water into a cup, it becomes the cup. If you put water into a bottle, it becomes the bottle." — Josh Clark

## Overview

Responsive design creates interfaces that adapt to different screen sizes, orientations, and capabilities. Rather than building separate interfaces for desktop and mobile, responsive design uses flexible layouts that work everywhere.

**Key insight**: Responsive design isn't about making things smaller. It's about prioritizing content and interactions appropriately for each context.

## Mobile-First Approach

Design for the smallest screen first, then enhance for larger screens.

### Why Mobile-First?

| Benefit | Explanation |
|---------|-------------|
| **Forces prioritization** | Limited space requires focus on what matters |
| **Performance** | Small devices get minimal CSS, larger devices add more |
| **Progressive enhancement** | Baseline works everywhere, enhancements for capable devices |
| **Growing mobile usage** | Majority of web traffic is mobile |

### Mobile-First CSS

```css
/* Base styles (mobile) */
.container {
  padding: var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## Breakpoints

Common breakpoint patterns:

| Name | Width | Typical Devices |
|------|-------|-----------------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small laptops |
| `xl` | 1280px | Laptops, desktops |
| `2xl` | 1536px | Large desktops |

### Breakpoint Guidelines

| Guideline | Rationale |
|-----------|-----------|
| Design for content, not devices | Device sizes change; content needs stay constant |
| Add breakpoints when layout breaks | Don't add arbitrary breakpoints |
| Fewer is better | Each breakpoint adds complexity |
| Test between breakpoints | Ensure smooth transitions |

## Layout Patterns

### Single Column → Multi-Column

```
MOBILE (< 768px)         TABLET+  (≥ 768px)
┌─────────────────┐      ┌─────────────────────────┐
│   Navigation    │      │ Nav │    Content        │
├─────────────────┤      │     ├───────────────────┤
│                 │      │     │                   │
│     Content     │      │     │                   │
│                 │      │     │                   │
├─────────────────┤      │     │                   │
│     Sidebar     │      │     ├───────────────────┤
└─────────────────┘      │     │      Sidebar      │
                         └─────┴───────────────────┘
```

### Card Grid Reflow

```css
.card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;  /* Mobile: 1 column */
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  }
}
```

### Stack → Inline

```
MOBILE                   DESKTOP
┌─────────────────┐      ┌─────────────────────────────┐
│  Title          │      │ Title          │ $99  [Buy] │
├─────────────────┤      └─────────────────────────────┘
│  $99            │
├─────────────────┤
│  [Buy Button]   │
└─────────────────┘
```

## Responsive Typography

### Fluid Typography

Font sizes that scale between breakpoints:

```css
/* Fluid font size: 16px at 320px → 20px at 1200px */
html {
  font-size: clamp(1rem, 0.5rem + 1vw, 1.25rem);
}

/* Or with explicit breakpoints */
html { font-size: 16px; }

@media (min-width: 768px) {
  html { font-size: 17px; }
}

@media (min-width: 1024px) {
  html { font-size: 18px; }
}
```

### Responsive Line Length

```css
.prose {
  max-width: 65ch;  /* Optimal reading length */
}
```

## Responsive Images

### srcset and sizes

```html
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  alt="Description"
/>
```

### Art Direction with picture

```html
<picture>
  <source media="(max-width: 640px)" srcset="mobile.jpg" />
  <source media="(max-width: 1024px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Description" />
</picture>
```

## Container Queries

Container queries let components respond to their container's size, not the viewport:

```css
.card-container {
  container-type: inline-size;
}

.card {
  /* Default: vertical layout */
  display: flex;
  flex-direction: column;
}

@container (min-width: 400px) {
  .card {
    /* Horizontal layout when container is wide */
    flex-direction: row;
  }
}
```

**When to use:**
- Components that appear in different-sized containers
- Reusable components in design systems
- Sidebar vs. main content layouts

## Responsive Navigation

### Pattern: Hamburger Menu

```
MOBILE                   DESKTOP
┌─────────────────┐      ┌─────────────────────────────────┐
│ Logo       ☰    │      │ Logo  │ Nav │ Nav │ Nav │ User │
└─────────────────┘      └─────────────────────────────────┘
```

### Pattern: Priority+ Navigation

```
MEDIUM                   SMALL
┌─────────────────────┐  ┌─────────────────┐
│ Nav │ Nav │ Nav │•••│  │ Nav │ Nav │ ••• │
└─────────────────────┘  └─────────────────┘
         ↓ overflow menu contains remaining items
```

### Pattern: Bottom Navigation (Mobile)

```
┌─────────────────┐
│                 │
│     Content     │
│                 │
├─────────────────┤
│ 🏠  🔍  ➕  👤  │  ← Fixed bottom nav on mobile
└─────────────────┘
```

## Touch Considerations

| Guideline | Mobile | Desktop |
|-----------|--------|---------|
| **Target size** | Min 44×44px | Min 24×24px |
| **Spacing** | 8px+ between targets | Can be tighter |
| **Hover states** | No hover on touch | Hover important |
| **Gestures** | Swipe, pinch available | Click, scroll |

### Detecting Touch

```css
/* Hover only on devices that support it */
@media (hover: hover) {
  .button:hover {
    background: var(--color-primary-hover);
  }
}

/* Coarse pointer (touch) vs fine pointer (mouse) */
@media (pointer: coarse) {
  .button {
    min-height: 44px;
    padding: var(--space-3) var(--space-4);
  }
}
```

## Responsive Design and AI Agents

For AI agents creating responsive interfaces:

| Requirement | Agent Behavior |
|-------------|----------------|
| **Mobile-first** | Write base styles for mobile, add breakpoints up |
| **Breakpoints** | Use standard breakpoints (sm/md/lg/xl) |
| **Touch targets** | Ensure 44px minimum on mobile |
| **Content priority** | Show essential content first on mobile |
| **Testing** | Consider all breakpoints in design |

### Responsive Checklist

```
□ Base styles work on 320px viewport
□ Touch targets are 44px minimum
□ Text readable without horizontal scroll
□ Images scale appropriately
□ Navigation accessible on mobile
□ Forms usable on touch devices
□ Content prioritized for mobile
□ Layout adapts at standard breakpoints
```

## Common Responsive Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| **Desktop-first** | Mobile becomes afterthought | Start mobile-first |
| **Hiding content** | Mobile users miss features | Reflow, don't hide |
| **Fixed widths** | Breaks between breakpoints | Use fluid widths |
| **Tiny targets** | Impossible to tap | 44px minimum |
| **Hover-dependent** | Touch users can't access | Use click/tap alternatives |
| **Too many breakpoints** | Complex, hard to maintain | Add only when needed |

## Related Reading

- [Visual Principles](./visual-principles.md) — Layout and spacing principles
- [Accessibility](./accessibility.md) — Touch and zoom considerations
- [Design Tokens](./design-tokens.md) — Responsive spacing tokens

## References

- Ethan Marcotte, "Responsive Web Design" (2011)
- Luke Wroblewski, "Mobile First" (2011)
- "Responsive Design for Motion" by Val Head
- [Every Layout](https://every-layout.dev/) — CSS layout patterns
