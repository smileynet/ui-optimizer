# Phase 6: Refining the Details

> "God is in the details." — Ludwig Mies van der Rohe

## Purpose

Address validation findings and add the polish that transforms a functional design into a delightful experience. This phase focuses on fixing issues, perfecting micro-interactions, and ensuring implementation quality.

## The Polish Agent

**Role:** Detail perfectionist and implementation guide

**Inputs:**
- Issue list from Phase 5
- Fix recommendations from Phase 5
- Original design specs from Phase 4
- Design system tokens and components

**Outputs:**
- Resolved issue documentation
- Micro-interaction specifications
- Final implementation guide
- Design QA checklist

## Activities

### 1. Address Critical and Major Issues

Work through the issue list systematically:

```
ISSUE RESOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ISSUE #1: Focus ring too subtle
─────────────────────────────────
ORIGINAL: outline: 1px solid var(--color-focus)

RESOLUTION:
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;

VERIFICATION:
  ✓ Visible on light backgrounds
  ✓ Visible on dark backgrounds
  ✓ Doesn't overlap content
  ✓ Meets 3:1 contrast requirement

─────────────────────────────────
ISSUE #2: Missing skip link
─────────────────────────────────
RESOLUTION:
  Added <a href="#main" class="skip-link">Skip to main content</a>
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    padding: var(--space-2) var(--space-4);
    background: var(--color-primary);
    color: white;
    z-index: var(--z-tooltip);
  }
  
  .skip-link:focus {
    top: 0;
  }

VERIFICATION:
  ✓ Hidden by default
  ✓ Visible on focus
  ✓ Moves focus to main content
```

### 2. Design Micro-interactions

Add the details that make interactions feel polished:

```
MICRO-INTERACTION: Button Press
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEFAULT STATE:
  background: var(--color-primary);
  transform: scale(1);
  transition: all var(--duration-fast) var(--ease-out);

HOVER STATE (if supported):
  background: var(--color-primary-hover);

ACTIVE/PRESSED STATE:
  background: var(--color-primary-active);
  transform: scale(0.98);

FOCUS STATE:
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;

LOADING STATE:
  opacity: 0.7;
  cursor: wait;
  [spinner icon replaces text or appears alongside]

DISABLED STATE:
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
```

```
MICRO-INTERACTION: Toast Notification
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENTRY:
  - Slide in from bottom-right
  - Duration: var(--duration-normal)
  - Easing: var(--ease-out)
  - Initial: translateY(100%), opacity(0)
  - Final: translateY(0), opacity(1)

PERSIST:
  - Duration: 5000ms (success) / until dismissed (error)
  - Progress bar showing time remaining
  - Pause timer on hover

EXIT:
  - Fade out on dismiss
  - Duration: var(--duration-fast)
  - Easing: var(--ease-in)

STACKING:
  - New toasts appear below existing
  - Max 3 visible, older ones dismissed
  - var(--space-2) gap between toasts
```

### 3. Specify Loading and Empty States

Design for all data states:

```
LOADING STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INITIAL PAGE LOAD:
┌─────────────────────────────────────────────────────────────┐
│  [Skeleton header ████████████                        ]     │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ ░░░░░░░ │ │ ░░░░░░░ │ │ ░░░░░░░ │ │ ░░░░░░░ │          │
│  │ ░░░░░░░ │ │ ░░░░░░░ │ │ ░░░░░░░ │ │ ░░░░░░░ │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────┘

Skeleton styling:
  background: linear-gradient(
    90deg, 
    var(--color-surface) 25%, 
    var(--color-surface-hover) 50%, 
    var(--color-surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

INLINE LOADING (button, refresh):
  - Replace content with spinner
  - Maintain button width to prevent layout shift
  - Disable interaction during load
```

```
EMPTY STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NO DATA (first use):
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      [Illustration]                         │
│                                                             │
│                   No items yet                              │
│                                                             │
│         Get started by creating your first item.           │
│                                                             │
│                 [ + Create Item ]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

NO RESULTS (search/filter):
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                   No results found                          │
│                                                             │
│      We couldn't find anything matching "query".           │
│              Try different search terms.                    │
│                                                             │
│                [ Clear filters ]                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ERROR STATE:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              ⚠ Something went wrong                         │
│                                                             │
│         We couldn't load your data. Please try again.      │
│                                                             │
│                   [ Retry ]                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4. Create Implementation Guide

Document everything developers need:

```
IMPLEMENTATION GUIDE: Dashboard Page
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPONENT STRUCTURE:
<DashboardPage>
  <PageHeader title="Dashboard" actions={<DateRangePicker />} />
  
  <StatCardGrid>
    <StatCard title="Revenue" value={revenue} trend={revenueTrend} />
    <StatCard title="Users" value={users} trend={usersTrend} />
    <StatCard title="Orders" value={orders} trend={ordersTrend} />
    <StatCard title="Conversion" value={conversion} trend={convTrend} />
  </StatCardGrid>
  
  <Section title="Needs Attention" action={<ViewAllLink />}>
    <DataTable 
      columns={columns}
      data={attentionItems}
      onRowClick={handleRowClick}
      sortable
      selectable
    />
  </Section>
</DashboardPage>

TOKEN USAGE:
  Page padding: var(--space-page-padding)
  Section gap: var(--space-8)
  Card grid gap: var(--space-4)
  Section title: var(--text-xl) var(--font-semibold)
  
DATA REQUIREMENTS:
  - /api/dashboard/stats — Returns stat card data
  - /api/dashboard/attention — Returns items needing attention
  - Refresh: Every 30s or on visibility change
  
ACCESSIBILITY CHECKLIST:
  □ Page has <h1> with page title
  □ Stat cards are not interactive (info only)
  □ Table has caption describing content
  □ Sort controls accessible via keyboard
  □ Row selection announces to screen reader
```

### 5. Design QA Checklist

Final verification before handoff:

```
DESIGN QA CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL CONSISTENCY
□ All colors from design tokens (no hex values)
□ All spacing from spacing scale (no arbitrary values)
□ Typography follows type scale
□ Consistent border radius usage
□ Shadows used appropriately

INTERACTION DESIGN
□ All states defined (default, hover, focus, active, disabled)
□ Loading states for async operations
□ Empty states for no-data scenarios
□ Error states with recovery options
□ Transitions are smooth and purposeful

ACCESSIBILITY
□ Color contrast passes WCAG AA
□ Focus indicators visible
□ Keyboard navigation works
□ Screen reader tested
□ Touch targets 44px minimum

RESPONSIVE DESIGN
□ Works at 320px viewport
□ Works at 768px viewport  
□ Works at 1024px viewport
□ Works at 1440px viewport
□ No horizontal scroll at any size

CONTENT
□ Microcopy is clear and helpful
□ Error messages are specific
□ Labels describe their controls
□ No placeholder-only inputs
```

## Validation Gate

Before marking design complete:

| Check | Question |
|-------|----------|
| ✓ | Are all Critical and Major issues from Phase 5 resolved? |
| ✓ | Are micro-interactions specified for key interactions? |
| ✓ | Are loading/empty/error states designed? |
| ✓ | Is the implementation guide complete? |
| ✓ | Does the design pass the QA checklist? |
| ✓ | Would you be proud to ship this? |

## Agent Prompt Template

When invoking the Polish Agent:

```
You are the Polish Agent. Your role is to perfect the details and 
prepare the design for implementation.

INPUTS FROM PHASE 5:
[Paste issue list, fix recommendations]

DESIGN SPECS FROM PHASE 4:
[Paste component specs, layouts, interactions]

YOUR TASK:
1. Resolve all Critical and Major issues with specific fixes
2. Design micro-interactions for key interactive elements
3. Specify loading, empty, and error states
4. Create implementation guide with component structure and tokens
5. Create design QA checklist
6. Document any final refinements

OUTPUT FORMAT:
- Issue resolutions (problem → fix → verification)
- Micro-interaction specs (states, timing, easing)
- Loading/empty/error state designs
- Implementation guide (structure, tokens, data, a11y)
- QA checklist (visual, interaction, a11y, responsive)

QUALITY STANDARD:
- Every detail should have intention
- Every token should be used correctly
- Every interaction should feel polished
- Every edge case should be handled
```

## Workflow Complete

At the end of Phase 6, you have:

1. **User understanding** — Who they are, what they need
2. **Problem clarity** — What we're solving, how we'll measure success
3. **Solution rationale** — Why this approach over alternatives
4. **Design specifications** — Complete implementation-ready designs
5. **Validation evidence** — Proof the design works
6. **Polish details** — Micro-interactions, edge cases, final quality

The design is ready for implementation.

---

**Previous:** [Phase 5: Validating the Design](./05-validate.md)
**Back to:** [Workflow Overview](../README.md)
