# Quality Gates Reference

> Pass/fail criteria for each phase transition

## Overview

Quality gates enforce minimum standards before phase transitions. Each gate validates:
1. **Completeness** — Required artifacts exist
2. **Format** — Artifacts follow correct structure
3. **Quality** — Content meets standards
4. **Traceability** — Decisions link back to user needs

## Gate 1: Research → Strategy

**Validates:** Phase 1 (Understanding Users) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Persona count | ≥ 2 personas | < 2 personas |
| Persona completeness | All have: role, goals, frustrations, context | Missing required fields |
| JTBD count | ≥ 3 statements | < 3 statements |
| JTBD format | "When..., I want to..., So I can..." | Wrong format |
| JTBD focus | Outcome-focused (not feature-focused) | Feature-focused |
| Scenario count | ≥ 2 scenarios | < 2 scenarios |
| Scenario completeness | Who, when, where, device, goal, constraints | Missing fields |
| Key insights | ≥ 3 actionable insights | Vague or missing |

### Checklist

```
□ At least 2 distinct personas identified
□ Each persona has: role, quote, goals (3), frustrations (3), context
□ At least 3 JTBD statements in correct format
□ JTBD statements focus on outcomes, not features
□ At least 2 realistic usage scenarios documented
□ Scenarios cover both typical and edge cases
□ Key insights summarized and actionable
□ Could a designer understand users from this alone?
```

### Common Failures

| Failure | Fix |
|---------|-----|
| "User wants feature X" (feature-focused JTBD) | Reframe as outcome: "User wants to [accomplish goal]" |
| Generic persona ("a busy professional") | Add specific context, constraints, motivations |
| Missing frustrations | Research pain points, interview users |
| Scenarios lack constraints | Add time pressure, interruptions, device limitations |

---

## Gate 2: Strategy → Solution

**Validates:** Phase 2 (Defining the Problem) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Problem statement | Present and follows POV format | Missing or wrong format |
| Problem focus | User need, not solution | Solution-focused |
| Success metrics | ≥ 3 SMART metrics | < 3 or vague metrics |
| Metric measurability | Quantifiable, time-bound | Subjective or unbounded |
| Constraints | Documented (tech, design, a11y, time) | Missing categories |
| HMW questions | ≥ 5 questions | < 5 questions |
| HMW format | "How might we...?" | Wrong format |
| Prioritization | Needs ranked by user value | Unprioritized list |

### Checklist

```
□ Problem statement follows: "[User] needs [goal] because [insight], but [obstacle]"
□ Problem focused on user need, not a specific solution
□ At least 3 success metrics defined
□ Each metric is Specific, Measurable, Achievable, Relevant, Time-bound
□ Constraints documented: technical, design system, accessibility, time
□ At least 5 "How Might We" questions generated
□ HMW questions open-ended, not leading to specific solutions
□ User needs prioritized (must-have vs nice-to-have)
```

### Common Failures

| Failure | Fix |
|---------|-----|
| "We need to build a dashboard" (solution-focused) | Reframe: "Users need to see X to accomplish Y" |
| "Improve user satisfaction" (vague metric) | Specify: "Increase NPS from 30 to 50 within 3 months" |
| Missing accessibility constraints | Add: "Must meet WCAG 2.2 AA" |
| "How might we add a notification feature?" (leading) | Reframe: "How might we keep users informed?" |

---

## Gate 3: Solution → Design

**Validates:** Phase 3 (Exploring Solutions) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Solution options | ≥ 3 distinct approaches explored | < 3 options |
| Pros/cons | Each option has trade-offs documented | Missing analysis |
| User flows | ≥ 1 complete flow for primary use case | No flows |
| Flow completeness | Happy path + edge cases | Happy path only |
| Information architecture | Hierarchy defined (primary/secondary/tertiary) | Missing or flat |
| Selection rationale | Clear reasoning for chosen approach | No rationale |
| Risk identification | Risks and mitigations documented | Risks ignored |

### Checklist

```
□ At least 3 different solution approaches explored
□ Each solution has pros and cons documented
□ Solutions evaluated against consistent criteria
□ At least 1 complete user flow (steps, decisions, outcomes)
□ User flows cover happy path AND edge cases
□ Information architecture defines primary/secondary/tertiary content
□ One solution selected with clear rationale
□ Rationale ties back to user needs and constraints
□ Risks identified with mitigation strategies
□ Open questions documented for later validation
```

### Common Failures

| Failure | Fix |
|---------|-----|
| Only one solution explored | Generate alternatives (even if imperfect) |
| "Selected because it's familiar" | Evaluate against user needs, not team preference |
| Missing error states in flows | Add: what happens when things go wrong? |
| Flat information hierarchy | Prioritize: what must users see first? |

---

## Gate 4: Design → Validate

**Validates:** Phase 4 (Designing the Interface) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Component inventory | Documented with design system mapping | Missing inventory |
| Token usage | All values from tokens (no hardcoded) | Hardcoded colors/spacing |
| Layout specs | Structure with spacing defined | Vague layouts |
| Responsive behavior | Breakpoints documented | Desktop-only |
| Interaction patterns | States defined (default, hover, focus, active, disabled) | Missing states |
| Visual hierarchy | 4-5 levels defined with tokens | Unclear hierarchy |
| Design decisions | Rationale documented | Decisions undocumented |
| Accessibility | Basic a11y considered (labels, contrast, focus) | A11y ignored |

### Checklist

```
□ Component inventory: available, needed, new
□ All colors use semantic tokens (--color-*)
□ All spacing uses space tokens (--space-*)
□ All typography uses type scale (--text-*)
□ Layout structure defined with measurements
□ Responsive behavior for mobile, tablet, desktop
□ Interactive elements have all states defined
□ Keyboard interactions specified
□ Visual hierarchy clear (5 levels)
□ Key design decisions documented with rationale
□ Rationale traces back to user needs
```

### Common Failures

| Failure | Fix |
|---------|-----|
| `color: #3b82f6` | Use: `color: var(--color-primary)` |
| `padding: 16px` | Use: `padding: var(--space-4)` |
| "Hover: changes color" (vague) | Specify: `hover: bg-[var(--color-primary-hover)]` |
| No keyboard interactions | Add: "Tab to focus, Enter to activate" |

---

## Gate 5: Validate → Refine

**Validates:** Phase 5 (Validating the Design) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Accessibility audit | WCAG 2.2 AA checklist completed | Audit missing |
| Color contrast | All text meets 4.5:1 (body) / 3:1 (large) | Contrast failures |
| Keyboard navigation | All interactive elements reachable | Inaccessible elements |
| Heuristic evaluation | 10 Nielsen heuristics reviewed | Evaluation missing |
| Critical issues | 0 critical issues | Any critical issues |
| Major issues | All documented with severity | Undocumented issues |
| Flow verification | Primary flows tested end-to-end | Flows untested |
| Issue prioritization | Issues ranked by severity | Unprioritized list |

### Checklist

```
□ WCAG 2.2 AA audit completed (POUR categories)
□ All color contrast ratios verified
□ Keyboard navigation tested for all interactive elements
□ Focus order logical and visible
□ Nielsen's 10 heuristics evaluated
□ All user flows walked through step-by-step
□ Issues categorized: critical, major, minor, enhancement
□ 0 critical issues (must be resolved before continuing)
□ Each issue has specific fix recommendation
□ Design decisions verified against original user needs
```

### Common Failures

| Failure | Fix |
|---------|-----|
| Contrast 3.8:1 on body text | Darken text or lighten background to achieve 4.5:1 |
| Button not focusable | Add `tabindex="0"` or use semantic `<button>` |
| Critical issue: "Flow breaks at step 3" | Cannot proceed until flow works |
| Missing skip link | Add hidden skip-to-main link |

---

## Gate 6: Refine → Complete

**Validates:** Phase 6 (Refining the Details) outputs

| Criterion | Pass | Fail |
|-----------|------|------|
| Critical issues | All resolved | Any unresolved |
| Major issues | All resolved | Any unresolved |
| Issue documentation | Resolution verified for each | Unverified fixes |
| Micro-interactions | Key interactions specified | Missing specifications |
| Loading states | Skeleton/spinner designs | No loading states |
| Empty states | First-use and no-results designs | No empty states |
| Error states | Error messages and recovery | No error handling |
| Implementation guide | Complete with tokens, structure, a11y | Incomplete guide |
| QA checklist | All items verified | Unchecked items |

### Checklist

```
□ All critical issues from Phase 5 resolved
□ All major issues from Phase 5 resolved
□ Each resolution verified (not just claimed)
□ Micro-interactions specified for buttons, inputs, transitions
□ Loading states designed (initial, inline, refresh)
□ Empty states designed (first use, no results, error)
□ Error states designed with recovery options
□ Implementation guide complete:
  □ Component structure
  □ Token usage
  □ Data requirements
  □ Accessibility checklist
□ Design QA checklist passed:
  □ Visual consistency
  □ Interaction design
  □ Accessibility
  □ Responsive design
  □ Content/microcopy
□ Ready to ship (proud of the work)
```

### Common Failures

| Failure | Fix |
|---------|-----|
| "Fixed focus ring" (no verification) | Show before/after, test across browsers |
| Missing loading state | Add skeleton or spinner with timing |
| Empty state just says "No data" | Add illustration, explanation, CTA |
| Implementation guide missing a11y | Add ARIA roles, keyboard interactions |

---

## Automated Validation

Quality gates can be partially automated:

```typescript
interface QualityGateResult {
  phase: string;
  passed: boolean;
  score: number;           // 0-100
  failures: string[];      // Specific failures
  warnings: string[];      // Non-blocking issues
  recommendations: string[]; // Improvement suggestions
}

function validateGate(phase: number, artifacts: Artifacts): QualityGateResult {
  const checks = getChecksForPhase(phase);
  const failures: string[] = [];
  const warnings: string[] = [];
  
  for (const check of checks) {
    const result = check.validate(artifacts);
    if (result.severity === 'fail') {
      failures.push(result.message);
    } else if (result.severity === 'warn') {
      warnings.push(result.message);
    }
  }
  
  return {
    phase: `phase${phase}`,
    passed: failures.length === 0,
    score: calculateScore(checks, failures, warnings),
    failures,
    warnings,
    recommendations: generateRecommendations(failures, warnings)
  };
}
```

---

## Human Escalation

Escalate to human when:

1. **Max retries exceeded** — Same phase fails 3 times
2. **Conflicting requirements** — Constraints contradict user needs
3. **Ambiguous direction** — Cannot determine best approach
4. **Out of scope** — Request requires capabilities not available

Escalation format:

```
HUMAN REVIEW REQUIRED

Phase: [Current phase]
Attempt: [N of 3]
Failures: 
• [Specific failure 1]
• [Specific failure 2]

Context:
[Relevant artifacts and decisions]

Options:
1. [ ] Provide additional guidance and retry
2. [ ] Override quality gate and proceed (document risk)
3. [ ] Rollback to previous phase
4. [ ] Terminate workflow

Notes for reviewer:
[What the orchestrator tried, why it failed]
```

---

**Related:**
- [Orchestrator Instructions](./orchestrator.md)
- [Agent Prompts](./agent-prompts.md)
