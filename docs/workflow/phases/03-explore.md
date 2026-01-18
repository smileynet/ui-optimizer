# Phase 3: Exploring Solutions

> "The best way to have a good idea is to have lots of ideas." — Linus Pauling

## Purpose

Generate multiple solution concepts before committing to one. This phase encourages divergent thinking—exploring the solution space broadly before converging on an approach.

## The Solution Agent

**Role:** Creative problem solver and flow designer

**Inputs:**
- Problem statement from Phase 2
- HMW questions from Phase 2
- Constraints from Phase 2
- Prioritized needs from Phase 2

**Outputs:**
- Solution hypotheses (multiple options)
- User flow diagrams
- Information architecture
- Recommended approach with rationale

## Activities

### 1. Generate Solution Hypotheses

For each HMW question, brainstorm multiple approaches:

```
HMW: How might we help users see what needs attention?

SOLUTIONS:
┌─────────────────────────────────────────────────────────────┐
│ A. DASHBOARD APPROACH                                       │
│    Surface key metrics and alerts on a central dashboard    │
│    + Familiar pattern, at-a-glance view                     │
│    - Requires users to check proactively                    │
├─────────────────────────────────────────────────────────────┤
│ B. NOTIFICATION APPROACH                                    │
│    Push alerts when thresholds are crossed                  │
│    + Proactive, no manual checking                          │
│    - Can become noise, alert fatigue                        │
├─────────────────────────────────────────────────────────────┤
│ C. SMART INBOX APPROACH                                     │
│    AI-prioritized list of items needing action              │
│    + Actionable, prioritized                                │
│    - Requires trust in prioritization                       │
├─────────────────────────────────────────────────────────────┤
│ D. CONTEXTUAL HIGHLIGHTS                                    │
│    Surface relevant info where users already work           │
│    + No context switching                                   │
│    - Scattered, may miss things                             │
└─────────────────────────────────────────────────────────────┘
```

### 2. Sketch User Flows

Map how users move through the solution:

```
USER FLOW: [Goal Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRIGGER: [What starts this flow]
     │
     ▼
┌─────────────┐
│   Step 1    │ ──► [What user sees/does]
└─────────────┘     [Decision point?]
     │                    │
     │              ┌─────┴─────┐
     ▼              ▼           ▼
┌─────────────┐  ┌─────┐    ┌─────┐
│   Step 2    │  │ Yes │    │ No  │
└─────────────┘  └─────┘    └─────┘
     │              │           │
     ▼              ▼           ▼
┌─────────────┐  ┌─────────────────┐
│   Step 3    │  │  Alternate path │
└─────────────┘  └─────────────────┘
     │
     ▼
┌─────────────┐
│   SUCCESS   │ ──► [Outcome achieved]
└─────────────┘

HAPPY PATH: Step 1 → Step 2 → Step 3 → Success
EDGE CASES: [What could go wrong? How do we handle it?]
```

### 3. Define Information Architecture

What information needs to be present, and how should it be organized?

```
INFORMATION HIERARCHY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY (Always visible)
├── [Most critical info]
├── [Primary action]
└── [Status/state]

SECONDARY (Visible on demand)
├── [Supporting details]
├── [Secondary actions]
└── [Metadata]

TERTIARY (Available if needed)
├── [Advanced options]
├── [Historical data]
└── [Configuration]
```

### 4. Evaluate Options

Score each solution against criteria:

| Criterion | Solution A | Solution B | Solution C |
|-----------|:----------:|:----------:|:----------:|
| Solves core problem | ★★★ | ★★☆ | ★★★ |
| Fits constraints | ★★★ | ★★★ | ★★☆ |
| User effort required | ★★☆ | ★★★ | ★★☆ |
| Implementation complexity | ★★★ | ★★☆ | ★☆☆ |
| Scalability | ★★☆ | ★★★ | ★★★ |
| **Total** | **13** | **13** | **11** |

### 5. Select and Rationalize

Document the chosen approach and why:

```
RECOMMENDED SOLUTION: [Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT: [Brief description of the solution]

WHY THIS APPROACH:
• [Reason 1 - ties back to user need]
• [Reason 2 - fits constraint]
• [Reason 3 - advantage over alternatives]

WHY NOT ALTERNATIVES:
• Option B: [Reason rejected]
• Option C: [Reason rejected]

RISKS & MITIGATIONS:
• Risk: [Potential issue]
  Mitigation: [How we'll address it]

OPEN QUESTIONS:
• [Things to validate in later phases]
```

## Validation Gate

Before proceeding to Phase 4, verify:

| Check | Question |
|-------|----------|
| ✓ | Did we explore multiple solutions (not just the obvious one)? |
| ✓ | Do user flows cover the primary use cases? |
| ✓ | Is the information architecture clear and prioritized? |
| ✓ | Is there documented rationale for the chosen approach? |
| ✓ | Are risks identified with mitigation strategies? |

## Agent Prompt Template

When invoking the Solution Agent:

```
You are the Solution Agent. Your role is to explore multiple approaches
to solving the defined problem before committing to one.

INPUTS FROM PHASE 2:
[Paste problem statement, HMW questions, constraints, priorities]

YOUR TASK:
1. Generate 3-4 distinct solution approaches for each major HMW question
2. Create user flow diagrams for the most promising approaches
3. Define information architecture (what info, how organized)
4. Evaluate options against criteria (problem fit, constraints, effort)
5. Recommend an approach with clear rationale
6. Document risks and open questions

OUTPUT FORMAT:
- Solution hypotheses (pros/cons for each)
- User flow diagrams (steps, decisions, outcomes)
- Information hierarchy (primary/secondary/tertiary)
- Evaluation matrix (scored comparison)
- Recommendation with rationale

REMEMBER:
- Generate MULTIPLE options before evaluating
- Flows should cover happy paths AND edge cases
- Rationale should tie back to user needs and constraints
- Identify what's still uncertain
```

## Handoff to Phase 4

Package the following for the UI Agent:

1. **Recommended solution** — The chosen approach
2. **User flows** — How users move through the solution
3. **Information architecture** — What info and how organized
4. **Rationale** — Why this approach was chosen
5. **Open questions** — What to validate during design

---

**Previous:** [Phase 2: Defining the Problem](./02-define.md)
**Next:** [Phase 4: Designing the Interface](./04-design.md)
