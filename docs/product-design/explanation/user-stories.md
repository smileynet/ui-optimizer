# User Stories

> "A user story is a promise for a conversation." — Alistair Cockburn

## Overview

User stories are short, simple descriptions of a feature told from the perspective of the person who desires the capability. They serve as lightweight requirements that facilitate conversation rather than comprehensive documentation.

**Key insight**: User stories aren't specifications—they're placeholders for conversations about what to build and why.

## The Standard Format

```
As a [type of user], I want [some goal], so that [some reason].
```

| Component | Purpose | Example |
|-----------|---------|---------|
| **As a** | Who wants this? | "As a team lead" |
| **I want** | What do they want? | "I want to see my team's workload" |
| **So that** | Why do they want it? | "So that I can balance assignments" |

**The "so that" is critical.** Without it, you lose the context needed to make good decisions.

## INVEST Criteria

Good user stories follow the INVEST criteria:

| Criterion | Description | How to Check |
|-----------|-------------|--------------|
| **I**ndependent | Can be developed without other stories | No dependencies blocking work |
| **N**egotiable | Details can be discussed and changed | Not a rigid specification |
| **V**aluable | Delivers value to the user | Has a clear "so that" benefit |
| **E**stimable | Team can roughly estimate effort | Clear enough to size |
| **S**mall | Fits within a sprint/iteration | Can be completed in days, not weeks |
| **T**estable | Clear criteria for "done" | You can verify it works |

**Anti-patterns:**

| Bad Story | Problem | Better Version |
|-----------|---------|----------------|
| "As a user, I want a dashboard" | No value stated, too vague | "As a sales manager, I want to see today's pipeline at a glance, so I can prioritize my outreach" |
| "As an admin, I want the database optimized" | Technical task, no user value | (This is a task, not a story—that's okay, just label it correctly) |
| "As a user, I want all reporting features" | Too large to estimate or complete | Break into individual report types |

## Acceptance Criteria

Every user story needs acceptance criteria—specific conditions that must be true for the story to be considered complete.

**Format options:**

```markdown
# Given-When-Then (Gherkin)
Given I am logged in as a team lead
When I navigate to the team dashboard
Then I see each team member's current task count

# Checklist format
- [ ] Dashboard shows all team members
- [ ] Task count updates in real-time
- [ ] Can click through to individual member details
- [ ] Works on mobile viewport
```

**Good acceptance criteria are:**
- Testable (you can verify pass/fail)
- Specific (no ambiguous terms like "fast" or "user-friendly")
- Independent (each criterion can be checked separately)

## Story Mapping

Story mapping organizes user stories into a visual map showing the user's journey:

```
BACKBONE (User Activities - big steps in the journey)
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Sign Up   │   Explore   │   Create    │   Share     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Enter email │ Browse feed │ New project │ Invite team │ ← Walking Skeleton
│ Verify acct │ Search      │ Add tasks   │ Set perms   │ ← Release 1
│ Set profile │ Filter      │ Templates   │ Export PDF  │ ← Release 2
│ Connect SSO │ Save items  │ Automation  │ Public link │ ← Release 3
└─────────────┴─────────────┴─────────────┴─────────────┘
BODY (User Tasks - stories supporting each activity)
```

**Reading the map:**
- **Horizontal**: The user's journey through the experience (left to right = time)
- **Vertical**: Priority within each activity (top = essential, bottom = nice-to-have)
- **Walking skeleton**: The minimum stories needed for a complete, if basic, experience

## Splitting Stories

When stories are too big, split them using these patterns:

| Split By | Example |
|----------|---------|
| **Workflow steps** | "Create order" → "Add items to cart" + "Enter shipping" + "Process payment" |
| **Business rules** | "Calculate pricing" → "Calculate base price" + "Apply discounts" + "Add tax" |
| **Data types** | "Import contacts" → "Import from CSV" + "Import from vCard" + "Import from Google" |
| **Operations** | "Manage tasks" → "Create task" + "Edit task" + "Delete task" + "Archive task" |
| **User types** | "View reports" → "Team member views own data" + "Manager views team data" |
| **Platforms** | "Mobile support" → "iOS app" + "Android app" + "Responsive web" |

## User Stories and UI Design

For AI agents designing interfaces, user stories provide essential context:

| Story Element | UI Implication |
|---------------|----------------|
| User type | Inform navigation structure, permission-based UI |
| Goal | Primary action placement, visual hierarchy |
| Reason | Supporting information to display, success states |
| Acceptance criteria | Required UI elements, validation rules, edge cases |

**Example:**
```
Story: As a project manager, I want to quickly reassign overdue tasks, 
       so that nothing falls through the cracks.

UI Implications:
- Need a view filtered to overdue tasks
- Reassignment should be quick (drag-drop or single-click)
- Show who tasks are currently assigned to
- Success feedback when reassigned
- Consider bulk reassignment for efficiency
```

## Related Reading

- [Jobs to Be Done](./jobs-to-be-done.md) — Understanding the deeper "why" behind stories
- [User Journeys](./user-journeys.md) — The full context around user activities
- [Write User Stories](../how-to/write-user-stories.md) — Step-by-step guide

## References

- Mike Cohn, "User Stories Applied" (2004)
- Jeff Patton, "User Story Mapping" (2014)
- Gojko Adzic, "Fifty Quick Ideas to Improve Your User Stories" (2014)
