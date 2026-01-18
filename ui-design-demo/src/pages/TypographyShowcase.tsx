import { Card, Container, Stack } from '../components/ui';

export function TypographyShowcase() {
  const typeScale = [
    { name: 'text-6xl', size: '3.75rem (60px)', class: 'text-6xl', sample: 'Display' },
    { name: 'text-5xl', size: '3rem (48px)', class: 'text-5xl', sample: 'Heading 1' },
    { name: 'text-4xl', size: '2.25rem (36px)', class: 'text-4xl', sample: 'Heading 2' },
    { name: 'text-3xl', size: '1.875rem (30px)', class: 'text-3xl', sample: 'Heading 3' },
    { name: 'text-2xl', size: '1.5rem (24px)', class: 'text-2xl', sample: 'Heading 4' },
    { name: 'text-xl', size: '1.25rem (20px)', class: 'text-xl', sample: 'Heading 5' },
    { name: 'text-lg', size: '1.125rem (18px)', class: 'text-lg', sample: 'Lead paragraph' },
    { name: 'text-base', size: '1rem (16px)', class: 'text-base', sample: 'Body text' },
    { name: 'text-sm', size: '0.875rem (14px)', class: 'text-sm', sample: 'Secondary text' },
    { name: 'text-xs', size: '0.75rem (12px)', class: 'text-xs', sample: 'Caption text' },
  ];

  const fontWeights = [
    { name: 'Thin', weight: 100, class: 'font-thin' },
    { name: 'Light', weight: 300, class: 'font-light' },
    { name: 'Normal', weight: 400, class: 'font-normal' },
    { name: 'Medium', weight: 500, class: 'font-medium' },
    { name: 'Semibold', weight: 600, class: 'font-semibold' },
    { name: 'Bold', weight: 700, class: 'font-bold' },
    { name: 'Extrabold', weight: 800, class: 'font-extrabold' },
  ];

  return (
    <Container>
      <Stack gap={8}>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Typography
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Modular type scale with 1.25 ratio for consistent visual hierarchy.
          </p>
        </div>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Type Scale</h3>
          </Card.Header>
          <Card.Body>
            <Stack gap={6}>
              {typeScale.map((item) => (
                <div key={item.name} className="flex items-baseline gap-4 pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-xs font-mono text-[var(--color-text-tertiary)]">{item.name}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">{item.size}</p>
                  </div>
                  <p className={`${item.class} text-[var(--color-text-primary)] leading-tight`}>
                    {item.sample}
                  </p>
                </div>
              ))}
            </Stack>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Font Weights</h3>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {fontWeights.map((item) => (
                <div key={item.name} className="text-center">
                  <p className={`text-3xl ${item.class} text-[var(--color-text-primary)] mb-2`}>Aa</p>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{item.weight}</p>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Text Hierarchy Example</h3>
          </Card.Header>
          <Card.Body>
            <article className="max-w-2xl">
              <h1 className="text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-4">
                The Art of Visual Hierarchy
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                Good typography creates a clear path for the reader's eye, guiding them through content effortlessly.
              </p>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
                Size Creates Importance
              </h2>
              <p className="text-base text-[var(--color-text-primary)] mb-4 leading-relaxed">
                Larger text naturally draws attention first. By varying sizes, we create a visual roadmap that tells readers what to focus on. Headlines at 36-48px command immediate attention, while body text at 16px invites comfortable reading.
              </p>
              <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-2">
                Weight Adds Emphasis
              </h3>
              <p className="text-base text-[var(--color-text-primary)] mb-4 leading-relaxed">
                Font weight works alongside size to reinforce hierarchy. <strong>Bold text</strong> within a paragraph highlights key concepts, while lighter weights create a sense of elegance and openness.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Note: This example demonstrates how different sizes and weights work together to create clear visual hierarchy.
              </p>
            </article>
          </Card.Body>
        </Card>

        <Card variant="outlined">
          <Card.Body>
            <Stack gap={4}>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Line Height & Measure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Optimal line length: 45-75 characters</p>
                  <p className="text-base text-[var(--color-text-primary)] leading-relaxed max-w-[65ch]">
                    This paragraph demonstrates optimal line length for comfortable reading. Studies show that lines between 45-75 characters are easiest to read, reducing eye fatigue and improving comprehension. Notice how the text flows naturally without feeling cramped or stretched.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Line height comparison</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-1">leading-tight (1.25)</p>
                      <p className="text-base text-[var(--color-text-primary)] leading-tight">
                        Typography with tight line height works for headings but strains eyes in body text.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-1">leading-normal (1.5)</p>
                      <p className="text-base text-[var(--color-text-primary)] leading-normal">
                        Normal line height provides comfortable spacing for most body text scenarios.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-1">leading-relaxed (1.625)</p>
                      <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
                        Relaxed line height is ideal for long-form content and improves readability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
}
