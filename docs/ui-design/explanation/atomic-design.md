# Atomic Design

> "We're not designing pages, we're designing systems of components." — Stephen Hay

## Overview

Atomic Design is a methodology for creating design systems by breaking interfaces into fundamental building blocks. Inspired by chemistry, it organizes components into five levels: atoms, molecules, organisms, templates, and pages.

**Key insight**: By designing the smallest pieces first and composing them upward, you create more consistent, maintainable, and scalable interfaces.

## The Five Levels

```
PAGES           Specific instances with real content
   ↑
TEMPLATES       Page-level component arrangements
   ↑
ORGANISMS       Complex components from molecules
   ↑
MOLECULES       Simple groups of atoms
   ↑
ATOMS           Basic HTML elements
```

### Level 1: Atoms

Atoms are the foundational building blocks—HTML elements that can't be broken down further.

| Examples | Notes |
|----------|-------|
| Button | Various states: default, hover, disabled |
| Input | Text, number, date variants |
| Label | Text labels for form elements |
| Icon | Individual icon components |
| Badge | Status indicators |
| Avatar | User/entity images |

**Characteristics:**
- Can't be broken down without losing meaning
- Abstract and not very useful alone
- Apply design tokens directly (colors, fonts, spacing)

```jsx
// Atom examples
<button>Submit</button>
<input type="text" />
<label>Email</label>
<Icon name="check" />
```

### Level 2: Molecules

Molecules are simple groups of atoms functioning together as a unit.

| Examples | Atoms Used |
|----------|------------|
| Search bar | Input + Button |
| Form field | Label + Input + Error text |
| Navigation item | Icon + Link |
| Card header | Avatar + Name + Badge |
| Toggle setting | Label + Switch |

**Characteristics:**
- Combine atoms for simple, focused purpose
- Start to be useful on their own
- Single responsibility

```jsx
// Molecule example: Form field
<div className="form-field">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
  <ErrorText>Please enter a valid email</ErrorText>
</div>
```

### Level 3: Organisms

Organisms are complex components composed of molecules and/or atoms.

| Examples | Components Used |
|----------|-----------------|
| Header | Logo + Navigation items + Search bar + User menu |
| Card | Card header + Image + Body + Action buttons |
| Comment | Avatar + Author name + Timestamp + Content + Reply button |
| Data table | Table headers + Table rows + Pagination |
| Form section | Section title + Multiple form fields + Buttons |

**Characteristics:**
- Distinct section of interface
- Relatively complex, multiple functions
- Begin to look like parts of a UI

```jsx
// Organism example: ProductCard
<Card>
  <CardImage src={product.image} />
  <CardHeader>
    <Badge>{product.category}</Badge>
    <Text variant="h3">{product.name}</Text>
    <Text variant="price">{product.price}</Text>
  </CardHeader>
  <CardBody>
    <Text>{product.description}</Text>
  </CardBody>
  <CardFooter>
    <Button variant="secondary">Details</Button>
    <Button variant="primary">Add to Cart</Button>
  </CardFooter>
</Card>
```

### Level 4: Templates

Templates are page-level layouts that arrange organisms into a page structure, using placeholder content.

| Examples | Organisms Used |
|----------|----------------|
| Dashboard template | Header + Sidebar + Stat cards + Charts + Table |
| Article template | Header + Hero image + Content area + Sidebar + Comments |
| Settings template | Header + Navigation tabs + Form sections |
| Listing template | Header + Filters + Grid of cards + Pagination |

**Characteristics:**
- Define page structure and content areas
- Focus on layout, not real content
- Show how components flow and resize

```jsx
// Template example
<PageTemplate>
  <Header />
  <div className="layout">
    <Sidebar>
      <Navigation />
    </Sidebar>
    <main>
      <PageTitle>Dashboard</PageTitle>
      <StatCardGrid>{/* Placeholder stats */}</StatCardGrid>
      <DataTable>{/* Placeholder data */}</DataTable>
    </main>
  </div>
  <Footer />
</PageTemplate>
```

### Level 5: Pages

Pages are specific instances of templates with real content. This is where you test how the design works with actual data.

**Characteristics:**
- Real content, not placeholders
- Test edge cases (long text, missing images, etc.)
- What users actually see

```jsx
// Page example: Real dashboard with actual data
<DashboardTemplate>
  <Header user={currentUser} />
  <Sidebar>
    <Navigation items={navItems} activeItem="dashboard" />
  </Sidebar>
  <main>
    <PageTitle>Welcome back, Sarah</PageTitle>
    <StatCardGrid>
      <StatCard title="Revenue" value="$45,231" change="+20.1%" />
      <StatCard title="Users" value="2,350" change="+180" />
      <StatCard title="Orders" value="12,234" change="+19%" />
    </StatCardGrid>
    <DataTable data={recentOrders} columns={orderColumns} />
  </main>
</DashboardTemplate>
```

## Thinking in Atomic Design

### Bottom-Up Design

When building new features:

1. **Audit existing atoms** — What primitives exist?
2. **Compose molecules** — What small groups do you need?
3. **Build organisms** — What distinct sections?
4. **Arrange in template** — How does the page flow?
5. **Test with real data** — Does it work with edge cases?

### Top-Down Analysis

When analyzing existing interfaces:

1. **Identify the page** — What is this specific instance?
2. **Extract the template** — What's the structural layout?
3. **Find the organisms** — What distinct sections exist?
4. **Decompose to molecules** — What functional groups?
5. **Identify atoms** — What are the primitives?

## Atomic Design and Component Libraries

Map atomic levels to folder structure:

```
components/
├── atoms/
│   ├── Button/
│   ├── Input/
│   ├── Label/
│   ├── Icon/
│   └── Badge/
├── molecules/
│   ├── FormField/
│   ├── SearchBar/
│   ├── NavItem/
│   └── CardHeader/
├── organisms/
│   ├── Header/
│   ├── ProductCard/
│   ├── CommentThread/
│   └── DataTable/
├── templates/
│   ├── DashboardTemplate/
│   ├── SettingsTemplate/
│   └── ListingTemplate/
└── pages/
    ├── DashboardPage/
    ├── SettingsPage/
    └── ProductListPage/
```

## When to Promote Components

| Signal | Action |
|--------|--------|
| Molecule used in 3+ organisms | Ensure it's properly abstracted |
| Same atoms always grouped together | Extract as molecule |
| Organism getting too complex | Split into smaller organisms |
| Template logic becoming page-specific | Keep template generic |

## Atomic Design and AI Agents

For AI agents composing interfaces:

| Level | Agent Responsibility |
|-------|---------------------|
| **Atoms** | Use existing atoms, don't create new ones |
| **Molecules** | Compose from available atoms |
| **Organisms** | Build from molecules, keep single-purpose |
| **Templates** | Arrange organisms into layouts |
| **Pages** | Apply real content to templates |

**Key principle**: Always work upward from the smallest available building block.

```
GOOD: "Composing a ProductCard organism from CardImage, Badge, Text atoms"
BAD:  "Creating a custom product display from scratch"
```

## Common Pitfalls

| Pitfall | Problem | Fix |
|---------|---------|-----|
| **Atom complexity** | Atoms doing too much | If it has logic, it's probably a molecule |
| **Skipping molecules** | Jumping from atoms to organisms | Identify repeating atom groups |
| **Over-abstraction** | Molecules too generic to be useful | Abstract based on actual reuse |
| **Template/page confusion** | Real data in templates | Templates use placeholders only |
| **Rigid hierarchy** | Everything must fit perfectly | Levels are guidelines, not rules |

## Related Reading

- [Design Systems](./design-systems.md) — The broader system atomic design supports
- [Design Tokens](./design-tokens.md) — The values atoms consume
- [Visual Principles](./visual-principles.md) — How atoms are styled

## References

- Brad Frost, "Atomic Design" (2016)
- [atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com/)
- [Pattern Lab](https://patternlab.io/) — Tooling for atomic design
