# Phase 4: Designing the Interface

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

## Purpose

Translate the solution concept into a concrete interface design. This phase applies UI principles, design system components, and visual design to create the actual screens users will see.

## The UI Agent

**Role:** Interface designer and component architect

**Inputs:**
- Recommended solution from Phase 3
- User flows from Phase 3
- Information architecture from Phase 3
- Design system tokens and components (if available)

**Outputs:**
- Component inventory
- Layout specifications
- Interaction patterns
- Design rationale annotations

## Activities

### 1. Audit Available Components

Before designing, inventory what's available in the design system:

```
COMPONENT AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AVAILABLE:
✓ Button (primary, secondary, ghost, danger)
✓ Card (standard, interactive, stat)
✓ Table (sortable, selectable, paginated)
✓ Form inputs (text, select, checkbox, radio)
✓ Modal (alert, confirmation, form)
✓ Navigation (tabs, sidebar, breadcrumbs)

NEEDED BUT MISSING:
○ Data visualization (charts, sparklines)
○ Status indicators (progress, health)
○ Empty states

WILL CREATE:
• StatusBadge — For showing item status
• TrendIndicator — For showing directional change
```

### 2. Map Components to Information

Connect information architecture to UI components:

```
INFORMATION → COMPONENT MAPPING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY INFORMATION:
┌─────────────────────────────────────────────────────────────┐
│ Info: Key metrics summary                                   │
│ Component: StatCard grid (3-4 cards)                       │
│ Tokens: --text-2xl for values, --color-text-muted for labels│
│ Rationale: At-a-glance numbers, established pattern         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Info: Items needing attention                               │
│ Component: DataTable with status column                     │
│ Tokens: --color-warning/error for status badges            │
│ Rationale: Scannable, sortable, actionable                  │
└─────────────────────────────────────────────────────────────┘
```

### 3. Design Layout Structure

Define the page structure using grid and spacing:

```
LAYOUT: Dashboard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────────────────────────────────────────────────┐
│ HEADER                                          height: 64px│
│ Logo + Nav + User menu                                      │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  PAGE TITLE + ACTIONS                        mb: --space-6  │
│                                                             │
├─────────┬─────────┬─────────┬─────────┬────────────────────┤
│         │         │         │         │                     │
│ STAT 1  │ STAT 2  │ STAT 3  │ STAT 4  │  grid, gap: --space-4
│         │         │         │         │                     │
├─────────┴─────────┴─────────┴─────────┴────────────────────┤
│                                              mt: --space-8  │
│  SECTION HEADER                                             │
│                                              mb: --space-4  │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  DATA TABLE                                                 │
│  - Columns: Name, Status, Value, Date, Actions             │
│  - Sortable, filterable                                     │
│  - Row actions: View, Edit                                  │
│                                                             │
└────────────────────────────────────────────────────────────┘

RESPONSIVE BEHAVIOR:
• Desktop (1024px+): Full layout as shown
• Tablet (768px-1023px): Stats 2x2 grid
• Mobile (<768px): Stats stacked, table scrolls horizontally
```

### 4. Define Interaction Patterns

Document how users interact with elements:

```
INTERACTION: Row Selection
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRIGGER: Click on table row
FEEDBACK: 
  - Row background: var(--color-primary) at 10% opacity
  - Checkbox in first column becomes checked
  
TRIGGER: Hover on row
FEEDBACK:
  - Background: var(--color-surface-hover)
  - Cursor: pointer
  - Row actions become visible (if hidden by default)

TRIGGER: Keyboard navigation
FEEDBACK:
  - Focus ring on row: 2px solid var(--color-focus)
  - Arrow keys move between rows
  - Space/Enter selects row

ACCESSIBILITY:
  - role="row" with aria-selected
  - Checkbox has aria-label
  - Focus managed programmatically
```

### 5. Apply Visual Hierarchy

Ensure proper emphasis using design tokens:

```
VISUAL HIERARCHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL 1 - PRIMARY (Page title, key metrics)
  Font: --text-3xl / --font-bold
  Color: --color-text
  
LEVEL 2 - SECONDARY (Section headers, stat labels)
  Font: --text-lg / --font-semibold
  Color: --color-text
  
LEVEL 3 - BODY (Table content, descriptions)
  Font: --text-base / --font-normal
  Color: --color-text
  
LEVEL 4 - SUPPORTING (Metadata, timestamps)
  Font: --text-sm / --font-normal
  Color: --color-text-muted
  
LEVEL 5 - CAPTION (Help text, footnotes)
  Font: --text-xs / --font-normal
  Color: --color-text-muted
```

### 6. Document Design Decisions

Annotate key choices with rationale:

```
DESIGN DECISION: Stat Cards Above Table
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DECISION: Place summary stats at top of page, above data table.

RATIONALE:
• User need: "See what needs attention quickly" (JTBD #1)
• Pattern: F-shaped reading pattern means top-left gets most attention
• Context: Users check dashboard quickly between tasks (Scenario A)

ALTERNATIVES CONSIDERED:
• Sidebar stats: Rejected - reduces table width, less prominent
• Stats below table: Rejected - requires scrolling to see summary
• No stats, just table: Rejected - requires mental aggregation

TOKENS USED:
• Card background: --color-surface
• Card padding: --space-4
• Grid gap: --space-4
• Trend positive: --color-success
• Trend negative: --color-error
```

## Validation Gate

Before proceeding to Phase 5, verify:

| Check | Question |
|-------|----------|
| ✓ | Are we using design system components (not custom)? |
| ✓ | Are all spacing/color values from tokens? |
| ✓ | Is visual hierarchy clear (primary → secondary → tertiary)? |
| ✓ | Are interaction patterns defined for all interactive elements? |
| ✓ | Are design decisions documented with rationale? |
| ✓ | Does the design address the user flows from Phase 3? |

## Agent Prompt Template

When invoking the UI Agent:

```
You are the UI Agent. Your role is to translate solution concepts into 
concrete interface designs using established patterns and tokens.

INPUTS FROM PHASE 3:
[Paste solution, user flows, information architecture]

DESIGN SYSTEM CONTEXT:
[Available components, token definitions]

YOUR TASK:
1. Audit available components; identify what's needed
2. Map information to specific components with token usage
3. Design layout structure with spacing specifications
4. Define interaction patterns for all interactive elements
5. Apply visual hierarchy using typography/color tokens
6. Document key design decisions with rationale

OUTPUT FORMAT:
- Component inventory (available, needed, new)
- Component mapping (info → component → tokens)
- Layout specifications (structure, spacing, responsive)
- Interaction definitions (trigger, feedback, accessibility)
- Visual hierarchy (levels 1-5 with token usage)
- Design decisions (decision, rationale, alternatives)

CONSTRAINTS:
- ONLY use design token values (never hardcoded colors/spacing)
- PREFER existing components over new ones
- ENSURE all interactive elements have keyboard/screen reader support
- DOCUMENT rationale tying back to user needs
```

## Handoff to Phase 5

Package the following for the Critique Agent:

1. **Component specifications** — What's used and how
2. **Layout designs** — Page structures with measurements
3. **Interaction patterns** — How things behave
4. **Design rationale** — Why decisions were made
5. **Implementation notes** — Anything developers need to know

---

**Previous:** [Phase 3: Exploring Solutions](./03-explore.md)
**Next:** [Phase 5: Validating the Design](./05-validate.md)
