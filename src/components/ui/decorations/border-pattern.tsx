
import React from 'react';
import { cn } from '@/lib/utils';

export type BorderPatternVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent' 
  | 'navy'
  | 'silver'
  | 'bronze'
  | 'crimson';

export type BorderPatternSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BorderPatternProps {
  variant?: BorderPatternVariant;
  size?: BorderPatternSize;
  className?: string;
  fillClassName?: string;
}

export const BorderPattern = ({
  variant = 'default',
  size = 'md',
  className,
  fillClassName,
}: BorderPatternProps) => {
  // Size styles
  const sizeStyles = {
    sm: "h-[1px]",
    md: "h-[2px]",
    lg: "h-1",
    xl: "h-2",
  };

  // Color styles based on variant
  const getGradient = () => {
    if (variant === 'primary') {
      return 'bg-gradient-to-r from-primary/30 via-primary to-primary/30';
    } else if (variant === 'secondary') {
      return 'bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30';
    } else if (variant === 'accent') {
      return 'bg-gradient-to-r from-accent/30 via-accent to-accent/30';
    } else if (variant === 'navy') {
      return 'bg-gradient-to-r from-blue-900/30 via-blue-800 to-blue-900/30';
    } else if (variant === 'silver') {
      return 'bg-gradient-to-r from-gray-400/30 via-gray-300 to-gray-400/30';
    } else if (variant === 'bronze') {
      return 'bg-gradient-to-r from-amber-700/30 via-amber-600 to-amber-700/30';
    } else if (variant === 'crimson') {
      return 'bg-gradient-to-r from-red-900/30 via-red-800 to-red-900/30';
    } else {
      return 'bg-gradient-to-r from-white/5 via-white/20 to-white/5 dark:from-white/10 dark:via-white/30 dark:to-white/10';
    }
  };

  return (
    <div className={cn("w-full relative", sizeStyles[size], className)}>
      <div className={cn("absolute inset-0", getGradient(), fillClassName)} />
    </div>
  );
};
