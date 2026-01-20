import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ThemeToggle } from '../../components/ThemeToggle';

export function StoryIndex() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-sans transition-colors duration-200">
      <StoryHeader />
      <HeroSection />
      <MultiPersonaSection />
      <WorkflowOverview />
      <ExampleJourneys />
      <StoryFooter />
    </div>
  );
}

function StoryHeader() {
  const navigate = useNavigate();
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-lg)]">
              Ui
            </div>
            <span className="font-bold text-[var(--text-lg)] tracking-tight">
              Optimizer
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              Home
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--color-primary-subtle),transparent_50%)] -z-10 opacity-50" />
      <Container size="lg">
        <Stack gap={8} align="center" className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-sm font-medium tracking-wide">
            THE DESIGN JOURNEY
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold leading-[1] tracking-tight">
            From Users to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Interfaces
            </span>
          </h1>
          <p className="text-[var(--text-xl)] text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Great interfaces don't start with pixels—they start with people. Follow the complete journey 
            from understanding users to shipping polished designs, powered by specialized AI agents at each step.
          </p>
          <div className="pt-4">
            <div className="w-px h-24 bg-gradient-to-b from-[var(--color-border)] to-[var(--color-primary)] mx-auto" />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function MultiPersonaSection() {
  return (
    <div className="py-24 border-t border-[var(--color-border)]">
      <Container size="lg">
        <Stack gap={12}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-success-subtle)] text-[var(--color-success)] text-sm font-medium tracking-wide mb-4">
              DESIGNING FOR EVERYONE
            </div>
            <h2 className="text-[var(--text-3xl)] font-bold mb-4">Multiple Personas, One Flexible Interface</h2>
            <p className="text-[var(--color-text-secondary)] text-[var(--text-lg)]">
              Great design serves diverse users with different needs, expertise levels, and preferences. 
              Our approach ensures interfaces adapt through progressive disclosure, personalization, 
              and intentional flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[var(--color-primary-subtle)]">
              <Card.Body className="p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-[var(--text-lg)] font-bold mb-2">Research Multiple Personas</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Every story identifies primary and secondary personas with distinct goals, frustrations, 
                  and mental models. We design for the spectrum, not just the average.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Power Users</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Casual Users</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">First-timers</span>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-2 border-[var(--color-accent-subtle)]">
              <Card.Body className="p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-[var(--text-lg)] font-bold mb-2">Progressive Disclosure</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Simple by default, powerful on demand. Advanced features reveal themselves when needed, 
                  keeping the interface clean for casual users while empowering experts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Smart Defaults</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Hidden Complexity</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Expert Mode</span>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-2 border-[var(--color-success-subtle)]">
              <Card.Body className="p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-success-subtle)] flex items-center justify-center text-[var(--color-success)] mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[var(--text-lg)] font-bold mb-2">Personalization & Flexibility</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Users can customize their experience. Views adapt to preferences, saved configurations 
                  persist across sessions, and the interface remembers how each user works best.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Saved Views</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Theme Options</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-bg-subtle)]">Custom Layouts</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function WorkflowOverview() {
  const phases = [
    { number: '01', title: 'Understand', agent: 'Research Agent', description: 'Who are the users? What do they need?', color: 'var(--color-primary)' },
    { number: '02', title: 'Define', agent: 'Strategy Agent', description: 'What problem are we solving?', color: 'var(--color-accent)' },
    { number: '03', title: 'Explore', agent: 'Solution Agent', description: 'How might we solve this?', color: 'var(--color-warning)' },
    { number: '04', title: 'Design', agent: 'UI Agent', description: 'How do we express the solution?', color: 'var(--color-success)' },
    { number: '05', title: 'Validate', agent: 'Critique Agent', description: 'Does this actually work?', color: 'var(--color-error)' },
    { number: '06', title: 'Refine', agent: 'Polish Agent', description: 'How do we perfect the details?', color: 'var(--color-info)' },
  ];

  return (
    <div className="py-24 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
      <Container size="lg">
        <Stack gap={12}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-3xl)] font-bold mb-4">The Six-Phase Workflow</h2>
            <p className="text-[var(--color-text-secondary)] text-[var(--text-lg)]">
              Each phase has a specialized agent with focused expertise, clear inputs and outputs, 
              and validation gates before proceeding.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-warning)] to-[var(--color-info)] -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {phases.map((phase) => (
                <div key={phase.number} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <Card.Body className="p-5 text-center">
                      <div 
                        className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.number}
                      </div>
                      <h3 className="font-bold text-[var(--text-lg)] mb-1">{phase.title}</h3>
                      <p className="text-[var(--text-xs)] text-[var(--color-text-tertiary)] mb-2 font-medium uppercase tracking-wide">
                        {phase.agent}
                      </p>
                      <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">
                        {phase.description}
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function ExampleJourneys() {
  const navigate = useNavigate();
  const examples = [
    {
      title: 'Dashboard',
      description: 'Analytics dashboard for a SaaS product. Follow how we understand busy managers, define their need for at-a-glance insights, and design an interface that respects their time.',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      href: '/story/dashboard',
      persona: 'Product Manager',
      jtbd: 'See what needs attention quickly',
    },
    {
      title: 'Settings',
      description: 'User preferences and account management. See how we balance comprehensive options with progressive disclosure to avoid overwhelming users.',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
      href: '/story/settings',
      persona: 'Power User',
      jtbd: 'Configure my experience efficiently',
    },
    {
      title: 'E-commerce',
      description: 'Product browsing and purchase flow. Discover how we reduce friction in the buying journey while building trust through clear information architecture.',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      href: '/story/ecommerce',
      persona: 'Online Shopper',
      jtbd: 'Find and buy products confidently',
    },
    {
      title: 'Data Table',
      description: 'Complex data management interface. Learn how we handle information density while maintaining usability for both casual and power users.',
      image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      href: '/story/datatable',
      persona: 'Data Analyst',
      jtbd: 'Analyze and act on data efficiently',
    },
    {
      title: 'Trading Platform',
      description: 'High-stakes financial interface. See how we resolve the "Kobayashi Maru" of mutually exclusive user needs through explicit modes.',
      image: 'bg-gradient-to-br from-gray-700 to-gray-900',
      href: '/story/trading',
      persona: 'Trader & Investor',
      jtbd: 'Trade safely or quickly',
    },
  ];

  return (
    <div className="py-24">
      <Container size="lg">
        <Stack gap={12}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-3xl)] font-bold mb-4">Design Journeys</h2>
            <p className="text-[var(--color-text-secondary)] text-[var(--text-lg)]">
              Walk through complete examples showing the workflow applied. Each journey documents
              every decision, from initial user research to final implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example) => (
              <Card
                key={example.title}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => navigate(example.href)}
              >
                <div className={`h-48 ${example.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="text-white text-[var(--text-4xl)] font-bold relative z-10">
                    {example.title}
                  </span>
                </div>
                <Card.Body className="p-6">
                  <Stack gap={4}>
                    <div className="flex gap-3">
                      <span className="px-2 py-1 bg-[var(--color-bg-subtle)] rounded-full text-[var(--text-xs)] font-medium">
                        {example.persona}
                      </span>
                      <span className="px-2 py-1 bg-[var(--color-primary-subtle)] text-[var(--color-primary)] rounded-full text-[var(--text-xs)] font-medium">
                        {example.jtbd}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      {example.description}
                    </p>
                    <Button variant="ghost" size="sm" className="self-start group-hover:bg-[var(--color-bg-subtle)]">
                      View Journey →
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function StoryFooter() {
  const navigate = useNavigate();
  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)] text-center">
      <Container size="md">
        <Stack gap={6} align="center">
          <h2 className="text-[var(--text-3xl)] font-bold">Start Your Own Journey</h2>
          <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-xl">
            Explore the design system components, or dive into the complete workflow documentation.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/sandbox')}>
              Open Sandbox
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/examples')}>
              View Examples
            </Button>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
