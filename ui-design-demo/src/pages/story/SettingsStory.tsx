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

export function SettingsStory() {
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
            <span className="font-medium">Settings</span>
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
        <Button variant="primary" onClick={() => navigate('/examples/settings')}>
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
  const [selectedPersona, setSelectedPersona] = useState<'marcus' | 'elena' | null>(null);

  const jtbds = [
    { id: 1, situation: 'When I first set up the product', motivation: 'I want to personalize my experience', outcome: 'so it works the way I expect', personas: ['marcus', 'elena'] },
    { id: 2, situation: 'When I receive too many notifications', motivation: 'I want to adjust my preferences', outcome: 'so I\'m not constantly interrupted', personas: ['elena'] },
    { id: 3, situation: 'When security is a concern', motivation: 'I want to enable additional protection', outcome: 'so my account stays safe', personas: ['marcus', 'elena'] },
    { id: 4, situation: 'When I can\'t find a setting', motivation: 'I want to search for it', outcome: 'so I don\'t waste time navigating', personas: ['marcus'] },
    { id: 5, situation: 'When I need to configure integrations', motivation: 'I want access to advanced options', outcome: 'so I can connect my workflow tools', personas: ['marcus'] },
  ];

  const isJtbdHighlighted = (personas: string[]) => {
    if (!selectedPersona) return true;
    return personas.includes(selectedPersona);
  };

  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[0]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        Settings pages often become dumping grounds for every configurable option. Before designing, 
        we need to understand who changes settings, how often, and why—most users never touch them.
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
            selectedPersona === 'marcus' 
              ? "ring-2 ring-[var(--color-success)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'elena' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-success)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'marcus' ? null : 'marcus')}
        >
          <SectionCard title="Primary Persona" variant="highlight">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-success-subtle)] flex items-center justify-center text-2xl">
                  🧑‍💻
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Marcus Rivera</h4>
                  <p className="text-[var(--color-text-secondary)]">Senior Developer, Tech Startup</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I want to set things up once and forget about them. When I do need to change something, I need to find it fast."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Configure once, forget it</li>
                    <li>• Find specific settings quickly</li>
                    <li>• Understand impact of changes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Buried options, poor organization</li>
                    <li>• No search functionality</li>
                    <li>• Unclear what options do</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'elena' 
              ? "ring-2 ring-[var(--color-accent)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'marcus' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-accent)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'elena' ? null : 'elena')}
        >
          <SectionCard title="Secondary Persona">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-2xl">
                  👩‍🏫
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Elena Kowalski</h4>
                  <p className="text-[var(--color-text-secondary)]">Casual User, Marketing Manager</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I just want to change my notification preferences without accidentally breaking something."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Simple, common changes</li>
                    <li>• Not overwhelmed by options</li>
                    <li>• Confidence in actions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Too many technical options</li>
                    <li>• Fear of breaking things</li>
                    <li>• Jargon-heavy labels</li>
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
              <Badge variant={selectedPersona === 'marcus' ? 'success' : 'info'}>
                {selectedPersona === 'marcus' ? 'Marcus' : 'Elena'}
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
                jtbd.personas.includes('marcus') && jtbd.personas.includes('elena')
                  ? "border-[var(--color-warning)]"
                  : jtbd.personas.includes('marcus')
                    ? "border-[var(--color-success)]"
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
                  {jtbd.personas.includes('marcus') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center font-bold" title="Marcus">M</span>
                  )}
                  {jtbd.personas.includes('elena') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center font-bold" title="Elena">E</span>
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
                We've identified two distinct user types with different needs: power users who want findability 
                and casual users who want simplicity. Our design must serve both through progressive disclosure.
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
        The challenge isn't showing all options—it's revealing the right options at the right time. 
        Settings should feel simple for common tasks while remaining powerful for advanced needs.
      </p>

      <SectionCard title="Problem Statement" variant="highlight">
        <div className="p-6 bg-[var(--color-bg-subtle)] rounded-lg text-center">
          <p className="text-[var(--text-xl)] leading-relaxed">
            <span className="font-bold text-[var(--color-success)]">Both power users and casual users</span> need a way to{' '}
            <span className="font-bold text-[var(--color-success)]">configure their preferences efficiently</span>{' '}
            because <span className="font-bold">different users have vastly different comfort levels with complexity</span>, 
            but currently settings pages <span className="font-bold text-[var(--color-error)]">either overwhelm beginners 
            or frustrate experts</span>.
          </p>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Success Metrics">
          <div className="space-y-4">
            {[
              { metric: 'Time to find setting', target: '< 10 seconds', current: '30-60 seconds' },
              { metric: 'Settings search usage', target: '40%+ of visits', current: 'N/A (no search)' },
              { metric: 'Support tickets for settings', target: '-50%', current: 'Baseline' },
              { metric: 'Settings completion rate', target: '> 80%', current: '45%' },
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

        <SectionCard title="Design Principles">
          <div className="space-y-3">
            {[
              { principle: 'Progressive Disclosure', description: 'Show simple first, reveal complex on demand' },
              { principle: 'Immediate Feedback', description: 'Changes take effect instantly with visual confirmation' },
              { principle: 'Reversibility', description: 'Every change can be undone or reset to default' },
              { principle: 'Contextual Help', description: 'Explain what each setting does, not just what it is' },
            ].map((p, i) => (
              <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
                <h5 className="font-bold text-sm">{p.principle}</h5>
                <p className="text-sm text-[var(--color-text-secondary)]">{p.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Serving Multiple Personas" variant="highlight">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our design must serve both Marcus (power user) and Elena (casual user) without forcing either to compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-success-subtle)] rounded-lg border border-[var(--color-success)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">M</span>
                For Marcus (Power User)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Global search to find any setting instantly</li>
                <li>• Keyboard shortcuts for frequent actions</li>
                <li>• URL-addressable settings for bookmarking</li>
                <li>• Bulk operations and import/export</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--color-accent-subtle)] rounded-lg border border-[var(--color-accent)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center">E</span>
                For Elena (Casual User)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Clear categories with plain language labels</li>
                <li>• Smart defaults that "just work"</li>
                <li>• Confirmation dialogs for risky changes</li>
                <li>• Visual indicators showing current state</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-[var(--color-primary-subtle)] rounded-lg">
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Flexibility Strategy: Progressive disclosure ensures Elena sees a clean interface while Marcus can access advanced features through search, keyboard shortcuts, and expandable sections.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Resolving Competing Needs" variant="highlight">
        <div className="space-y-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Marcus and Elena have fundamentally opposing needs around complexity. Here's how we identify conflicts 
            and apply design patterns to serve both without compromise.
          </p>

          <div className="space-y-4">
            <h5 className="font-bold text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[var(--color-error)] text-white text-xs flex items-center justify-center">!</span>
              Identified Conflicts
            </h5>
            <div className="space-y-3">
              {[
                { 
                  conflict: 'Feature Visibility', 
                  marcus: 'Wants all options visible and searchable', 
                  elena: 'Wants minimal options, hidden complexity',
                  resolution: 'Progressive Disclosure + Search',
                  how: 'Simple categories visible; advanced options in "Show more" sections; global search finds everything'
                },
                { 
                  conflict: 'Risk Tolerance', 
                  marcus: 'Confident making changes, wants efficiency', 
                  elena: 'Afraid of breaking things, wants guardrails',
                  resolution: 'Contextual Safeguards',
                  how: 'Dangerous actions require confirmation only for Elena\'s common paths; Marcus can disable confirmations'
                },
                { 
                  conflict: 'Navigation Model', 
                  marcus: 'Keyboard-first, URL bookmarks, batch changes', 
                  elena: 'Visual browsing, one change at a time',
                  resolution: 'Multiple Interaction Paths',
                  how: 'Both click-through navigation AND keyboard shortcuts AND direct URL access work simultaneously'
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[var(--color-bg-subtle)] rounded-lg border border-[var(--color-border)]">
                  <div className="flex items-start justify-between mb-3">
                    <h6 className="font-bold text-sm">{item.conflict}</h6>
                    <Badge variant="success" size="sm">{item.resolution}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center shrink-0">M</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.marcus}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center shrink-0">E</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.elena}</span>
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
                { pattern: 'Idiot Boxes', avoided: 'Constant tooltips treating users as incapable', instead: 'Contextual help on hover/focus, dismissible tips' },
                { pattern: 'Magic Pushbutton', avoided: 'No feedback until final save', instead: 'Immediate visual feedback on each change' },
                { pattern: 'Feature Bloat', avoided: 'All 200 settings on one page', instead: 'Categorized, searchable, progressively disclosed' },
                { pattern: 'One-Size-Fits-All', avoided: 'Single complexity level for everyone', instead: 'Simple view by default, "Advanced" sections expand' },
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
            <h5 className="font-bold text-sm mb-2 text-[var(--color-info)]">Design Pattern Applied: Layered Complexity</h5>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              Settings are organized in layers of increasing complexity. Elena sees only Layer 1; Marcus can dive to Layer 3.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Layer 1: Common settings (notifications, theme)</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Layer 2: Advanced settings (integrations, API)</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Layer 3: Developer settings (raw JSON, webhooks)</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="How Might We Questions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How might we make settings searchable and discoverable?',
            'How might we show only relevant options without hiding power features?',
            'How might we provide confidence that changes won\'t break things?',
            'How might we help users understand the impact of each setting?',
            'How might we organize settings intuitively for different mental models?',
            'How might we make dangerous actions harder to do accidentally?',
          ].map((q, i) => (
            <div key={i} className="p-3 bg-[var(--color-accent-subtle)] rounded-lg text-sm">
              {q}
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="bg-[var(--color-accent-subtle)] border-[var(--color-accent)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold mb-1">Validation Gate Passed</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Problem focuses on the tension between simplicity and power. Multi-persona strategy defined with 
                specific features for each user type. Design principles established for progressive disclosure.
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
        Settings pages have well-established patterns, but the best approach depends on the number 
        of options, user expertise, and how frequently settings change. We'll evaluate three approaches.
      </p>

      <SectionCard title="Solution Hypotheses">
        <div className="space-y-4">
          {[
            { 
              name: 'A: Categorized Sidebar', 
              description: 'Traditional left nav with categories, content on right',
              pros: ['Familiar pattern', 'Good for many categories', 'URL-addressable sections'],
              cons: ['Requires scanning', 'Categories may not match mental models'],
              score: 9
            },
            { 
              name: 'B: Search-First', 
              description: 'Prominent search with results showing all matching settings',
              pros: ['Fastest for known settings', 'No navigation needed', 'Handles any organization'],
              cons: ['Requires knowing what to search', 'Bad for discovery'],
              score: 7
            },
            { 
              name: 'C: Progressive Cards', 
              description: 'Stacked cards with expanding sections, most common at top',
              pros: ['Good progressive disclosure', 'Works well on mobile'],
              cons: ['Limited scalability', 'Harder to link to specific settings'],
              score: 6
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

      <SectionCard title="User Flow: Changing Notification Preferences">
        <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">1</span>
              <span>User clicks Settings → Sees category sidebar + search bar</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">2</span>
              <span>Types "notifications" OR clicks "Notifications" in sidebar</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">3</span>
              <span>Sees grouped notification options with toggles</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">4</span>
              <span>Toggles off email notifications → Instant feedback "Saved"</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">✓</span>
              <span>Done in 3 clicks, no page reload</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Information Architecture">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-4 bg-[var(--color-primary-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-primary)] mb-2">Profile</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Display name</li>
              <li>• Avatar</li>
              <li>• Email</li>
              <li>• Bio</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Notifications</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Email alerts</li>
              <li>• Push notifications</li>
              <li>• In-app messages</li>
              <li>• Digest frequency</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Privacy</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Profile visibility</li>
              <li>• Data sharing</li>
              <li>• Activity status</li>
              <li>• Blocked users</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-error-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-error)] mb-2">Danger Zone</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Export data</li>
              <li>• Deactivate account</li>
              <li>• Delete account</li>
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
                Recommendation: Solution A (Categorized Sidebar) with search from Solution B. 
                This hybrid serves both power users (search) and casual users (browsing). 
                IA groups settings by user mental models, with dangerous actions isolated.
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
        Settings UI must balance density (showing enough options) with clarity (not overwhelming). 
        Every control, label, and helper text serves a purpose.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Component Inventory">
          <div className="space-y-3">
            {[
              { component: 'Toggle', status: 'existing', usage: 'On/off preferences' },
              { component: 'Select', status: 'existing', usage: 'Single choice from list' },
              { component: 'Input', status: 'existing', usage: 'Text values' },
              { component: 'Card', status: 'existing', usage: 'Setting groups' },
              { component: 'Search', status: 'existing', usage: 'Find settings quickly' },
              { component: 'Sidebar', status: 'existing', usage: 'Category navigation' },
              { component: 'SettingRow', status: 'new', usage: 'Label + control + help' },
              { component: 'DangerZone', status: 'new', usage: 'Destructive actions section' },
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
                <div className="text-[var(--color-text-tertiary)]">Header + Search (sticky)</div>
              </div>
              <div className="flex gap-2">
                <div className="w-20 border-2 border-dashed border-[var(--color-border)] p-2">
                  <div className="text-[var(--color-text-tertiary)] [writing-mode:vertical-rl]">Sidebar (w-56)</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-8 bg-[var(--color-primary-subtle)] rounded text-[8px] flex items-center justify-center px-2">
                    Section Title
                  </div>
                  <div className="space-y-1">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-10 bg-[var(--color-bg-muted)] rounded text-[8px] flex items-center px-2">
                        Setting Row {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              Sidebar width: <code className="bg-[var(--color-bg-muted)] px-1 rounded">14rem</code><br/>
              Content max-width: <code className="bg-[var(--color-bg-muted)] px-1 rounded">48rem</code><br/>
              Row height: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-12</code>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Design Decisions with Rationale">
        <div className="space-y-4">
          {[
            {
              decision: 'Search always visible at top',
              rationale: 'JTBD #4: Power users want to find settings fast. Search reduces time-to-setting from 30s to <10s.',
              tokens: ['Input with icon', 'sticky position', '--space-4 padding']
            },
            {
              decision: 'Toggle labels on left, controls on right',
              rationale: 'F-pattern reading: users scan labels first, then take action. Consistent alignment reduces cognitive load.',
              tokens: ['flex justify-between', 'align-items-center']
            },
            {
              decision: 'Danger Zone at bottom with red border',
              rationale: 'Progressive disclosure: destructive actions should be hard to reach accidentally. Visual warning signals risk.',
              tokens: ['border-[var(--color-error)]', 'mt-8', 'Card']
            },
            {
              decision: 'Inline save with toast confirmation',
              rationale: 'Immediate feedback principle: users see changes take effect instantly without losing context.',
              tokens: ['Toast', 'success variant', '--duration-200']
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
                All components from design system, layout supports both navigation patterns (search and browse), 
                design decisions documented with user-centered rationale. Ready to validate.
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
        Settings pages have unique accessibility challenges: many interactive elements, 
        complex form controls, and state changes that must be announced to screen readers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Accessibility Audit">
          <div className="space-y-3">
            {[
              { check: 'Color contrast (4.5:1)', status: 'pass' },
              { check: 'Focus indicators visible', status: 'pass' },
              { check: 'Keyboard navigation', status: 'warning', note: 'Tab order in danger zone needs review' },
              { check: 'Screen reader labels', status: 'pass' },
              { check: 'Form labels associated', status: 'pass' },
              { check: 'State changes announced', status: 'fail', note: 'Toggle changes not announced' },
              { check: 'Search results announced', status: 'fail', note: 'Missing live region' },
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

        <SectionCard title="Usability Evaluation">
          <div className="space-y-3">
            {[
              { heuristic: 'Visibility of system status', score: 7, note: 'Need save confirmations' },
              { heuristic: 'Match real world', score: 9 },
              { heuristic: 'User control & freedom', score: 9, note: 'Good reset defaults' },
              { heuristic: 'Consistency', score: 9 },
              { heuristic: 'Error prevention', score: 8 },
              { heuristic: 'Recognition over recall', score: 8 },
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
            { severity: 'Major', issue: 'Toggle state changes not announced to screen readers', fix: 'Add aria-live region or role="status" to toggle feedback' },
            { severity: 'Major', issue: 'Search results count not announced', fix: 'Add aria-live="polite" region announcing "X results found"' },
            { severity: 'Minor', issue: 'Tab order jumps in danger zone', fix: 'Ensure logical tab order with tabindex adjustments' },
            { severity: 'Minor', issue: 'No confirmation for successful save', fix: 'Add toast notification with "Settings saved" message' },
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
                2 Major accessibility issues (screen reader announcements) and 2 Minor issues identified. 
                Must resolve before shipping to ensure WCAG 2.2 AA compliance.
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
        Settings pages benefit from subtle polish that builds trust: smooth transitions, 
        clear feedback, and thoughtful micro-interactions that reassure users their changes are saved.
      </p>

      <SectionCard title="Issue Resolutions">
        <div className="space-y-4">
          {[
            {
              issue: 'Toggle state changes not announced',
              resolution: 'Added aria-live region that announces "Setting enabled/disabled"',
              code: '<span role="status" aria-live="polite">{message}</span>',
              verified: true
            },
            {
              issue: 'Search results count not announced',
              resolution: 'Added live region below search announcing result count',
              code: '<div aria-live="polite">{count} settings found</div>',
              verified: true
            },
            {
              issue: 'Tab order in danger zone',
              resolution: 'Restructured DOM order to match visual order',
              code: 'Moved confirm button before cancel in markup',
              verified: true
            },
            {
              issue: 'No save confirmation',
              resolution: 'Added toast notification with success state',
              code: '<Toast variant="success">Settings saved</Toast>',
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
            { element: 'Toggle switch', interaction: 'Smooth slide animation (150ms ease-out)' },
            { element: 'Sidebar items', interaction: 'Active state transition with background slide' },
            { element: 'Setting cards', interaction: 'Subtle hover elevation' },
            { element: 'Search input', interaction: 'Focus ring with smooth expansion' },
            { element: 'Save feedback', interaction: 'Checkmark animation on success' },
            { element: 'Danger buttons', interaction: 'Confirm dialog with shake on cancel' },
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
            { category: 'Visual', checks: ['Consistent spacing', 'Proper alignment', 'Correct tokens'] },
            { category: 'Interaction', checks: ['All toggles work', 'Search filters', 'Save feedback shows'] },
            { category: 'Accessibility', checks: ['Screen reader tested', 'Keyboard nav works', 'Focus visible'] },
            { category: 'Edge Cases', checks: ['Empty search', 'Long labels', 'Error states'] },
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
                All validation issues resolved, accessibility verified, micro-interactions polished. 
                The settings page balances simplicity for casual users with power for experts. View the live example.
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
    <div className="py-16 bg-gradient-to-br from-[var(--color-success)] to-[var(--color-accent)] text-white">
      <Container size="md">
        <Stack gap={6} align="center" className="text-center">
          <h2 className="text-[var(--text-3xl)] font-bold">See the Final Result</h2>
          <p className="text-lg opacity-90 max-w-xl">
            Experience the settings page built through this workflow. Toggle design notes to see
            how progressive disclosure serves both casual and power users.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/examples/settings')}
            className="bg-white text-[var(--color-success)] hover:bg-white/90"
          >
            View Live Settings →
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
