
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardProps } from '@/components/ui/card';

export interface RoyalCardProps extends CardProps {
  variant?: 'default' | 'gold' | 'royal' | 'crimson';
}

const RoyalCard = React.forwardRef<HTMLDivElement, RoyalCardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'glass-morphism border-white/10',
      gold: 'glass-morphism border-royal-gold/30 bg-gradient-to-br from-black/80 to-royal-gold/10',
      royal: 'glass-morphism border-royal-purple/30 bg-gradient-to-br from-black/80 to-royal-purple/10',
      crimson: 'glass-morphism border-royal-crimson/30 bg-gradient-to-br from-black/80 to-royal-crimson/10',
    };

    return (
      <Card
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

RoyalCard.displayName = 'RoyalCard';

export default RoyalCard;
