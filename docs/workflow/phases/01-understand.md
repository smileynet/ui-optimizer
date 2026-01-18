# Phase 1: Understanding Users

> "If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." — Albert Einstein

## Purpose

Before designing anything, understand who you're designing for and what they're trying to accomplish. This phase grounds all subsequent decisions in real user needs.

## The Research Agent

**Role:** User researcher and empathy builder

**Inputs:**
- Project brief or initial request
- Any existing user data
- Domain context

**Outputs:**
- Persona cards
- JTBD (Jobs to Be Done) statements
- Context scenarios
- Key insights summary

## Activities

### 1. Identify User Types

Who will use this interface? Consider:

| Dimension | Questions |
|-----------|-----------|
| **Role** | What's their job? What are they responsible for? |
| **Experience** | How tech-savvy? Domain expertise level? |
| **Frequency** | Daily user? Occasional? First-time? |
| **Context** | Where/when do they use this? What devices? |
| **Motivation** | Why are they here? What's their goal? |

### 2. Create Persona Cards

For each primary user type, create a concise persona:

```
┌─────────────────────────────────────────────────────────────┐
│ 📋 PERSONA: [Name]                                          │
│                                                             │
│ Role: [Job title / user type]                               │
│ Quote: "[What they'd say about their core challenge]"       │
│                                                             │
│ GOALS                        FRUSTRATIONS                   │
│ • [Primary goal]             • [Pain point 1]               │
│ • [Secondary goal]           • [Pain point 2]               │
│ • [Tertiary goal]            • [Pain point 3]               │
│                                                             │
│ CONTEXT                                                     │
│ • [When/where they work]                                    │
│ • [Tools they currently use]                                │
│ • [Constraints they face]                                   │
└─────────────────────────────────────────────────────────────┘
```

### 3. Write JTBD Statements

Capture what users are trying to accomplish:

```
When [situation/trigger],
I want to [motivation/action],
So I can [expected outcome].
```

**Examples:**
- "When I start my workday, I want to see what needs my attention, so I can prioritize effectively."
- "When I'm configuring my account, I want to understand what each setting does, so I can make informed choices."
- "When I'm browsing products, I want to compare options easily, so I can make a confident purchase decision."

### 4. Map Context Scenarios

Describe realistic usage situations:

```
SCENARIO: [Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHO: [Persona name]
WHEN: [Time/situation trigger]
WHERE: [Physical/digital context]
DEVICE: [What they're using]
EMOTIONAL STATE: [How they're feeling]
GOAL: [What they want to accomplish]
CONSTRAINTS: [Time pressure, distractions, limitations]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Validation Gate

Before proceeding to Phase 2, verify:

| Check | Question |
|-------|----------|
| ✓ | Have we identified all primary user types? |
| ✓ | Do personas reflect real needs, not assumptions? |
| ✓ | Are JTBD statements outcome-focused (not feature-focused)? |
| ✓ | Do scenarios cover typical AND edge cases? |
| ✓ | Could a designer unfamiliar with the project understand the users? |

## Agent Prompt Template

When invoking the Research Agent:

```
You are the Research Agent. Your role is to deeply understand users 
before any design work begins.

CONTEXT:
[Project brief / initial request]

YOUR TASK:
1. Identify 2-3 primary user types for this interface
2. Create a persona card for each user type
3. Write 3-5 JTBD statements capturing what users need to accomplish
4. Describe 2-3 realistic usage scenarios
5. Summarize key insights that should inform design decisions

OUTPUT FORMAT:
- Persona cards (structured)
- JTBD statements (When/I want/So I can format)
- Context scenarios (narrative)
- Key insights (bullet points)

REMEMBER:
- Focus on GOALS and OUTCOMES, not features
- Consider emotional states and frustrations
- Include context (time pressure, devices, environment)
- Avoid assumptions—note where research would help
```

## Handoff to Phase 2

Package the following for the Strategy Agent:

1. **Persona cards** — Who we're designing for
2. **JTBD statements** — What they're trying to accomplish
3. **Context scenarios** — When/where/how they'll use this
4. **Key insights** — Critical findings that must inform design

---

**Next:** [Phase 2: Defining the Problem](./02-define.md)
