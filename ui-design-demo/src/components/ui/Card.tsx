import { createContext } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardContextValue {
  variant: 'elevated' | 'outlined' | 'filled';
}

const CardContext = createContext<CardContextValue | null>(null);

interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  className?: string;
  children: ReactNode;
}

function CardRoot({ variant = 'elevated', className, children }: CardProps) {
  return (
    <CardContext.Provider value={{ variant }}>
      <div
        className={cn(
          'rounded-[var(--radius-xl)] overflow-hidden',
          variant === 'elevated' && 'bg-[var(--color-bg-surface)] shadow-[var(--shadow-md)]',
          variant === 'outlined' && 'bg-[var(--color-bg-surface)] border border-[var(--color-border)]',
          variant === 'filled' && 'bg-[var(--color-bg-subtle)]',
          className
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

interface CardSectionProps {
  className?: string;
  children: ReactNode;
}

function CardHeader({ className, children }: CardSectionProps) {
  return (
    <div className={cn('px-6 py-4 border-b border-[var(--color-border)]', className)}>
      {children}
    </div>
  );
}

function CardBody({ className, children }: CardSectionProps) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

function CardFooter({ className, children }: CardSectionProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]',
        className
      )}
    >
      {children}
    </div>
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
