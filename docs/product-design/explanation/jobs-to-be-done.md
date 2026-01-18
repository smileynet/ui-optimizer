# Jobs to Be Done (JTBD)

> "People don't want a quarter-inch drill. They want a quarter-inch hole." — Theodore Levitt

## Overview

Jobs to Be Done is a framework that shifts focus from **what customers buy** to **why they buy it**. Instead of studying demographics or product features, JTBD examines the progress people are trying to make in specific circumstances.

**Key insight**: Products are "hired" to do a job. When a product does the job well, customers "hire" it again. When it doesn't, they "fire" it and look for alternatives.

## The Core Concept

A "job" is the progress a person is trying to make in a particular circumstance. Jobs have three dimensions:

| Dimension | Description | Example |
|-----------|-------------|---------|
| **Functional** | The practical task | "Transport me from A to B" |
| **Emotional** | How I want to feel | "Feel safe and in control" |
| **Social** | How I want to be perceived | "Appear successful to colleagues" |

Most products are hired for a combination of all three dimensions. Understanding which dimensions matter most reveals what truly drives customer decisions.

## Job Statements

A well-formed job statement follows this structure:

```
When [situation], I want to [motivation], so I can [expected outcome].
```

**Examples:**

| Situation | Motivation | Expected Outcome |
|-----------|------------|------------------|
| When I have 15 minutes between meetings | I want something quick to eat | So I can stay focused without getting hungry |
| When I'm planning a weekend trip | I want to see options without committing | So I can explore possibilities stress-free |
| When I'm onboarding new team members | I want to share context efficiently | So I can get them productive quickly |

**Anti-pattern to avoid:**
- ❌ "As a user, I want to filter products" (feature-focused)
- ✅ "When I'm shopping for a specific item, I want to narrow down options quickly, so I can find what I need without wasting time" (job-focused)

## The Forces of Progress

When people consider switching to a new solution, four forces influence their decision:

```
                    PUSH ────────────►  ◄──────── PULL
    (Problems with current)         (Appeal of new solution)
                         
                              DECISION
                         
                    ANXIETY ◄────────   ────────► HABIT
    (Fear of the new)                 (Comfort with existing)
```

| Force | Direction | Description |
|-------|-----------|-------------|
| **Push** | Toward change | Frustrations with the current situation |
| **Pull** | Toward change | Attraction to a new solution |
| **Anxiety** | Against change | Fears about the new solution |
| **Habit** | Against change | Comfort with existing behavior |

**To drive adoption**, you must:
1. Increase push (highlight current pain)
2. Increase pull (demonstrate value)
3. Decrease anxiety (reduce risk, offer trials)
4. Decrease habit (make switching easy)

## Switch Interviews

The most valuable JTBD research technique is the **switch interview**—interviewing people who recently switched to or from your product.

**Why switches matter:**
- At the moment of switching, all four forces were active
- Recent switchers remember the decision clearly
- You learn what actually drove behavior, not hypothetical preferences

**Key questions to explore:**

| Timeline | Focus |
|----------|-------|
| **First thought** | When did you first realize you needed something different? |
| **Passive looking** | How did you first learn about alternatives? |
| **Active looking** | What triggered you to seriously evaluate options? |
| **Decision** | What made you finally commit to switching? |
| **First use** | What was your experience when you first used the new solution? |

## Competing with Non-Consumption

Often your biggest competition isn't another product—it's **doing nothing**.

**Example**: A project management tool doesn't just compete with other PM tools. It competes with:
- Spreadsheets
- Email threads
- Sticky notes
- The "keep it all in my head" approach

Understanding non-consumption reveals why people aren't hiring any solution, and what would change their minds.

## JTBD and UI Design

For AI agents designing interfaces, JTBD provides critical context:

| JTBD Insight | UI Implication |
|--------------|----------------|
| Functional job is speed | Minimize steps, optimize for quick completion |
| Emotional job is confidence | Show progress, provide confirmation, reduce uncertainty |
| Social job is professionalism | Clean aesthetics, export/sharing capabilities |
| High anxiety | Progressive disclosure, undo capabilities, previews |
| Strong habits | Familiar patterns, gradual feature introduction |

## Related Reading

- [User Stories](./user-stories.md) — How to capture jobs as actionable requirements
- [User Journeys](./user-journeys.md) — Mapping the full context around a job
- [Personas](./personas.md) — JTBD-based personas focus on jobs, not demographics

## References

- Clayton Christensen, "Competing Against Luck" (2016)
- Bob Moesta, "Demand-Side Sales 101" (2020)
- Alan Klement, "When Coffee and Kale Compete" (2018)
