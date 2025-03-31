
import React from 'react';
import { cn } from '@/lib/utils';

type RoyalDividerVariant = 'line' | 'double' | 'fancy';
type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: RoyalDividerColor;
  className?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'default',
  className,
}) => {
  const colorClasses = {
    default: 'from-white/20 via-white/40 to-white/20',
    royal: 'from-royal-blue/20 via-royal-blue/60 to-royal-blue/20',
    gold: 'from-royal-gold/20 via-royal-gold/60 to-royal-gold/20',
    crimson: 'from-royal-crimson/20 via-royal-crimson/60 to-royal-crimson/20',
  };

  const variants = {
    line: `h-px bg-gradient-to-r ${colorClasses[color]}`,
    double: `h-[3px] bg-double-line relative ${colorClasses[color]}`,
    fancy: `h-[5px] bg-gradient-to-r ${colorClasses[color]} relative`
  };

  return (
    <div className={cn('w-full my-4', variants[variant], className)}>
      {variant === 'fancy' && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-3 bg-black border-x border-t rounded-t-full" />
      )}
      {variant === 'double' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent h-full w-full" />
      )}
    </div>
  );
};

export default RoyalDivider;
