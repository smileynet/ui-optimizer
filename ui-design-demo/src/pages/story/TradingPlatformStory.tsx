import { useState } from 'react';
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

export function TradingPlatformStory() {
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
    </div>
  );
}

function StoryHeader() {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg">
                Ui
              </div>
              <span className="font-bold text-[var(--text-lg)] tracking-tight">
                Optimizer
              </span>
            </div>
            <span className="text-[var(--color-text-tertiary)]">/</span>
            <span className="text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)]" onClick={() => window.location.href = '/story'}>
              Stories
            </span>
            <span className="text-[var(--color-text-tertiary)]">/</span>
            <span className="font-medium">Trading Platform</span>
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
        <Button variant="primary" onClick={() => window.location.href = '/examples/trading'}>
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
  const [selectedPersona, setSelectedPersona] = useState<'marcus' | 'emma' | null>(null);

  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[0]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        In trading, speed and clarity are often at war. We start by interviewing two users at opposite ends 
        of the spectrum. Their needs aren't just different—they are actively hostile to one another.
      </p>

      <div className="p-3 bg-[var(--color-info-subtle)] rounded-lg border border-[var(--color-info)]/30">
        <p className="text-sm text-[var(--color-info)]">
          <strong>The Kobayashi Maru:</strong> In Star Trek, this was an unwinnable training scenario. 
          In UX, it's when serving one user directly hurts another. There is no "happy medium."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'marcus' 
              ? "ring-2 ring-[var(--color-primary)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'emma' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-primary)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'marcus' ? null : 'marcus')}
        >
          <SectionCard title="The Power User" variant="highlight">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Marcus</h4>
                  <p className="text-[var(--color-text-secondary)]">Day Trader</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "Every millisecond counts. Don't hide anything from me. I want density."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Needs</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Hotkey execution</li>
                    <li>• Maximum data density</li>
                    <li>• 0-click actions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Hates</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Confirmation dialogs</li>
                    <li>• Whitespace</li>
                    <li>• "Helpful" wizards</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'emma' 
              ? "ring-2 ring-[var(--color-accent)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'marcus' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-accent)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'emma' ? null : 'emma')}
        >
          <SectionCard title="The Retail Investor">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Emma</h4>
                  <p className="text-[var(--color-text-secondary)]">Long-term Saver</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I'm afraid of pressing the wrong button. Explain what this means."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Needs</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Clear explanations</li>
                    <li>• Safety checks</li>
                    <li>• Visual comfort</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Hates</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Flashing numbers</li>
                    <li>• Technical jargon</li>
                    <li>• Accidental orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      <SectionCard title="The Conflict">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
             We cannot simply "average" these needs. A compromise would result in a platform too slow for Marcus and too scary for Emma.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-[var(--color-bg-subtle)] rounded-lg">
             <div className="text-center md:text-left">
               <span className="font-bold block">Marcus wants:</span>
               <span className="text-sm text-[var(--color-error)]">NO Safety Checks</span>
             </div>
             <div className="text-[var(--text-2xl)] font-bold text-[var(--color-text-tertiary)]">VS</div>
             <div className="text-center md:text-right">
               <span className="font-bold block">Emma wants:</span>
               <span className="text-sm text-[var(--color-success)]">ALWAYS Safety Checks</span>
             </div>
          </div>
        </div>
      </SectionCard>
    </Stack>
  );
}

function DefinePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[1]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Strategy Agent defines the battleground. We accept that "Progressive Disclosure" (hiding advanced features) 
        won't work because the <em>fundamental interaction model</em> differs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Constraint Triangle">
          <div className="space-y-4">
            {[
              { label: 'Safety', desc: 'Prevents errors (Emma)', conflict: 'Speed' },
              { label: 'Speed', desc: 'Immediate execution (Marcus)', conflict: 'Safety' },
              { label: 'Clarity', desc: 'Understanding data (Emma)', conflict: 'Density' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[var(--color-bg-subtle)] rounded-lg">
                <div>
                  <span className="font-bold block">{c.label}</span>
                  <span className="text-xs text-[var(--color-text-secondary)]">{c.desc}</span>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-[var(--color-error-subtle)] text-[var(--color-error)] rounded">
                  Conflicts with {c.conflict}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Success Metrics">
          <div className="space-y-4">
            <div className="p-3 border-l-4 border-[var(--color-primary)] bg-[var(--color-bg-subtle)]">
              <h5 className="font-bold text-sm">For Marcus</h5>
              <div className="flex justify-between mt-2 text-sm">
                <span>Order Entry Time</span>
                <span className="font-bold text-[var(--color-success)]">&lt; 200ms</span>
              </div>
            </div>
            <div className="p-3 border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-subtle)]">
              <h5 className="font-bold text-sm">For Emma</h5>
              <div className="flex justify-between mt-2 text-sm">
                <span>Error Rate</span>
                <span className="font-bold text-[var(--color-success)]">0%</span>
              </div>
            </div>
             <div className="p-3 border-l-4 border-[var(--color-warning)] bg-[var(--color-bg-subtle)]">
              <h5 className="font-bold text-sm">For Business</h5>
              <div className="flex justify-between mt-2 text-sm">
                <span>Codebase</span>
                <span className="font-bold">Single Shared Repo</span>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Why Progressive Disclosure Fails Here" variant="highlight">
         <div className="space-y-4">
           <p className="text-[var(--text-lg)]">
             Usually, we hide complexity behind a "More" button. But Marcus doesn't want to click "More". 
             He wants everything visible <em>now</em>. Emma doesn't just want less data; she wants <em>different</em> data (explanations vs raw feeds).
           </p>
           <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-[var(--color-error-subtle)] rounded text-center">
               <span className="block font-bold text-[var(--color-error)] mb-1">Hiding Complexity</span>
               <span className="text-sm">Annaps Marcus ("Where is my volume chart?!")</span>
             </div>
             <div className="p-4 bg-[var(--color-error-subtle)] rounded text-center">
               <span className="block font-bold text-[var(--color-error)] mb-1">Showing Complexity</span>
               <span className="text-sm">Terrifies Emma ("What is a trailing stop limit?!")</span>
             </div>
           </div>
         </div>
      </SectionCard>
    </Stack>
  );
}

function ExplorePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[2]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        We explore four resolution strategies for the Kobayashi Maru. Only one lets us "win" by redefining the game.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Strategy 1: Prioritize',
            desc: 'Pick a winner. Build for Marcus, ignore Emma (or vice versa).',
            outcome: 'Fail. We lose 50% of the market.',
            color: 'var(--color-error)',
            icon: '⛔'
          },
          {
            title: 'Strategy 2: Compromise',
            desc: 'Meet in the middle. Moderate density, moderate speed.',
            outcome: 'Fail. Too slow for Marcus, too complex for Emma. Nobody loves it.',
            color: 'var(--color-warning)',
            icon: '⚠️'
          },
          {
            title: 'Strategy 3: Separate',
            desc: 'Build two completely different apps (Pro vs Lite).',
            outcome: 'Fail. Double maintenance cost. Feature drift.',
            color: 'var(--color-error)',
            icon: '📉'
          },
          {
            title: 'Strategy 4: Modes',
            desc: 'One engine, two interfaces. Explicit mode switching.',
            outcome: 'Success. User self-selects their reality.',
            color: 'var(--color-success)',
            icon: '✅'
          }
        ].map((s, i) => (
          <SectionCard key={i} title={s.title}>
            <div className="flex gap-3">
              <div className="text-2xl">{s.icon}</div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">{s.desc}</p>
                <p className="text-xs font-bold" style={{ color: s.color }}>{s.outcome}</p>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>

      <Card className="bg-[var(--color-success-subtle)] border-[var(--color-success)]">
        <Card.Body>
          <div className="flex items-start gap-4">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="font-bold mb-1">The Pivot</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We choose <strong>Strategy 4: Modes</strong>. We will treat the interface as a "skin" over a shared engine. 
                Crucially, we will <em>default</em> to the safer mode (Emma's) but allow instant, persistent switching for Marcus.
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
        The UI Agent designs two distinct experiences that share the same DNA (Design System). 
        The challenge is making them feel like the same brand while behaving differently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Emma's View (Lite Mode)" variant="highlight">
          <div className="space-y-4">
             <div className="h-32 bg-[var(--color-bg-subtle)] rounded-lg flex items-center justify-center border border-[var(--color-border)] relative overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-4 bg-[var(--color-bg-muted)] rounded w-3/4"></div>
                <div className="absolute top-12 left-4 h-8 bg-[var(--color-success-subtle)] rounded w-1/3"></div>
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-[var(--color-primary)] text-white text-xs rounded-full">Buy Stock</div>
             </div>
             <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
               <li>• <strong>Visuals:</strong> Generous whitespace, large type</li>
               <li>• <strong>Data:</strong> Simplified graphs (Line only)</li>
               <li>• <strong>Safety:</strong> "Review Order" modal required</li>
               <li>• <strong>Tone:</strong> Helpful, educational</li>
             </ul>
          </div>
        </SectionCard>

        <SectionCard title="Marcus's View (Pro Mode)" variant="highlight">
           <div className="space-y-4">
             <div className="h-32 bg-[var(--color-bg-page)] rounded-lg border border-[var(--color-border)] relative overflow-hidden font-mono text-[8px]">
                <div className="grid grid-cols-4 h-full divide-x divide-[var(--color-border)]">
                   <div className="p-1 space-y-1">
                      <div className="h-2 bg-[var(--color-bg-muted)] w-full"></div>
                      <div className="h-2 bg-[var(--color-bg-muted)] w-full"></div>
                      <div className="h-2 bg-[var(--color-bg-muted)] w-full"></div>
                   </div>
                   <div className="p-1 col-span-2 bg-[#111] text-green-500 flex items-center justify-center">
                      CHART
                   </div>
                   <div className="p-1 bg-[#222]">
                      <div className="bg-red-900 text-red-200 w-full mb-1">SELL</div>
                      <div className="bg-green-900 text-green-200 w-full">BUY</div>
                   </div>
                </div>
             </div>
             <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
               <li>• <strong>Visuals:</strong> High contrast, zero padding</li>
               <li>• <strong>Data:</strong> Candlesticks, depth charts, Level 2</li>
               <li>• <strong>Safety:</strong> Instant execution (One-click)</li>
               <li>• <strong>Tone:</strong> Raw, utilitarian</li>
             </ul>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Shared Components (The DNA)">
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          To maintain sanity, we reuse components but expose "Density" props.
        </p>
        <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg font-mono text-sm">
           &lt;OrderTicket <br/>
           &nbsp;&nbsp;mode={'{isPro ? "compact" : "guided"}'}<br/>
           &nbsp;&nbsp;showConfirmation={'{!isPro}'}<br/>
           /&gt;
        </div>
      </SectionCard>
    </Stack>
  );
}

function ValidatePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[4]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        We test by forcing users into the "wrong" mode. The extreme discomfort confirms that 
        separation was necessary.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Test A: Marcus on Lite Mode">
           <div className="space-y-2">
             <div className="flex items-center gap-2">
               <span className="text-2xl">😤</span>
               <span className="font-bold">Result: Frustration</span>
             </div>
             <p className="text-sm text-[var(--color-text-secondary)]">
               "Why do I have to click three times to sell? The market moved while I was reading your helpful popup!"
             </p>
             <Badge variant="error">Speed Fail</Badge>
           </div>
        </SectionCard>

        <SectionCard title="Test B: Emma on Pro Mode">
           <div className="space-y-2">
             <div className="flex items-center gap-2">
               <span className="text-2xl">😨</span>
               <span className="font-bold">Result: Paralysis</span>
             </div>
             <p className="text-sm text-[var(--color-text-secondary)]">
               "I don't know what any of these blinking lights mean. I'm afraid to touch anything."
             </p>
             <Badge variant="error">Clarity Fail</Badge>
           </div>
        </SectionCard>
      </div>

      <div className="p-4 bg-[var(--color-success-subtle)] rounded-lg border border-[var(--color-success)]/30">
        <h5 className="font-bold text-sm mb-2 text-[var(--color-success)]">The Validation</h5>
        <p className="text-sm text-[var(--color-text-secondary)]">
           The fact that both users failed when swapped confirms that a single interface would have failed everyone. 
           The "Mode Switch" is not just a feature; it is the product's survival mechanism.
        </p>
      </div>
    </Stack>
  );
}

function RefinePhase() {
  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[5]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        The Polish Agent handles the transition. Switching modes shouldn't feel like navigating 
        to a different website—it should feel like the dashboard is transforming.
      </p>

      <SectionCard title="The Switch Interaction">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {[
             { step: 'Trigger', desc: 'Toggle in header, clearly labeled' },
             { step: 'Transition', desc: '300ms layout animation (Framer Motion)' },
             { step: 'Persistence', desc: 'Remember choice in LocalStorage' }
           ].map((s, i) => (
             <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg text-center">
               <span className="block text-xs font-bold uppercase text-[var(--color-text-tertiary)]">{s.step}</span>
               <span className="block font-medium mt-1">{s.desc}</span>
             </div>
           ))}
         </div>
      </SectionCard>

      <SectionCard title="Real World Examples">
         <div className="space-y-4">
           <div className="flex items-start gap-3">
             <Badge variant="default">Coinbase</Badge>
             <p className="text-sm">Main app vs "Advanced Trade". Completely different UIs, same account.</p>
           </div>
           <div className="flex items-start gap-3">
             <Badge variant="default">Robinhood</Badge>
             <p className="text-sm">Initially hid complexity, faced backlash from pros. Now adding advanced charts.</p>
           </div>
           <div className="flex items-start gap-3">
             <Badge variant="default">Photoshop</Badge>
             <p className="text-sm">Workspaces (Photography, 3D, Motion) that completely reconfigure the panels.</p>
           </div>
         </div>
      </SectionCard>

      <div className="mt-8 p-6 bg-[var(--color-primary)] text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-2">The Lesson</h3>
        <p className="text-primary-foreground/90">
           When users have mutually exclusive needs, don't compromise. 
           <strong>Split the reality.</strong> Give each user the specialized tool they need, 
           even if it means building the UI twice. A tailored experience is always better than a mediocre generic one.
        </p>
      </div>
    </Stack>
  );
}
