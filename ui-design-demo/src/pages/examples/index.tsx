import { Container, Stack, Card, Button } from '../../components/ui';
import { ThemeToggle } from '../../components/ThemeToggle';

interface ExampleCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  tags: string[];
}

function ExampleCard({ title, description, href, icon, tags }: ExampleCardProps) {
  return (
    <Card 
      variant="outlined" 
      className="h-full hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group cursor-pointer"
      onClick={() => window.location.href = href}
    >
      <Card.Body className="h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-primary-subtle)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-tertiary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

function DashboardIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ShoppingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

export function Examples() {
  const examples = [
    {
      title: 'Trading Platform',
      description: 'A "Kobayashi Maru" scenario showing mutually exclusive needs between Day Traders and Retail Investors.',
      href: '/examples/trading',
      icon: <TrendingIcon />,
      tags: ['Tradeoffs', 'Personas', 'Density'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive dashboard with metrics cards, charts, and activity feeds. Demonstrates data visualization patterns and real-time updates.',
      href: '/examples/dashboard',
      icon: <DashboardIcon />,
      tags: ['Cards', 'Metrics', 'Layout', 'Charts'],
    },
    {
      title: 'Settings & Profile',
      description: 'User settings page with form sections, toggles, and preference management. Shows form patterns and user input handling.',
      href: '/examples/settings',
      icon: <SettingsIcon />,
      tags: ['Forms', 'Inputs', 'Toggles', 'Sections'],
    },
    {
      title: 'E-commerce Store',
      description: 'Product listing with filters, search, and shopping cart integration. Demonstrates grid layouts and commerce patterns.',
      href: '/examples/ecommerce',
      icon: <ShoppingIcon />,
      tags: ['Grid', 'Filters', 'Cards', 'Commerce'],
    },
    {
      title: 'Data Table',
      description: 'Enterprise data table with sorting, filtering, pagination, and bulk actions. Shows complex data management patterns.',
      href: '/examples/datatable',
      icon: <TableIcon />,
      tags: ['Table', 'Sorting', 'Pagination', 'CRUD'],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      <header className="sticky top-0 z-50 bg-[var(--color-bg-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  Ui
                </div>
                <span className="font-bold text-lg">Optimizer</span>
              </a>
              <nav className="hidden md:flex items-center gap-4">
                <a href="/examples" className="text-sm font-medium text-[var(--color-primary)]">
                  Examples
                </a>
                <a href="/sandbox" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Sandbox
                </a>
              </nav>
            </div>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      <main>
        <div className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)]">
          <Container size="lg" className="py-16 md:py-24">
            <Stack gap={6} align="center" className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
                Example Applications
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                Explore real-world application patterns built with the UI Optimizer design system. 
                Each example demonstrates how semantic tokens and composable components enable 
                AI agents to create professional interfaces.
              </p>
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary" onClick={() => window.location.href = '/sandbox'}>
                  View Design System
                </Button>
                <Button variant="secondary" onClick={() => window.location.href = '/'}>
                  Back to Home
                </Button>
              </Stack>
            </Stack>
          </Container>
        </div>

        <Container size="lg" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example) => (
              <ExampleCard key={example.title} {...example} />
            ))}
          </div>
        </Container>

        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
          <Container size="lg" className="py-16">
            <Card variant="filled" className="text-center">
              <Card.Body className="py-12">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Want to see more?
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6 max-w-lg mx-auto">
                  These examples are just the beginning. The design system supports countless 
                  other patterns—from authentication flows to complex wizards.
                </p>
                <Button variant="primary" size="lg" onClick={() => window.location.href = '/sandbox'}>
                  Explore the Sandbox
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </main>

      <footer className="border-t border-[var(--color-border)] py-8">
        <Container>
          <p className="text-sm text-[var(--color-text-tertiary)] text-center">
            UI Optimizer - Design System for AI Agents
          </p>
        </Container>
      </footer>
    </div>
  );
}
