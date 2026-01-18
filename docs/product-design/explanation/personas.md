# Personas

> "Personas are not real people, but they represent real people throughout the design process." — Alan Cooper

## Overview

Personas are fictional characters that represent different user types who might use your product. They help teams make decisions by providing a shared understanding of who they're designing for.

**Key insight**: Good personas shift conversations from "I think users want..." to "Would Maria find this valuable?" They replace abstract "users" with concrete, memorable characters.

## Types of Personas

| Type | Based On | Best For |
|------|----------|----------|
| **Research-based** | Extensive user research | High-stakes products, enterprise |
| **Proto-personas** | Team assumptions (to validate) | Early stage, quick alignment |
| **JTBD personas** | Jobs to be done, not demographics | Behavior-focused products |
| **Buyer personas** | Purchasing decision process | Marketing, sales alignment |

## Anatomy of a Persona

```
┌──────────────────────────────────────────────────────────────────┐
│  📷 Photo                                                        │
│                                                                  │
│  MARIA SANTOS                                                    │
│  Engineering Manager, 34                                         │
│  "I need to keep my team productive without micromanaging."      │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  BACKGROUND                                                      │
│  • 8 years in tech, 2 years managing                            │
│  • Team of 6 engineers across 2 time zones                      │
│  • Reports to VP of Engineering                                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  GOALS                          │  FRUSTRATIONS                  │
│  • Ship features on schedule    │  • Status meetings waste time  │
│  • Develop team members' skills │  • Hard to spot blockers early │
│  • Maintain team morale         │  • Context switching all day   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  BEHAVIORS                                                       │
│  • Checks Slack first thing, email after lunch                  │
│  • Prefers async communication                                   │
│  • Reviews PRs during focused morning hours                     │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  TOOLS                          │  INFLUENCERS                   │
│  • Jira, GitHub, Slack          │  • Engineering blogs           │
│  • Google Docs, Notion          │  • Peer managers               │
│  • Linear (evaluating)          │  • Team feedback               │
└──────────────────────────────────────────────────────────────────┘
```

## Essential Persona Components

| Component | Purpose | Common Mistake |
|-----------|---------|----------------|
| **Name & photo** | Makes persona memorable, humanizes | Stock photo that feels fake |
| **Quote** | Captures core motivation | Generic or aspirational |
| **Background** | Relevant context | Irrelevant details (hobbies, pets) |
| **Goals** | What they want to achieve | Listing product features |
| **Frustrations** | Current pain points | Vague complaints |
| **Behaviors** | How they actually act | Idealized behaviors |
| **Environment** | Tools, constraints, context | Assuming your product exists |

## JTBD-Based Personas

Traditional personas focus on who people are. JTBD personas focus on what they're trying to do:

**Traditional approach:**
> "Maria is a 34-year-old engineering manager who likes hiking and has two kids."

**JTBD approach:**
> "Maria hires tools that help her spot team blockers early so she can intervene before deadlines slip."

| Traditional Focus | JTBD Focus |
|-------------------|------------|
| Demographics | Circumstances |
| Personality traits | Motivations |
| Preferences | Desired outcomes |
| Who they are | What they're trying to do |

## How Many Personas?

| Quantity | Implications |
|----------|--------------|
| **1** | Too simple; probably missing important variations |
| **2-4** | Sweet spot for most products |
| **5-6** | Maximum for enterprise products |
| **7+** | Too many; team can't remember them all |

**Rule of thumb**: If you can't name all your personas from memory, you have too many.

## Primary vs Secondary Personas

| Type | Priority | Design Approach |
|------|----------|-----------------|
| **Primary** | Design for them first | Core experience optimized for their needs |
| **Secondary** | Accommodate | Shouldn't be harmed by primary-focused design |
| **Negative** | Explicitly not designing for | Helps scope; prevents feature creep |

**Example negative persona:**
> "We are NOT designing for: Power users who want to customize everything. Our product is opinionated to reduce cognitive load."

## Personas and UI Design

For AI agents designing interfaces, personas provide:

| Persona Attribute | UI Implication |
|-------------------|----------------|
| Technical skill level | Complexity of interface, amount of guidance |
| Time constraints | Information density, shortcut availability |
| Primary goals | Feature prominence, navigation structure |
| Frustrations | What friction to eliminate |
| Tools they use | Integration points, familiar patterns |
| Environment | Device considerations, interruption patterns |

**Example:**
```
Persona: Maria, time-strapped engineering manager

UI Implications:
- Dashboard showing status at a glance (no digging)
- Mobile-friendly for checking between meetings
- Notifications for blockers only (not everything)
- Async-friendly patterns (no real-time requirements)
- Keyboard shortcuts for power users
```

## Persona Validation

Personas are hypotheses until validated:

| Validation Method | What It Tests |
|-------------------|---------------|
| **User interviews** | Are goals and frustrations accurate? |
| **Behavioral analytics** | Do behaviors match actual usage? |
| **A/B testing** | Do persona-targeted features perform? |
| **Support ticket analysis** | Are frustrations real? |
| **Sales feedback** | Do personas match actual customers? |

**Warning signs your personas need updating:**
- Team references them with eye-rolls
- New features don't map to any persona
- Customer feedback contradicts persona assumptions
- Market has shifted significantly

## Common Persona Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| **Demographic obsession** | Age, gender, income rarely affect product decisions | Focus on behaviors, goals, contexts |
| **Too aspirational** | Describes ideal user, not real user | Base on research, not wishes |
| **Self-referential** | "Users are like us" | Research people outside your bubble |
| **Static personas** | Never updated | Review quarterly with new data |
| **Persona theater** | Created but never used | Reference in every design discussion |

## Related Reading

- [Jobs to Be Done](./jobs-to-be-done.md) — Understanding why personas make decisions
- [User Journeys](./user-journeys.md) — How personas move through experiences
- [User Stories](./user-stories.md) — Writing for specific personas

## References

- Alan Cooper, "The Inmates Are Running the Asylum" (1999)
- Kim Goodwin, "Designing for the Digital Age" (2009)
- Indi Young, "Mental Models" (2008)
