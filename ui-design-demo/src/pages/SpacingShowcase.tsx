import { Card, Container, Stack } from '../components/ui';

interface SpaceTokenProps {
  name: string;
  value: string;
  pixels: string;
}

function SpaceToken({ name, value, pixels }: SpaceTokenProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 flex-shrink-0">
        <p className="text-sm font-mono text-[var(--color-text-primary)]">{name}</p>
        <p className="text-xs text-[var(--color-text-tertiary)]">{value} ({pixels})</p>
      </div>
      <div 
        className="h-4 bg-[var(--color-primary)] rounded-sm"
        style={{ width: value }}
      />
    </div>
  );
}

export function SpacingShowcase() {
  const spacingTokens: SpaceTokenProps[] = [
    { name: '--space-1', value: '0.25rem', pixels: '4px' },
    { name: '--space-2', value: '0.5rem', pixels: '8px' },
    { name: '--space-3', value: '0.75rem', pixels: '12px' },
    { name: '--space-4', value: '1rem', pixels: '16px' },
    { name: '--space-5', value: '1.25rem', pixels: '20px' },
    { name: '--space-6', value: '1.5rem', pixels: '24px' },
    { name: '--space-8', value: '2rem', pixels: '32px' },
    { name: '--space-10', value: '2.5rem', pixels: '40px' },
    { name: '--space-12', value: '3rem', pixels: '48px' },
    { name: '--space-16', value: '4rem', pixels: '64px' },
    { name: '--space-20', value: '5rem', pixels: '80px' },
    { name: '--space-24', value: '6rem', pixels: '96px' },
  ];

  return (
    <Container>
      <Stack gap={8}>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Spacing System
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            8px grid system for consistent spacing and layout rhythm.
          </p>
        </div>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Space Scale</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Base unit of 8px with half-step (4px) for fine adjustments
            </p>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              {spacingTokens.map((token) => (
                <SpaceToken key={token.name} {...token} />
              ))}
            </Stack>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">8px Grid Visualization</h3>
          </Card.Header>
          <Card.Body>
            <div className="relative bg-[var(--color-bg-subtle)] rounded-lg p-4 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
                  `,
                  backgroundSize: '8px 8px',
                }}
              />
              <Stack gap={4}>
                <div className="bg-[var(--color-primary)] p-4 rounded text-white font-medium relative">
                  p-4 (16px padding) - 2 grid units
                </div>
                <Stack direction="horizontal" gap={4}>
                  <div className="flex-1 bg-[var(--color-accent)] p-6 rounded text-white font-medium">
                    p-6 (24px) - 3 units
                  </div>
                  <div className="flex-1 bg-[var(--color-success)] p-8 rounded text-white font-medium">
                    p-8 (32px) - 4 units
                  </div>
                </Stack>
                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-4 rounded">
                  <Stack gap={2}>
                    <div className="h-8 bg-[var(--color-primary-subtle)] rounded" />
                    <div className="h-8 bg-[var(--color-primary-subtle)] rounded" />
                    <p className="text-sm text-[var(--color-text-secondary)]">gap-2 (8px) between items</p>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Card.Body>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="outlined">
            <Card.Header>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Component Spacing</h3>
            </Card.Header>
            <Card.Body>
              <Stack gap={4}>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Button padding</p>
                  <div className="flex gap-2">
                    <span className="inline-block px-3 py-2 bg-[var(--color-primary)] text-white text-sm rounded">
                      sm: px-3 py-2
                    </span>
                    <span className="inline-block px-4 py-2.5 bg-[var(--color-primary)] text-white text-sm rounded">
                      md: px-4 py-2.5
                    </span>
                    <span className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white text-sm rounded">
                      lg: px-6 py-3
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Card padding</p>
                  <div className="bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded-lg px-6 py-4">
                    <p className="text-sm text-[var(--color-text-primary)]">px-6 py-4 (24px × 16px)</p>
                  </div>
                </div>
              </Stack>
            </Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Header>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Layout Spacing</h3>
            </Card.Header>
            <Card.Body>
              <Stack gap={4}>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Page margins</p>
                  <div className="bg-[var(--color-bg-subtle)] rounded-lg p-2 border border-[var(--color-border)]">
                    <div className="bg-[var(--color-bg-surface)] rounded p-4 border-2 border-dashed border-[var(--color-primary)]">
                      <p className="text-xs text-center text-[var(--color-text-secondary)]">Content area</p>
                    </div>
                    <p className="text-xs text-center mt-2 text-[var(--color-text-tertiary)]">Container with padding</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Section gaps</p>
                  <Stack gap={4}>
                    <div className="h-6 bg-[var(--color-accent-subtle)] rounded" />
                    <div className="h-6 bg-[var(--color-accent-subtle)] rounded" />
                    <div className="h-6 bg-[var(--color-accent-subtle)] rounded" />
                  </Stack>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-2">gap-4 (16px) between sections</p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
        </div>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Margin vs Padding</h3>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Padding (internal spacing)</p>
                <div className="bg-[var(--color-primary-subtle)] rounded-lg">
                  <div className="bg-[var(--color-primary)] text-white p-6 m-4 rounded">
                    <p className="text-sm">Content with p-6</p>
                    <p className="text-xs opacity-75">Outer area shows parent padding</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Margin (external spacing)</p>
                <div className="bg-[var(--color-bg-subtle)] rounded-lg p-1">
                  <div className="bg-[var(--color-primary)] text-white p-4 rounded">
                    <p className="text-sm">Box 1</p>
                  </div>
                  <div className="h-4 flex items-center justify-center">
                    <span className="text-xs text-[var(--color-text-tertiary)]">← gap-4 →</span>
                  </div>
                  <div className="bg-[var(--color-accent)] text-white p-4 rounded">
                    <p className="text-sm">Box 2</p>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card variant="filled">
          <Card.Body>
            <Stack gap={4}>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Spacing Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Tight (4-8px)</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Related elements: icon + text, input + label, inline badges
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Regular (16-24px)</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Component groups: form fields, card content, list items
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Loose (32-64px)</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Section breaks: page sections, major content divisions
                  </p>
                </div>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
}
