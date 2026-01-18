import { Card, Container, Stack } from '../components/ui';

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex?: string;
}

function ColorSwatch({ name, variable }: ColorSwatchProps) {
  return (
    <div className="flex flex-col">
      <div 
        className="h-16 rounded-lg shadow-sm border border-[var(--color-border)]"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <p className="mt-2 text-sm font-medium text-[var(--color-text-primary)]">{name}</p>
      <p className="text-xs text-[var(--color-text-tertiary)] font-mono">{variable}</p>
    </div>
  );
}

interface ColorRowProps {
  title: string;
  colors: { name: string; variable: string }[];
}

function ColorRow({ title, colors }: ColorRowProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
        {colors.map((color) => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </div>
    </div>
  );
}

export function ColorShowcase() {
  const blueColors = [
    { name: '50', variable: '--blue-50' },
    { name: '100', variable: '--blue-100' },
    { name: '200', variable: '--blue-200' },
    { name: '300', variable: '--blue-300' },
    { name: '400', variable: '--blue-400' },
    { name: '500', variable: '--blue-500' },
    { name: '600', variable: '--blue-600' },
    { name: '700', variable: '--blue-700' },
    { name: '800', variable: '--blue-800' },
    { name: '900', variable: '--blue-900' },
    { name: '950', variable: '--blue-950' },
  ];

  const roseColors = [
    { name: '50', variable: '--rose-50' },
    { name: '100', variable: '--rose-100' },
    { name: '200', variable: '--rose-200' },
    { name: '300', variable: '--rose-300' },
    { name: '400', variable: '--rose-400' },
    { name: '500', variable: '--rose-500' },
    { name: '600', variable: '--rose-600' },
    { name: '700', variable: '--rose-700' },
  ];

  const stoneColors = [
    { name: '50', variable: '--stone-50' },
    { name: '100', variable: '--stone-100' },
    { name: '200', variable: '--stone-200' },
    { name: '300', variable: '--stone-300' },
    { name: '400', variable: '--stone-400' },
    { name: '500', variable: '--stone-500' },
    { name: '600', variable: '--stone-600' },
    { name: '700', variable: '--stone-700' },
    { name: '800', variable: '--stone-800' },
    { name: '900', variable: '--stone-900' },
    { name: '950', variable: '--stone-950' },
  ];

  const semanticColors = [
    { name: 'Primary', variable: '--color-primary' },
    { name: 'Primary Hover', variable: '--color-primary-hover' },
    { name: 'Primary Subtle', variable: '--color-primary-subtle' },
    { name: 'Accent', variable: '--color-accent' },
    { name: 'Success', variable: '--color-success' },
    { name: 'Warning', variable: '--color-warning' },
    { name: 'Error', variable: '--color-error' },
    { name: 'Info', variable: '--color-info' },
  ];

  const surfaceColors = [
    { name: 'Page', variable: '--color-bg-page' },
    { name: 'Surface', variable: '--color-bg-surface' },
    { name: 'Elevated', variable: '--color-bg-elevated' },
    { name: 'Subtle', variable: '--color-bg-subtle' },
    { name: 'Muted', variable: '--color-bg-muted' },
    { name: 'Border', variable: '--color-border' },
    { name: 'Border Strong', variable: '--color-border-strong' },
  ];

  return (
    <Container>
      <Stack gap={8}>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Color Palette
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Three-tier token architecture: primitives, aliases, and semantic tokens.
          </p>
        </div>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Semantic Colors</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Theme-aware tokens that adapt to light/dark mode
            </p>
          </Card.Header>
          <Card.Body>
            <Stack gap={6}>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {semanticColors.map((color) => (
                  <ColorSwatch key={color.variable} {...color} />
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                {surfaceColors.map((color) => (
                  <ColorSwatch key={color.variable} {...color} />
                ))}
              </div>
            </Stack>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Primitive Colors</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Raw color values - use semantic tokens in components instead
            </p>
          </Card.Header>
          <Card.Body>
            <Stack gap={8}>
              <ColorRow title="Blue (Primary)" colors={blueColors} />
              <ColorRow title="Rose (Accent)" colors={roseColors} />
              <ColorRow title="Stone (Neutral)" colors={stoneColors} />
            </Stack>
          </Card.Body>
        </Card>

        <Card variant="outlined">
          <Card.Body>
            <Stack gap={4}>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Contrast Testing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[var(--color-primary)] text-white">
                  <p className="font-medium">Primary Background</p>
                  <p className="text-sm opacity-90">White text on primary</p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)]">
                  <p className="font-medium text-[var(--color-text-primary)]">Surface Background</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Secondary text on surface</p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--color-success-subtle)]">
                  <p className="font-medium text-[var(--green-600)]">Success Subtle</p>
                  <p className="text-sm text-[var(--green-600)]">Status text example</p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--color-error-subtle)]">
                  <p className="font-medium text-[var(--red-600)]">Error Subtle</p>
                  <p className="text-sm text-[var(--red-600)]">Error text example</p>
                </div>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
}
