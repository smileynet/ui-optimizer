import { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { ColorShowcase } from './pages/ColorShowcase';
import { TypographyShowcase } from './pages/TypographyShowcase';
import { SpacingShowcase } from './pages/SpacingShowcase';
import { ComponentShowcase } from './pages/ComponentShowcase';

type Tab = 'colors' | 'typography' | 'spacing' | 'components';

interface NavItemProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function NavItem({ active, onClick, children }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors
        ${active 
          ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]' 
          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]'
        }
      `}
    >
      {children}
    </button>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('colors');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'components', label: 'Components' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'colors':
        return <ColorShowcase />;
      case 'typography':
        return <TypographyShowcase />;
      case 'spacing':
        return <SpacingShowcase />;
      case 'components':
        return <ComponentShowcase />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                <span className="text-[var(--color-primary)]">UI</span> Design System
              </h1>
              <nav className="hidden md:flex items-center gap-1">
                {tabs.map((tab) => (
                  <NavItem
                    key={tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </NavItem>
                ))}
              </nav>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <nav className="md:hidden border-t border-[var(--color-border)] px-4 py-2 flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <NavItem
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </NavItem>
          ))}
        </nav>
      </header>

      <main className="py-8">
        {renderContent()}
      </main>

      <footer className="border-t border-[var(--color-border)] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[var(--color-text-secondary)] text-center">
            UI Design Demo - Vibrant Minimal Aesthetic with Design Tokens
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
