import { Container } from '../components/ui/Container';
import { Stack } from '../components/ui/Stack';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ThemeToggle';

function PaletteIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-sans transition-colors duration-200">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-lg)]">
                Ui
              </div>
              <span className="font-bold text-[var(--text-lg)] tracking-tight">
                Optimizer
              </span>
            </div>
            <ThemeToggle />
          </div>
        </Container>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[var(--color-primary-subtle)]/50 to-transparent -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container size="lg" className="pt-20 pb-24 md:pt-32 md:pb-40">
          <Stack align="center" gap={8} className="text-center">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-subtle)] px-3 py-1 text-sm text-[var(--color-primary)] mb-4">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] mr-2"></span>
                v1.0 Design System for AI Agents
              </div>
              
              <h1 className="text-[2.5rem] md:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
                Design with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">Intelligence</span>
              </h1>
              
              <p className="text-[var(--text-xl)] text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
                A precision-engineered design system built for AI generation. 
                Semantic tokens, constraint-based creativity, and accessible patterns 
                that enable agents to build beautiful UIs reliably.
              </p>
            </div>

            <Stack direction="horizontal" gap={4} justify="center" className="w-full pt-4">
              <Button 
                size="lg" 
                variant="primary" 
                className="min-w-[160px] h-14 text-[var(--text-lg)] shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-transform"
                onClick={() => window.location.href = '/examples'}
              >
                Explore Examples
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="min-w-[160px] h-14 text-[var(--text-lg)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)]"
                onClick={() => window.location.href = '/sandbox'}
              >
                Design Sandbox
              </Button>
            </Stack>
          </Stack>
        </Container>
      </div>

      <div className="py-20 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-[var(--text-3xl)] font-bold mb-4">Core Philosophy</h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-2xl">
              We believe AI-generated interfaces shouldn't look generic. Our system enforces constraints 
              that liberate creativity while ensuring consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhilosophyCard 
              icon={<PaletteIcon />} 
              title="Token-Based" 
              description="Colors, spacing, and typography are semantic. Agents reason about 'primary' and 'space-4', not hex codes or pixels."
            />
            <PhilosophyCard 
              icon={<LinkIcon />} 
              title="Constraint Creativity" 
              description="Limited choices lead to better outcomes. A curated set of spacing and size values prevents decision paralysis."
            />
            <PhilosophyCard 
              icon={<CpuIcon />} 
              title="Agent-Friendly" 
              description="Patterns are designed to be predictable. Clear rules allow LLMs to construct complex layouts reliably."
            />
            <PhilosophyCard 
              icon={<MoonIcon />} 
              title="Dark Mode Native" 
              description="Themes work through CSS variable swapping. No complex logic needed—just semantic color tokens."
            />
          </div>
        </Container>
      </div>

      <div className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] transform rotate-3 rounded-[var(--radius-3xl)] opacity-20 blur-xl"></div>
                <Card variant="outlined" className="relative bg-[var(--color-bg-surface)] border-[var(--color-border)] shadow-[var(--shadow-2xl)]">
                  <Card.Header>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-error)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[var(--color-warning)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[var(--color-success)]"></div>
                    </div>
                  </Card.Header>
                  <Card.Body className="space-y-6 min-h-[300px] flex flex-col justify-center">
                    <div className="flex items-center gap-4 p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-subtle)] border border-[var(--color-border)]">
                      <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary)] flex items-center justify-center text-white text-xl">Aa</div>
                      <div>
                        <div className="h-4 w-32 bg-[var(--color-text-secondary)]/20 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-[var(--color-text-secondary)]/10 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 h-10 bg-[var(--color-primary)] rounded-[var(--radius-md)] opacity-90"></div>
                      <div className="flex-1 h-10 border border-[var(--color-border)] rounded-[var(--radius-md)]"></div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[var(--text-4xl)] font-bold mb-6">Built for the future of coding</h2>
                <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)]">
                  UI Optimizer isn't just a component library—it's a language for describing interfaces 
                  that machines can understand and humans can enjoy.
                </p>
              </div>

              <Stack gap={6}>
                <FeatureItem 
                  title="Semantic Tokens" 
                  description="We use --color-primary instead of #3b82f6. This allows for instant re-theming and clearer intent in code."
                />
                <FeatureItem 
                  title="Composable Components" 
                  description="Stack, Card, and Button are designed to work together seamlessly without custom CSS overrides."
                />
                <FeatureItem 
                  title="Accessible by Default" 
                  description="Focus states, color contrast, and semantic HTML are baked in. Accessibility isn't an afterthought."
                />
              </Stack>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-20 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
        <Container size="md">
          <Card variant="elevated" className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"></div>
            <Card.Body className="p-12 text-center">
              <h2 className="text-[var(--text-3xl)] font-bold mb-4">Ready to build?</h2>
              <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] mb-8">
                Start exploring the component library or jump into the sandbox to test your ideas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={() => window.location.href = '/examples'}
                  className="h-14"
                >
                  Explore Components
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  fullWidth
                  className="h-14 border-2"
                  onClick={() => window.location.href = '/sandbox'}
                >
                  Open Sandbox
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
      
      <div className="py-8 border-t border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-text-tertiary)] text-sm">
            <p>© 2026 UI Optimizer. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">License</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function PhilosophyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card variant="outlined" className="h-full hover:border-[var(--color-primary)] transition-colors duration-300 group">
      <Card.Body className="h-full flex flex-col">
        <div className="mb-4 bg-[var(--color-bg-subtle)] w-16 h-16 rounded-[var(--radius-xl)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary-subtle)] transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-[var(--text-lg)] font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          {description}
        </p>
      </Card.Body>
    </Card>
  );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-success-subtle)] flex items-center justify-center text-[var(--color-success)]">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="text-[var(--text-lg)] font-bold mb-1">{title}</h3>
        <p className="text-[var(--color-text-secondary)]">{description}</p>
      </div>
    </div>
  );
}
