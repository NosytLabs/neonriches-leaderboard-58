
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

export type DecorationVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent' 
  | 'navy'
  | 'silver'
  | 'bronze'
  | 'crimson';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface RoyalBannerProps {
  variant?: DecorationVariant;
  size?: DecorationSize;
  className?: string;
  children?: React.ReactNode;
  withIcon?: boolean;
}

export const RoyalBanner = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  withIcon = true,
}: RoyalBannerProps) => {
  // Color styles based on variant
  const getBackgroundClassName = () => {
    if (variant === 'primary') {
      return 'bg-primary/10 border-primary/30';
    } else if (variant === 'secondary') {
      return 'bg-secondary/10 border-secondary/30';
    } else if (variant === 'accent') {
      return 'bg-accent/10 border-accent/30';
    } else if (variant === 'navy') {
      return 'bg-blue-900/10 border-blue-800/30';
    } else if (variant === 'silver') {
      return 'bg-gray-400/10 border-gray-300/30';
    } else if (variant === 'bronze') {
      return 'bg-amber-700/10 border-amber-600/30';
    } else if (variant === 'crimson') {
      return 'bg-red-900/10 border-red-800/30';
    } else {
      return 'bg-white/5 border-white/20 dark:bg-white/10 dark:border-white/30';
    }
  };

  const getIconClassName = () => {
    if (variant === 'primary') {
      return 'text-primary';
    } else if (variant === 'secondary') {
      return 'text-secondary';
    } else if (variant === 'accent') {
      return 'text-accent';
    } else if (variant === 'navy') {
      return 'text-blue-800';
    } else if (variant === 'silver') {
      return 'text-gray-300';
    } else if (variant === 'bronze') {
      return 'text-amber-600';
    } else if (variant === 'crimson') {
      return 'text-red-800';
    } else {
      return 'text-white/80';
    }
  };

  // Size styles
  const getSizeStyles = () => {
    if (size === 'xs') {
      return 'px-2 py-1 text-xs';
    } else if (size === 'sm') {
      return 'px-3 py-1.5 text-sm';
    } else if (size === 'lg') {
      return 'px-5 py-3 text-lg';
    } else if (size === 'xl') {
      return 'px-6 py-4 text-xl';
    } else {
      // md is default
      return 'px-4 py-2';
    }
  };

  return (
    <div
      className={cn(
        "rounded-md border flex items-center",
        getBackgroundClassName(),
        getSizeStyles(),
        className
      )}
    >
      {withIcon && (
        <Crown className={cn("mr-2 h-4 w-4", getIconClassName())} />
      )}
      {children}
    </div>
  );
};
