import { useState } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ColorShowcase } from './ColorShowcase';
import { TypographyShowcase } from './TypographyShowcase';
import { SpacingShowcase } from './SpacingShowcase';
import { ComponentShowcase } from './ComponentShowcase';
import { Container, Stack } from '../components/ui';

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

export function Sandbox() {
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
      <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  Ui
                </div>
                <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                  Design Sandbox
                </h1>
              </a>
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
            <div className="flex items-center gap-4">
              <a 
                href="/examples" 
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Examples
              </a>
              <ThemeToggle />
            </div>
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

      <div className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)]">
        <Container>
          <Stack gap={2} className="py-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
              Design System Sandbox
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              Explore the complete token system and component library. This is where you can 
              inspect colors, typography, spacing, and interactive components that make up 
              the UI Optimizer design system.
            </p>
          </Stack>
        </Container>
      </div>

      <main className="py-8">
        {renderContent()}
      </main>

      <footer className="border-t border-[var(--color-border)] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[var(--color-text-secondary)] text-center">
            UI Optimizer - Design System for AI Agents
          </p>
        </div>
      </footer>
    </div>
  );
}
