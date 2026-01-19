import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { CalloutProvider, CalloutToggle, DesignCallout, PersonaSwitcher, PersonaSwitcherProvider, usePersona } from '../../components/ui';
import { ThemeToggle } from '../../components/ThemeToggle';
import { cn } from '../../lib/utils';

// --- Persona Configuration ---

const dashboardPersonas = [
  { id: 'sarah', name: 'Sarah', avatar: 'S', description: 'PM - Quick daily glance' },
  { id: 'james', name: 'James', avatar: 'J', description: 'Analyst - Deep data dive' }
];

function PersonaElement({ 
  persona, 
  children, 
  className 
}: { 
  persona: 'sarah' | 'james' | 'both'; 
  children: React.ReactNode;
  className?: string;
}) {
  const { activePersonaId } = usePersona();
  
  // If no persona selected, show everything fully
  if (!activePersonaId) return <>{children}</>;
  
  const isRelevant = persona === 'both' || activePersonaId === persona;
  
  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-in-out", 
        !isRelevant && "opacity-25 grayscale blur-[1px] pointer-events-none",
        className
      )}
      data-persona={persona}
    >
      {children}
    </div>
  );
}

// --- Icons ---

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function IconBarChart({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function IconSettings({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
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

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}

function IconDollarSign({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

function IconShoppingBag({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

function IconActivity({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
}

// --- Components ---

function MetricCard({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'up' 
}: { 
  title: string; 
  value: string; 
  change: string; 
  icon: React.ReactNode; 
  trend?: 'up' | 'down' 
}) {
  return (
    <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Card.Body className="p-6">
        <Stack gap={4}>
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[var(--color-primary-subtle)] rounded-[var(--radius-lg)] text-[var(--color-primary)]">
              {icon}
            </div>
            <Badge variant={trend === 'up' ? 'success' : 'error'} size="sm" className="flex items-center gap-1">
              {trend === 'up' ? <IconTrendingUp className="w-3 h-3" /> : <IconTrendingUp className="w-3 h-3 rotate-180" />}
              {change}
            </Badge>
          </div>
          <div>
            <p className="text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)]">{title}</p>
            <h3 className="text-[var(--text-2xl)] font-bold text-[var(--color-text-primary)] mt-1">{value}</h3>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
}

function RecentActivityItem({ 
  title, 
  description, 
  time, 
  avatar 
}: { 
  title: string; 
  description: string; 
  time: string; 
  avatar: string; 
}) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-[var(--color-border)] last:border-0 last:pb-0 first:pt-0">
      <div className="w-10 h-10 rounded-full bg-[var(--color-bg-muted)] overflow-hidden flex-shrink-0">
        <img src={avatar} alt="User" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[var(--text-sm)] font-medium text-[var(--color-text-primary)] truncate">
          {title}
        </p>
        <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)] truncate">
          {description}
        </p>
      </div>
      <div className="text-[var(--text-xs)] text-[var(--color-text-tertiary)] whitespace-nowrap">
        {time}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2.5 rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium transition-colors",
        active 
          ? "bg-[var(--color-primary-subtle)] text-[var(--color-primary)]" 
          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-primary)]"
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      {label}
    </button>
  );
}

// --- Main Page ---

function DashboardContent() {
  return (
    <CalloutProvider>
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text-primary)] font-[family-name:var(--font-sans)] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--color-border)] bg-[var(--color-bg-surface)] hidden md:flex flex-col h-screen sticky top-0">
        <DesignCallout 
          variant="agent" 
          title="Sidebar: Persistent Navigation"
          className="m-2"
        >
          <strong>User Need:</strong> Sarah checks dashboard quickly between tasks (Context Scenario).<br/>
          <strong>Solution:</strong> Fixed 256px sidebar with sticky positioning keeps navigation always accessible without scrolling.<br/>
          <strong>Tokens:</strong> <code className="bg-[var(--color-bg-muted)] px-1 rounded">w-64</code>, <code className="bg-[var(--color-bg-muted)] px-1 rounded">sticky top-0</code>, <code className="bg-[var(--color-bg-muted)] px-1 rounded">--color-primary-subtle</code> for active state.
        </DesignCallout>
        <div className="p-6 border-b border-[var(--color-border)]">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold">
              Ui
            </div>
            <span className="font-bold text-[var(--text-lg)] tracking-tight">Optimizer</span>
          </a>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <Stack gap={2}>
            <div className="px-4 py-2 text-[var(--text-xs)] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
              Overview
            </div>
            <SidebarItem icon={<IconHome />} label="Dashboard" active />
            <SidebarItem icon={<IconBarChart />} label="Analytics" />
            <SidebarItem icon={<IconShoppingBag />} label="Orders" />
            <SidebarItem icon={<IconUsers />} label="Customers" />
            
            <div className="h-4"></div>
            
            <div className="px-4 py-2 text-[var(--text-xs)] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
              System
            </div>
            <SidebarItem icon={<IconSettings />} label="Settings" />
            <SidebarItem icon={<IconActivity />} label="Activity Log" />
          </Stack>
        </div>

        <div className="p-4 border-t border-[var(--color-border)]">
          <Card variant="filled" className="bg-[var(--color-bg-subtle)]">
            <Card.Body className="p-4">
              <Stack gap={2}>
                <p className="text-[var(--text-sm)] font-medium">Pro Plan</p>
                <div className="w-full h-1.5 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-primary)] w-[75%] rounded-full" />
                </div>
                <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)]">2,300 / 3,000 API calls</p>
              </Stack>
            </Card.Body>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
          <div className="px-6 h-16 flex items-center justify-between">
            <h1 className="text-[var(--text-xl)] font-semibold md:hidden">Dashboard</h1>
            <div className="hidden md:block">
               {/* Breadcrumbs or Title could go here */}
               <h2 className="text-[var(--text-lg)] font-semibold">Overview</h2>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/story/dashboard'}>
                View Story
              </Button>
              <PersonaSwitcher />
              <CalloutToggle />
              <ThemeToggle />
              <button className="p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] rounded-full transition-colors relative">
                <IconBell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-error)] rounded-full border-2 border-[var(--color-bg-surface)]"></span>
              </button>
              <div className="h-8 w-[1px] bg-[var(--color-border)] mx-1"></div>
              <button className="flex items-center gap-2 hover:bg-[var(--color-bg-subtle)] pl-2 pr-3 py-1.5 rounded-full transition-colors">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-medium text-sm">
                  SM
                </div>
                <span className="text-[var(--text-sm)] font-medium hidden sm:block">Sam M.</span>
              </button>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-[var(--text-3xl)] font-bold text-[var(--color-text-primary)] tracking-tight">
                Welcome back, Sam!
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-1">
                Here's what's happening with your projects today.
              </p>
            </div>
            <div className="flex gap-3">
              <PersonaElement persona="james">
                <Button variant="secondary" size="sm" leftIcon={<span className="text-lg leading-none">↓</span>}>
                  Export
                </Button>
              </PersonaElement>
              <Button variant="primary" size="sm" leftIcon={<span className="text-lg leading-none">+</span>}>
                New Project
              </Button>
            </div>
          </div>

          <DesignCallout 
            variant="pattern" 
            title="Metrics Grid: Primary Information"
            className="mb-4"
          >
            <strong>JTBD:</strong> "When I start my workday, I want to see what needs my attention."<br/>
            <strong>Persona:</strong> <Badge variant="info" size="sm" className="ml-1 mr-1">Sarah</Badge> relies on this top-level view.<br/>
            <strong>Design Decision:</strong> Stats at top, full width—F-pattern reading puts metrics in prime viewing position.<br/>
            <strong>Tokens:</strong> <code className="bg-[var(--color-bg-muted)] px-1 rounded">grid-cols-4</code>, <code className="bg-[var(--color-bg-muted)] px-1 rounded">gap-6 (--space-6)</code>.
          </DesignCallout>
          
          <PersonaElement persona="sarah">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard 
                title="Total Revenue" 
                value="$45,231.89" 
                change="+20.1%" 
                icon={<IconDollarSign className="w-6 h-6" />} 
              />
              <MetricCard 
                title="Active Users" 
                value="2,350" 
                change="+180.1%" 
                icon={<IconUsers className="w-6 h-6" />} 
              />
              <MetricCard 
                title="New Orders" 
                value="+12,234" 
                change="+19%" 
                icon={<IconShoppingBag className="w-6 h-6" />} 
              />
              <MetricCard 
                title="Conversion Rate" 
                value="3.25%" 
                change="-4.5%" 
                trend="down"
                icon={<IconActivity className="w-6 h-6" />} 
              />
            </div>
          </PersonaElement>

          <DesignCallout 
            variant="token" 
            title="Data Visualization: Deep Dive"
            className="mb-4"
          >
            <strong>Persona:</strong> <Badge variant="info" size="sm" className="ml-1 mr-1">James</Badge> uses these visualizations to find trends.<br/>
            <strong>Constraint:</strong> WCAG 2.2 AA compliance required—all colors must meet contrast ratios.<br/>
            <strong>Token Strategy:</strong> Semantic tokens (<code className="bg-[var(--color-bg-muted)] px-1 rounded">--color-primary</code>, <code className="bg-[var(--color-bg-muted)] px-1 rounded">--color-accent</code>) auto-adapt to dark mode.
          </DesignCallout>
          
          <PersonaElement persona="james">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <Card.Header className="flex items-center justify-between">
                <div>
                  <h3 className="text-[var(--text-lg)] font-semibold">Revenue Overview</h3>
                  <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Monthly revenue performance</p>
                </div>
                <Badge variant="info">Yearly</Badge>
              </Card.Header>
              <Card.Body>
                {/* Simulated Chart */}
                <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-8">
                  {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((h, i) => (
                    <div key={i} className="w-full bg-[var(--color-bg-subtle)] rounded-t-[var(--radius-sm)] relative group h-full flex items-end">
                       <div 
                        className="w-full bg-[var(--color-primary)] opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-[var(--radius-sm)]"
                        style={{ height: `${h}%` }}
                      ></div>
                      {/* Tooltip hint */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] text-[var(--text-xs)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                        ${h * 100}k
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[var(--text-xs)] text-[var(--color-text-secondary)] font-medium uppercase">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <h3 className="text-[var(--text-lg)] font-semibold">Traffic Source</h3>
                <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Where your users come from</p>
              </Card.Header>
              <Card.Body className="flex flex-col justify-center h-[340px]">
                {/* Simulated Donut Chart */}
                <div className="relative w-48 h-48 mx-auto rounded-full border-[16px] border-[var(--color-primary)] flex items-center justify-center"
                     style={{ 
                       borderRightColor: 'var(--color-accent)', 
                       borderBottomColor: 'var(--color-warning)', 
                       borderLeftColor: 'var(--color-success)',
                       transform: 'rotate(-45deg)'
                     }}>
                     <div className="text-center transform rotate-45">
                        <span className="block text-[var(--text-3xl)] font-bold text-[var(--color-text-primary)]">Total</span>
                        <span className="block text-[var(--text-sm)] text-[var(--color-text-secondary)]">52.4k</span>
                     </div>
                </div>
                
                <div className="mt-8 space-y-3">
                   <div className="flex justify-between items-center text-[var(--text-sm)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></span>
                        <span>Direct</span>
                      </div>
                      <span className="font-medium">35%</span>
                   </div>
                   <div className="flex justify-between items-center text-[var(--text-sm)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></span>
                        <span>Social</span>
                      </div>
                      <span className="font-medium">25%</span>
                   </div>
                   <div className="flex justify-between items-center text-[var(--text-sm)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-warning)]"></span>
                        <span>Search</span>
                      </div>
                      <span className="font-medium">20%</span>
                   </div>
                   <div className="flex justify-between items-center text-[var(--text-sm)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-success)]"></span>
                        <span>Email</span>
                      </div>
                      <span className="font-medium">20%</span>
                   </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          </PersonaElement>

          <DesignCallout 
            variant="accessibility" 
            title="Secondary Content: Contextual Updates"
            className="mb-4"
          >
            <strong>Persona:</strong> <Badge variant="info" size="sm" className="ml-1 mr-1">Sarah</Badge> monitors team activity here.<br/>
            <strong>Design:</strong> Activity feed and project status are secondary—visible but not competing with stats.<br/>
            <strong>Accessibility:</strong> Cards use proper heading hierarchy (h3), sufficient contrast.
          </DesignCallout>
          
          <PersonaElement persona="sarah">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <Card>
               <Card.Header className="flex items-center justify-between">
                 <h3 className="text-[var(--text-lg)] font-semibold">Recent Activity</h3>
                 <Button variant="ghost" size="sm">View All</Button>
               </Card.Header>
               <Card.Body>
                 <div className="flex flex-col">
                    <RecentActivityItem 
                      title="New user registered" 
                      description="Sarah Smith joined the platform" 
                      time="2 min ago" 
                      avatar="https://i.pravatar.cc/150?u=1"
                    />
                    <RecentActivityItem 
                      title="Project updated" 
                      description="Dashboard redesign phase 1 complete" 
                      time="1 hour ago" 
                      avatar="https://i.pravatar.cc/150?u=2"
                    />
                    <RecentActivityItem 
                      title="New order #1234" 
                      description="Order placed by Tech Corp" 
                      time="3 hours ago" 
                      avatar="https://i.pravatar.cc/150?u=3"
                    />
                    <RecentActivityItem 
                      title="System alert" 
                      description="Server load peak detected" 
                      time="5 hours ago" 
                      avatar="https://i.pravatar.cc/150?u=4"
                    />
                    <RecentActivityItem 
                      title="Comment received" 
                      description="Alex commented on your task" 
                      time="Yesterday" 
                      avatar="https://i.pravatar.cc/150?u=5"
                    />
                 </div>
               </Card.Body>
             </Card>

             <Card>
               <Card.Header>
                 <h3 className="text-[var(--text-lg)] font-semibold">Project Status</h3>
               </Card.Header>
               <Card.Body>
                 <Stack gap={6}>
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-[var(--text-sm)] font-medium">Website Redesign</span>
                       <span className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">80%</span>
                     </div>
                     <div className="w-full h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--color-primary)] w-[80%] rounded-full"></div>
                     </div>
                   </div>
                   
                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-[var(--text-sm)] font-medium">Mobile App</span>
                       <span className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">45%</span>
                     </div>
                     <div className="w-full h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--color-accent)] w-[45%] rounded-full"></div>
                     </div>
                   </div>

                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-[var(--text-sm)] font-medium">Marketing Campaign</span>
                       <span className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">10%</span>
                     </div>
                     <div className="w-full h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--color-warning)] w-[10%] rounded-full"></div>
                     </div>
                   </div>

                   <div>
                     <div className="flex justify-between mb-2">
                       <span className="text-[var(--text-sm)] font-medium">Customer Research</span>
                       <span className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">100%</span>
                     </div>
                     <div className="w-full h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--color-success)] w-full rounded-full"></div>
                     </div>
                   </div>
                 </Stack>
                 
                 <div className="mt-8 p-4 bg-[var(--color-bg-subtle)] rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                   <h4 className="font-semibold text-[var(--text-sm)] mb-2">Next Milestone</h4>
                   <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)] mb-3">
                     Launch of the mobile application beta version is scheduled for next Friday.
                   </p>
                   <Button variant="secondary" size="sm" fullWidth>View Roadmap</Button>
                 </div>
               </Card.Body>
             </Card>
          </div>
          </PersonaElement>
        </div>
      </main>
    </div>
    </CalloutProvider>
  );
}

export function Dashboard() {
  return (
    <PersonaSwitcherProvider personas={dashboardPersonas}>
      <DashboardContent />
    </PersonaSwitcherProvider>
  );
}
