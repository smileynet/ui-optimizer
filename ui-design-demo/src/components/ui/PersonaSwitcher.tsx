import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface Persona {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

interface PersonaContextValue {
  activePersonaId: string | null;
  setActivePersonaId: (id: string | null) => void;
  activePersona: Persona | null;
  personas: Persona[];
}

const PersonaContext = createContext<PersonaContextValue | undefined>(undefined);

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaSwitcherProvider');
  }
  return context;
}

interface PersonaSwitcherProviderProps {
  children: ReactNode;
  personas: Persona[];
  defaultPersonaId?: string | null;
}

export function PersonaSwitcherProvider({ 
  children, 
  personas,
  defaultPersonaId = null 
}: PersonaSwitcherProviderProps) {
  const [activePersonaId, setActivePersonaId] = useState<string | null>(defaultPersonaId);

  const activePersona = activePersonaId 
    ? personas.find(p => p.id === activePersonaId) || null
    : null;

  return (
    <PersonaContext.Provider value={{ 
      activePersonaId, 
      setActivePersonaId, 
      activePersona,
      personas 
    }}>
      {children}
    </PersonaContext.Provider>
  );
}

interface PersonaSwitcherProps {
  className?: string;
}

export function PersonaSwitcher({ className }: PersonaSwitcherProps) {
  const { activePersonaId, setActivePersonaId, personas } = usePersona();
  const [hoveredInfo, setHoveredInfo] = useState(false);

  const containerClasses = "inline-flex items-center bg-[var(--color-bg-subtle)] rounded-full p-1 border border-[var(--color-border)] shadow-sm";
  const itemClasses = "relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none";
  const activeClasses = "bg-[var(--color-primary)] text-white shadow-md transform scale-105";
  const inactiveClasses = "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)]";
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={containerClasses} role="group" aria-label="Persona Switcher">
        
        <button
          onClick={() => setActivePersonaId(null)}
          className={cn(
            itemClasses,
            activePersonaId === null ? activeClasses : inactiveClasses
          )}
          aria-pressed={activePersonaId === null}
        >
          <span className={cn(
            "flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold uppercase",
            activePersonaId === null 
              ? "bg-white/20 text-white" 
              : "bg-[var(--color-border-strong)] text-[var(--color-text-secondary)]"
          )}>
            ALL
          </span>
          <span>All View</span>
        </button>

        <div className="w-px h-4 bg-[var(--color-border)] mx-0.5" />

        {personas.map((persona) => {
          const isActive = activePersonaId === persona.id;
          return (
            <button
              key={persona.id}
              onClick={() => setActivePersonaId(persona.id)}
              className={cn(
                itemClasses,
                isActive ? activeClasses : inactiveClasses
              )}
              aria-pressed={isActive}
              title={persona.description}
            >
              <span className={cn(
                "flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold uppercase ring-1 ring-inset",
                isActive 
                  ? "bg-white text-[var(--color-primary)] ring-white/30" 
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] ring-[var(--color-border)]"
              )}>
                {persona.avatar}
              </span>
              <span>{persona.name}</span>
            </button>
          );
        })}
      </div>

      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHoveredInfo(true)}
        onMouseLeave={() => setHoveredInfo(false)}
      >
        <button 
          className="text-[var(--color-text-tertiary)] hover:text-[var(--color-info)] transition-colors cursor-help"
          aria-label="Info about personas"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <div 
          className={cn(
            "absolute left-full ml-2 w-64 p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] shadow-lg z-50 transition-all duration-200 pointer-events-none origin-left",
            hoveredInfo 
              ? "opacity-100 translate-x-0 scale-100" 
              : "opacity-0 -translate-x-2 scale-95"
          )}
        >
          <h5 className="text-xs font-semibold text-[var(--color-text-primary)] mb-1 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-[var(--color-info)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Persona Lenses
          </h5>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Switch between different user roles to see how the interface adapts to their specific needs and priorities.
          </p>
        </div>
      </div>
    </div>
  );
}
