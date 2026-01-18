# Visual Principles

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

## Overview

Visual design principles are the foundations that guide aesthetic decisions. Understanding these principles helps create interfaces that are not only attractive but functional—guiding users' attention, communicating hierarchy, and reducing cognitive load.

**Key insight**: Good visual design isn't subjective taste. It's applied psychology—leveraging how humans perceive and process visual information.

## Gestalt Principles

Gestalt psychology describes how humans perceive organized patterns rather than individual elements.

### Proximity

Elements close together are perceived as related.

```
Related          Unrelated
┌───┬───┬───┐    ┌───┐   ┌───┐   ┌───┐
│ A │ B │ C │    │ A │   │ B │   │ C │
└───┴───┴───┘    └───┘   └───┘   └───┘
```

| UI Application | Example |
|----------------|---------|
| Form groups | Related fields clustered together |
| Navigation | Menu items grouped by category |
| Cards | Title, description, actions close together |

### Similarity

Elements that look alike are perceived as related.

```
Same group       Different groups
● ● ● ● ●        ● ● ○ ○ ○
● ● ● ● ●        ● ● ○ ○ ○
```

| UI Application | Example |
|----------------|---------|
| Action types | Primary buttons share one style, secondary another |
| Status | All error states use same color/icon pattern |
| Interactive elements | All clickable items have consistent styling |

### Continuity

Elements arranged in a line or curve are perceived as related.

```
Perceived as continuous path:
●───●───●───●───●
```

| UI Application | Example |
|----------------|---------|
| Progress indicators | Steps shown in a line |
| Navigation | Horizontal or vertical flow |
| Reading order | Text following grid lines |

### Closure

The mind completes incomplete shapes.

```
We "see" a circle:
    ╭─────╮
    │     │
    │     │
    ╰─────╯
```

| UI Application | Example |
|----------------|---------|
| Icons | Simplified icons that suggest complete shapes |
| Cards | Implied boundaries through spacing |
| Loading states | Partial progress indicators |

### Figure-Ground

We distinguish foreground elements from background.

| UI Application | Example |
|----------------|---------|
| Modals | Darkened backdrop separates modal from page |
| Focus states | Highlighted element stands out from surroundings |
| Cards | Elevated surfaces appear above background |

## Visual Hierarchy

Guide attention through deliberate contrast in visual properties.

### Hierarchy Tools

| Tool | High Emphasis | Low Emphasis |
|------|---------------|--------------|
| **Size** | Larger | Smaller |
| **Weight** | Bold | Light |
| **Color** | High contrast | Low contrast |
| **Position** | Top-left (western), center | Periphery |
| **Space** | More whitespace | Less whitespace |
| **Depth** | Elevated (shadow) | Flat |

### Hierarchy Example

```
┌────────────────────────────────────┐
│                                    │
│  LARGEST: Page Title               │  ← Primary (first read)
│                                    │
│  Medium: Section Header            │  ← Secondary
│                                    │
│  Normal: Body text with regular    │  ← Tertiary (content)
│  weight providing the details.     │
│                                    │
│  smaller · muted · metadata        │  ← Quaternary (optional)
│                                    │
└────────────────────────────────────┘
```

## Typography

### Type Scale

Use a consistent scale for font sizes:

| Name | Size | Use Case |
|------|------|----------|
| xs | 12px | Captions, labels |
| sm | 14px | Secondary text, metadata |
| base | 16px | Body text |
| lg | 18px | Lead paragraphs |
| xl | 20px | Section headers |
| 2xl | 24px | Page section titles |
| 3xl | 30px | Page titles |
| 4xl+ | 36px+ | Hero headings |

### Type Hierarchy

```
--text-3xl + --font-bold     →  Page title
--text-xl + --font-semibold  →  Section header
--text-base + --font-normal  →  Body text
--text-sm + --color-muted    →  Secondary info
--text-xs + --color-muted    →  Captions
```

### Readability Rules

| Rule | Guideline |
|------|-----------|
| **Line length** | 45-75 characters optimal |
| **Line height** | 1.4-1.6 for body text |
| **Paragraph spacing** | Equal to or greater than line height |
| **Contrast** | 4.5:1 minimum for body text |
| **Alignment** | Left-aligned for body text (LTR languages) |

## Color Theory

### Color Functions

| Function | Colors | Example |
|----------|--------|---------|
| **Primary** | Brand color | CTAs, key elements |
| **Neutral** | Grays | Text, backgrounds, borders |
| **Semantic** | Red/Yellow/Green | Errors, warnings, success |
| **Accent** | Secondary brand colors | Highlights, decorative |

### Color in UI

| Element | Color Approach |
|---------|----------------|
| **Text** | High contrast to background |
| **Backgrounds** | Subtle, low saturation |
| **Borders** | Low contrast, define edges |
| **Interactive** | Distinct, consistent state colors |
| **Status** | Semantic colors (red=error, etc.) |

### Accessible Color Contrast

| Content Type | Minimum Ratio |
|--------------|---------------|
| Body text | 4.5:1 |
| Large text (18px+ bold, 24px+) | 3:1 |
| UI components | 3:1 |
| Non-essential decorative | No requirement |

## Spacing System

### The 8-Point Grid

Use multiples of 8px for consistent spacing:

```
--space-1: 4px   (half step)
--space-2: 8px   (base unit)
--space-3: 12px  (1.5 units)
--space-4: 16px  (2 units)
--space-6: 24px  (3 units)
--space-8: 32px  (4 units)
--space-12: 48px (6 units)
--space-16: 64px (8 units)
```

### Spacing Relationships

| Relationship | Spacing |
|--------------|---------|
| **Related items** | --space-2 to --space-4 |
| **Grouped sections** | --space-6 to --space-8 |
| **Major sections** | --space-12 to --space-16 |
| **Component padding** | --space-3 to --space-4 |

### Whitespace

| More Whitespace | Less Whitespace |
|-----------------|-----------------|
| Premium feel | Dense information |
| Easier scanning | Compact interfaces |
| Focus attention | Data-heavy displays |

## Visual Design and AI Agents

For AI agents making visual decisions:

| Principle | Agent Behavior |
|-----------|----------------|
| **Gestalt** | Group related elements with proximity; use similarity for like items |
| **Hierarchy** | Establish clear primary → secondary → tertiary levels |
| **Typography** | Use type scale; never arbitrary sizes |
| **Color** | Use semantic tokens; maintain contrast ratios |
| **Spacing** | Use spacing tokens; follow 8pt grid |

### Decision Framework

```
1. HIERARCHY: What's most important? Size and weight it appropriately.
2. GROUPING: What's related? Use proximity and similarity.
3. COLOR: What needs attention? Use semantic colors purposefully.
4. SPACING: What's the rhythm? Use consistent spacing tokens.
5. VERIFY: Does it pass accessibility? Check contrast ratios.
```

## Common Visual Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| **Everything bold** | Nothing stands out | Reserve bold for emphasis |
| **Too many colors** | Visual chaos | Stick to system palette |
| **Inconsistent spacing** | Feels unpolished | Use spacing tokens only |
| **Low contrast** | Hard to read | Check contrast ratios |
| **No hierarchy** | Users don't know where to look | Establish clear levels |
| **Centered everything** | Hard to scan | Left-align body content |

## Related Reading

- [Design Tokens](./design-tokens.md) — The values that implement these principles
- [Accessibility](./accessibility.md) — Making visual design inclusive
- [Interaction Design](./interaction-design.md) — Visual feedback for interactions

## References

- Edward Tufte, "The Visual Display of Quantitative Information"
- Ellen Lupton, "Thinking with Type"
- Josef Müller-Brockmann, "Grid Systems in Graphic Design"
- "Refactoring UI" by Adam Wathan & Steve Schoger
