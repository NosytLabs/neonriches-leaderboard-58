
import React from 'react';
import { cn } from '@/lib/utils';
import type { RoyalDividerVariant, RoyalDividerColor, RoyalDividerProps } from '@/types/royal-divider-types';

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'default',
  className,
  label
}) => {
  const colorClasses = {
    default: 'from-white/20 via-white/40 to-white/20',
    royal: 'from-royal-blue/20 via-royal-blue/60 to-royal-blue/20',
    gold: 'from-royal-gold/20 via-royal-gold/60 to-royal-gold/20',
    crimson: 'from-royal-crimson/20 via-royal-crimson/60 to-royal-crimson/20',
    purple: 'from-purple-500/20 via-purple-500/60 to-purple-500/20',
    navy: 'from-royal-navy/20 via-royal-navy/60 to-royal-navy/20',
    emerald: 'from-emerald-500/20 via-emerald-500/60 to-emerald-500/20',
  };

  const variantStyles = {
    line: `h-px bg-gradient-to-r ${colorClasses[color]}`,
    double: `h-[3px] bg-double-line relative ${colorClasses[color]}`,
    fancy: `h-[5px] bg-gradient-to-r ${colorClasses[color]} relative`,
    ornate: `h-[7px] bg-gradient-to-r ${colorClasses[color]} relative`,
    simple: `h-[1px] border-t border-${color === 'default' ? 'white/10' : color}-500/30`,
    crown: `h-[5px] bg-gradient-to-r ${colorClasses[color]} relative royal-crown-divider`,
    scroll: `h-[5px] bg-gradient-to-r ${colorClasses[color]} relative royal-scroll-divider`,
  };

  return (
    <div className={cn('relative w-full my-4 flex items-center', className)}>
      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-black z-10 text-xs text-white/80 uppercase tracking-wider font-medium">
          {label}
        </div>
      )}
      
      <div className={cn('w-full', variantStyles[variant])}>
        {variant === 'fancy' && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-3 bg-black border-x border-t rounded-t-full" />
        )}
        {variant === 'double' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent h-full w-full" />
        )}
        {variant === 'crown' && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 flex items-center justify-center">
            <span className="text-xs">👑</span>
          </div>
        )}
        {variant === 'scroll' && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 flex items-center justify-center">
            <span className="text-xs">📜</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoyalDivider;
