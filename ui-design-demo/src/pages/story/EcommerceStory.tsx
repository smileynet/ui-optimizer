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

export function EcommerceStory() {
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
            <span className="font-medium">E-commerce</span>
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
        <Button variant="primary" onClick={() => navigate('/examples/ecommerce')}>
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
  const [selectedPersona, setSelectedPersona] = useState<'jessica' | 'tom' | null>(null);

  const jtbds = [
    { id: 1, situation: 'When I need something specific', motivation: 'I want to search and filter precisely', outcome: 'so I find exactly what I need fast', personas: ['jessica'] },
    { id: 2, situation: 'When I\'m browsing for ideas', motivation: 'I want to see curated collections and trending items', outcome: 'so I discover products I didn\'t know I wanted', personas: ['jessica'] },
    { id: 3, situation: 'When I\'m ready to buy', motivation: 'I want a fast, trustworthy checkout', outcome: 'so I complete my purchase with confidence', personas: ['jessica', 'tom'] },
    { id: 4, situation: 'When I\'m unsure about a product', motivation: 'I want to see reviews and detailed information', outcome: 'so I can make an informed decision', personas: ['tom'] },
    { id: 5, situation: 'When comparing multiple options', motivation: 'I want to save and compare products side-by-side', outcome: 'so I can choose the best value', personas: ['tom'] },
  ];

  const isJtbdHighlighted = (personas: string[]) => {
    if (!selectedPersona) return true;
    return personas.includes(selectedPersona);
  };

  return (
    <Stack gap={8}>
      <PhaseHeader phase={phases[0]} />
      
      <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
        E-commerce is about trust and reducing friction. Every extra click, confusing label, or missing 
        piece of information is a reason for customers to abandon their purchase. Understanding shopping 
        psychology is as important as understanding user needs.
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
            selectedPersona === 'jessica' 
              ? "ring-2 ring-[var(--color-warning)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'tom' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-warning)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'jessica' ? null : 'jessica')}
        >
          <SectionCard title="Primary Persona" variant="highlight">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-warning-subtle)] flex items-center justify-center text-2xl">
                  🛍️
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Jessica Park</h4>
                  <p className="text-[var(--color-text-secondary)]">Busy Professional, Age 34</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I know what I want—just let me buy it quickly. But if I'm browsing, show me what's popular and well-reviewed."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Complete purchases quickly</li>
                    <li>• Find products that match needs</li>
                    <li>• Feel confident in purchases</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Hidden shipping costs</li>
                    <li>• Forced account creation</li>
                    <li>• Unclear return policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div 
          className={cn(
            "cursor-pointer transition-all duration-200",
            selectedPersona === 'tom' 
              ? "ring-2 ring-[var(--color-info)] ring-offset-2 rounded-[var(--radius-lg)]" 
              : selectedPersona === 'jessica' 
                ? "opacity-50" 
                : "hover:ring-2 hover:ring-[var(--color-info)]/50 rounded-[var(--radius-lg)]"
          )}
          onClick={() => setSelectedPersona(selectedPersona === 'tom' ? null : 'tom')}
        >
          <SectionCard title="Secondary Persona">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-info-subtle)] flex items-center justify-center text-2xl">
                  🔍
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-lg)]">Tom Harrison</h4>
                  <p className="text-[var(--color-text-secondary)]">Research-Oriented Shopper, Age 45</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic mt-2">
                    "I compare everything. I need detailed specs, reviews, and the ability to save items for later comparison."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Goals</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Compare products thoroughly</li>
                    <li>• Find best value for money</li>
                    <li>• Make informed decisions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-[var(--color-text-tertiary)] mb-2">Frustrations</h5>
                  <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
                    <li>• Incomplete specifications</li>
                    <li>• Fake or unhelpful reviews</li>
                    <li>• Can't compare side-by-side</li>
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
              <Badge variant={selectedPersona === 'jessica' ? 'warning' : 'info'}>
                {selectedPersona === 'jessica' ? 'Jessica' : 'Tom'}
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
                jtbd.personas.includes('jessica') && jtbd.personas.includes('tom')
                  ? "border-[var(--color-success)]"
                  : jtbd.personas.includes('jessica')
                    ? "border-[var(--color-warning)]"
                    : "border-[var(--color-info)]",
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
                  {jtbd.personas.includes('jessica') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center font-bold" title="Jessica">J</span>
                  )}
                  {jtbd.personas.includes('tom') && (
                    <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center font-bold" title="Tom">T</span>
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
                Two distinct shopping modes identified: goal-oriented (knows what they want) and exploratory 
                (browsing/researching). Trust and speed are universal needs. Design must serve both modes.
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
        E-commerce success is measured in conversions and cart abandonment rates. Every design 
        decision should reduce friction and build trust. The problem isn't showing products—it's 
        helping people feel confident buying them.
      </p>

      <SectionCard title="Problem Statement" variant="highlight">
        <div className="p-6 bg-[var(--color-bg-subtle)] rounded-lg text-center">
          <p className="text-[var(--text-xl)] leading-relaxed">
            <span className="font-bold text-[var(--color-warning)]">Online shoppers</span> need a way to{' '}
            <span className="font-bold text-[var(--color-warning)]">find, evaluate, and purchase products with confidence</span>{' '}
            because <span className="font-bold">they can't physically examine items before buying</span>, 
            but currently <span className="font-bold text-[var(--color-error)]">hidden costs, unclear policies, 
            and friction-heavy checkouts cause 70% cart abandonment</span>.
          </p>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Success Metrics">
          <div className="space-y-4">
            {[
              { metric: 'Cart abandonment rate', target: '< 50%', current: '70%' },
              { metric: 'Time to first purchase', target: '< 3 minutes', current: '8+ minutes' },
              { metric: 'Product page to cart rate', target: '> 15%', current: '8%' },
              { metric: 'Guest checkout usage', target: '> 60%', current: 'N/A (forced signup)' },
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

        <SectionCard title="Trust Signals Required">
          <div className="space-y-3">
            {[
              { signal: 'Price Transparency', description: 'Show total cost including shipping upfront' },
              { signal: 'Social Proof', description: 'Display reviews, ratings, and purchase counts' },
              { signal: 'Security Indicators', description: 'Payment badges, HTTPS, privacy assurance' },
              { signal: 'Clear Policies', description: 'Return/refund policy visible before purchase' },
            ].map((s, i) => (
              <div key={i} className="p-3 bg-[var(--color-bg-subtle)] rounded-lg">
                <h5 className="font-bold text-sm">{s.signal}</h5>
                <p className="text-sm text-[var(--color-text-secondary)]">{s.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Serving Multiple Personas" variant="highlight">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our design must serve both Jessica (quick buyer) and Tom (researcher) with different shopping styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-warning-subtle)] rounded-lg border border-[var(--color-warning)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">J</span>
                For Jessica (Quick Buyer)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• One-click reorder from purchase history</li>
                <li>• Express checkout with saved payment</li>
                <li>• Clear "Buy Now" CTAs above the fold</li>
                <li>• Streamlined mobile checkout flow</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--color-info-subtle)] rounded-lg border border-[var(--color-info)]/30">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center">T</span>
                For Tom (Researcher)
              </h5>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Detailed specifications and comparisons</li>
                <li>• Verified reviews with helpful/not helpful</li>
                <li>• Save to wishlist for later comparison</li>
                <li>• Side-by-side product comparison tool</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-[var(--color-primary-subtle)] rounded-lg">
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Flexibility Strategy: Product pages show essential info prominently (for Jessica) with expandable details sections (for Tom). Both paths lead to the same streamlined checkout.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Resolving Competing Needs" variant="highlight">
        <div className="space-y-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Jessica wants speed; Tom wants depth. These goals can conflict directly. Here's how we design 
            a single experience that serves both without forcing either to compromise.
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
                  jessica: 'Price, image, "Buy" button—nothing more', 
                  tom: 'Specs, reviews, comparisons, Q&A',
                  resolution: 'Progressive Disclosure',
                  how: 'Above-fold: hero image + price + CTA. Below-fold: tabs for Description, Specs, Reviews, Q&A'
                },
                { 
                  conflict: 'Decision Speed', 
                  jessica: 'Already decided, wants instant checkout', 
                  tom: 'Needs time to compare, save, return later',
                  resolution: 'Multiple Checkout Paths',
                  how: '"Buy Now" for impulse + "Add to Cart" for later + "Save to Wishlist" for comparison'
                },
                { 
                  conflict: 'Account Requirements', 
                  jessica: 'Wants saved payment & address', 
                  tom: 'May not want to commit to account yet',
                  resolution: 'Tiered Account Benefits',
                  how: 'Guest checkout available; signed-in users get express checkout + order history + wishlist'
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[var(--color-bg-subtle)] rounded-lg border border-[var(--color-border)]">
                  <div className="flex items-start justify-between mb-3">
                    <h6 className="font-bold text-sm">{item.conflict}</h6>
                    <Badge variant="success" size="sm">{item.resolution}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center shrink-0">J</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.jessica}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-info)] text-white text-xs flex items-center justify-center shrink-0">T</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item.tom}</span>
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
                { pattern: 'Hidden Costs', avoided: 'Surprise shipping at checkout', instead: 'Show shipping estimate on product page' },
                { pattern: 'Forced Account', avoided: 'Mandatory signup before purchase', instead: 'Guest checkout + optional account creation after' },
                { pattern: 'Review Manipulation', avoided: 'Only positive reviews, no verification', instead: 'Verified purchases + helpful/not helpful voting' },
                { pattern: 'Comparison Block', avoided: 'No way to compare products', instead: 'Wishlist + explicit "Compare" feature' },
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
            <h5 className="font-bold text-sm mb-2 text-[var(--color-info)]">Design Pattern Applied: Parallel Paths</h5>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              Rather than a single linear flow, we provide parallel paths optimized for each shopping mode.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Fast Path: Search → Product → Buy Now → Checkout</span>
              <span className="px-2 py-1 bg-[var(--color-bg-surface)] rounded text-xs">Research Path: Browse → Compare → Save → Return → Cart → Checkout</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="How Might We Questions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How might we show total cost before users reach checkout?',
            'How might we make product information feel complete and trustworthy?',
            'How might we allow quick purchases without forcing account creation?',
            'How might we reduce perceived risk of online purchases?',
            'How might we help browsers become buyers?',
            'How might we make the checkout feel secure and simple?',
          ].map((q, i) => (
            <div key={i} className="p-3 bg-[var(--color-warning-subtle)] rounded-lg text-sm">
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
                Problem centered on trust and friction, not aesthetics. Metrics focus on conversion, 
                not vanity. Trust signals identified as design requirements. Ready to explore solutions.
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
        E-commerce patterns are well-established, but the challenge is balancing information density 
        with visual appeal, and simplicity with the depth that research-oriented shoppers need.
      </p>

      <SectionCard title="Solution Hypotheses">
        <div className="space-y-4">
          {[
            { 
              name: 'A: Traditional Grid + Sidebar Filters', 
              description: 'Product grid with filterable sidebar, category navigation',
              pros: ['Familiar to users', 'Scalable to large catalogs', 'Good for filtering'],
              cons: ['Can feel cluttered', 'Sidebar competes for attention'],
              score: 8
            },
            { 
              name: 'B: Visual-First Cards', 
              description: 'Large product images, minimal text, hover reveals details',
              pros: ['Clean, modern feel', 'Great for visual products', 'Instagram-like'],
              cons: ['Less info density', 'Requires good photography'],
              score: 7
            },
            { 
              name: 'C: List View with Comparison', 
              description: 'Detailed list with specs, built-in comparison table',
              pros: ['Great for research', 'All info visible', 'Easy comparison'],
              cons: ['Less visually appealing', 'Overwhelming for browsers'],
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

      <SectionCard title="User Flow: Purchase Journey">
        <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">1</span>
              <span>User lands on homepage → Featured products + search bar prominent</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">2</span>
              <span>Browses category OR searches → Grid with quick filters + sort options</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">3</span>
              <span>Clicks product → Full details, reviews, shipping estimate, add to cart</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-warning)] text-white text-xs flex items-center justify-center">4</span>
              <span>Adds to cart → Slide-out cart preview with total, continue or checkout</span>
            </div>
            <div className="ml-8 text-[var(--color-text-tertiary)]">↓</div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--color-success)] text-white text-xs flex items-center justify-center">✓</span>
              <span>Checkout → Guest option, single page, clear progress, order confirmation</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Page Structure">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-4 bg-[var(--color-primary-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-primary)] mb-2">Homepage</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Hero with search</li>
              <li>• Featured products</li>
              <li>• Category cards</li>
              <li>• Social proof banner</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Category/Search</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Filter sidebar</li>
              <li>• Sort dropdown</li>
              <li>• Product grid</li>
              <li>• Pagination/infinite</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-text-tertiary)] mb-2">Product Detail</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Image gallery</li>
              <li>• Price + shipping</li>
              <li>• Add to cart CTA</li>
              <li>• Reviews section</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--color-success-subtle)] rounded-lg">
            <h5 className="font-bold text-xs uppercase text-[var(--color-success)] mb-2">Checkout</h5>
            <ul className="space-y-1 text-[var(--color-text-secondary)]">
              <li>• Guest option</li>
              <li>• Single page form</li>
              <li>• Order summary</li>
              <li>• Trust badges</li>
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
                Recommendation: Solution A (Grid + Filters) with visual elements from B (quality images, 
                clean cards). Checkout designed for speed with guest option. Trust signals integrated 
                throughout the journey.
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
        E-commerce design is about strategic emphasis: what draws the eye, what builds trust, 
        what compels action. Every pixel serves conversion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Component Inventory">
          <div className="space-y-3">
            {[
              { component: 'ProductCard', status: 'new', usage: 'Grid display with image, price, rating' },
              { component: 'PriceDisplay', status: 'new', usage: 'Price with sale indication' },
              { component: 'RatingStars', status: 'new', usage: 'Visual star rating + count' },
              { component: 'AddToCart', status: 'new', usage: 'Primary CTA button with quantity' },
              { component: 'CartPreview', status: 'new', usage: 'Slide-out cart summary' },
              { component: 'FilterSidebar', status: 'new', usage: 'Faceted search filters' },
              { component: 'Badge', status: 'existing', usage: '"Sale", "New", "Low Stock" labels' },
              { component: 'Button', status: 'existing', usage: 'CTAs throughout' },
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

        <SectionCard title="Visual Hierarchy">
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-bg-subtle)] rounded font-mono text-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-error)]" />
                  <span className="text-[var(--color-text-secondary)]">1. Price (largest, boldest)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-warning)]" />
                  <span className="text-[var(--color-text-secondary)]">2. Product Image (visual anchor)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-success)]" />
                  <span className="text-[var(--color-text-secondary)]">3. Add to Cart CTA (action driver)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-info)]" />
                  <span className="text-[var(--color-text-secondary)]">4. Reviews (trust builder)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-text-tertiary)]" />
                  <span className="text-[var(--color-text-secondary)]">5. Details (supporting info)</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              Card aspect ratio: <code className="bg-[var(--color-bg-muted)] px-1 rounded">4:5</code><br/>
              Image container: <code className="bg-[var(--color-bg-muted)] px-1 rounded">aspect-square</code><br/>
              Grid gap: <code className="bg-[var(--color-bg-muted)] px-1 rounded">--space-6</code>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Design Decisions with Rationale">
        <div className="space-y-4">
          {[
            {
              decision: 'Sticky "Add to Cart" on mobile',
              rationale: 'JTBD #3: Users want quick purchases. On mobile, scrolling hides the buy button. Sticky CTA keeps conversion action always accessible.',
              tokens: ['sticky bottom-0', 'z-50', '--shadow-lg']
            },
            {
              decision: 'Price shown on hover + in cart preview',
              rationale: 'Trust signal: No hidden costs. Users should never be surprised by price at checkout. Show running total everywhere.',
              tokens: ['text-[var(--text-xl)]', 'font-bold', '--color-text-primary']
            },
            {
              decision: 'Guest checkout as default option',
              rationale: 'Friction reduction: Forced signup is #2 reason for cart abandonment. Guest first, account creation optional post-purchase.',
              tokens: ['Button variant="primary"', 'RadioGroup', 'Account optional']
            },
            {
              decision: 'Reviews with verified purchase badge',
              rationale: 'Trust signal: Persona frustration about fake reviews. "Verified Purchase" badge adds credibility to social proof.',
              tokens: ['Badge variant="success"', 'RatingStars', '--space-4 gap']
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
                Visual hierarchy prioritizes conversion drivers. New components follow design system patterns. 
                Trust signals integrated as design decisions, not afterthoughts. Ready to validate.
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
        E-commerce accessibility directly impacts revenue—users who can't navigate can't buy. 
        Beyond compliance, accessible design often improves usability for everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="Accessibility Audit">
          <div className="space-y-3">
            {[
              { check: 'Color contrast (4.5:1)', status: 'pass' },
              { check: 'Image alt text descriptive', status: 'warning', note: 'Some product images generic' },
              { check: 'Form labels associated', status: 'pass' },
              { check: 'Keyboard navigation', status: 'pass' },
              { check: 'Price changes announced', status: 'fail', note: 'Cart total not in live region' },
              { check: 'Error messages clear', status: 'pass' },
              { check: 'Touch targets (44px)', status: 'warning', note: 'Filter checkboxes too small' },
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

        <SectionCard title="Conversion Audit">
          <div className="space-y-3">
            {[
              { check: 'CTA visibility', score: 9, note: 'Primary actions clear' },
              { check: 'Price transparency', score: 8, note: 'Shipping shown in cart' },
              { check: 'Trust signals present', score: 7, note: 'Need more security badges' },
              { check: 'Checkout simplicity', score: 8 },
              { check: 'Error recovery', score: 9 },
              { check: 'Mobile optimization', score: 7, note: 'Filter UX needs work' },
            ].map((h, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm">{h.check}</span>
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
            { severity: 'Major', issue: 'Cart total changes not announced to screen readers', fix: 'Add aria-live="polite" region for cart updates' },
            { severity: 'Minor', issue: 'Product image alt text too generic', fix: 'Use descriptive alt including product name and key features' },
            { severity: 'Minor', issue: 'Filter checkboxes below 44px touch target', fix: 'Increase clickable area with padding or larger hit box' },
            { severity: 'Minor', issue: 'Missing security badges on checkout', fix: 'Add SSL, payment processor, and guarantee badges' },
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
                1 Major accessibility issue (cart announcements) and 3 Minor issues identified. 
                Trust signal coverage needs improvement. All fixable in refinement phase.
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
        E-commerce polish is about delight and reassurance: micro-interactions that feel premium, 
        feedback that builds confidence, and details that reduce purchase anxiety.
      </p>

      <SectionCard title="Issue Resolutions">
        <div className="space-y-4">
          {[
            {
              issue: 'Cart total changes not announced',
              resolution: 'Added aria-live region that announces cart updates',
              code: '<div aria-live="polite" aria-atomic="true">Cart total: {total}</div>',
              verified: true
            },
            {
              issue: 'Generic product alt text',
              resolution: 'Updated alt generation to include product name, color, and type',
              code: 'alt="{product.name} - {product.color} {product.category}"',
              verified: true
            },
            {
              issue: 'Small filter touch targets',
              resolution: 'Wrapped checkboxes in 44px minimum touch area with padding',
              code: '<label className="min-h-[44px] flex items-center">',
              verified: true
            },
            {
              issue: 'Missing trust badges',
              resolution: 'Added SSL, Stripe, and satisfaction guarantee badges to checkout',
              code: '<TrustBadges items={["ssl", "stripe", "guarantee"]} />',
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
            { element: 'Add to Cart button', interaction: 'Pulse animation + checkmark on success' },
            { element: 'Product images', interaction: 'Zoom on hover, gallery swipe on mobile' },
            { element: 'Cart icon', interaction: 'Bounce animation when item added' },
            { element: 'Price changes', interaction: 'Number roll animation for totals' },
            { element: 'Filter selection', interaction: 'Instant results update with skeleton loading' },
            { element: 'Checkout steps', interaction: 'Progress indicator with completion checkmarks' },
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
            { category: 'Conversion', checks: ['CTAs prominent', 'Prices clear', 'Guest checkout works'] },
            { category: 'Trust', checks: ['Badges visible', 'Reviews display', 'Policies linked'] },
            { category: 'Accessibility', checks: ['Screen reader OK', 'Keyboard works', 'Touch targets met'] },
            { category: 'Performance', checks: ['Images optimized', 'Lazy loading', 'Fast checkout'] },
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
                All validation issues resolved, trust signals enhanced, micro-interactions polished. 
                The e-commerce experience prioritizes conversion while maintaining accessibility. View the live example.
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
    <div className="py-16 bg-gradient-to-br from-[var(--color-warning)] to-[var(--color-error)] text-white">
      <Container size="md">
        <Stack gap={6} align="center" className="text-center">
          <h2 className="text-[var(--text-3xl)] font-bold">See the Final Result</h2>
          <p className="text-lg opacity-90 max-w-xl">
            Experience the e-commerce interface built through this workflow. Toggle design notes to see
            how every decision optimizes for conversion and trust.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/examples/ecommerce')}
            className="bg-white text-[var(--color-warning)] hover:bg-white/90"
          >
            View Live Store →
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
