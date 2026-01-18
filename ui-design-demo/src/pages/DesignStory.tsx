import { Container } from '../components/ui/Container';
import { Stack } from '../components/ui/Stack';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ThemeToggle';

export function DesignStory() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-sans transition-colors duration-200">
      <StoryHeader />
      <HeroSection />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <InteractiveDemo />
      <StoryFooter />
    </div>
  );
}

function StoryHeader() {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-lg)]">
              Ui
            </div>
            <span className="font-bold text-[var(--text-lg)] tracking-tight">
              Optimizer
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
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
            THE NARRATIVE
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold leading-[1] tracking-tight">
            The Story of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Intuitive Design
            </span>
          </h1>
          <p className="text-[var(--text-xl)] text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Great interfaces don't happen by accident. They are told through a language of constraints, hierarchy, and empathy. This is how we translate human behavior into pixels.
          </p>
          <div className="pt-4">
             <div className="w-px h-24 bg-gradient-to-b from-[var(--color-border)] to-[var(--color-primary)] mx-auto" />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function ChapterOne() {
  return (
    <div className="py-24 border-t border-[var(--color-border)]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary-subtle)] to-[var(--color-accent-subtle)] rounded-[var(--radius-3xl)] opacity-30 blur-2xl -z-10" />
            <Card variant="outlined" className="bg-[var(--color-bg-surface)] p-8">
              <Stack gap={6}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-bg-subtle)] flex items-center justify-center text-2xl">👀</div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 bg-[var(--color-text-primary)] rounded opacity-80" />
                    <div className="h-3 w-full bg-[var(--color-text-secondary)] rounded opacity-20" />
                    <div className="h-3 w-5/6 bg-[var(--color-text-secondary)] rounded opacity-20" />
                  </div>
                </div>
                <div className="space-y-3 pl-16">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-1.5" />
                     <div className="flex-1 h-3 bg-[var(--color-text-secondary)] rounded opacity-10" />
                   </div>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-1.5" />
                     <div className="flex-1 h-3 bg-[var(--color-text-secondary)] rounded opacity-10" />
                   </div>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-1.5" />
                     <div className="flex-1 h-3 bg-[var(--color-text-secondary)] rounded opacity-10" />
                   </div>
                </div>
              </Stack>
            </Card>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <ChapterLabel number="01" title="Understanding Users" />
            <h2 className="text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)]">
              We scan before we read.
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Human attention is a scarce resource. Users don't read UI like a book; they forage for information. 
              Visual hierarchy must follow natural eye movements—the F-pattern for text-heavy content, the Z-pattern for scanning landing pages.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Good design anticipates where the eye wants to go and places the most critical information exactly in that path.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ChapterTwo() {
  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <ChapterLabel number="02" title="From Chaos to Constraints" />
            <h2 className="text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)]">
              Freedom through limitation.
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Infinite choices paralyze both users and designers. The "Paradox of Choice" states that more options lead to anxiety, not freedom.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Design tokens act as guardrails. Instead of "16px here, 15px there," we use <code className="bg-[var(--color-bg-muted)] px-2 py-0.5 rounded text-sm font-mono text-[var(--color-primary)]">--space-4</code>. 
              This consistency breeds trust. When things align perfectly, the interface feels "solid" and professional.
            </p>
          </div>
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <Card variant="filled" className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border)] transform rotate-[-2deg] z-10 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-[var(--color-error)] text-xl font-bold">Chaos</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] font-mono">margin: 17px</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] font-mono">color: #3f4a51</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] font-mono">font-size: 13.5px</div>
                  </div>
                </Card>
                <Card variant="elevated" className="p-6 border border-[var(--color-primary)] bg-[var(--color-bg-surface)] transform rotate-[2deg] z-20 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-[var(--color-primary)] text-xl font-bold">Order</div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">--space-4</div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">--color-text-secondary</div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">--text-sm</div>
                  </div>
                </Card>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ChapterThree() {
  return (
    <div className="py-24">
      <Container size="lg">
        <Stack gap={12} align="center">
          <div className="text-center max-w-3xl">
            <ChapterLabel number="03" title="The Language of Hierarchy" />
            <h2 className="text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)] mb-6">
              Speaking without words.
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)]">
              We communicate importance through contrast. Size screams, color guides, and whitespace breathes. 
              Gestalt principles tell us that items grouped together are perceived as related.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
             <PrincipleCard 
               title="Size & Weight"
               description="Larger, bolder elements capture attention first. Use this to signal what matters most."
               visual={
                 <div className="flex flex-col items-center gap-2">
                    <div className="text-[2rem] font-bold text-[var(--color-text-primary)]">Big</div>
                    <div className="text-[1rem] text-[var(--color-text-tertiary)]">Small</div>
                 </div>
               }
             />
             <PrincipleCard 
               title="Color & Contrast"
               description="Color should be functional, not just decorative. Primary actions must pop against the background."
               visual={
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] shadow-lg" />
                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-muted)]" />
                 </div>
               }
             />
             <PrincipleCard 
               title="Proximity"
               description="Items close to each other are perceived as a group. Spacing is the invisible glue of UI."
               visual={
                 <div className="flex gap-6">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded bg-[var(--color-text-secondary)]" />
                      <div className="w-4 h-4 rounded bg-[var(--color-text-secondary)]" />
                    </div>
                    <div className="w-4 h-4 rounded bg-[var(--color-text-tertiary)]" />
                 </div>
               }
             />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

function ChapterFour() {
  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <Card variant="outlined" className="font-mono text-sm bg-[#1e1e1e] text-gray-300 p-6 overflow-hidden">
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400 ml-2">Button</span>
                    <span className="text-white ml-2">=</span>
                    <span className="text-yellow-300 ml-2">()</span>
                    <span className="text-blue-400 ml-2">=&gt;</span>
                    <span className="text-white ml-2">{`{`}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>
                    <span className="text-white ml-2">(</span>
                  </div>
                  <div className="pl-8 text-green-400">
                    &lt;button className="bg-[var(--color-primary)] p-4" /&gt;
                  </div>
                  <div className="pl-4 text-white">);</div>
                  <div className="text-white">{`}`}</div>
                  <div className="mt-4 text-gray-500">// Semantic names help AI agents</div>
                  <div className="text-gray-500">// understand intent immediately.</div>
                </div>
             </Card>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <ChapterLabel number="04" title="Making it Work for AI" />
            <h2 className="text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)]">
              The semantics of generation.
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              When we name things `primary`, `danger`, or `surface`, we give AI agents the context they need to build reliably.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Predictable patterns lead to predictable generation. By restricting the design system to a set of meaningful tokens, we liberate the AI to focus on structure and logic rather than pixel-pushing.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function InteractiveDemo() {
  return (
    <div className="py-24 border-t border-[var(--color-border)]">
      <Container size="lg">
        <Stack gap={8} align="center" className="text-center mb-12">
           <h2 className="text-[var(--text-3xl)] font-bold">See the Difference</h2>
           <p className="text-[var(--color-text-secondary)] max-w-xl">
             Experience how proper spacing, hierarchy, and color transform a chaotic interface into a usable one.
           </p>
        </Stack>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-subtle)] to-[var(--color-accent-subtle)] transform rotate-1 rounded-[var(--radius-2xl)] -z-10" />
          
          <Card className="bg-[var(--color-bg-page)] overflow-hidden transition-all duration-500">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-[var(--color-border)] bg-white/50 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-xs font-bold text-red-500 uppercase tracking-widest opacity-50">Before</div>
                {/* Chaos Mode */}
                <div style={{ padding: '13px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>User Profile</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                     <div style={{ width: '45px', height: '45px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>
                     <div>
                       <div style={{ fontWeight: 'bold', fontSize: '14px' }}>John Doe</div>
                       <div style={{ fontSize: '11px', color: '#666' }}>Software Eng</div>
                     </div>
                  </div>
                  <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px', border: 'none' }}>Follow</button>
                  <button style={{ border: '1px solid gray', padding: '10px', marginTop: '5px', background: 'transparent' }}>Message</button>
                </div>
              </div>

              <div className="p-8 relative">
                <div className="absolute top-2 left-2 text-xs font-bold text-[var(--color-success)] uppercase tracking-widest opacity-50">After</div>
                 {/* Designed Mode */}
                 <Stack gap={4}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">
                        JD
                      </div>
                      <div>
                        <h3 className="text-[var(--text-lg)] font-bold text-[var(--color-text-primary)]">John Doe</h3>
                        <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Software Engineer</p>
                      </div>
                    </div>
                    <Stack direction="horizontal" gap={3}>
                      <Button variant="primary" size="sm" fullWidth>Follow</Button>
                      <Button variant="secondary" size="sm" fullWidth>Message</Button>
                    </Stack>
                 </Stack>
              </div>
            </div>
            
            <div className="bg-[var(--color-bg-subtle)] p-4 border-t border-[var(--color-border)] text-center">
               <p className="text-sm text-[var(--color-text-secondary)]">
                 Notice the aligned spacing, consistent typography, and clear visual hierarchy on the right.
               </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

function StoryFooter() {
  return (
    <div className="py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)] text-center">
      <Container size="md">
        <Stack gap={6} align="center">
          <h2 className="text-[var(--text-3xl)] font-bold">Start Your Story</h2>
          <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-xl">
             Explore the components that make this possible, or dive into the code.
          </p>
          <div className="flex gap-4">
             <Button variant="primary" size="lg" onClick={() => window.location.href = '/examples'}>
               View Examples
             </Button>
             <Button variant="secondary" size="lg" onClick={() => window.location.href = '/sandbox'}>
               Open Sandbox
             </Button>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

// Helpers
function ChapterLabel({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[var(--color-primary)] font-mono font-bold text-xl opacity-50">{number}</span>
      <span className="h-px w-8 bg-[var(--color-border)]" />
      <span className="text-[var(--color-text-tertiary)] uppercase tracking-widest text-sm font-semibold">{title}</span>
    </div>
  );
}

function PrincipleCard({ title, description, visual }: { title: string, description: string, visual: React.ReactNode }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="h-32 bg-[var(--color-bg-subtle)] flex items-center justify-center border-b border-[var(--color-border)]">
        {visual}
      </div>
      <Card.Body className="flex-1">
        <h3 className="text-[var(--text-lg)] font-bold mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
      </Card.Body>
    </Card>
  );
}
