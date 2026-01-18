import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CalloutContextValue {
  showCallouts: boolean;
  toggleCallouts: () => void;
}

const CalloutContext = createContext<CalloutContextValue>({
  showCallouts: false,
  toggleCallouts: () => {},
});

export function useCallouts() {
  return useContext(CalloutContext);
}

interface CalloutProviderProps {
  children: ReactNode;
}

export function CalloutProvider({ children }: CalloutProviderProps) {
  const [showCallouts, setShowCallouts] = useState(false);
  
  return (
    <CalloutContext.Provider value={{ 
      showCallouts, 
      toggleCallouts: () => setShowCallouts(prev => !prev) 
    }}>
      {children}
    </CalloutContext.Provider>
  );
}

export function CalloutToggle() {
  const { showCallouts, toggleCallouts } = useCallouts();
  
  return (
    <button
      onClick={toggleCallouts}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-all",
        showCallouts
          ? "bg-[var(--color-accent)] text-white shadow-lg"
          : "bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)]"
      )}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      {showCallouts ? 'Hide' : 'Show'} Design Notes
    </button>
  );
}

type CalloutVariant = 'principle' | 'pattern' | 'token' | 'accessibility' | 'agent';

interface DesignCalloutProps {
  title: string;
  children: ReactNode;
  variant?: CalloutVariant;
  className?: string;
}

const variantConfig: Record<CalloutVariant, { icon: ReactNode; color: string; label: string }> = {
  principle: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'var(--color-primary)',
    label: 'Design Principle',
  },
  pattern: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: 'var(--color-accent)',
    label: 'UI Pattern',
  },
  token: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'var(--color-success)',
    label: 'Design Token',
  },
  accessibility: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'var(--color-warning)',
    label: 'Accessibility',
  },
  agent: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'var(--color-info)',
    label: 'Agent Guidance',
  },
};

export function DesignCallout({ title, children, variant = 'principle', className }: DesignCalloutProps) {
  const { showCallouts } = useCallouts();
  const config = variantConfig[variant];
  
  if (!showCallouts) return null;
  
  return (
    <div 
      className={cn(
        "relative p-4 rounded-[var(--radius-lg)] border-2 border-dashed animate-in fade-in slide-in-from-top-2 duration-300",
        className
      )}
      style={{ 
        borderColor: config.color,
        backgroundColor: `color-mix(in srgb, ${config.color} 5%, transparent)`,
      }}
    >
      <div 
        className="absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1"
        style={{ 
          backgroundColor: config.color,
          color: 'white',
        }}
      >
        {config.icon}
        {config.label}
      </div>
      <div className="mt-2">
        <h4 className="font-semibold text-sm mb-1" style={{ color: config.color }}>
          {title}
        </h4>
        <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

interface InlineCalloutProps {
  tip: string;
  variant?: CalloutVariant;
  children: ReactNode;
}

export function InlineCallout({ tip, variant = 'principle', children }: InlineCalloutProps) {
  const { showCallouts } = useCallouts();
  const [isHovered, setIsHovered] = useState(false);
  const config = variantConfig[variant];
  
  if (!showCallouts) return <>{children}</>;
  
  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className="relative rounded px-0.5 -mx-0.5 transition-colors cursor-help"
        style={{ 
          backgroundColor: isHovered ? `color-mix(in srgb, ${config.color} 20%, transparent)` : 'transparent',
          outline: `2px dashed ${config.color}`,
          outlineOffset: '2px',
        }}
      >
        {children}
      </span>
      {isHovered && (
        <span 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs font-medium text-white rounded-lg shadow-lg whitespace-nowrap z-50 animate-in fade-in slide-in-from-bottom-1 duration-150"
          style={{ backgroundColor: config.color }}
        >
          {tip}
          <span 
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
            style={{ borderTopColor: config.color }}
          />
        </span>
      )}
    </span>
  );
}
