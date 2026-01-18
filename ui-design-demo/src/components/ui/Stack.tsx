import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface StackProps {
  direction?: 'vertical' | 'horizontal';
  gap?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
  children: ReactNode;
}

const gapStyles = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  12: 'gap-12',
};

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

export function Stack({
  direction = 'vertical',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  children,
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        gapStyles[gap],
        alignStyles[align],
        justifyStyles[justify],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
}
