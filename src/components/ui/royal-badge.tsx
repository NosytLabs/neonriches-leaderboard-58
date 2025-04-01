
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// Define custom variant types
export type RoyalBadgeVariant = 'default' | 'gold' | 'royal' | 'crimson' | 'navy' | 'purple';

export interface RoyalBadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'variant'> {
  variant?: RoyalBadgeVariant;
  className?: string;
}

const RoyalBadge = React.forwardRef<HTMLDivElement, RoyalBadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-white/10 hover:bg-white/20',
      gold: 'bg-royal-gold/20 text-royal-gold border-royal-gold/30 hover:bg-royal-gold/30',
      royal: 'bg-royal-purple/20 text-royal-purple border-royal-purple/30 hover:bg-royal-purple/30',
      crimson: 'bg-royal-crimson/20 text-royal-crimson border-royal-crimson/30 hover:bg-royal-crimson/30',
      navy: 'bg-royal-navy/20 text-royal-navy border-royal-navy/30 hover:bg-royal-navy/30',
      purple: 'bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30',
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

RoyalBadge.displayName = 'RoyalBadge';

export default RoyalBadge;
