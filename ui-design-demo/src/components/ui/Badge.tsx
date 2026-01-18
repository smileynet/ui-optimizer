import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  className?: string;
  children: ReactNode;
}

const variantStyles = {
  default: 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]',
  success: 'bg-[var(--color-success-subtle)] text-[var(--green-600)]',
  warning: 'bg-[var(--color-warning-subtle)] text-[var(--yellow-600)]',
  error: 'bg-[var(--color-error-subtle)] text-[var(--red-600)]',
  info: 'bg-[var(--color-info-subtle)] text-[var(--blue-600)]',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Badge({ variant = 'default', size = 'sm', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
