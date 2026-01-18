# How to Write User Stories

This guide walks you through writing effective user stories with acceptance criteria.

## Prerequisites

- Understanding of who your users are (personas or JTBD research)
- A feature or capability to describe
- Access to someone who can validate the story (PM, user, stakeholder)

## Steps

### 1. Identify the User

Start with who wants this capability:

| Good | Bad |
|------|-----|
| "As a sales manager..." | "As a user..." (too generic) |
| "As a first-time visitor..." | "As someone..." (meaningless) |
| "As an admin with billing access..." | "As an admin..." (might be too broad) |

**Tip**: If you write "As a user," stop and get more specific.

### 2. State the Goal

What do they want to do? Use verbs:

| Good | Bad |
|------|-----|
| "I want to see my team's workload" | "I want a dashboard" (solution, not goal) |
| "I want to export data to Excel" | "I want an export button" (implementation) |
| "I want to invite colleagues" | "I want sharing functionality" (vague) |

**Test**: Can you imagine doing this action? "See my team's workload" — yes. "A dashboard" — no.

### 3. Explain the Value

Why do they want it? This is the most important part:

| Good | Bad |
|------|-----|
| "So I can balance assignments fairly" | "So I can use the feature" (circular) |
| "So I can analyze trends in my own tools" | "So I have the data" (not the real why) |
| "So we can collaborate on projects" | (missing — always include "so that") |

**Test**: Does this explain why the goal matters? If it just restates the goal, dig deeper.

### 4. Combine Into Story Format

```
As a [specific user],
I want to [accomplish a goal],
So that [I get this value].
```

**Example:**
```
As a sales manager,
I want to see each rep's pipeline status at a glance,
So that I can identify who needs coaching before deals slip.
```

### 5. Write Acceptance Criteria

Define what "done" means. Use Given-When-Then or checklist format:

**Given-When-Then:**
```
Given I am logged in as a sales manager
When I open the team dashboard
Then I see each rep's name with their pipeline value and stage counts
```

**Checklist:**
```
Acceptance Criteria:
- [ ] Shows all direct reports (not other teams)
- [ ] Displays pipeline value in dollars
- [ ] Shows count of deals per stage
- [ ] Updates when underlying data changes (within 5 minutes)
- [ ] Works on mobile viewport (min 375px)
```

### 6. Check Against INVEST

| Criterion | Check | If No |
|-----------|-------|-------|
| **Independent** | Can this be built without other stories? | Identify and note dependencies |
| **Negotiable** | Can details be discussed? | Loosen over-specified requirements |
| **Valuable** | Does "so that" show clear value? | Rewrite value statement |
| **Estimable** | Can team roughly size this? | Break down or clarify scope |
| **Small** | Can it be done in a sprint? | Split into smaller stories |
| **Testable** | Can you verify it's done? | Add specific acceptance criteria |

### 7. Split if Too Large

If a story is too big, split by:

| Strategy | Example |
|----------|---------|
| **Workflow** | "Checkout" → "Add to cart" + "Enter shipping" + "Process payment" |
| **Data** | "Import contacts" → "Import CSV" + "Import vCard" + "Import Google" |
| **Operations** | "Manage tasks" → "Create" + "Edit" + "Delete" + "Archive" |
| **User type** | "View reports" → "Rep views own" + "Manager views team" |

### 8. Final Review

- [ ] Would a new team member understand this?
- [ ] Is the user specific (not "a user")?
- [ ] Is the goal an action (not a feature)?
- [ ] Does "so that" explain real value?
- [ ] Are acceptance criteria testable?
- [ ] Is it small enough to complete in one sprint?

## Story Template

```markdown
## [Story Title]

**As a** [specific user type],
**I want to** [accomplish this goal],
**So that** [I get this value].

### Acceptance Criteria

- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

### Notes

[Any additional context, constraints, or out-of-scope clarifications]
```

## Common Mistakes

| Mistake | Example | Fix |
|---------|---------|-----|
| Feature as goal | "I want a search bar" | "I want to find items quickly" |
| Missing value | No "so that" clause | Always ask "why does this matter?" |
| Too vague | "I want better performance" | Define specific, measurable improvement |
| Too technical | "I want API rate limiting" | Translate to user impact |
| Too large | "I want a complete onboarding flow" | Split into individual steps |

## Related

- [User Stories](../explanation/user-stories.md) — Background on the format
- [Conduct JTBD Interview](./conduct-jtbd-interview.md) — Research to inform stories
- [Create Journey Map](./create-journey-map.md) — Context for story mapping
