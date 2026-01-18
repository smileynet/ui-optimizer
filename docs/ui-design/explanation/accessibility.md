# Accessibility

> "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." — Tim Berners-Lee

## Overview

Accessibility ensures that interfaces work for everyone, including people with disabilities. This includes users who are blind, have low vision, are deaf, have motor impairments, or have cognitive differences.

**Key insight**: Accessible design isn't just for "disabled users." Situational impairments affect everyone—bright sunlight, a broken arm, a noisy environment. Good accessibility improves the experience for all users.

## WCAG: The Standard

The Web Content Accessibility Guidelines (WCAG) define accessibility standards.

### Conformance Levels

| Level | Requirements | Target |
|-------|--------------|--------|
| **A** | Minimum accessibility | Basic compliance |
| **AA** | Standard accessibility | **Most common target** |
| **AAA** | Enhanced accessibility | Specialized contexts |

### POUR Principles

WCAG organizes requirements into four principles:

| Principle | Question | Key Requirements |
|-----------|----------|------------------|
| **Perceivable** | Can users perceive the content? | Text alternatives, captions, contrast |
| **Operable** | Can users interact with it? | Keyboard access, enough time, no seizures |
| **Understandable** | Can users understand it? | Readable, predictable, error help |
| **Robust** | Does it work with assistive tech? | Valid code, ARIA when needed |

## Perceivable

### Text Alternatives

Every non-text element needs a text alternative:

| Element | Implementation |
|---------|----------------|
| Images | `alt` attribute with description |
| Icons | `aria-label` or visually hidden text |
| Video | Captions and transcripts |
| Audio | Transcripts |
| Charts | Data table alternative |

```jsx
// Informative image
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2" />

// Decorative image
<img src="decorative.png" alt="" role="presentation" />

// Icon button
<button aria-label="Close dialog">
  <Icon name="x" />
</button>
```

### Color Contrast

| Content | Minimum Ratio (AA) | Enhanced (AAA) |
|---------|-------------------|----------------|
| Normal text | 4.5:1 | 7:1 |
| Large text (18px+ bold, 24px+) | 3:1 | 4.5:1 |
| UI components, graphics | 3:1 | Not defined |

**Don't rely on color alone**. Always supplement color with text, icons, or patterns:

```
INSUFFICIENT              SUFFICIENT
● Error (red only)        ⚠ Error: Invalid email
● Success (green only)    ✓ Success: Saved
```

### Text Sizing

- Users must be able to resize text up to 200% without loss of content
- Use relative units (`rem`, `em`) not fixed (`px` for font-size)
- Test your interface at 200% zoom

## Operable

### Keyboard Access

All functionality must be accessible via keyboard:

| Key | Expected Action |
|-----|-----------------|
| `Tab` | Move to next focusable element |
| `Shift+Tab` | Move to previous focusable element |
| `Enter` | Activate buttons, links |
| `Space` | Activate buttons, toggle checkboxes |
| `Arrow keys` | Navigate within components (menus, tabs) |
| `Escape` | Close modals, cancel |

### Focus Management

```css
/* NEVER do this */
*:focus { outline: none; }

/* DO this - visible focus states */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

**Focus order** must be logical—typically left-to-right, top-to-bottom.

### Touch Targets

| Standard | Minimum Size |
|----------|--------------|
| WCAG 2.1 AA | 44×44px |
| WCAG 2.2 AA | 24×24px (with spacing) |
| Best practice | 44×44px minimum |

### No Time Limits

If time limits exist, users must be able to:
- Turn off the limit
- Extend the limit (at least 10x)
- Get warned before expiration

### No Seizure-Inducing Content

- No flashing more than 3 times per second
- No large flashing areas

## Understandable

### Readable Content

| Guideline | Implementation |
|-----------|----------------|
| Language declaration | `<html lang="en">` |
| Unusual words | Provide definitions |
| Abbreviations | Expand on first use |
| Reading level | Keep content clear and simple |

### Predictable Behavior

| Guideline | Implementation |
|-----------|----------------|
| Consistent navigation | Same location on all pages |
| Consistent identification | Same labels for same functions |
| No unexpected context changes | Don't auto-submit forms, auto-redirect |

### Error Handling

```jsx
// GOOD: Clear, specific error with recovery help
<div role="alert">
  <p>Email address is invalid.</p>
  <p>Please enter an email like: name@example.com</p>
</div>

// BAD: Vague error
<div>Error: Invalid input</div>
```

Error messages should:
- Identify the field with the error
- Describe the problem specifically  
- Suggest how to fix it

## Robust

### Semantic HTML

Use the right elements for their purpose:

| Purpose | Use | Not |
|---------|-----|-----|
| Button | `<button>` | `<div onclick>` |
| Link | `<a href>` | `<span onclick>` |
| Heading | `<h1>`-`<h6>` | `<div class="heading">` |
| List | `<ul>`, `<ol>` | `<div>` with bullets |
| Table | `<table>` | `<div>` grids |

### ARIA (When Needed)

ARIA (Accessible Rich Internet Applications) adds accessibility information when HTML isn't enough:

```jsx
// Custom component needs ARIA
<div 
  role="button"
  tabIndex={0}
  aria-pressed={isPressed}
  onKeyDown={handleKeyDown}
>
  Toggle
</div>

// Native element doesn't need ARIA
<button aria-pressed={isPressed}>
  Toggle
</button>
```

**ARIA rules:**
1. Use semantic HTML first
2. Don't change native semantics unless necessary
3. All interactive elements must be keyboard accessible
4. Don't hide focusable elements with `aria-hidden`
5. All interactive elements need accessible names

### Common ARIA Patterns

| Pattern | Key Attributes |
|---------|----------------|
| Button | `role="button"`, `aria-pressed` |
| Tab panel | `role="tablist"`, `role="tab"`, `aria-selected` |
| Modal | `role="dialog"`, `aria-modal`, `aria-labelledby` |
| Alert | `role="alert"` (announces immediately) |
| Live region | `aria-live="polite"` (announces when idle) |

## Testing Accessibility

### Automated Testing

| Tool | What It Catches |
|------|-----------------|
| axe DevTools | ~40% of issues (contrast, labels, ARIA) |
| Lighthouse | Basic accessibility audit |
| ESLint jsx-a11y | Code-time accessibility linting |

### Manual Testing

| Test | How |
|------|-----|
| Keyboard-only | Unplug mouse, navigate entire flow |
| Screen reader | Use VoiceOver (Mac), NVDA (Windows), or Narrator |
| Zoom 200% | Check layout doesn't break |
| Color contrast | Use browser DevTools or contrast checker |
| Reduced motion | Test with `prefers-reduced-motion` |

### Testing Checklist

```
□ All images have appropriate alt text
□ Color contrast meets 4.5:1 (text) / 3:1 (UI)
□ All functionality keyboard accessible
□ Focus order logical
□ Focus states visible
□ Form fields have visible labels
□ Error messages clear and specific
□ Page has proper heading hierarchy
□ Language declared on <html>
□ Works at 200% zoom
```

## Accessibility and AI Agents

For AI agents building interfaces:

| Requirement | Agent Behavior |
|-------------|----------------|
| **Alt text** | Add meaningful alt for all images |
| **Labels** | Every input has associated label |
| **Contrast** | Use semantic color tokens (pre-tested) |
| **Focus** | Never remove focus styles |
| **Keyboard** | Use semantic elements (button, a, input) |
| **Headings** | Maintain logical h1-h6 hierarchy |
| **ARIA** | Use sparingly, only when HTML insufficient |

**Key principle**: Start with semantic HTML. ARIA is a last resort.

```jsx
// GOOD: Semantic HTML
<button onClick={handleClick}>Save</button>

// BAD: Div with ARIA
<div role="button" tabIndex={0} onClick={handleClick}>Save</div>
```

## Common Accessibility Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `outline: none` | Focus invisible | Use `:focus-visible` with visible style |
| Missing alt text | Images meaningless to screen readers | Add descriptive alt |
| Low contrast | Text hard to read | Meet 4.5:1 ratio |
| No labels | Inputs unexplained | Associate labels with inputs |
| Divs for buttons | Not keyboard accessible | Use `<button>` |
| No heading structure | Navigation difficult | Use h1-h6 logically |

## Related Reading

- [Visual Principles](./visual-principles.md) — Color and typography for accessibility
- [Interaction Design](./interaction-design.md) — Accessible interactions
- [WCAG Checklist](../reference/wcag-checklist.md) — Full requirements list

## References

- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM](https://webaim.org/) — Accessibility resources
- [A11y Project](https://www.a11yproject.com/) — Community checklist
- [Inclusive Components](https://inclusive-components.design/) — Pattern examples
