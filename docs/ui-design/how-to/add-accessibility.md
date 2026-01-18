# How to Add Accessibility

This guide walks you through making an interface accessible, from quick wins to comprehensive coverage.

## Prerequisites

- Existing interface to improve
- Browser DevTools
- Basic understanding of HTML semantics

## Steps

### 1. Audit Current State

Run automated checks first:

**Using browser DevTools:**
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Check "Accessibility" and run audit
4. Review flagged issues

**Install axe DevTools extension:**
1. Install from browser extension store
2. Open DevTools → axe DevTools tab
3. Click "Analyze" to scan page

### 2. Fix Document Structure

**Add language attribute:**
```html
<html lang="en">
```

**Ensure proper heading hierarchy:**
```html
<!-- GOOD: Logical hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>

<!-- BAD: Skipped levels -->
<h1>Page Title</h1>
  <h3>Section</h3>  <!-- Skipped h2! -->
```

**Add page title:**
```html
<title>Page Name - Site Name</title>
```

### 3. Add Landmark Regions

```html
<body>
  <header>
    <nav aria-label="Main navigation">
      <!-- Primary navigation -->
    </nav>
  </header>
  
  <main>
    <!-- Primary content -->
  </main>
  
  <aside>
    <!-- Secondary content -->
  </aside>
  
  <footer>
    <!-- Footer content -->
  </footer>
</body>
```

### 4. Fix Images

**Informative images:**
```html
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2" />
```

**Decorative images:**
```html
<img src="decoration.png" alt="" />
<!-- or -->
<div role="presentation" style="background-image: url(...)"></div>
```

**Complex images:**
```html
<figure>
  <img src="complex-diagram.png" alt="System architecture diagram" />
  <figcaption>
    Detailed description: The system consists of three layers...
  </figcaption>
</figure>
```

### 5. Fix Color Contrast

**Check contrast ratios:**
- Normal text: 4.5:1 minimum
- Large text (18px+ bold, 24px+): 3:1 minimum
- UI components: 3:1 minimum

**Tools:**
- Chrome DevTools: Inspect element → Color picker shows contrast
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Fix low contrast:**
```css
/* BAD: 2.5:1 ratio */
.text-muted { color: #999; }

/* GOOD: 4.5:1 ratio */
.text-muted { color: #666; }
```

### 6. Add Focus Styles

**Never remove focus outlines without replacement:**
```css
/* BAD */
*:focus { outline: none; }

/* GOOD */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

**Ensure focus is visible on all interactive elements:**
```css
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### 7. Fix Form Labels

**Every input needs a label:**
```html
<!-- Method 1: Explicit association -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" />

<!-- Method 2: Wrapping -->
<label>
  Email address
  <input type="email" name="email" />
</label>

<!-- For icon-only inputs, use aria-label -->
<input type="search" aria-label="Search" />
```

**Group related fields:**
```html
<fieldset>
  <legend>Shipping Address</legend>
  
  <label for="street">Street</label>
  <input id="street" />
  
  <label for="city">City</label>
  <input id="city" />
</fieldset>
```

### 8. Fix Interactive Elements

**Use semantic elements:**
```html
<!-- BAD -->
<div onclick="handleClick()">Click me</div>

<!-- GOOD -->
<button onclick="handleClick()">Click me</button>
```

**If you must use divs, add ARIA and keyboard support:**
```html
<div 
  role="button"
  tabindex="0"
  onclick="handleClick()"
  onkeydown="if(event.key==='Enter'||event.key===' ')handleClick()"
>
  Click me
</div>
```

**Ensure minimum touch target size:**
```css
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}
```

### 9. Fix Links vs Buttons

```html
<!-- Links: Navigate somewhere -->
<a href="/about">About us</a>

<!-- Buttons: Perform actions -->
<button onclick="save()">Save</button>
<button type="submit">Submit</button>
```

**Links that look like buttons:**
```html
<a href="/signup" class="button">Sign up</a>
```

### 10. Add Skip Links

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header><!-- Long navigation --></header>
  
  <main id="main-content">
    <!-- Content -->
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary);
  color: white;
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}
```

### 11. Test with Keyboard

Navigate your entire interface using only keyboard:

| Key | Expected Action |
|-----|-----------------|
| Tab | Move to next focusable element |
| Shift+Tab | Move to previous focusable element |
| Enter | Activate buttons, links |
| Space | Activate buttons, toggle checkboxes |
| Arrows | Navigate within components |
| Escape | Close modals, cancel |

**Check for:**
- [ ] Can reach all interactive elements
- [ ] Focus order is logical
- [ ] Focus is always visible
- [ ] No keyboard traps

### 12. Test with Screen Reader

**Mac:** VoiceOver (Cmd+F5)
**Windows:** NVDA (free download) or Narrator

**Check for:**
- [ ] Page title announced
- [ ] Headings make sense in isolation
- [ ] Images described appropriately
- [ ] Form fields labeled
- [ ] Buttons/links have clear names
- [ ] Error messages announced

## Accessibility Checklist

```
PERCEIVABLE
□ All images have alt text
□ Color contrast meets 4.5:1 (text) / 3:1 (UI)
□ Color is not the only indicator
□ Text can be resized to 200%

OPERABLE
□ All functionality keyboard accessible
□ Focus order is logical
□ Focus indicator visible
□ No keyboard traps
□ Touch targets min 44x44px

UNDERSTANDABLE
□ Language declared
□ Error messages specific and helpful
□ Labels and instructions clear
□ Navigation consistent

ROBUST
□ Valid HTML
□ Semantic elements used
□ ARIA used correctly (if at all)
□ Works with assistive technology
```

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing alt text | Add descriptive alt or alt="" for decorative |
| Low contrast | Increase color difference |
| No focus styles | Add :focus-visible styles |
| Missing labels | Associate labels with inputs |
| Click-only interaction | Add keyboard handlers |
| Div buttons | Use `<button>` element |

## Related

- [Accessibility](../explanation/accessibility.md) — Background on WCAG
- [WCAG Checklist](../reference/wcag-checklist.md) — Full requirements
