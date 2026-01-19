import * as React from 'react';
import { 
  PersonaSwitcherProvider, 
  PersonaSwitcher, 
  usePersona,
  Card,
  Button,
  Badge,
  DesignCallout,
  CalloutProvider, 
  CalloutToggle 
} from '../../components/ui';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../../components/ThemeToggle';

// --- Types & Config ---
const tradingPersonas = [
  { id: 'marcus', name: 'Marcus', avatar: 'M', description: 'Day Trader - Speed & density' },
  { id: 'emma', name: 'Emma', avatar: 'E', description: 'Retail Investor - Simplicity & guidance' }
];

function IconTrendingUp({ className }: { className?: string }) {

  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function IconBell({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );
}

function IconInfo({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );
}

function PersonaElement({ 
  persona, 
  children, 
  className,
  blockLayout = false
}: { 
  persona: 'marcus' | 'emma' | 'both'; 
  children: React.ReactNode;
  className?: string;
  blockLayout?: boolean;
}) {
  const { activePersonaId } = usePersona();
  
  // If no persona selected, show everything fully
  if (!activePersonaId) return <div className={className}>{children}</div>;
  
  const isRelevant = persona === 'both' || activePersonaId === persona;
  
  if (!isRelevant && blockLayout) return null;

  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-in-out origin-top", 
        !isRelevant && "opacity-20 grayscale blur-[1px] pointer-events-none scale-[0.98] select-none",
        className
      )}
      data-persona={persona}
      aria-hidden={!isRelevant}
    >
      {children}
    </div>
  );
}

function TradeoffCallout({ 
  title, 
  marcusNeeds, 
  emmaNeeds, 
  conflict
}: { 
  title: string; 
  marcusNeeds: string; 
  emmaNeeds: string; 
  conflict: string;
}) {
  return (
    <DesignCallout title={title} variant="principle" className="mb-6">
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        <div className="bg-[var(--color-bg-subtle)] p-3 rounded border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold">M</span>
            <span className="text-xs font-bold uppercase text-[var(--color-text-secondary)]">Marcus needs</span>
          </div>
          <p className="text-sm font-medium">{marcusNeeds}</p>
        </div>
        <div className="bg-[var(--color-bg-subtle)] p-3 rounded border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold">E</span>
            <span className="text-xs font-bold uppercase text-[var(--color-text-secondary)]">Emma needs</span>
          </div>
          <p className="text-sm font-medium">{emmaNeeds}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-[var(--color-border-strong)] border-dashed">
        <p className="text-sm"><strong>The Conflict:</strong> {conflict}</p>
      </div>
    </DesignCallout>
  );
}

const STOCK_DATA = [
  { sym: 'AAPL', price: 184.25, chg: 1.25, pct: 0.68 },
  { sym: 'MSFT', price: 405.30, chg: -2.10, pct: -0.52 },
  { sym: 'GOOGL', price: 142.65, chg: 0.85, pct: 0.60 },
  { sym: 'AMZN', price: 171.80, chg: 1.10, pct: 0.64 },
  { sym: 'NVDA', price: 680.45, chg: 15.20, pct: 2.28 },
];

function Ticker() {
  return (
    <div className="space-y-4">
      <PersonaElement persona="marcus">
        <div className="bg-black text-[#0f0] font-mono text-[11px] p-1 overflow-x-auto whitespace-nowrap flex gap-4 border-b border-[#333]">
          {[...STOCK_DATA, ...STOCK_DATA, ...STOCK_DATA].map((s, i) => (
            <span key={i} className="flex gap-1">
              <span className="text-white font-bold">{s.sym}</span>
              <span>{s.price.toFixed(2)}</span>
              <span className={s.chg >= 0 ? 'text-[#0f0]' : 'text-[#f00]'}>
                {s.chg > 0 ? '▲' : '▼'}{Math.abs(s.chg).toFixed(2)}
              </span>
            </span>
          ))}
        </div>
      </PersonaElement>

      <PersonaElement persona="emma">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STOCK_DATA.slice(0, 5).map((s, i) => (
            <Card key={i} className="bg-[var(--color-bg-surface)] hover:shadow-md transition-shadow">
              <Card.Body className="p-3">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-[var(--text-lg)]">{s.sym}</h4>
                    <span className="text-[var(--text-xs)] text-[var(--color-text-secondary)]">Apple Inc.</span>
                  </div>
                  <Badge variant={s.chg >= 0 ? 'success' : 'error'} size="sm">
                    {s.chg > 0 ? '+' : ''}{s.pct}%
                  </Badge>
                </div>
                <div className="text-[var(--text-xl)] font-bold mt-2">${s.price.toFixed(2)}</div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </PersonaElement>
    </div>
  );
}

function OrderPanel() {
  return (
    <div className="h-full">
      <PersonaElement persona="marcus" className="h-full">
        <Card className="h-full bg-[#111] text-gray-300 border-[#333]">
          <Card.Header className="py-2 border-[#333]">
            <span className="text-xs font-mono text-[#666]">[ORDER_ENTRY]</span>
          </Card.Header>
          <Card.Body className="p-2 space-y-2 font-mono text-xs">
            <div className="grid grid-cols-2 gap-1">
              <input type="text" placeholder="SYM" className="bg-[#222] border border-[#444] p-1 text-white uppercase focus:border-[#0f0] outline-none" defaultValue="AAPL" />
              <input type="text" placeholder="QTY" className="bg-[#222] border border-[#444] p-1 text-white focus:border-[#0f0] outline-none" defaultValue="100" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <input type="text" placeholder="LMT" className="bg-[#222] border border-[#444] p-1 text-white focus:border-[#0f0] outline-none" defaultValue="184.20" />
              <select className="bg-[#222] border border-[#444] p-1 text-white outline-none">
                <option>GTC</option>
                <option>DAY</option>
                <option>IOC</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <button className="bg-[#060] text-[#cfc] hover:bg-[#080] py-1 text-center font-bold">BUY (B)</button>
              <button className="bg-[#600] text-[#fcc] hover:bg-[#800] py-1 text-center font-bold">SELL (S)</button>
            </div>
            <div className="flex justify-between text-[10px] text-[#555] mt-1">
              <span>BID: 184.20 x 100</span>
              <span>ASK: 184.25 x 500</span>
            </div>
          </Card.Body>
        </Card>
      </PersonaElement>

      <PersonaElement persona="emma" className="h-full">
        <Card className="h-full border-[var(--color-primary-subtle)] shadow-lg">
          <Card.Header className="bg-[var(--color-primary-subtle)]/30 border-b border-[var(--color-primary-subtle)]">
            <h3 className="font-semibold text-[var(--color-primary)] flex items-center gap-2">
              <IconTrendingUp className="w-4 h-4" />
              Invest in Apple (AAPL)
            </h3>
          </Card.Header>
          <Card.Body className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">How much would you like to invest?</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-[var(--color-text-tertiary)]">$</span>
                <input 
                  type="text" 
                  className="w-full pl-8 pr-4 py-2 rounded-lg border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-lg font-medium"
                  placeholder="0.00"
                />
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-2 flex items-center gap-1">
                <IconInfo className="w-3 h-3" />
                You can buy fractional shares (e.g. $50 worth)
              </p>
            </div>

            <div className="p-4 bg-[var(--color-bg-subtle)] rounded-lg text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-[var(--color-text-secondary)]">Estimated Shares:</span>
                <span className="font-medium">0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Commission:</span>
                <span className="font-medium text-[var(--color-success)]">Free</span>
              </div>
            </div>

            <Button fullWidth size="lg">Review Order</Button>
          </Card.Body>
        </Card>
      </PersonaElement>
    </div>
  );
}

function ChartArea() {
  return (
    <div className="h-[400px]">
      <PersonaElement persona="marcus" className="h-full">
        <div className="h-full bg-[#111] border border-[#333] p-1 relative overflow-hidden">
          <div className="absolute top-2 left-2 z-10 flex gap-2">
            {['1m', '5m', '15m', '1h', '4h', 'D'].map(t => (
              <span key={t} className="text-[10px] bg-[#333] text-[#aaa] px-1 cursor-pointer hover:bg-[#555]">{t}</span>
            ))}
            <span className="text-[10px] text-[#0ff] ml-2">RSI(14): 64.2</span>
            <span className="text-[10px] text-[#fa0]">MACD: 0.15</span>
          </div>
          <div className="w-full h-full flex items-end gap-[2px] opacity-80 pt-8">
             {Array.from({length: 60}).map((_, i) => {
               const height = 30 + Math.random() * 50;
               const isGreen = Math.random() > 0.45;
               return (
                 <div key={i} className="flex-1 flex flex-col justify-end items-center group relative">
                    <div className={`w-[1px] h-full ${isGreen ? 'bg-[#0f0]' : 'bg-[#f00]'} absolute bottom-0`} style={{ height: `${height + 20}%`}}></div>
                    <div className={`w-full ${isGreen ? 'bg-[#0f0]' : 'bg-[#f00]'} z-10`} style={{ height: `${height}%`, marginBottom: `${Math.random() * 40}%` }}></div>
                 </div>
               )
             })}
          </div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#333] border-t border-dashed border-[#666] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#333] border-l border-dashed border-[#666] pointer-events-none"></div>
        </div>
      </PersonaElement>

      <PersonaElement persona="emma" className="h-full">
        <Card className="h-full">
          <Card.Header className="flex justify-between items-center pb-0">
            <h3 className="text-lg font-medium">Performance History</h3>
            <div className="flex gap-2 bg-[var(--color-bg-subtle)] p-1 rounded-lg">
              {['1W', '1M', '3M', '1Y', 'ALL'].map((t, i) => (
                <button key={t} className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${i === 1 ? 'bg-white shadow-sm text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}>
                  {t}
                </button>
              ))}
            </div>
          </Card.Header>
          <Card.Body className="relative flex items-end p-6">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 40 L0 30 C10 25, 20 35, 30 20 C40 5, 50 25, 60 15 C70 5, 80 10, 100 5 V40 H0 Z" fill="url(#chartGradient)" />
              <path d="M0 30 C10 25, 20 35, 30 20 C40 5, 50 25, 60 15 C70 5, 80 10, 100 5" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            </svg>
            <div className="absolute top-10 right-10 bg-[var(--color-bg-surface)] p-2 shadow-lg rounded border border-[var(--color-border)] text-center">
              <span className="block text-xs text-[var(--color-text-secondary)]">Current Value</span>
              <span className="block font-bold text-[var(--color-primary)] text-lg">$12,450.00</span>
            </div>
          </Card.Body>
        </Card>
      </PersonaElement>
    </div>
  );
}

function Watchlist() {
  return (
    <div className="h-full">
       <PersonaElement persona="marcus" className="mb-4">
         <div className="bg-[#111] border border-[#333] text-[#ccc] text-xs font-mono">
            <div className="bg-[#222] p-1 font-bold border-b border-[#333] flex justify-between">
              <span>WATCHLIST_A</span>
              <span className="text-[#666]">[+]</span>
            </div>
            <div className="divide-y divide-[#333]">
              {['TSLA', 'AMD', 'NFLX', 'META', 'BABA', 'PLTR'].map(s => (
                <div key={s} className="flex justify-between p-1 hover:bg-[#222] cursor-pointer">
                  <span className="text-[#0ff]">{s}</span>
                  <span className="text-white">{(Math.random()*100 + 100).toFixed(2)}</span>
                  <span className={Math.random() > 0.5 ? 'text-[#0f0]' : 'text-[#f00]'}>
                    {Math.random() > 0.5 ? '+' : '-'}{(Math.random()*5).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
         </div>
       </PersonaElement>

       <PersonaElement persona="emma">
         <Card>
           <Card.Header>
             <h3 className="font-semibold text-[var(--text-lg)]">Your Favorites</h3>
           </Card.Header>
           <Card.Body className="p-0">
             {['Tesla', 'Netflix', 'Meta'].map((n, i) => (
               <div key={n} className="flex items-center justify-between p-4 border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg-subtle)] transition-colors">
                 <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${i===0?'bg-red-500':i===1?'bg-black':'bg-blue-600'}`}>
                     {n[0]}
                   </div>
                   <div>
                     <p className="font-medium text-[var(--text-sm)]">{n}</p>
                     <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)]">Tech • Consumer</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="font-medium">$234.12</p>
                   <p className="text-[var(--text-xs)] text-[var(--color-success)]">+1.2% this week</p>
                 </div>
               </div>
             ))}
             <Button variant="ghost" fullWidth size="sm" className="my-2">Add New Stock</Button>
           </Card.Body>
         </Card>
       </PersonaElement>
    </div>
  );
}

function NewsFeed() {
  return (
    <div className="mt-6">
      <PersonaElement persona="marcus">
         <div className="bg-[#111] border border-[#333] p-1 font-mono text-[10px]">
           <div className="bg-[#222] px-1 text-[#888] mb-1">REAL-TIME NEWS WIRE (RSS)</div>
           {[1,2,3,4].map(i => (
             <div key={i} className="mb-1 text-[#aaa] hover:text-white cursor-pointer truncate">
               <span className="text-[#555] mr-2">10:4{i}:23</span>
               <span className="text-[#fa0]">BREAKING:</span> FED CHAIR POWELL COMMENTS ON INFLATION TARGETS...
             </div>
           ))}
         </div>
      </PersonaElement>
      
      <PersonaElement persona="emma">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="h-32 bg-[var(--color-bg-muted)] relative">
               <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-tertiary)]">News Image</div>
            </div>
            <Card.Body>
              <span className="text-[var(--text-xs)] text-[var(--color-primary)] font-bold uppercase tracking-wider">Market Trends</span>
              <h3 className="font-bold text-[var(--text-lg)] mt-1 mb-2">Why Tech Stocks Are Rallying Today</h3>
              <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Analysts suggest that the recent pause in interest rate hikes has boosted investor confidence...</p>
              <Button variant="ghost" size="sm" className="mt-3 -ml-3">Read Story</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
               <h3 className="font-bold text-[var(--text-lg)] mb-4">Market Academy</h3>
               <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="w-16 h-16 bg-[var(--color-bg-muted)] rounded-lg flex-shrink-0"></div>
                   <div>
                     <h4 className="font-medium text-[var(--text-sm)]">Understanding P/E Ratios</h4>
                     <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)] mt-1">5 min read • Beginner</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-16 h-16 bg-[var(--color-bg-muted)] rounded-lg flex-shrink-0"></div>
                   <div>
                     <h4 className="font-medium text-[var(--text-sm)]">Diversification 101</h4>
                     <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)] mt-1">7 min read • Beginner</p>
                   </div>
                 </div>
               </div>
            </Card.Body>
          </Card>
        </div>
      </PersonaElement>
    </div>
  )
}

function ResolutionStrategy() {
  return (
    <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
      <h2 className="text-[var(--text-xl)] font-bold mb-6">Resolution Strategies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <Card.Body>
            <Badge className="mb-3">Option A</Badge>
            <h3 className="font-bold mb-2">Prioritize One</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">Pick a primary persona and optimize for them. Ignore the other.</p>
            <div className="text-xs p-2 bg-[var(--color-bg-subtle)] rounded">
              <strong>Example:</strong> Robinhood (Beginners) vs. Bloomberg Terminal (Pros)
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Badge variant="info" className="mb-3">Option B</Badge>
            <h3 className="font-bold mb-2">Separate Products</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">Build two completely distinct apps or interfaces.</p>
            <div className="text-xs p-2 bg-[var(--color-bg-subtle)] rounded">
              <strong>Example:</strong> Coinbase (Retail) vs. Coinbase Pro (Traders)
            </div>
          </Card.Body>
        </Card>
        <Card className="ring-2 ring-[var(--color-primary)]">
          <Card.Body>
            <Badge variant="success" className="mb-3">Option C</Badge>
            <h3 className="font-bold mb-2">User Modes</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">Allow users to toggle between "Lite" and "Pro" modes.</p>
            <div className="text-xs p-2 bg-[var(--color-bg-subtle)] rounded">
              <strong>Example:</strong> This Demo Page
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Badge variant="warning" className="mb-3">Option D</Badge>
            <h3 className="font-bold mb-2">Satisficing</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">A middle-ground interface that is "okay" for everyone but great for no one.</p>
            <div className="text-xs p-2 bg-[var(--color-bg-subtle)] rounded">
              <strong>Example:</strong> Traditional Bank Portals
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

// --- Main Layout ---

function TradingPlatformContent() {
  const { activePersona } = usePersona();

  return (
    <CalloutProvider>
      <div className="min-h-screen bg-[var(--color-bg-page)] pb-20">
        <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)] border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="font-bold text-lg hidden sm:block">TradeFlow</span>
            </div>
            
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <IconSearch className="absolute left-3 top-2.5 text-[var(--color-text-tertiary)] w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  className="w-full bg-[var(--color-bg-subtle)] pl-9 pr-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PersonaSwitcher />
              <CalloutToggle />
              <div className="w-px h-6 bg-[var(--color-border)] mx-1"></div>
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="px-2">
                <IconBell className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-[var(--color-bg-muted)] overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activePersona?.id || 'User'}`} alt="Avatar" />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-[1400px] mx-auto px-4 py-8">
          
          <TradeoffCallout 
             title="The Kobayashi Maru: Density vs. Clarity"
             marcusNeeds="Maximum data density, keyboard shortcuts, zero latency, dark mode, no fluff."
             emmaNeeds="Educational context, clear hierarchy, confirmation steps, approachable visuals."
             conflict="Marcus considers Emma's whitespace 'wasted', while Emma considers Marcus's density 'intimidating'."
          />

          <section className="mb-6">
            <Ticker />
          </section>

          <div className="grid grid-cols-12 gap-6">
            
            <div className="col-span-12 lg:col-span-3">
              <DesignCallout title="Navigation vs Discovery" variant="pattern" className="mb-2">
                 <strong>Conflict:</strong> Marcus knows exactly what he wants (Watchlist). Emma needs help finding what she wants (Discovery).
              </DesignCallout>
              <Watchlist />
            </div>

            <div className="col-span-12 lg:col-span-6">
               <DesignCallout title="Visualization Complexity" variant="token" className="mb-2">
                 <strong>Conflict:</strong> Technical analysis requires raw data rendering (canvas/webgl). Investing requires trends and narratives (SVG/simplified).
               </DesignCallout>
               <ChartArea />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <DesignCallout title="Friction as a Feature" variant="principle" className="mb-2">
                 <strong>Conflict:</strong> Marcus needs 0-click speed (speed over safety). Emma needs confirmation dialogs (safety over speed).
              </DesignCallout>
              <OrderPanel />
            </div>

          </div>

          <NewsFeed />
          
          <ResolutionStrategy />
        </main>
      </div>
    </CalloutProvider>
  );
}

export function TradingPlatform() {
  return (
    <PersonaSwitcherProvider personas={tradingPersonas} defaultPersonaId="marcus">
      <TradingPlatformContent />
    </PersonaSwitcherProvider>
  );
}

export default TradingPlatform;
