# Product Design Templates

Quick-reference templates for product design artifacts.

## User Story Template

```markdown
## [Story Title]

**As a** [specific user type],
**I want to** [accomplish this goal],
**So that** [I get this value].

### Acceptance Criteria

Given [precondition]
When [action]
Then [result]

### Notes

- [Constraints, assumptions, out-of-scope items]
```

## Job Statement Template

```
When [situation/context],
I want to [motivation/action],
So I can [expected outcome/progress].
```

**Example:**
```
When I have back-to-back meetings all day,
I want to quickly see what's urgent,
So I can handle critical issues without missing important work.
```

## Hypothesis Template (Lean UX)

```
We believe [this capability/change]
Will result in [this outcome]
We will have confidence to proceed when [we see this measurable signal]
```

**Example:**
```
We believe adding a progress indicator to checkout
Will result in reduced cart abandonment
We will have confidence to proceed when we see 10% reduction in payment page exits
```

## Persona Template

```markdown
# [Persona Name]

**Role:** [Job title or role]
**Quote:** "[Core motivation in their words]"

## Background
- [Relevant professional context]
- [Experience level]
- [Team/organization context]

## Goals
1. [Primary goal]
2. [Secondary goal]
3. [Tertiary goal]

## Frustrations
1. [Pain point 1]
2. [Pain point 2]
3. [Pain point 3]

## Behaviors
- [How they work/communicate]
- [Tools they prefer]
- [Habits relevant to your product]

## A Day in Their Life
[Brief narrative of typical day showing context for your product]
```

## Journey Map Template

```
PERSONA: [Name]
SCENARIO: [What they're trying to accomplish]
SCOPE: [Start point] → [End point]

| Phase      | [Phase 1] | [Phase 2] | [Phase 3] | [Phase 4] |
|------------|-----------|-----------|-----------|-----------|
| Actions    |           |           |           |           |
| Thoughts   |           |           |           |           |
| Emotions   | 😐        | 😟        | 😰        | 😊        |
| Touchpoints|           |           |           |           |
| Pain Points|           |           |           |           |
| Opportunities|         |           |           |           |
```

## JTBD Interview Guide

### Opening
> "I'd love to hear the story of how you ended up using [product]. Can you start from when you first realized you might need something like this?"

### Timeline Probes
| Phase | Questions |
|-------|-----------|
| First thought | "When did you first realize you needed something different?" |
| Passive looking | "How did you first hear about alternatives?" |
| Active looking | "What made you start seriously evaluating?" |
| Decision | "What made you finally commit?" |
| First use | "What was your experience when you first used it?" |

### Forces Probes
| Force | Questions |
|-------|-----------|
| Push | "What frustrated you about the old way?" |
| Pull | "What attracted you to the new solution?" |
| Anxiety | "What concerns did you have about switching?" |
| Habit | "What was comfortable about the old way?" |

### Closing
> "Looking back, what surprised you most about the whole experience?"

## Empathy Map Template

```
┌─────────────────────────────────────────────────────┐
│                       SAYS                          │
│  "[Direct quotes from research]"                    │
│  "[What they tell others]"                          │
├────────────────────────┬────────────────────────────┤
│         THINKS         │           DOES             │
│  Hopes/fears           │  Observable behaviors      │
│  Internal concerns     │  Actions taken             │
│  Beliefs               │  Workarounds used          │
├────────────────────────┴────────────────────────────┤
│                       FEELS                         │
│  Emotions experienced                               │
│  Frustrations                                       │
│  Joys                                               │
└─────────────────────────────────────────────────────┘
```

## Story Map Template

```
BACKBONE: User Activities (steps in the journey)
┌───────────┬───────────┬───────────┬───────────┐
│ Activity 1│ Activity 2│ Activity 3│ Activity 4│
├───────────┼───────────┼───────────┼───────────┤
│ Story 1.1 │ Story 2.1 │ Story 3.1 │ Story 4.1 │ ← MVP / Walking Skeleton
│ Story 1.2 │ Story 2.2 │ Story 3.2 │ Story 4.2 │ ← Release 1
│ Story 1.3 │ Story 2.3 │ Story 3.3 │ Story 4.3 │ ← Release 2
│ Story 1.4 │           │ Story 3.4 │           │ ← Future
└───────────┴───────────┴───────────┴───────────┘

Reading:
- Horizontal = journey through experience (left → right = time)
- Vertical = priority (top = essential, bottom = nice-to-have)
```

## Experiment Canvas Template

```markdown
## Experiment: [Name]

### Hypothesis
We believe [capability]
Will result in [outcome]
We'll know we're right when [metric]

### Experiment Design
**Type:** [Usability test / A/B test / Fake door / etc.]
**Duration:** [Timeframe]
**Sample size:** [Number of users]

### What We'll Build
- [Minimal artifact 1]
- [Minimal artifact 2]

### What We'll Measure
- [Metric 1]: Currently [X], target [Y]
- [Metric 2]: Currently [X], target [Y]

### Success Criteria
- [ ] [Specific criterion for success]
- [ ] [Specific criterion for success]

### Failure Criteria
- [ ] [What would tell us we're wrong]

### Results
**Status:** [Not started / In progress / Complete]
**Outcome:** [What we learned]
**Next action:** [What we'll do with this learning]
```

## How Might We (HMW) Template

Starting from a POV insight, generate HMW questions:

```
POV: [User] needs [need] because [insight]

How might we...
- [Reframe the insight as a question]
- [Alternative angle 1]
- [Alternative angle 2]
- [Opposite/extreme version]
- [Adjacent problem]
```

**Example:**
```
POV: Busy managers need to spot blockers early because 
     delayed intervention causes cascading delays.

How might we...
- Make blockers visible automatically?
- Reduce time between blocker and awareness?
- Prevent blockers from occurring?
- Make blocker resolution self-service?
- Help teams predict blockers before they happen?
```
