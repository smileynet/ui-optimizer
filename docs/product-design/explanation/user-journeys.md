# User Journeys

> "A journey map is a visualization of the process that a person goes through to accomplish a goal." — Nielsen Norman Group

## Overview

User journey maps visualize the complete experience a person has while trying to accomplish a goal. Unlike user stories (which capture individual features), journey maps show the full context: the steps, emotions, touchpoints, and pain points across an entire experience.

**Key insight**: Users don't experience your product in isolation. They experience it as part of a larger journey that often starts before they reach you and continues after they leave.

## Anatomy of a Journey Map

A journey map typically includes these layers:

```
┌──────────────────────────────────────────────────────────────────────┐
│ PERSONA: Sarah, Marketing Manager                                     │
│ SCENARIO: Planning and booking a team offsite                        │
├──────────┬──────────┬──────────┬──────────┬──────────┬──────────────┤
│ PHASE    │ Research │ Compare  │ Propose  │ Book     │ Coordinate   │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ ACTIONS  │ Google   │ Visit    │ Create   │ Submit   │ Send         │
│          │ venues   │ 3 sites  │ proposal │ booking  │ invites      │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ THOUGHTS │ "Where   │ "How do  │ "Will    │ "Did it  │ "Will people │
│          │ do I     │ I        │ boss     │ go       │ see all the  │
│          │ start?"  │ compare?"│ approve?"│ through?"│ details?"    │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ EMOTIONS │    😐    │    😟    │    😰    │    😊    │     😅       │
│          │ Neutral  │ Confused │ Anxious  │ Relieved │  Stressed    │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ TOUCH-   │ Google   │ Venue    │ Email    │ Booking  │ Calendar     │
│ POINTS   │ Search   │ websites │ Docs     │ system   │ Email        │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ PAIN     │ Too many │ No easy  │ Manual   │ No       │ Info         │
│ POINTS   │ options  │ compare  │ copy/    │ confirm- │ scattered    │
│          │          │          │ paste    │ ation    │              │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────────┤
│ OPPORT-  │ Curated  │ Compare  │ Proposal │ Instant  │ Centralized  │
│ UNITIES  │ list     │ tool     │ template │ confirm  │ dashboard    │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────────┘
```

## Journey Map Components

| Component | Purpose | How to Capture |
|-----------|---------|----------------|
| **Persona** | Who is taking this journey? | User research, interviews |
| **Scenario** | What are they trying to accomplish? | JTBD, user research |
| **Phases** | Major stages of the journey | Observation, interviews |
| **Actions** | What they do at each phase | Observation, analytics |
| **Thoughts** | What's going through their mind | Interviews, think-aloud |
| **Emotions** | How they feel at each point | Interviews, surveys |
| **Touchpoints** | Where they interact with you/others | Analytics, observation |
| **Pain points** | Frustrations and obstacles | Interviews, support tickets |
| **Opportunities** | Where you can improve | Analysis, ideation |

## Types of Journey Maps

| Type | Focus | Best For |
|------|-------|----------|
| **Current state** | How things work today | Identifying pain points to fix |
| **Future state** | Envisioned improved experience | Aligning team on vision |
| **Day-in-the-life** | Full day, not just product use | Understanding broader context |
| **Service blueprint** | Adds backstage processes | Aligning front/back-end teams |

## Service Blueprints

Service blueprints extend journey maps by showing what happens behind the scenes:

```
┌─────────────────────────────────────────────────────────────────┐
│ CUSTOMER ACTIONS     │ Search │ Compare │ Book   │ Receive     │
├──────────────────────┴────────┴─────────┴────────┴─────────────┤
│ - - - - - - - - - LINE OF INTERACTION - - - - - - - - - - - -  │
├─────────────────────────────────────────────────────────────────┤
│ FRONTSTAGE           │ Search │ Details │ Payment│ Confirm     │
│ (visible to user)    │ UI     │ page    │ form   │ email       │
├─────────────────────────────────────────────────────────────────┤
│ - - - - - - - - - LINE OF VISIBILITY - - - - - - - - - - - - - │
├─────────────────────────────────────────────────────────────────┤
│ BACKSTAGE            │ Search │ Fetch   │ Process│ Send        │
│ (invisible to user)  │ API    │ pricing │ payment│ notification│
├─────────────────────────────────────────────────────────────────┤
│ - - - - - - - - - LINE OF INTERNAL INTERACTION - - - - - - - - │
├─────────────────────────────────────────────────────────────────┤
│ SUPPORT PROCESSES    │ Index  │ Update  │ Bank   │ Email       │
│                      │ venues │ avail   │ API    │ service     │
└─────────────────────────────────────────────────────────────────┘
```

## Emotional Mapping

The emotional layer is often the most valuable. Look for:

| Pattern | Indicates | Action |
|---------|-----------|--------|
| **Peaks** (positive) | Moments of delight | Protect and enhance these |
| **Valleys** (negative) | Pain points | Priority opportunities to fix |
| **Flat lines** | Neutral, forgettable | Consider if engagement is needed |
| **Sharp drops** | Sudden frustration | Usually a specific breakage to fix |
| **End state** | Final emotional impression | Critical for retention/referral |

**The peak-end rule**: People remember experiences based on the emotional peak and the end, not the average. Design for memorable peaks and positive endings.

## Journey Maps and UI Design

For AI agents designing interfaces, journey maps reveal:

| Journey Insight | UI Implication |
|-----------------|----------------|
| User's emotional state at entry | Set appropriate tone, reduce anxiety if stressed |
| Previous steps in journey | What context they bring, what they've already done |
| Primary goal for this phase | What should be most prominent |
| Common pain points | What friction to eliminate |
| Next step in journey | How to facilitate smooth transition |

**Example:**
```
Journey phase: User comparing options before deciding

UI Implications:
- Support comparison (tables, side-by-side views)
- Don't push for commitment too early
- Provide save/bookmark functionality
- Surface differentiating information
- Reduce anxiety with social proof, guarantees
```

## Touchpoint Inventory

Before mapping, inventory all touchpoints:

| Category | Examples |
|----------|----------|
| **Digital owned** | Website, app, emails, notifications |
| **Digital earned** | Reviews, social mentions, search results |
| **Human** | Support calls, sales conversations, chat |
| **Physical** | Packaging, printed materials, stores |
| **Environmental** | Events, partner locations |

Many critical moments happen at touchpoints you don't control. Acknowledge and design for this.

## Related Reading

- [Jobs to Be Done](./jobs-to-be-done.md) — Understanding what progress users seek
- [User Stories](./user-stories.md) — Breaking journeys into buildable pieces
- [Personas](./personas.md) — Who is taking these journeys
- [Create a Journey Map](../how-to/create-journey-map.md) — Step-by-step guide

## References

- Nielsen Norman Group, "Journey Mapping 101"
- Jim Kalbach, "Mapping Experiences" (2016)
- Chris Risdon & Patrick Quattlebaum, "Orchestrating Experiences" (2018)
