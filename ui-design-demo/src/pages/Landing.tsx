import { Container } from '../components/ui/Container';
import { Stack } from '../components/ui/Stack';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ThemeToggle';

function UserIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82 47.972 47.972 0 00-4.168.276.64.64 0 01-.657-.642v0z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-sans transition-colors duration-200">
      <Header />
      <HeroSection />
      <UserNeedsSection />
      <JourneySection />
      <PrinciplesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-lg)]">
                Ui
              </div>
              <span className="font-bold text-[var(--text-lg)] tracking-tight">
                Optimizer
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <a href="/story" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Design Journey</a>
              <a href="/examples" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Examples</a>
              <a href="/sandbox" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Sandbox</a>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[var(--color-primary-subtle)]/50 to-transparent -z-10" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-30 -z-10" />
      
      <Container size="lg" className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Stack align="center" gap={8} className="text-center">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-subtle)] px-3 py-1 text-sm text-[var(--color-primary)]">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] mr-2 animate-pulse"></span>
              User-Centered Design for AI Agents
            </div>
            
            <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              Interfaces that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">understand</span> your users
            </h1>
            
            <p className="text-[var(--text-xl)] text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Great design starts with understanding people. We translate user needs into 
              intuitive experiences—then into precise UI that AI agents can reliably generate.
            </p>
          </div>

          <Stack direction="horizontal" gap={4} justify="center" className="w-full pt-4">
            <Button 
              size="lg" 
              variant="primary" 
              className="min-w-[180px] h-14 text-[var(--text-lg)] shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-transform"
              onClick={() => window.location.href = '/story'}
            >
              See the Journey
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="min-w-[180px] h-14 text-[var(--text-lg)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)]"
              onClick={() => window.location.href = '/examples'}
            >
              View Examples
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

function UserNeedsSection() {
  const needs = [
    {
      persona: "Sarah, Product Manager",
      need: "I need to see what's happening without digging through multiple tools.",
      solution: "Dashboard with at-a-glance metrics and proactive alerts",
      outcome: "Time to insight reduced from 10 minutes to 30 seconds"
    },
    {
      persona: "Marcus, Power User",
      need: "I want to customize my workflow without reading a manual.",
      solution: "Settings with progressive disclosure and smart defaults",
      outcome: "Setup time cut by 70%, satisfaction scores up 40%"
    },
    {
      persona: "Elena, First-time Buyer",
      need: "I need to feel confident I'm making the right purchase.",
      solution: "Clear product info, comparison tools, transparent pricing",
      outcome: "Cart abandonment reduced by 35%"
    }
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="text-[var(--text-3xl)] font-bold mb-4">Design starts with people</h2>
          <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Every interface exists to help someone accomplish something. 
            We start by understanding who they are and what they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {needs.map((item, i) => (
            <Card key={i} className="h-full group hover:shadow-xl transition-shadow duration-300">
              <Card.Body className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-[var(--color-primary)]">
                    <UserIcon />
                  </div>
                  <span className="font-semibold text-sm">{item.persona}</span>
                </div>
                
                <blockquote className="text-[var(--text-lg)] font-medium mb-4 flex-1">
                  "{item.need}"
                </blockquote>
                
                <div className="space-y-3 pt-4 border-t border-[var(--color-border)]">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <LightbulbIcon />
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.solution}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-success-subtle)] flex items-center justify-center text-[var(--color-success)] flex-shrink-0 mt-0.5">
                      <SparklesIcon />
                    </div>
                    <p className="text-sm text-[var(--color-success)] font-medium">{item.outcome}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

function JourneySection() {
  const phases = [
    { number: "01", title: "Understand", description: "Research users, define personas, capture jobs-to-be-done" },
    { number: "02", title: "Define", description: "Frame the problem, set success metrics, identify constraints" },
    { number: "03", title: "Explore", description: "Generate solutions, map user flows, define information architecture" },
    { number: "04", title: "Design", description: "Translate to UI components, apply design tokens, document decisions" },
    { number: "05", title: "Validate", description: "Test accessibility, evaluate heuristics, verify user flows" },
    { number: "06", title: "Refine", description: "Polish details, add micro-interactions, ensure quality" },
  ];

  return (
    <div className="py-24">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-[var(--text-4xl)] font-bold mb-6">
                From user needs to pixel-perfect UI
              </h2>
              <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)]">
                Our workflow ensures every design decision traces back to real user needs. 
                Six specialized phases, each with validation gates, transform understanding into interfaces.
              </p>
            </div>

            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/story'}
              className="group"
            >
              Explore the full journey
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                <ArrowRightIcon />
              </span>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-subtle)] to-[var(--color-accent-subtle)] rounded-[var(--radius-2xl)] opacity-50 blur-xl -z-10" />
            <Card className="bg-[var(--color-bg-surface)]">
              <Card.Body className="p-6">
                <div className="space-y-4">
                  {phases.map((phase, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 p-3 rounded-[var(--radius-lg)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer group"
                      onClick={() => window.location.href = '/story'}
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                        {phase.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold group-hover:text-[var(--color-primary)] transition-colors">{phase.title}</h4>
                        <p className="text-sm text-[var(--color-text-secondary)] truncate">{phase.description}</p>
                      </div>
                      <div className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] transition-colors">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

function PrinciplesSection() {
  const principles = [
    {
      icon: <UserIcon />,
      title: "User-First",
      description: "Every component exists to serve a user need. We document the 'why' alongside the 'how'."
    },
    {
      icon: <LightbulbIcon />,
      title: "Intuitive by Design",
      description: "Visual hierarchy, familiar patterns, and clear affordances reduce cognitive load."
    },
    {
      icon: <PuzzleIcon />,
      title: "Systematic Consistency",
      description: "Design tokens and composable components ensure coherent experiences across any interface."
    },
    {
      icon: <SparklesIcon />,
      title: "AI-Ready",
      description: "Semantic naming and clear constraints let AI agents generate reliable, beautiful UIs."
    }
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="text-[var(--text-3xl)] font-bold mb-4">Principles that guide us</h2>
          <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Good design isn't subjective—it's grounded in psychology, accessibility standards, 
            and a deep respect for the people who use what we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, i) => (
            <Card key={i} variant="outlined" className="h-full hover:border-[var(--color-primary)] transition-colors duration-300 group">
              <Card.Body className="p-6 flex flex-col h-full">
                <div className="mb-4 bg-[var(--color-bg-subtle)] w-14 h-14 rounded-[var(--radius-xl)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary-subtle)] transition-all duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-[var(--text-lg)] font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm flex-1">
                  {principle.description}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

function CTASection() {
  return (
    <div className="py-24">
      <Container size="md">
        <Card variant="elevated" className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"></div>
          <Card.Body className="p-12 text-center">
            <h2 className="text-[var(--text-3xl)] font-bold mb-4">Ready to design with intention?</h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Walk through our complete design journey, explore real examples, 
              or jump into the sandbox to experiment with components.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={() => window.location.href = '/story'}
                className="h-12"
              >
                Design Journey
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                fullWidth
                className="h-12"
                onClick={() => window.location.href = '/examples'}
              >
                Examples
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                fullWidth
                className="h-12"
                onClick={() => window.location.href = '/sandbox'}
              >
                Sandbox
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-8 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-text-tertiary)] text-sm">
          <p>© 2026 UI Optimizer. Designed for humans, built for AI.</p>
          <div className="flex gap-6">
            <a href="/story" className="hover:text-[var(--color-text-primary)] transition-colors">Design Journey</a>
            <a href="/examples" className="hover:text-[var(--color-text-primary)] transition-colors">Examples</a>
            <a href="/sandbox" className="hover:text-[var(--color-text-primary)] transition-colors">Sandbox</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
