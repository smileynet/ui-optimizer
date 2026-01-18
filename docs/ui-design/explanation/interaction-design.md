# Interaction Design

> "The details are not the details. They make the design." — Charles Eames

## Overview

Interaction design focuses on how users engage with interfaces—the clicks, taps, hovers, and gestures that enable people to accomplish their goals. Good interaction design makes interfaces feel intuitive and responsive.

**Key insight**: Users form mental models of how things work. Good interaction design aligns with those mental models; bad interaction design fights them.

## Affordances

Affordances are perceived properties that suggest how something can be used.

### Visual Affordances

| Element | Affordance Signal | User Expectation |
|---------|-------------------|------------------|
| Raised button | Clickable | Can be pressed |
| Underlined text | Linked | Will navigate |
| Handle/grip | Draggable | Can be moved |
| Text field | Editable | Can type into |
| Checkbox | Toggleable | Can check/uncheck |

### Signifiers

Signifiers are visual cues that communicate affordances:

```
STRONG SIGNIFIERS         WEAK SIGNIFIERS
┌──────────────────┐      ┌──────────────────┐
│   Click Me       │      │   Click Me       │
│   ▼ shadow       │      │                  │
│   ▼ border       │      │   flat, no depth │
└──────────────────┘      └──────────────────┘
```

| Signifier | What It Signals |
|-----------|-----------------|
| Shadow/elevation | Clickable, interactive |
| Border | Container, grouping |
| Color change | State change |
| Cursor change | Interactivity type |
| Icon | Available action |

## Fitts's Law

The time to reach a target depends on distance and target size.

```
Time = a + b × log₂(Distance / Width + 1)
```

### UI Applications

| Application | Implementation |
|-------------|----------------|
| **Important actions** | Make buttons larger |
| **Edge/corner targets** | Effectively infinite size (can't overshoot) |
| **Related actions** | Group them close together |
| **Touch targets** | Minimum 44×44px (Apple), 48×48px (Google) |

```
GOOD: Large, easy target     BAD: Small, hard to hit
┌────────────────────┐       ┌────┐
│                    │       │Save│
│   Save Changes     │       └────┘
│                    │
└────────────────────┘
```

## Hick's Law

Decision time increases with the number and complexity of choices.

```
Time = a + b × log₂(n + 1)
```

### UI Applications

| Application | Implementation |
|-------------|----------------|
| **Navigation** | Limit top-level items (7±2 rule) |
| **Forms** | Break into steps, show progress |
| **Options** | Use progressive disclosure |
| **Defaults** | Provide smart defaults |

```
OVERWHELMING                 MANAGEABLE
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐   ┌─────────────────────┐
│A│B│C│D│E│F│G│H│I│J│K│L│   │ File  Edit  View  ▼ │
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘   └─────────────────────┘
```

## Feedback

Every action needs a response. Users need to know:
- Did my action register?
- Is something happening?
- What was the result?

### Feedback Types

| Type | Use Case | Examples |
|------|----------|----------|
| **Immediate** | Acknowledge action | Button press animation, hover state |
| **Progress** | Long operations | Loading spinner, progress bar |
| **Completion** | Action finished | Success message, checkmark |
| **Error** | Something went wrong | Error message, shake animation |

### Feedback Timing

| Duration | Perception | Application |
|----------|------------|-------------|
| 0-100ms | Instantaneous | Hover states, small animations |
| 100-300ms | Quick | Button clicks, transitions |
| 300-1000ms | Noticeable | Loading indicators appear |
| 1000ms+ | Slow | Show progress, allow cancel |

## States

Interactive elements have multiple states users need to perceive:

### Essential States

| State | Visual Change | Purpose |
|-------|---------------|---------|
| **Default** | Normal appearance | Base state |
| **Hover** | Subtle highlight | Confirm interactivity |
| **Focus** | Visible outline | Keyboard accessibility |
| **Active/Pressed** | Darkened, depressed | Confirm activation |
| **Disabled** | Faded, no cursor change | Show unavailability |
| **Loading** | Spinner, pulse | Show processing |
| **Error** | Red border/text | Show problem |
| **Success** | Green indicator | Confirm completion |

### State Example (Button)

```css
/* Default */
.button { 
  background: var(--color-primary);
}

/* Hover */
.button:hover { 
  background: var(--color-primary-hover);
}

/* Focus */
.button:focus-visible { 
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Active */
.button:active { 
  background: var(--color-primary-active);
  transform: scale(0.98);
}

/* Disabled */
.button:disabled { 
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Motion and Animation

Motion serves function, not decoration.

### Motion Principles

| Principle | Description | Example |
|-----------|-------------|---------|
| **Purposeful** | Communicates something | Drawer slides to show origin |
| **Quick** | Respects user time | 200-300ms for most transitions |
| **Natural** | Follows physics | Ease-out for entering, ease-in for exiting |
| **Consistent** | Same motion for same actions | All modals fade the same way |

### Animation Timing

| Duration | Use Case |
|----------|----------|
| 100-150ms | Micro-interactions (hover, active) |
| 200-300ms | Standard transitions (modals, dropdowns) |
| 300-500ms | Complex transitions (page, layout) |
| 500ms+ | Rarely; only for dramatic effect |

### Easing Functions

| Easing | Use Case |
|--------|----------|
| `ease-out` | Elements entering (fast start, slow end) |
| `ease-in` | Elements exiting (slow start, fast end) |
| `ease-in-out` | Elements moving across screen |
| `linear` | Opacity changes, looping animations |

## Error Prevention and Recovery

### Prevent Errors

| Strategy | Implementation |
|----------|----------------|
| **Constraints** | Disable invalid options |
| **Suggestions** | Autocomplete, smart defaults |
| **Confirmation** | "Are you sure?" for destructive actions |
| **Preview** | Show result before committing |

### Enable Recovery

| Strategy | Implementation |
|----------|----------------|
| **Undo** | Allow reversing actions |
| **Drafts** | Auto-save work in progress |
| **Clear errors** | Specific, actionable error messages |
| **Escape hatches** | Always provide a way out |

## Interaction Design and AI Agents

For AI agents designing interactive elements:

| Principle | Agent Behavior |
|-----------|----------------|
| **Affordances** | Make interactive elements look interactive |
| **Fitts's Law** | Size important targets appropriately |
| **Hick's Law** | Limit choices, use progressive disclosure |
| **Feedback** | Every action gets a response |
| **States** | Define all states for interactive elements |
| **Motion** | Use purposeful, quick animations |

### Checklist for Interactive Elements

```
□ Does it look clickable/tappable?
□ Is the touch target large enough (min 44px)?
□ Are all states defined (hover, focus, active, disabled)?
□ Does the action provide feedback?
□ Can the user recover from mistakes?
□ Is motion purposeful and quick?
```

## Common Interaction Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| **Mystery meat navigation** | Unclear what's clickable | Use clear affordances |
| **No feedback** | Users unsure if action worked | Add immediate response |
| **Disabled without explanation** | Users don't know why | Explain or hide |
| **Slow animations** | Feels sluggish | Keep under 300ms |
| **No focus states** | Keyboard users lost | Add visible focus |
| **Tiny targets** | Hard to click/tap | Min 44×44px |

## Related Reading

- [Visual Principles](./visual-principles.md) — Visual foundations of interaction
- [Accessibility](./accessibility.md) — Making interactions inclusive
- [Design Systems](./design-systems.md) — Consistent interaction patterns

## References

- Don Norman, "The Design of Everyday Things"
- Alan Cooper, "About Face"
- "Laws of UX" by Jon Yablonski
- Google Material Design motion guidelines
