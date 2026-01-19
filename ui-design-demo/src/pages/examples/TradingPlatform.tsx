import { useState } from 'react';
import { 
  PersonaSwitcherProvider, 
  PersonaSwitcher, 
  usePersona,
  Card,
  Button,
  Badge,
  CalloutProvider
} from '../../components/ui';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../../components/ThemeToggle';


type ViewMode = 'compromise' | 'separate';

const tradingPersonas = [
  { id: 'marcus', name: 'Marcus', avatar: 'M', description: 'Day Trader - Speed & density' },
  { id: 'emma', name: 'Emma', avatar: 'E', description: 'Retail Investor - Simplicity & guidance' }
];

const STOCK_DATA = [
  { sym: 'AAPL', price: 184.25, chg: 1.25, pct: 0.68 },
  { sym: 'MSFT', price: 405.30, chg: -2.10, pct: -0.52 },
  { sym: 'GOOGL', price: 142.65, chg: 0.85, pct: 0.60 },
  { sym: 'AMZN', price: 171.80, chg: 1.10, pct: 0.64 },
  { sym: 'NVDA', price: 680.45, chg: 15.20, pct: 2.28 },
];


function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
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


function FailureCallout({ forMarcus, forEmma }: { forMarcus: string; forEmma: string }) {
  return (
    <div className="my-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
      <h4 className="text-red-800 dark:text-red-200 font-bold text-sm uppercase mb-2 flex items-center gap-2">
        <span className="inline-block w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">!</span>
        Compromise Failure
      </h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <span className="text-xs font-bold text-red-600 dark:text-red-300 uppercase block mb-1">For Marcus (Pro)</span>
          <p className="text-sm text-red-900 dark:text-red-100">{forMarcus}</p>
        </div>
        <div>
          <span className="text-xs font-bold text-red-600 dark:text-red-300 uppercase block mb-1">For Emma (Lite)</span>
          <p className="text-sm text-red-900 dark:text-red-100">{forEmma}</p>
        </div>
      </div>
    </div>
  );
}

function SuccessCallout({ persona, why }: { persona: 'marcus' | 'emma'; why: string }) {
  const isMarcus = persona === 'marcus';
  const colorClass = isMarcus ? 'text-[var(--color-primary)]' : 'text-[var(--color-accent)]';
  const bgClass = isMarcus ? 'bg-[var(--color-primary-subtle)]' : 'bg-[var(--color-accent-subtle)]';
  const borderClass = isMarcus ? 'border-[var(--color-primary)]' : 'border-[var(--color-accent)]';

  return (
    <div className={cn("my-2 p-3 rounded-lg border-l-4 flex items-start gap-3", bgClass, borderClass)}>
      <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5", isMarcus ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-accent)]')}>
        {isMarcus ? 'M' : 'E'}
      </div>
      <div>
        <p className={cn("text-xs font-bold uppercase mb-0.5", colorClass)}>
          Optimized for {isMarcus ? 'Marcus' : 'Emma'}
        </p>
        <p className="text-sm font-medium leading-tight opacity-90">{why}</p>
      </div>
    </div>
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


function CompromiseView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div className="space-y-2">
        <FailureCallout 
          forMarcus="Data density too low - can only see 5 stocks, needs 20+"
          forEmma="Still too cluttered - scrolling ticker is overwhelming"
        />
        <div className="bg-gray-100 dark:bg-gray-800 p-2 overflow-hidden flex gap-8 items-center border-y border-gray-300 dark:border-gray-700 whitespace-nowrap">
          {STOCK_DATA.map((s, i) => (
            <div key={i} className="flex flex-col text-sm">
              <span className="font-bold">{s.sym}</span>
              <span className={s.chg >= 0 ? 'text-green-600' : 'text-red-600'}>
                {s.price} ({s.chg > 0 ? '+' : ''}{s.pct}%)
              </span>
            </div>
          ))}
          {STOCK_DATA.map((s, i) => (
            <div key={`dup-${i}`} className="flex flex-col text-sm opacity-50">
              <span className="font-bold">{s.sym}</span>
              <span className={s.chg >= 0 ? 'text-green-600' : 'text-red-600'}>
                {s.price} ({s.chg > 0 ? '+' : ''}{s.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card className="h-full">
            <Card.Header className="flex justify-between items-center py-2">
              <h3 className="font-bold text-base">AAPL Chart</h3>
              <div className="flex gap-1">
                {['1D', '1W', '1M', '1Y'].map(t => (
                  <button key={t} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">{t}</button>
                ))}
              </div>
            </Card.Header>
            <Card.Body className="p-4">
               <div className="h-[300px] relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                 <span className="text-gray-400">Mixed Visualization (Candles + Line)</span>
                 <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none">
                   <path d="M0,250 L50,240 L100,200 L150,220 L200,180 L250,190 L300,150 L350,100 L400,120 L450,80 L500,50" 
                     fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
                   {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map(x => (
                     <rect key={x} x={x} y={100 + Math.random()*100} width="8" height="40" className="fill-gray-400 opacity-50" />
                   ))}
                 </svg>
                 <div className="absolute top-2 left-2 flex flex-col gap-1">
                   <span className="text-[10px] bg-yellow-100 text-yellow-800 px-1 rounded border border-yellow-200 w-fit">
                     MACD (Analysis)
                   </span>
                   <span className="text-[10px] bg-blue-100 text-blue-800 px-1 rounded border border-blue-200 w-fit">
                     Trend: Bullish (Simple)
                   </span>
                 </div>
               </div>
               <FailureCallout 
                  forMarcus="Chart too simple - missing depth, level 2 data, and instant timeframes"
                  forEmma="Chart too complex - confusing technical indicators mixed with simple trends"
                />
            </Card.Body>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Card className="h-full">
            <Card.Header className="py-2">
              <h3 className="font-bold text-base">Trade</h3>
            </Card.Header>
            <Card.Body className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Action</label>
                <div className="flex gap-2 mt-1">
                  <Button size="sm" variant="primary" className="flex-1">Buy</Button>
                  <Button size="sm" variant="secondary" className="flex-1">Sell</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                   <label className="text-xs font-bold text-gray-500 uppercase flex justify-between">
                     <span>Quantity</span>
                     <span className="text-[10px] font-normal normal-case text-blue-500 cursor-pointer">Max</span>
                   </label>
                   <input type="number" className="w-full border p-2 rounded text-sm mt-1" defaultValue="1" />
                </div>
                <div>
                   <label className="text-xs font-bold text-gray-500 uppercase">Order Type</label>
                   <select className="w-full border p-2 rounded text-sm mt-1">
                     <option>Market</option>
                     <option>Limit</option>
                     <option>Stop Loss</option>
                   </select>
                </div>
              </div>

              <div className="p-2 bg-yellow-50 border border-yellow-100 rounded text-xs text-yellow-800">
                <strong className="block mb-1">Confirmation</strong>
                Are you sure you want to place this trade? This will execute immediately at market price.
              </div>

              <Button fullWidth>Submit Order</Button>

              <FailureCallout 
                forMarcus="Too slow - requires dropdowns and button clicks. 'Are you sure?' is annoying."
                forEmma="Scary - 'Limit/Stop Loss' jargon is unexplained. Input fields look technical."
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

function OptimizedView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      <div className="mb-8">
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
          <SuccessCallout 
            persona="marcus" 
            why="Maximum density - 20+ stocks visible, instant readability, high contrast"
          />
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
          <SuccessCallout 
            persona="emma" 
            why="Clear hierarchy - card based layout, company names included, approachable visuals"
          />
        </PersonaElement>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        <div className="col-span-12 lg:col-span-8">
          <PersonaElement persona="marcus" className="h-full">
            <div className="h-[400px] bg-[#111] border border-[#333] p-1 relative overflow-hidden">
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
            <SuccessCallout 
              persona="marcus" 
              why="Technical depth - Candlesticks, indicators, and dark mode for prolonged usage"
            />
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
              <Card.Body className="relative flex items-end p-6 min-h-[300px]">
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
              <Card.Body className="pt-0">
                <SuccessCallout 
                  persona="emma" 
                  why="Narrative focus - Simple area chart shows the 'story' of growth without noise"
                />
              </Card.Body>
            </Card>
          </PersonaElement>
        </div>

        <div className="col-span-12 lg:col-span-4">
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
                <SuccessCallout 
                  persona="marcus" 
                  why="Speed execution - Hotkeys shown, compact layout, no confirmation dialogs"
                />
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
                  <label className="block text-sm font-medium mb-2">How much to invest?</label>
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
                    Buy fractional shares (e.g. $50 worth)
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
                
                <SuccessCallout 
                  persona="emma" 
                  why="Safety & Guidance - Plain language, educational tooltips, clear review step"
                />
              </Card.Body>
            </Card>
          </PersonaElement>
        </div>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    { aspect: "Data density", bad: "8 stocks (Medium)", marcus: "20+ stocks (High)", emma: "5 stocks w/ context (Low)" },
    { aspect: "Tooltips", bad: "Inconsistent/Annoying", marcus: "None (Speed)", emma: "Everywhere (Education)" },
    { aspect: "Order Flow", bad: "2 clicks + Confirmation", marcus: "0 clicks (Hotkey)", emma: "4 clicks (Safe Review)" },
    { aspect: "Font Size", bad: "13px (Standard)", marcus: "10px (Dense)", emma: "16px (Readable)" },
    { aspect: "Satisfaction", bad: "40% Each (Fail)", marcus: "95% (Perfect)", emma: "95% (Perfect)" },
  ];

  return (
    <div className="mt-16 overflow-hidden rounded-lg border border-[var(--color-border)] shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] font-semibold uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Aspect</th>
            <th className="px-4 py-3 text-red-600 dark:text-red-400">Compromise (Bad)</th>
            <th className="px-4 py-3 text-[var(--color-primary)]">Marcus View (Good)</th>
            <th className="px-4 py-3 text-[var(--color-accent)]">Emma View (Good)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {rows.map((r, i) => (
            <tr key={i} className="bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)] transition-colors">
              <td className="px-4 py-3 font-medium">{r.aspect}</td>
              <td className="px-4 py-3 text-red-800 dark:text-red-200 bg-red-50/50 dark:bg-red-900/10">{r.bad}</td>
              <td className="px-4 py-3">{r.marcus}</td>
              <td className="px-4 py-3">{r.emma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function TradingPlatformContent() {
  const [viewMode, setViewMode] = useState<ViewMode>('compromise');
  const { activePersona } = usePersona();

  return (
    <CalloutProvider>
      <div className="min-h-screen bg-[var(--color-bg-page)] pb-20 font-sans">
        
        <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)] border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="font-bold text-lg hidden sm:block">TradeFlow</span>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="bg-[var(--color-bg-muted)] p-1 rounded-lg flex gap-1">
                <button 
                  onClick={() => setViewMode('compromise')}
                  className={cn(
                    "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                    viewMode === 'compromise' 
                      ? "bg-white dark:bg-zinc-800 text-red-600 shadow-sm" 
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  One Interface (Bad)
                </button>
                <button 
                  onClick={() => setViewMode('separate')}
                  className={cn(
                    "px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                    viewMode === 'separate'
                      ? "bg-white dark:bg-zinc-800 text-[var(--color-success)] shadow-sm"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                  Two Experiences (Good)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {viewMode === 'separate' && <PersonaSwitcher />}
              <div className="w-px h-6 bg-[var(--color-border)] mx-1"></div>
              <ThemeToggle />
              <div className="w-8 h-8 rounded-full bg-[var(--color-bg-muted)] overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${viewMode === 'separate' ? (activePersona?.id || 'User') : 'User'}`} alt="Avatar" />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-[1400px] mx-auto px-4 py-8">
          
          <div className="mb-8 text-center py-6 bg-gradient-to-r from-[var(--color-bg-subtle)] to-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
             <h2 className="text-xl md:text-2xl font-bold mb-2">
               "The middle ground serves no one."
             </h2>
             <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
               Trying to design one interface for both Day Traders and Retail Investors results in a product that fails both.
               <span className="block mt-1 text-[var(--color-primary)] font-medium">Toggle the view above to see the difference.</span>
             </p>
          </div>

          {viewMode === 'compromise' ? (
            <CompromiseView />
          ) : (
            <OptimizedView />
          )}

          <ComparisonTable />

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
