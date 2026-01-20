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

export function DataTableStory() {
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
            <span className="font-medium">Data Table</span>
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
        <Button variant="primary" onClick={() => navigate('/examples/datatable')}>
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
  const [selectedPersona, setSelectedPersona] = useState<'alex' | 'david' | null>(null);

  const jtbds = [
    { id: 1, situation: 'When I need to find a specific record', motivation: 'I want to search across all columns', outcome: 'so I find it regardless of what I remember about it', personas: ['alex', 'david'] },
    { id: 2, situation: 'When I\'m analyzing a subset of data', motivation: 'I want to combine multiple filters', outcome: 'so I can focus on exactly what I need', personas: ['alex'] },
    { id: 3, situation: 'When I need to update multiple records', motivation: 'I want to bulk select and edit', outcome: 'so I don\'t waste time on repetitive actions', personas: ['alex'] },
    { id: 4, situation: 'When I need to share filtered data', motivation: 'I want to export or save views', outcome: 'so others see the same subset I\'m working with', personas: ['alex', 'david'] },
    { id: 5, situation: 'When I need to update a single record', motivation: 'I want to edit it inline', outcome: 'so I don\'t lose context by navigating away', personas: ['david'] },
  ];

  const isJtbdHighlighted = (personas: string[]) => {
    if (!selectedPersona) return true;
    return personas.includes(selectedPersona);
  };

  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[0]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        Data tables are deceptively complex. They must serve users who glance at data occasionally 
        and power users who live in spreadsheets. The challenge is making information dense without 
        being overwhelming, and powerful without being complicated.
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
            selectedPersona === 'alex' 
              ? "ring-2 ring-[var(--color-info)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'david' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-info)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'alex' ? null : 'alex')}
        >
          <SectionCard title="Primary Persona" variant="highlight">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-info-subtle)] flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Alex Nguyen</h4>
                  <p className="text-[var(--color-text-secondary)]">Data Analyst, Financial Services</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I work with thousands of rows daily. I need to filter, sort, and export subsets quickly. 
                    Keyboard shortcuts are essential—my mouse slows me down."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Process large datasets fast</li>
                    <li>• Create custom filtered views</li>
                    <li>• Export data for reports</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Slow performance on large data</li>
                    <li>• Can't save filter combinations</li>
                    <li>• No keyboard navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'david' 
              ? "ring-2 ring-[var(--color-accent)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'alex' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-accent)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'david' ? null : 'david')}
        >
          <SectionCard title="Secondary Persona">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-2xl">
                  👔
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">David Kim</h4>
                  <p className="text-[var(--color-text-secondary)]">Team Lead, Operations</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I just need to find specific records and update their status. I don't need advanced 
                    features—I need it to be obvious how to do the basics."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Find specific records fast</li>
                    <li>• Update status/fields inline</li>
                    <li>• Track recent changes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Hidden features, cluttered UI</li>
                    <li>• Need to open detail view for edits</li>
                    <li>• Search doesn't find what I expect</li>
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
              <Badge variant={selectedPersona === 'alex' ? 'info' : 'default'}>
                {selectedPersona === 'alex' ? 'Alex' : 'David'}
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
                jtbd.personas.includes('alex') && jtbd.personas.includes('david')
                  ? "border-[var(--color-warning)]"
                  : jtbd.personas.includes('alex')
                    ? "border-[var(--color-info)]"
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
                  {jtbd.personas.includes('alex') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center font-bold" title="Alex">A</span>
                  )}
                  {jtbd.personas.includes('david') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center font-bold" title="David">D</span>
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
                Two distinct user types: power users (keyboard-driven, bulk operations, exports) and 
                occasional users (search, simple edits). Design must surface simple actions while enabling 
                power workflows. Progressive disclosure is key.
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
        The core challenge of data tables is density vs. clarity. Too sparse wastes space; 
        too dense overwhelms. Success means both personas can achieve their goals without 
        tripping over features meant for the other.
      </p>

      <SectionCard title="Problem Statement" variant="highlight">
        <div className="p-6 bg-[var(--color-bg-subtle)] rounded-lg text-center">
          <p className="text-[var(--text-xl)] leading-relaxed">
            <span className="font-bold text-[var(--color-info)]">Data users with varying expertise levels</span> need a way to{' '}
            <span className="font-bold text-[var(--color-info)]">view, filter, and manipulate tabular data efficiently</span>{' '}
            because <span className="font-bold">data volume grows but time doesn't</span>, 
            but currently <span className="font-bold text-[var(--color-error)]">tables are either too simple 
            for power users or too complex for everyone else</span>.
          </p>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Success Metrics">
          <div className="space-y-4">
            {[
              { metric: 'Time to find specific record', target: '< 5 seconds', current: '15-30 seconds' },
              { metric: 'Bulk operation completion', target: '< 10 seconds', current: '30-60 seconds' },
              { metric: 'Filter combination time', target: '< 8 seconds', current: '20+ seconds' },
              { metric: 'Export workflow steps', target: '2 clicks', current: '5+ clicks' },
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

        <SectionCard title="Feature Priority Matrix">
          <div className="space-y-3">
            {[
              { feature: 'Global search', priority: 'Must Have', reason: 'Both personas need it' },
              { feature: 'Column sorting', priority: 'Must Have', reason: 'Basic expectation' },
              { feature: 'Inline editing', priority: 'Must Have', reason: 'Casual user JTBD' },
              { feature: 'Advanced filters', priority: 'Should Have', reason: 'Power user need' },
              { feature: 'Keyboard shortcuts', priority: 'Should Have', reason: 'Power user efficiency' },
              { feature: 'Saved views', priority: 'Nice to Have', reason: 'Team collaboration' },
            ].map((f, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-[var(--color-bg-subtle)] rounded">
                <span className="text-sm font-medium">{f.feature}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--color-text-tertiary)]">{f.reason}</span>
                  <Badge 
                    variant={f.priority === 'Must Have' ? 'error' : f.priority === 'Should Have' ? 'warning' : 'info'} 
                    size="sm"
                  >
                    {f.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="How Might We Questions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How might we make search find records regardless of which field matches?',
            'How might we enable power features without cluttering the interface?',
            'How might we make bulk operations feel safe and undoable?',
            'How might we maintain performance with thousands of rows?',
            'How might we support keyboard-first workflows?',
            'How might we show data density appropriate to the content?',
          ].map((q, i) => (
            <div key={i} className="p-3 bg-[var(--color-info-subtle)] rounded-lg text-sm">
              {q}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Serving Multiple Personas" variant="highlight">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our design must serve both Alex (data analyst) and David (team lead) without forcing either to compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-info-subtle)] rounded-lg border border-[var(--color-info)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">A</span>
                For Alex (Data Analyst)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Keyboard shortcuts for all common operations</li>
                <li>• Advanced multi-column filtering and sorting</li>
                <li>• Bulk selection and batch operations</li>
                <li>• Export to CSV/Excel with custom columns</li>
                <li>• Saved filter presets for repeated analysis</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--color-accent-subtle)] rounded-lg border border-[var(--color-accent)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center">D</span>
                For David (Team Lead)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Global search that finds records across all columns</li>
                <li>• Inline editing for quick status updates</li>
                <li>• Clear visual indicators of row states</li>
                <li>• Simple click-to-sort on any column</li>
                <li>• Obvious pagination and row counts</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-[var(--color-primary-subtle)] rounded-lg">
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Flexibility Strategy: Progressive disclosure keeps the interface clean for David while Alex can access power features through keyboard shortcuts, filter popovers, and column header menus. The toolbar shows simple search prominently while advanced options are one click away.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Resolving Competing Needs" variant="highlight">
        <div className="space-y-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Alex and David have opposing needs around interface complexity and interaction style. Here's how we 
            design for both without creating mode confusion or feature bloat.
          </p>

          <div className="space-y-4">
            <h5 className="font-bold text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[var(--color-error)] text-white text-xs flex items-center justify-center">!</span>
              Identified Conflicts
            </h5>
            <div className="space-y-3">
              {[
                { 
                  conflict: 'Interaction Speed', 
                  alex: 'Keyboard-first, never touch mouse', 
                  david: 'Mouse-first, visual feedback needed',
                  resolution: 'Parallel Input Methods',
                  how: 'Every action has both keyboard shortcut AND mouse/click path. Neither is "advanced"—both are primary.'
                },
                { 
                  conflict: 'Filter Complexity', 
                  alex: 'Multi-column, compound conditions, saved filters', 
                  david: 'Simple search bar, maybe one dropdown',
                  resolution: 'Layered Filter UI',
                  how: 'Search bar always visible. Click column headers for quick filters. "Advanced Filters" button for compound conditions.'
                },
                { 
                  conflict: 'Data Operations', 
                  alex: 'Bulk select, batch edit, mass export', 
                  david: 'Single row select, inline edit, no export',
                  resolution: 'Context-Aware Actions',
                  how: 'Bulk actions appear only after multi-select. Single-row actions always available. Export in menu (not prominent).'
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[var(--color-bg-subtle)] rounded-lg border border-[var(--color-border)]">
                  <div className="flex items-start justify-between mb-3">
                    <h6 className="font-bold text-sm">{item.conflict}</h6>
                    <Badge variant="success" size="sm">{item.resolution}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center shrink-0">A</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.alex}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center shrink-0">D</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.david}</span>
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
                { pattern: 'Spreadsheet Syndrome', avoided: 'All features visible in dense toolbar', instead: 'Toolbar shows search + filters; power features in menus' },
                { pattern: 'Mode Confusion', avoided: '"Expert mode" toggle that changes everything', instead: 'Same interface, features appear contextually' },
                { pattern: 'Keyboard-Only', avoided: 'Power features only via shortcuts', instead: 'All shortcuts have discoverable menu/click alternatives' },
                { pattern: 'Performance Theater', avoided: 'Loading spinner for every action', instead: 'Optimistic updates; virtualized rows; instant feedback' },
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
            <h5 className="font-bold text-sm mb-2 text-[var(--color-info)]">Design Pattern Applied: Context-Aware Revelation</h5>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              Features appear based on user actions, not upfront. Complexity emerges naturally as users demonstrate need.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">0 rows selected: Search + Sort + Basic filters</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">1 row selected: Edit + Delete + Details</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">2+ rows selected: Bulk Edit + Export + Delete All</span>
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
                Problem focused on efficiency across skill levels. Feature priorities established 
                based on user needs, not technical ease. Performance acknowledged as a design constraint.
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
        Data tables have evolved significantly. We'll evaluate approaches from basic HTML tables 
        to spreadsheet-like interfaces to determine the right level of complexity.
      </p>

      <SectionCard title="Solution Hypotheses">
        <div className="space-y-4">
          {[
            { 
              name: 'A: Enhanced Table with Toolbar', 
              description: 'Standard table with toolbar for search, filters, and actions',
              pros: ['Familiar pattern', 'Clear separation of controls', 'Good for moderate data'],
              cons: ['Toolbar takes vertical space', 'Advanced filters hidden in modals'],
              score: 8
            },
            { 
              name: 'B: Spreadsheet-Like Grid', 
              description: 'Full AG-Grid style with cell-level editing and formulas',
              pros: ['Maximum power', 'Familiar to Excel users', 'Cell-level control'],
              cons: ['Steep learning curve', 'Overkill for simple needs'],
              score: 6
            },
            { 
              name: 'C: Card-Based Data View', 
              description: 'Individual cards per record, grid or list layout',
              pros: ['Great on mobile', 'More context per record', 'Visually appealing'],
              cons: ['Poor information density', 'Bad for comparison'],
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

      <SectionCard title="User Flow: Filter and Export Workflow">
        <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">1</span>
              <span>User opens data table → Sees search bar + quick filters + data grid</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">2</span>
              <span>Types in search OR clicks column header filter icon</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">3</span>
              <span>Applies filter → Table updates instantly, shows filter badges</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">4</span>
              <span>Adds more filters → Badges stack, "Clear all" appears</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">✓</span>
              <span>Clicks Export → Dropdown with format options, downloads filtered data</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Interaction Model">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-4 bg-[var(--color-primary-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-primary)] mb-2">Selection</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Click to select row</li>
              <li>• Shift+click for range</li>
              <li>• Cmd/Ctrl for multi</li>
              <li>• Checkbox column</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Sorting</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Click header to sort</li>
              <li>• Click again to reverse</li>
              <li>• Third click to clear</li>
              <li>• Multi-sort with shift</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Filtering</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Global search bar</li>
              <li>• Per-column filters</li>
              <li>• Filter badges shown</li>
              <li>• Save filter sets</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Editing</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Double-click to edit</li>
              <li>• Enter to save</li>
              <li>• Escape to cancel</li>
              <li>• Tab to next cell</li>
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
                Recommendation: Solution A (Enhanced Table) with progressive disclosure of power features. 
                Keyboard shortcuts available but not required. Filter state visible but not intrusive. 
                Inline editing for quick updates.
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
        Data table design is about consistency and predictability. Every cell, header, and action 
        must behave as users expect. Visual hierarchy guides attention to what matters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Component Inventory">
          <div className="space-y-3">
            {[
              { component: 'DataTable', status: 'new', usage: 'Main table container with virtualization' },
              { component: 'TableHeader', status: 'new', usage: 'Sortable column headers' },
              { component: 'TableRow', status: 'new', usage: 'Data rows with selection state' },
              { component: 'TableCell', status: 'new', usage: 'Individual cells, supports editing' },
              { component: 'FilterPopover', status: 'new', usage: 'Per-column filter UI' },
              { component: 'FilterBadge', status: 'new', usage: 'Active filter indicator' },
              { component: 'Pagination', status: 'existing', usage: 'Page navigation' },
              { component: 'Checkbox', status: 'existing', usage: 'Row selection' },
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

        <SectionCard title="Table Anatomy">
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-bg-subtle)] rounded font-mono text-xs">
              <div className="space-y-1">
                <div className="flex items-center h-8 bg-[var(--color-primary-subtle)] rounded px-2 text-[var(--color-text-secondary)]">
                  Toolbar: Search | Filters | Actions | Export
                </div>
                <div className="flex items-center h-10 bg-[var(--color-bg-muted)] rounded px-2 font-bold text-[var(--color-text-secondary)]">
                  Header: ☐ | Name ↑ | Status | Date | Actions
                </div>
                <div className="space-y-0.5">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center h-12 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded px-2 text-[var(--color-text-secondary)]">
                      Row {i}: ☐ | Data | Badge | Date | Edit | Delete
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between h-10 bg-[var(--color-bg-muted)] rounded px-2 text-[var(--color-text-secondary)]">
                  <span>Footer: Showing 1-10 of 1,234</span>
                  <span>« 1 2 3 ... 124 »</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              Row height: <code className="bg-[var(--color-bg-muted)] px-1 rounded">48px</code><br/>
              Header height: <code className="bg-[var(--color-bg-muted)] px-1 rounded">40px</code><br/>
              Cell padding: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-3</code>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Design Decisions with Rationale">
        <div className="space-y-4">
          {[
            {
              decision: 'Sticky header and toolbar',
              rationale: 'JTBD #1-2: Users scroll through many rows. Column headers and search must remain visible for context and quick filtering.',
              tokens: ['sticky top-0', 'z-10', 'bg-[var(--color-bg-surface)]']
            },
            {
              decision: 'Filter badges in toolbar, not inline',
              rationale: 'Casual user need: Clear indication of active filters without cluttering column headers. Badges are dismissible with one click.',
              tokens: ['Badge', 'FilterBadge', 'flex gap-2']
            },
            {
              decision: 'Hover row highlight',
              rationale: 'Both personas: Visual feedback for which row is active. Essential for wide tables where eyes can lose track.',
              tokens: ['hover:bg-[var(--color-bg-subtle)]', 'transition-colors']
            },
            {
              decision: 'Virtualized rendering',
              rationale: 'Performance constraint: Tables may have 10,000+ rows. Only render visible rows to maintain 60fps scrolling.',
              tokens: ['react-virtual', 'overscan={5}', 'height: 100%']
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
                Component structure defined with clear responsibilities. Visual design optimizes for 
                scanability. Performance addressed through virtualization. Ready to validate.
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
        Data tables have critical accessibility requirements. Screen reader users need to understand 
        table structure, and keyboard users need full functionality without a mouse.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Accessibility Audit">
          <div className="space-y-3">
            {[
              { check: 'Proper table semantics', status: 'pass' },
              { check: 'Column headers associated', status: 'pass' },
              { check: 'Sort state announced', status: 'warning', note: 'Add aria-sort' },
              { check: 'Selection state announced', status: 'fail', note: 'Missing aria-selected' },
              { check: 'Focus management in cells', status: 'warning', note: 'Needs roving tabindex' },
              { check: 'Filter changes announced', status: 'fail', note: 'No live region for results count' },
              { check: 'Keyboard shortcuts documented', status: 'pass' },
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

        <SectionCard title="Performance Audit">
          <div className="space-y-3">
            {[
              { check: 'Initial render (100 rows)', score: '< 50ms', status: 'pass' },
              { check: 'Scroll performance (10k rows)', score: '60fps', status: 'pass' },
              { check: 'Filter response time', score: '< 100ms', status: 'pass' },
              { check: 'Sort operation', score: '< 200ms', status: 'warning', note: 'Slow on 10k+ rows' },
              { check: 'Memory usage', score: '< 50MB', status: 'pass' },
              { check: 'Export performance', score: '< 3s for 10k', status: 'pass' },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm">{p.check}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--color-text-tertiary)]">{p.score}</span>
                  {p.note && <span className="text-xs text-[var(--color-warning)]">({p.note})</span>}
                  <Badge variant={p.status === 'pass' ? 'success' : 'warning'} size="sm">
                    {p.status}
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
            { severity: 'Major', issue: 'Row selection not announced to screen readers', fix: 'Add aria-selected to rows, announce selection count changes' },
            { severity: 'Major', issue: 'Filter results count not announced', fix: 'Add aria-live region: "Showing X of Y results"' },
            { severity: 'Minor', issue: 'Sort state not communicated', fix: 'Add aria-sort="ascending/descending" to sorted column' },
            { severity: 'Minor', issue: 'Cell focus management inconsistent', fix: 'Implement roving tabindex pattern for grid navigation' },
            { severity: 'Minor', issue: 'Sort slow on large datasets', fix: 'Consider web worker for sort, or server-side for 10k+' },
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
                2 Major accessibility issues (selection and filter announcements) and 3 Minor issues. 
                Performance acceptable but sort optimization recommended. Must fix before shipping.
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
        Data table polish is about micro-feedback that confirms actions and reduces anxiety. 
        Users should never wonder "did that work?" Every interaction needs clear response.
      </p>

      <SectionCard title="Issue Resolutions">
        <div className="space-y-4">
          {[
            {
              issue: 'Row selection not announced',
              resolution: 'Added aria-selected and live region announcing selection changes',
              code: '<tr aria-selected={selected}> + <div aria-live="polite">{count} rows selected</div>',
              verified: true
            },
            {
              issue: 'Filter results not announced',
              resolution: 'Added results summary in aria-live region after filter changes',
              code: '<div aria-live="polite" aria-atomic="true">Showing {visible} of {total} results</div>',
              verified: true
            },
            {
              issue: 'Sort state not communicated',
              resolution: 'Added aria-sort attribute to sorted column header',
              code: '<th aria-sort={direction}>{column.name}</th>',
              verified: true
            },
            {
              issue: 'Cell focus management',
              resolution: 'Implemented roving tabindex with arrow key navigation',
              code: 'tabIndex={isFocused ? 0 : -1} + onKeyDown={handleArrowKeys}',
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
            { element: 'Row hover', interaction: 'Subtle background change (100ms ease)' },
            { element: 'Sort click', interaction: 'Icon rotation animation on direction change' },
            { element: 'Row selection', interaction: 'Checkbox fills with scale animation' },
            { element: 'Filter badge', interaction: 'Slide-in when applied, shrink-out on remove' },
            { element: 'Inline edit', interaction: 'Cell border highlight, save shimmer on confirm' },
            { element: 'Empty state', interaction: 'Fade in illustration with bounce on action' },
          ].map((m, i) => (
            <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
              <h5 className="font-medium text-sm">{m.element}</h5>
              <p className="text-xs text-[var(--color-text-secondary)]">{m.interaction}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Keyboard Shortcuts">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { category: 'Navigation', shortcuts: ['↑↓ Row focus', '←→ Cell focus', 'Home/End First/last', 'Ctrl+Home Top'] },
            { category: 'Selection', shortcuts: ['Space Select row', 'Shift+↑↓ Extend', 'Ctrl+A Select all', 'Escape Clear'] },
            { category: 'Editing', shortcuts: ['Enter Edit cell', 'Escape Cancel', 'Tab Next cell', 'Delete Clear cell'] },
            { category: 'Actions', shortcuts: ['Ctrl+F Search', 'Ctrl+E Export', 'Ctrl+/ Help', 'F2 Rename'] },
          ].map((cat, i) => (
            <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
              <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">{cat.category}</h5>
              <ul className="space-y-1">
                {cat.shortcuts.map((shortcut, j) => (
                  <li key={j} className="text-xs text-[var(--color-text-secondary)]">
                    {shortcut}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Final QA Checklist">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { category: 'Functionality', checks: ['Sort works', 'Filter works', 'Export works', 'Inline edit works'] },
            { category: 'Accessibility', checks: ['Screen reader tested', 'Keyboard only tested', 'Focus visible', 'States announced'] },
            { category: 'Performance', checks: ['10k rows smooth', 'Filter instant', 'No memory leaks', 'Export fast'] },
            { category: 'Edge Cases', checks: ['Empty state', 'Single row', 'Long content', 'Error handling'] },
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
                All validation issues resolved, keyboard navigation comprehensive, performance optimized. 
                The data table serves both power users and casual users through progressive disclosure. View the live example.
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
    <div className="py-16 bg-gradient-to-br from-[var(--color-info)] to-[var(--color-primary)] text-white">
      <Container size="md">
        <Stack gap={6} align="center" className="text-center">
          <h2 className="text-[var(--text-3xl)] font-bold">See the Final Result</h2>
          <p className="text-lg opacity-90 max-w-xl">
            Experience the data table built through this workflow. Toggle design notes to see
            how every interaction serves different user expertise levels.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/examples/datatable')}
            className="bg-white text-[var(--color-info)] hover:bg-white/90"
          >
            View Live Data Table →
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
