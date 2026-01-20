import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ThemeToggle } from '../../components/ThemeToggle';
import { cn } from '../../lib/utils';

type Phase = 'understand' | 'define' | 'explore' | 'design' | 'validate' | 'refine';

const phases: { id: Phase; number: string; title: string; agent: string; color: string }[] = [
  { id: 'understand', number: '01', title: 'Understand', agent: 'Research Agent', color: 'var(--color-primary)' },
  { id: 'define', number: '02', title: 'Define', agent: 'Strategy Agent', color: 'var(--color-accent)' },
  { id: 'explore', number: '03', title: 'Explore', agent: 'Solution Agent', color: 'var(--color-warning)' },
  { id: 'design', number: '04', title: 'Design', agent: 'UI Agent', color: 'var(--color-success)' },
  { id: 'validate', number: '05', title: 'Validate', agent: 'Critique Agent', color: 'var(--color-error)' },
  { id: 'refine', number: '06', title: 'Refine', agent: 'Polish Agent', color: 'var(--color-info)' },
];

export function DashboardStory() {
  const [activePhase, setActivePhase] = useState<Phase>('understand');

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-sans">
      <StoryHeader />
      
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)] sticky top-16 z-40">
        <Container size="xl">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activePhase === phase.id
                    ? "text-white shadow-lg"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)]"
                )}
                style={activePhase === phase.id ? { backgroundColor: phase.color } : {}}
              >
                <span className="font-bold">{phase.number}</span>
                {phase.title}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Container size="lg" className="py-12">
        {activePhase === 'understand' && <UnderstandPhase />}
        {activePhase === 'define' && <DefinePhase />}
        {activePhase === 'explore' && <ExplorePhase />}
        {activePhase === 'design' && <DesignPhase />}
        {activePhase === 'validate' && <ValidatePhase />}
        {activePhase === 'refine' && <RefinePhase />}
        
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <PhaseNavigation 
            activePhase={activePhase} 
            setActivePhase={setActivePhase} 
          />
        </div>
      </Container>

      <CallToAction />
    </div>
  );
}

function StoryHeader() {
  const navigate = useNavigate();
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg">
                Ui
              </div>
              <span className="font-bold text-[var(--text-lg)] tracking-tight">
                Optimizer
              </span>
            </div>
            <span className="text-[var(--color-text-tertiary)]">/</span>
            <span className="text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)]" onClick={() => navigate('/story')}>
              Stories
            </span>
            <span className="text-[var(--color-text-tertiary)]">/</span>
            <span className="font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
}

function PhaseNavigation({ activePhase, setActivePhase }: { activePhase: Phase; setActivePhase: (p: Phase) => void }) {
  const navigate = useNavigate();
  const currentIndex = phases.findIndex(p => p.id === activePhase);
  const prevPhase = currentIndex > 0 ? phases[currentIndex - 1] : null;
  const nextPhase = currentIndex < phases.length - 1 ? phases[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center">
      {prevPhase ? (
        <Button variant="ghost" onClick={() => setActivePhase(prevPhase.id)}>
          ← {prevPhase.number} {prevPhase.title}
        </Button>
      ) : <div />}

      {nextPhase ? (
        <Button variant="primary" onClick={() => setActivePhase(nextPhase.id)}>
          {nextPhase.number} {nextPhase.title} →
        </Button>
      ) : (
        <Button variant="primary" onClick={() => navigate('/examples/dashboard')}>
          View Live Example →
        </Button>
      )}
    </div>
  );
}

function PhaseHeader({ phase }: { phase: typeof phases[0] }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: phase.color }}
        >
          {phase.number}
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {phase.agent}
          </div>
          <h1 className="text-[var(--text-3xl)] font-bold">{phase.title}</h1>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, children, variant = 'default' }: { title: string; children: React.ReactNode; variant?: 'default' | 'highlight' }) {
  return (
    <Card className={cn(variant === 'highlight' && 'border-[var(--color-primary)] border-2')}>
      <Card.Header>
        <h3 className="text-[var(--text-lg)] font-semibold">{title}</h3>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

function UnderstandPhase() {
  const [selectedPersona, setSelectedPersona] = useState<'sarah' | 'james' | null>(null);

  const jtbds = [
    { id: 1, situation: 'When I start my workday', motivation: 'I want to see what needs my attention', outcome: 'so I can prioritize my time effectively', personas: ['sarah'] },
    { id: 2, situation: 'When preparing for a stakeholder meeting', motivation: 'I want to export key metrics', outcome: 'so I can present progress confidently', personas: ['sarah'] },
    { id: 3, situation: 'When something feels "off"', motivation: 'I want to drill into the data', outcome: 'so I can identify the root cause', personas: ['sarah', 'james'] },
    { id: 4, situation: 'When analyzing a trend over time', motivation: 'I want to compare historical data', outcome: 'so I can understand patterns and make predictions', personas: ['james'] },
    { id: 5, situation: 'When presenting findings to the team', motivation: 'I want to create shareable reports', outcome: 'so stakeholders can see the data that supports my conclusions', personas: ['james', 'sarah'] },
  ];

  const isJtbdHighlighted = (personas: string[]) => {
    if (!selectedPersona) return true;
    return personas.includes(selectedPersona);
  };

  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[0]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        Before designing a single pixel, we need to understand who will use this dashboard 
        and what they're trying to accomplish. The Research Agent conducts user interviews 
        and synthesizes findings into actionable personas and job statements.
      </p>

      <div className="p-3 bg-[var(--color-info-subtle)] rounded-lg border border-[var(--color-info)]/30">
        <p className="text-sm text-[var(--color-info)]">
          <strong>Try it:</strong> Click on a persona card below to highlight their specific Jobs to Be Done. 
          This helps visualize how our design must serve multiple user needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'sarah' 
              ? "ring-2 ring-[var(--color-primary)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'james' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-primary)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'sarah' ? null : 'sarah')}
        >
          <SectionCard title="Primary Persona" variant="highlight">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Sarah Chen</h4>
                  <p className="text-[var(--color-text-secondary)]">Product Manager, SaaS Company</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I need to know what's happening across my product without scheduling a dozen meetings."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Monitor product health daily</li>
                    <li>• Identify issues before they escalate</li>
                    <li>• Report progress to stakeholders</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Data scattered across tools</li>
                    <li>• Too many metrics, unclear priorities</li>
                    <li>• Manual report compilation</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'james' 
              ? "ring-2 ring-[var(--color-accent)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'sarah' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-accent)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'james' ? null : 'james')}
        >
          <SectionCard title="Secondary Persona">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">James Park</h4>
                  <p className="text-[var(--color-text-secondary)]">Data Analyst, Same Company</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I need to dig into the details and understand the why behind the numbers."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Deep dive into metrics</li>
                    <li>• Compare historical trends</li>
                    <li>• Export raw data for analysis</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Limited drill-down capabilities</li>
                    <li>• Can't customize date ranges</li>
                    <li>• No way to save custom views</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      <SectionCard title="Jobs to Be Done">
        <div className="space-y-4">
          {selectedPersona && (
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <span>Showing jobs for:</span>
              <Badge variant={selectedPersona === 'sarah' ? 'default' : 'info'}>
                {selectedPersona === 'sarah' ? 'Sarah' : 'James'}
              </Badge>
              <button 
                onClick={() => setSelectedPersona(null)}
                className="text-[var(--color-primary)] hover:underline"
              >
                Show all
              </button>
            </div>
          )}
          {jtbds.map((jtbd) => (
            <div 
              key={jtbd.id} 
              className={cn(
                "p-4 bg-[var(--color-bg-subtle)] rounded-lg border-l-4 transition-all duration-200",
                jtbd.personas.includes('sarah') && jtbd.personas.includes('james')
                  ? "border-[var(--color-warning)]"
                  : jtbd.personas.includes('sarah')
                    ? "border-[var(--color-primary)]"
                    : "border-[var(--color-accent)]",
                !isJtbdHighlighted(jtbd.personas) && "opacity-30"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm flex-1">
                  <span className="text-[var(--color-text-tertiary)]">When</span>{' '}
                  <span className="font-medium">{jtbd.situation}</span>,{' '}
                  <span className="text-[var(--color-text-tertiary)]">I want to</span>{' '}
                  <span className="font-medium">{jtbd.motivation}</span>,{' '}
                  <span className="text-[var(--color-text-tertiary)]">so I can</span>{' '}
                  <span className="font-medium">{jtbd.outcome}</span>.
                </p>
                <div className="flex gap-1 shrink-0">
                  {jtbd.personas.includes('sarah') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold" title="Sarah">S</span>
                  )}
                  {jtbd.personas.includes('james') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center font-bold" title="James">J</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-primary-subtle)] border-[var(--color-primary)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate Passed</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We've identified two personas with overlapping but distinct needs. Sarah needs quick status checks; 
                James needs deep analysis. Our design must serve both through progressive disclosure—simple by default, 
                powerful on demand.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function DefinePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[1]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Strategy Agent synthesizes user understanding into a clear problem statement, 
        success metrics, and prioritized requirements. This ensures everyone agrees on 
        what we're solving before exploring solutions.
      </p>

      <SectionCard title="Problem Statement" variant="highlight">
        <div className="p-6 bg-[var(--color-bg-subtle)] rounded-lg text-center">
          <p className="text-[var(--text-xl)] leading-relaxed">
            <span className="font-bold text-[var(--color-primary)]">Product managers</span> need a way to{' '}
            <span className="font-bold text-[var(--color-primary)]">monitor their product's health at a glance</span>{' '}
            because <span className="font-bold">delayed awareness of issues leads to escalation</span>, 
            but currently they must <span className="font-bold text-[var(--color-error)]">check multiple tools 
            and manually compile data</span>.
          </p>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Success Metrics">
          <div className="space-y-4">
            {[
              { metric: 'Time to insight', target: '< 30 seconds', current: '5-10 minutes' },
              { metric: 'Daily check-ins', target: '3+/day', current: '1-2/day' },
              { metric: 'Tools required', target: '1', current: '4-5' },
              { metric: 'Manual exports/week', target: '0', current: '3-5' },
            ].map((m, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-[var(--color-bg-subtle)] rounded-lg">
                <span className="font-medium">{m.metric}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-text-tertiary)] line-through">{m.current}</span>
                  <span className="text-[var(--color-success)] font-bold">→ {m.target}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Constraints">
          <div className="space-y-3">
            {[
              { type: 'Technical', constraint: 'Must integrate with existing API (REST, 30s cache)' },
              { type: 'Design', constraint: 'Must use existing design system components' },
              { type: 'Accessibility', constraint: 'WCAG 2.2 AA compliance required' },
              { type: 'Timeline', constraint: 'MVP in 2 weeks, full version in 6 weeks' },
            ].map((c, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Badge variant="default" size="sm">{c.type}</Badge>
                <span className="text-sm text-[var(--color-text-secondary)]">{c.constraint}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="How Might We Questions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How might we surface urgent issues automatically?',
            'How might we reduce time spent compiling data?',
            'How might we make the dashboard glanceable?',
            'How might we support drill-down without overwhelming?',
            'How might we adapt to different check-in contexts?',
            'How might we make exports effortless?',
          ].map((q, i) => (
            <div key={i} className="p-3 bg-[var(--color-accent-subtle)] rounded-lg text-sm">
              {q}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Serving Multiple Personas" variant="highlight">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our design must serve both Sarah (quick-check PM) and James (deep-dive analyst) without forcing either to compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-primary-subtle)] rounded-lg border border-[var(--color-primary)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center">S</span>
                For Sarah (Quick Check PM)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Key metrics visible at a glance (above fold)</li>
                <li>• Trend indicators show direction without reading numbers</li>
                <li>• Alert badges for items needing attention</li>
                <li>• 2-5 minute check-in optimized layout</li>
                <li>• One-click export for stakeholder reports</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--color-accent-subtle)] rounded-lg border border-[var(--color-accent)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center">J</span>
                For James (Deep-Dive Analyst)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Clickable metrics drill down to detailed views</li>
                <li>• Date range selectors for historical analysis</li>
                <li>• Interactive charts with hover tooltips</li>
                <li>• Filter controls to segment data</li>
                <li>• Export raw data for external analysis</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-[var(--color-primary-subtle)] rounded-lg">
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Flexibility Strategy: Top-level metrics serve Sarah's glance-and-go workflow, while expandable cards and drill-down links serve James's exploration needs. Both use the same dashboard—depth is revealed on demand.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Resolving Competing Needs" variant="highlight">
        <div className="space-y-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Sarah and James have fundamentally different—sometimes incompatible—needs. Here's how we identify conflicts 
            and apply design patterns to resolve them without compromise.
          </p>

          <div className="space-y-4">
            <h5 className="font-bold text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[var(--color-error)] text-white text-xs flex items-center justify-center">!</span>
              Identified Conflicts
            </h5>
            <div className="space-y-3">
              {[
                { 
                  conflict: 'Information Density', 
                  sarah: 'Wants minimal, scannable metrics', 
                  james: 'Wants rich, detailed data',
                  resolution: 'Progressive Disclosure',
                  how: 'Show summary cards by default; click to expand full data tables and charts'
                },
                { 
                  conflict: 'Interaction Depth', 
                  sarah: 'Quick glance, no interaction needed', 
                  james: 'Deep filtering, date range selection',
                  resolution: 'Multiple Interaction Paths',
                  how: 'Static view loads instantly; interactive controls appear on hover/focus'
                },
                { 
                  conflict: 'Time Investment', 
                  sarah: '2-5 min sessions, frequent interruptions', 
                  james: '30+ min deep analysis sessions',
                  resolution: 'Context Preservation',
                  how: 'Save view state in URL; James can bookmark filtered views, Sarah always starts fresh'
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[var(--color-bg-subtle)] rounded-lg border border-[var(--color-border)]">
                  <div className="flex items-start justify-between mb-3">
                    <h6 className="font-bold text-sm">{item.conflict}</h6>
                    <Badge variant="success" size="sm">{item.resolution}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center shrink-0">S</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.sarah}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center shrink-0">J</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.james}</span>
                    </div>
                  </div>
                  <div className="p-2 bg-[var(--color-success-subtle)] rounded text-sm">
                    <span className="font-medium text-[var(--color-success)]">Resolution:</span>{' '}
                    <span className="text-[var(--color-text-secondary)]">{item.how}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">⚠</span>
              Anti-Patterns Avoided
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { pattern: 'Feature Bloat', avoided: 'Show all features to all users', instead: 'Progressive disclosure reveals complexity on demand' },
                { pattern: 'One-Size-Fits-All', avoided: 'Single "compromise" interface', instead: 'Same page, different depths based on interaction' },
                { pattern: 'Mode Confusion', avoided: 'Hidden mode switches users forget', instead: 'Current state always visible in URL and UI' },
                { pattern: 'Pogo-Stick Navigation', avoided: 'Drill-down pages that lose context', instead: 'Expand-in-place with breadcrumb trail' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="error" size="sm">{item.pattern}</Badge>
                  </div>
                  <p className="text-xs text-[var(--color-text-tertiary)] line-through mb-1">{item.avoided}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.instead}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[var(--color-info-subtle)] rounded-lg border border-[var(--color-info)]/30">
            <h5 className="font-bold text-sm mb-2 text-[var(--color-info)]">Design Pattern Applied: Progressive Disclosure</h5>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              The primary pattern for this dashboard. Shows only essential information initially, reveals advanced features on user request.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Level 1: KPI cards (always visible)</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Level 2: Trend charts (below fold)</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Level 3: Filters & date range (on demand)</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Level 4: Raw data export (in menu)</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-accent-subtle)] border-[var(--color-accent)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate Passed</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Problem statement is user-focused (not feature-focused), metrics are measurable, 
                constraints are documented, and HMW questions are ready for ideation.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function ExplorePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[2]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Solution Agent generates multiple approaches before committing to one. 
        This divergent thinking phase ensures we don't settle on the first idea 
        but explore the solution space thoroughly.
      </p>

      <SectionCard title="Solution Hypotheses">
        <div className="space-y-4">
          {[
            { 
              name: 'A: Metrics Dashboard', 
              description: 'Traditional grid of KPI cards with charts below',
              pros: ['Familiar pattern', 'Easy to scan', 'Well-understood'],
              cons: ['Can become cluttered', 'Passive (user must check)'],
              score: 8
            },
            { 
              name: 'B: Smart Inbox', 
              description: 'AI-prioritized list of items needing attention',
              pros: ['Proactive', 'Prioritized', 'Actionable'],
              cons: ['Requires trust in AI', 'May miss context'],
              score: 7
            },
            { 
              name: 'C: Ambient Display', 
              description: 'Minimal interface showing only anomalies',
              pros: ['Zero noise normally', 'Clear signals'],
              cons: ['Missing context', 'Unusual pattern'],
              score: 5
            },
          ].map((s, i) => (
            <Card key={i} className={i === 0 ? 'border-2 border-[var(--color-success)]' : ''}>
              <Card.Body className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold">{s.name}</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">{s.description}</p>
                  </div>
                  <Badge variant={i === 0 ? 'success' : 'default'}>
                    Score: {s.score}/10
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[var(--color-success)]">PROS</span>
                    <ul className="text-sm mt-1 space-y-1">
                      {s.pros.map((p, j) => <li key={j}>+ {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--color-error)]">CONS</span>
                    <ul className="text-sm mt-1 space-y-1">
                      {s.cons.map((c, j) => <li key={j}>- {c}</li>)}
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="User Flow: Morning Check-in">
        <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center">1</span>
              <span>User opens dashboard → Sees 4 key metrics at top</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center">2</span>
              <span>Scans trend indicators → Identifies any red flags</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center">3</span>
              <span>If alert: Clicks metric → Sees detailed breakdown</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">✓</span>
              <span>Understands status → Takes action or moves on</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Information Architecture">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-[var(--color-primary-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-primary)] mb-2">Primary (Always Visible)</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Key metrics (4 cards)</li>
              <li>• Trend indicators</li>
              <li>• Alert badges</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Secondary (Visible Below)</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Revenue chart</li>
              <li>• Traffic breakdown</li>
              <li>• Recent activity</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Tertiary (On Demand)</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Detailed analytics</li>
              <li>• Historical data</li>
              <li>• Export options</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-warning-subtle)] border-[var(--color-warning)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate Passed</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Multiple solutions explored, user flows mapped, information hierarchy defined. 
                Recommendation: Solution A (Metrics Dashboard) with elements from B (proactive alerts). 
                Rationale documented. Ready to design.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function DesignPhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[3]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The UI Agent translates the solution concept into concrete interface specifications. 
        Every component, spacing value, and color must come from the design system—no arbitrary values.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Component Inventory">
          <div className="space-y-3">
            {[
              { component: 'StatCard', status: 'existing', usage: 'KPI display with trend' },
              { component: 'Card', status: 'existing', usage: 'Content containers' },
              { component: 'Badge', status: 'existing', usage: 'Status indicators' },
              { component: 'Button', status: 'existing', usage: 'Actions' },
              { component: 'BarChart', status: 'new', usage: 'Revenue visualization' },
              { component: 'DonutChart', status: 'new', usage: 'Traffic breakdown' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-[var(--color-bg-subtle)] rounded">
                <div className="flex items-center gap-2">
                  <Badge variant={c.status === 'existing' ? 'success' : 'warning'} size="sm">
                    {c.status}
                  </Badge>
                  <span className="font-mono text-sm">{c.component}</span>
                </div>
                <span className="text-xs text-[var(--color-text-tertiary)]">{c.usage}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Layout Specification">
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-bg-subtle)] rounded font-mono text-xs">
              <div className="border-2 border-dashed border-[var(--color-border)] p-2 mb-2">
                <div className="text-[var(--color-text-tertiary)]">Header (h-16, sticky)</div>
              </div>
              <div className="flex gap-2">
                <div className="w-16 border-2 border-dashed border-[var(--color-border)] p-2">
                  <div className="text-[var(--color-text-tertiary)] [writing-mode:vertical-rl]">Sidebar (w-64)</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="grid grid-cols-4 gap-1">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-8 bg-[var(--color-primary-subtle)] rounded text-[8px] flex items-center justify-center">
                        Stat {i}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="col-span-2 h-16 bg-[var(--color-bg-muted)] rounded text-[8px] flex items-center justify-center">
                      Chart
                    </div>
                    <div className="h-16 bg-[var(--color-bg-muted)] rounded text-[8px] flex items-center justify-center">
                      Donut
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              Page padding: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-8</code><br/>
              Card gap: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-6</code><br/>
              Section gap: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-8</code>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Design Decisions with Rationale">
        <div className="space-y-4">
          {[
            {
              decision: 'Stats at top, full width',
              rationale: 'JTBD #1: Users need to see status immediately. F-pattern reading puts stats in prime position.',
              tokens: ['grid-cols-4', '--space-6 gap']
            },
            {
              decision: 'Trend badges on stat cards',
              rationale: 'Persona frustration: Unclear what matters. Trends provide instant context without reading numbers.',
              tokens: ['Badge variant="success/error"', '--color-success/error']
            },
            {
              decision: 'Sidebar navigation, fixed',
              rationale: 'Context scenario: Users check quickly between tasks. Persistent nav allows fast switching.',
              tokens: ['w-64', 'sticky top-0', 'h-screen']
            },
          ].map((d, i) => (
            <div key={i} className="p-4 border border-[var(--color-border)] rounded-lg">
              <h5 className="font-bold mb-2">{d.decision}</h5>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">{d.rationale}</p>
              <div className="flex gap-2 flex-wrap">
                {d.tokens.map((t, j) => (
                  <code key={j} className="text-xs bg-[var(--color-success-subtle)] text-[var(--color-success)] px-2 py-1 rounded">
                    {t}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-success-subtle)] border-[var(--color-success)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate Passed</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All components from design system, all values from tokens, visual hierarchy clear, 
                design decisions documented with rationale. Ready to validate.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function ValidatePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[4]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Critique Agent rigorously evaluates the design against accessibility standards, 
        usability heuristics, and the original user needs. Problems found now are cheap to fix.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Accessibility Audit">
          <div className="space-y-3">
            {[
              { check: 'Color contrast (4.5:1)', status: 'pass' },
              { check: 'Focus indicators visible', status: 'warning', note: 'Needs stronger ring' },
              { check: 'Keyboard navigation', status: 'pass' },
              { check: 'Screen reader labels', status: 'pass' },
              { check: 'Touch targets (44px)', status: 'pass' },
              { check: 'Skip-to-main link', status: 'fail', note: 'Missing' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm">{c.check}</span>
                <div className="flex items-center gap-2">
                  {c.note && <span className="text-xs text-[var(--color-text-tertiary)]">{c.note}</span>}
                  <Badge 
                    variant={c.status === 'pass' ? 'success' : c.status === 'warning' ? 'warning' : 'error'} 
                    size="sm"
                  >
                    {c.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Heuristic Evaluation">
          <div className="space-y-3">
            {[
              { heuristic: 'Visibility of system status', score: 9 },
              { heuristic: 'Match real world', score: 8 },
              { heuristic: 'User control & freedom', score: 7, note: 'Add undo for actions' },
              { heuristic: 'Consistency', score: 9 },
              { heuristic: 'Error prevention', score: 8 },
              { heuristic: 'Recognition over recall', score: 9 },
            ].map((h, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm">{h.heuristic}</span>
                <div className="flex items-center gap-2">
                  {h.note && <span className="text-xs text-[var(--color-text-tertiary)]">{h.note}</span>}
                  <Badge variant={h.score >= 8 ? 'success' : 'warning'} size="sm">
                    {h.score}/10
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Issue List">
        <div className="space-y-3">
          {[
            { severity: 'Major', issue: 'Missing skip-to-main link', fix: 'Add hidden skip link at top of page' },
            { severity: 'Minor', issue: 'Focus ring too subtle', fix: 'Increase to 2px solid with offset' },
            { severity: 'Minor', issue: 'No undo for quick actions', fix: 'Add toast with undo button' },
          ].map((issue, i) => (
            <div key={i} className="flex gap-4 p-3 bg-[var(--color-bg-subtle)] rounded-lg">
              <Badge variant={issue.severity === 'Major' ? 'error' : 'warning'} size="sm">
                {issue.severity}
              </Badge>
              <div className="flex-1">
                <span className="font-medium">{issue.issue}</span>
                <p className="text-sm text-[var(--color-text-secondary)]">Fix: {issue.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-error-subtle)] border-[var(--color-error)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate: Issues Found</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                1 Major issue (skip link) and 2 Minor issues identified. 
                All must be resolved in Refine phase before shipping.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function RefinePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[5]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Polish Agent addresses validation findings and adds the details that transform 
        a functional design into a delightful experience. Every micro-interaction matters.
      </p>

      <SectionCard title="Issue Resolutions">
        <div className="space-y-4">
          {[
            {
              issue: 'Missing skip-to-main link',
              resolution: 'Added visually hidden link that appears on focus',
              code: '<a href="#main" class="skip-link">Skip to main</a>',
              verified: true
            },
            {
              issue: 'Focus ring too subtle',
              resolution: 'Updated to 2px solid with 2px offset',
              code: 'outline: 2px solid var(--color-focus); outline-offset: 2px;',
              verified: true
            },
            {
              issue: 'No undo for actions',
              resolution: 'Added toast notifications with 10s undo window',
              code: '<Toast action={{ label: "Undo", onClick: handleUndo }} />',
              verified: true
            },
          ].map((r, i) => (
            <div key={i} className="p-4 border border-[var(--color-success)] bg-[var(--color-success-subtle)] rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-bold">{r.issue}</h5>
                <Badge variant="success" size="sm">Resolved</Badge>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">{r.resolution}</p>
              <code className="text-xs bg-[var(--color-bg-surface)] p-2 rounded block">{r.code}</code>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Micro-interactions Added">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { element: 'Stat cards', interaction: 'Hover lift (translateY -4px, shadow increase)' },
            { element: 'Chart bars', interaction: 'Hover highlight with tooltip showing value' },
            { element: 'Sidebar items', interaction: 'Smooth background transition (150ms ease)' },
            { element: 'Page transitions', interaction: 'Fade in (200ms) on route change' },
          ].map((m, i) => (
            <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
              <h5 className="font-medium text-sm">{m.element}</h5>
              <p className="text-xs text-[var(--color-text-secondary)]">{m.interaction}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Final QA Checklist">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { category: 'Visual', checks: ['Token usage', 'Spacing consistent', 'Colors semantic'] },
            { category: 'Interaction', checks: ['All states defined', 'Feedback immediate', 'Transitions smooth'] },
            { category: 'Accessibility', checks: ['Contrast passes', 'Keyboard works', 'Screen reader OK'] },
            { category: 'Responsive', checks: ['Mobile works', 'Tablet works', 'No overflow'] },
          ].map((cat, i) => (
            <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
              <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">{cat.category}</h5>
              <ul className="space-y-1">
                {cat.checks.map((check, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--color-success)]">✓</span>
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-info-subtle)] border-[var(--color-info)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">🎉</div>
            <div>
              <h4 className="font-bold mb-1">Design Complete!</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All validation issues resolved, micro-interactions added, QA checklist passed. 
                The dashboard is ready for implementation. View the live example to see the result.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Stack>
  );
}

function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="py-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white">
      <Container size="md">
        <Stack gap={6} align="center" className="text-center">
          <h2 className="text-[var(--text-3xl)] font-bold">See the Final Result</h2>
          <p className="text-lg opacity-90 max-w-xl">
            Experience the dashboard built through this workflow. Toggle design notes to see
            how every decision traces back to user needs.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/examples/dashboard')}
            className="bg-white text-[var(--color-primary)] hover:bg-white/90"
          >
            View Live Dashboard →
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
