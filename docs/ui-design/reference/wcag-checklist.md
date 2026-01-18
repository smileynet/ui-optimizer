# WCAG 2.2 AA Checklist

Quick reference checklist for WCAG 2.2 Level AA conformance.

## Perceivable

### 1.1 Text Alternatives

| Requirement | How to Test |
|-------------|-------------|
| **1.1.1 Non-text Content** | All images, icons, charts have alt text or are marked decorative |

```
□ Informative images have descriptive alt text
□ Decorative images have alt="" or role="presentation"
□ Complex images (charts, diagrams) have detailed descriptions
□ Form images (submit buttons) have alt describing function
□ Icons used as controls have accessible names
```

### 1.2 Time-based Media

| Requirement | How to Test |
|-------------|-------------|
| **1.2.1 Audio-only/Video-only** | Transcripts provided |
| **1.2.2 Captions** | Videos have synchronized captions |
| **1.2.3 Audio Description** | Video content described for blind users |
| **1.2.5 Audio Description (Prerecorded)** | AA level requirement |

```
□ Pre-recorded videos have captions
□ Pre-recorded audio has transcripts
□ Pre-recorded videos have audio descriptions (or transcript)
□ Live videos have captions (if applicable)
```

### 1.3 Adaptable

| Requirement | How to Test |
|-------------|-------------|
| **1.3.1 Info and Relationships** | Structure conveyed through markup |
| **1.3.2 Meaningful Sequence** | Reading order logical |
| **1.3.3 Sensory Characteristics** | Not solely visual/auditory cues |
| **1.3.4 Orientation** | Works in any orientation |
| **1.3.5 Identify Input Purpose** | Input purposes identified |

```
□ Headings use h1-h6 elements properly
□ Lists use ul/ol/li elements
□ Tables use th, scope, caption properly
□ Form fields have associated labels
□ Regions use landmark elements (header, nav, main, footer)
□ Reading order matches visual order
□ Instructions don't rely on shape/location/sound only
□ Content works in portrait and landscape
□ Form inputs have autocomplete where appropriate
```

### 1.4 Distinguishable

| Requirement | How to Test |
|-------------|-------------|
| **1.4.1 Use of Color** | Color not sole indicator |
| **1.4.2 Audio Control** | Auto-playing audio can be paused |
| **1.4.3 Contrast (Minimum)** | 4.5:1 text, 3:1 large text |
| **1.4.4 Resize Text** | Text resizable to 200% |
| **1.4.5 Images of Text** | Minimal use of text images |
| **1.4.10 Reflow** | No horizontal scroll at 320px/400% zoom |
| **1.4.11 Non-text Contrast** | 3:1 for UI components |
| **1.4.12 Text Spacing** | Works with increased spacing |
| **1.4.13 Content on Hover/Focus** | Dismissable, hoverable, persistent |

```
□ Links/errors/required fields not indicated by color alone
□ Auto-playing audio has controls or stops in 3 seconds
□ Normal text has 4.5:1 contrast ratio
□ Large text (18px+ bold, 24px+) has 3:1 contrast ratio
□ Text can be resized to 200% without loss
□ No images of text (except logos)
□ Content reflows at 320px width (400% zoom)
□ UI components have 3:1 contrast with background
□ Works with: line-height 1.5, paragraph spacing 2x, letter spacing 0.12em
□ Hover/focus content is dismissable (Escape), hoverable, persistent
```

## Operable

### 2.1 Keyboard Accessible

| Requirement | How to Test |
|-------------|-------------|
| **2.1.1 Keyboard** | All functions keyboard accessible |
| **2.1.2 No Keyboard Trap** | Focus can be moved away |
| **2.1.4 Character Key Shortcuts** | Single-key shortcuts can be disabled |

```
□ All interactive elements reachable via Tab
□ All functionality works with keyboard (Enter, Space, arrows)
□ No keyboard traps (focus can always be moved)
□ Single-character shortcuts can be turned off or remapped
```

### 2.2 Enough Time

| Requirement | How to Test |
|-------------|-------------|
| **2.2.1 Timing Adjustable** | Time limits can be extended |
| **2.2.2 Pause, Stop, Hide** | Moving content can be controlled |

```
□ Time limits can be turned off, extended (10x), or warned (20 sec)
□ Auto-updating content can be paused/stopped
□ Moving/blinking content can be paused (or stops in 5 sec)
```

### 2.3 Seizures

| Requirement | How to Test |
|-------------|-------------|
| **2.3.1 Three Flashes** | No content flashes >3x per second |

```
□ No flashing content more than 3 times per second
```

### 2.4 Navigable

| Requirement | How to Test |
|-------------|-------------|
| **2.4.1 Bypass Blocks** | Skip navigation available |
| **2.4.2 Page Titled** | Descriptive page titles |
| **2.4.3 Focus Order** | Logical focus sequence |
| **2.4.4 Link Purpose (In Context)** | Links make sense |
| **2.4.5 Multiple Ways** | Multiple ways to find pages |
| **2.4.6 Headings and Labels** | Descriptive headings/labels |
| **2.4.7 Focus Visible** | Focus indicator visible |
| **2.4.11 Focus Not Obscured** | Focus not hidden by other content |

```
□ Skip-to-main-content link provided
□ Page has descriptive <title>
□ Focus order is logical (typically left-to-right, top-to-bottom)
□ Link text describes destination (not "click here")
□ Site has search AND/OR sitemap AND/OR nav
□ Headings and labels describe topic/purpose
□ Focus indicator always visible
□ Focused element not entirely hidden by other content
```

### 2.5 Input Modalities

| Requirement | How to Test |
|-------------|-------------|
| **2.5.1 Pointer Gestures** | Alternatives to complex gestures |
| **2.5.2 Pointer Cancellation** | Actions on up-event, can abort |
| **2.5.3 Label in Name** | Visible labels in accessible name |
| **2.5.4 Motion Actuation** | Motion alternatives available |
| **2.5.7 Dragging** | Single-pointer alternative to drag |
| **2.5.8 Target Size** | Minimum 24x24px (with spacing) |

```
□ Path-based gestures have single-point alternatives
□ Click/tap activates on release, can be canceled
□ Visible button/link text included in accessible name
□ Motion-triggered features have UI alternatives
□ Drag operations have single-click alternatives
□ Touch targets at least 24x24px (44x44px recommended)
```

## Understandable

### 3.1 Readable

| Requirement | How to Test |
|-------------|-------------|
| **3.1.1 Language of Page** | Page language declared |
| **3.1.2 Language of Parts** | Language changes marked |

```
□ <html lang="en"> (or appropriate language)
□ lang attribute on content in different languages
```

### 3.2 Predictable

| Requirement | How to Test |
|-------------|-------------|
| **3.2.1 On Focus** | Focus doesn't trigger changes |
| **3.2.2 On Input** | Input doesn't trigger unexpected changes |
| **3.2.3 Consistent Navigation** | Nav in same location |
| **3.2.4 Consistent Identification** | Same function = same label |

```
□ Focus doesn't auto-submit or navigate
□ Form input doesn't trigger unexpected changes
□ Navigation is consistent across pages
□ Same functionality has same labels/icons
```

### 3.3 Input Assistance

| Requirement | How to Test |
|-------------|-------------|
| **3.3.1 Error Identification** | Errors clearly identified |
| **3.3.2 Labels or Instructions** | Inputs have labels |
| **3.3.3 Error Suggestion** | Fix suggestions provided |
| **3.3.4 Error Prevention** | Review before legal/financial submit |
| **3.3.7 Redundant Entry** | Don't ask for same info twice |
| **3.3.8 Accessible Authentication** | Auth doesn't rely on cognitive tests |

```
□ Errors identify the field and describe the problem
□ All inputs have visible labels or instructions
□ Errors suggest how to fix (when possible)
□ Legal/financial submissions can be reviewed/reversed
□ Previously entered info auto-populated when needed again
□ Login doesn't require memorization or cognitive test
```

## Robust

### 4.1 Compatible

| Requirement | How to Test |
|-------------|-------------|
| **4.1.2 Name, Role, Value** | Custom controls have ARIA |
| **4.1.3 Status Messages** | Status announced to screen readers |

```
□ Custom interactive elements have proper ARIA
□ Status/error messages use role="alert" or aria-live
□ Form validation errors announced to screen readers
□ Loading/success states communicated accessibly
```

## Testing Tools

| Tool | What It Tests |
|------|---------------|
| **axe DevTools** | ~40% of issues automatically |
| **WAVE** | Visual accessibility report |
| **Lighthouse** | Basic audit |
| **Color Contrast Analyzer** | Contrast ratios |
| **Keyboard only** | Navigate without mouse |
| **VoiceOver/NVDA** | Screen reader testing |

## Quick Test Sequence

1. **Automated scan** — axe or Lighthouse (5 min)
2. **Keyboard test** — Tab through entire page (10 min)
3. **Zoom test** — 200% zoom, check layout (5 min)
4. **Screen reader spot check** — VoiceOver/NVDA on key flows (15 min)

## Related

- [Accessibility](../explanation/accessibility.md) — Concepts and guidelines
- [Add Accessibility](../how-to/add-accessibility.md) — Implementation guide
