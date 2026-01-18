# Phase 5: Validating the Design

> "The first draft of anything is garbage." — Ernest Hemingway

## Purpose

Rigorously test the design before implementation. This phase catches usability issues, accessibility problems, and design inconsistencies before they become expensive to fix.

## The Critique Agent

**Role:** Design reviewer and quality assurer

**Inputs:**
- Component specifications from Phase 4
- Layout designs from Phase 4
- Interaction patterns from Phase 4
- Original personas and JTBD from Phase 1
- Success metrics from Phase 2

**Outputs:**
- Accessibility audit
- Heuristic evaluation
- User flow verification
- Issue list with severity ratings
- Recommendations for fixes

## Activities

### 1. Accessibility Audit

Check against WCAG 2.2 AA requirements:

```
ACCESSIBILITY AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERCEIVABLE
┌──────────────────────────────────────────────────────────┐
│ ✓ Color contrast: All text meets 4.5:1 (body) / 3:1 (large)
│ ✓ Color not sole indicator: Status uses icon + color    │
│ ✓ Text alternatives: All icons have labels              │
│ ⚠ Focus visibility: Needs stronger focus ring           │
└──────────────────────────────────────────────────────────┘

OPERABLE
┌──────────────────────────────────────────────────────────┐
│ ✓ Keyboard accessible: All actions reachable via Tab    │
│ ✓ Focus order: Logical left-to-right, top-to-bottom    │
│ ✓ Touch targets: All buttons 44px+ minimum             │
│ ⚠ Skip links: Missing skip-to-main-content link        │
└──────────────────────────────────────────────────────────┘

UNDERSTANDABLE
┌──────────────────────────────────────────────────────────┐
│ ✓ Labels: All form inputs have visible labels           │
│ ✓ Error messages: Specific and actionable              │
│ ✓ Consistent navigation: Same across all pages         │
│ ⚠ Help text: Some complex fields lack explanation      │
└──────────────────────────────────────────────────────────┘

ROBUST
┌──────────────────────────────────────────────────────────┐
│ ✓ Semantic HTML: Proper heading hierarchy, landmarks   │
│ ✓ ARIA: Correctly applied where needed                 │
│ ✓ Status messages: Use aria-live for updates           │
└──────────────────────────────────────────────────────────┘
```

### 2. Heuristic Evaluation

Review against Nielsen's 10 usability heuristics:

```
HEURISTIC EVALUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. VISIBILITY OF SYSTEM STATUS
   ✓ Loading states shown during data fetch
   ✓ Success/error feedback on actions
   ⚠ No indicator for background saves

2. MATCH BETWEEN SYSTEM AND REAL WORLD
   ✓ Uses familiar terminology
   ✓ Icons match common conventions
   ✓ Data formats match user expectations

3. USER CONTROL AND FREEDOM
   ✓ Cancel buttons on modals
   ⚠ No undo for delete actions
   ⚠ Can't escape bulk selection easily

4. CONSISTENCY AND STANDARDS
   ✓ Button styles consistent
   ✓ Spacing follows 8pt grid
   ⚠ "Save" vs "Submit" inconsistent labeling

5. ERROR PREVENTION
   ✓ Confirmation for destructive actions
   ✓ Input validation before submit
   ⚠ No warning when leaving unsaved changes

6. RECOGNITION RATHER THAN RECALL
   ✓ Options visible (not hidden menus)
   ✓ Recent items shown
   ✓ Labels on all icons

7. FLEXIBILITY AND EFFICIENCY OF USE
   ✓ Keyboard shortcuts available
   ⚠ No bulk actions for power users
   ⚠ No customizable views

8. AESTHETIC AND MINIMALIST DESIGN
   ✓ Clean, uncluttered layout
   ✓ Progressive disclosure of details
   ✓ Focused on primary tasks

9. HELP USERS RECOGNIZE AND RECOVER FROM ERRORS
   ✓ Clear error messages
   ✓ Suggested fixes
   ⚠ No inline validation (only on submit)

10. HELP AND DOCUMENTATION
    ⚠ No contextual help
    ⚠ No onboarding for new users
```

### 3. User Flow Verification

Walk through each flow from Phase 3:

```
FLOW VERIFICATION: Complete Primary Task
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: User lands on dashboard
✓ Key metrics visible above fold
✓ Clear hierarchy guides attention
⚠ Issue: "Needs Attention" section below fold on laptop

STEP 2: User identifies item needing action
✓ Status badges clearly indicate urgency
✓ Sorting allows priority ordering
✓ Row click navigates to detail

STEP 3: User takes action on item
✓ Actions clearly labeled
✓ Confirmation before destructive action
⚠ Issue: Success message disappears too quickly (2s)

STEP 4: User returns to dashboard
✓ Updated stats reflect change
✓ Item removed from "needs attention"
⚠ Issue: No visual confirmation of completion
```

### 4. Categorize Issues

Rate issues by severity:

| Severity | Definition | Examples |
|----------|------------|----------|
| **Critical** | Blocks users from completing tasks | Broken flow, missing required element |
| **Major** | Significant usability problem | Confusing interaction, accessibility failure |
| **Minor** | Causes friction but has workaround | Inconsistent label, suboptimal placement |
| **Enhancement** | Opportunity for improvement | Missing shortcut, could be more efficient |

### 5. Create Issue List

```
ISSUE LIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL (Must fix before launch)
─────────────────────────────────
None identified

MAJOR (Should fix before launch)
─────────────────────────────────
#1 [A11y] Focus ring too subtle for keyboard users
   Location: All focusable elements
   Fix: Increase to 2px solid, add offset
   
#2 [A11y] Missing skip-to-main-content link
   Location: Page header
   Fix: Add hidden skip link, visible on focus

#3 [UX] No undo for delete actions
   Location: Table row actions
   Fix: Add toast with undo button, 10s delay

MINOR (Fix if time permits)
─────────────────────────────────
#4 [Consistency] "Save" vs "Submit" labeling
   Location: Various forms
   Fix: Standardize on "Save" for persisting data

#5 [UX] Success toast disappears too quickly
   Location: Global toast component
   Fix: Extend duration to 5s, or until dismissed

ENHANCEMENTS (Future consideration)
─────────────────────────────────
#6 Bulk actions for power users
#7 Customizable dashboard views
#8 Contextual help tooltips
#9 Onboarding flow for new users
```

## Validation Gate

Before proceeding to Phase 6, verify:

| Check | Question |
|-------|----------|
| ✓ | Are all Critical issues resolved? |
| ✓ | Are all Major issues resolved or have accepted workarounds? |
| ✓ | Does the design pass WCAG 2.2 AA? |
| ✓ | Do user flows complete successfully? |
| ✓ | Has the issue list been reviewed and prioritized? |

## Agent Prompt Template

When invoking the Critique Agent:

```
You are the Critique Agent. Your role is to rigorously evaluate the 
design for usability, accessibility, and alignment with user needs.

INPUTS FROM PHASE 4:
[Paste component specs, layouts, interactions]

ORIGINAL CONTEXT:
[Paste personas, JTBD from Phase 1; success metrics from Phase 2]

YOUR TASK:
1. Conduct accessibility audit against WCAG 2.2 AA
2. Perform heuristic evaluation (Nielsen's 10 heuristics)
3. Verify each user flow can be completed successfully
4. Identify issues and rate severity (critical/major/minor/enhancement)
5. Provide specific fix recommendations
6. Verify design decisions align with original user needs

OUTPUT FORMAT:
- Accessibility audit checklist (POUR categories)
- Heuristic evaluation (10 heuristics with findings)
- Flow verification (step-by-step walkthrough)
- Issue list (categorized by severity with fix recommendations)
- Alignment check (do design decisions serve user needs?)

EVALUATION CRITERIA:
- Critical: Blocks task completion
- Major: Significant usability/accessibility problem
- Minor: Friction but has workaround
- Enhancement: Opportunity for improvement
```

## Handoff to Phase 6

Package the following for the Polish Agent:

1. **Issue list** — Prioritized problems to fix
2. **Fix recommendations** — Specific solutions
3. **Accessibility findings** — A11y requirements
4. **Flow issues** — Places where flows break down
5. **Enhancement ideas** — Future improvements

---

**Previous:** [Phase 4: Designing the Interface](./04-design.md)
**Next:** [Phase 6: Refining the Details](./06-refine.md)
