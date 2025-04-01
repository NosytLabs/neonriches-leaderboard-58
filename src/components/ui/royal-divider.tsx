
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple' | 'crown' | 'scroll';
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'purple' | 'navy';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: RoyalDividerColor;
  className?: string;
  icon?: React.ReactNode;
  text?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'default',
  className,
  icon,
  text
}) => {
  const colorClasses = {
    gold: 'border-royal-gold/50 text-royal-gold',
    royal: 'border-royal-purple/50 text-royal-purple',
    crimson: 'border-royal-crimson/50 text-royal-crimson',
    purple: 'border-purple-500/50 text-purple-500',
    navy: 'border-blue-900/50 text-blue-900',
    default: 'border-white/20 text-white/50'
  };
  
  const colorClass = colorClasses[color] || colorClasses.default;
  
  if (variant === 'line' && (label || text)) {
    return (
      <div className={cn("flex items-center", className)}>
        <div className={cn("flex-grow border-t", colorClass)} />
        <div className="flex-shrink mx-3 flex items-center space-x-2">
          {icon || (color === 'gold' && <Crown className="h-4 w-4 text-royal-gold" />)}
          <span className={cn("text-sm font-medium", colorClass)}>{label || text}</span>
        </div>
        <div className={cn("flex-grow border-t", colorClass)} />
      </div>
    );
  }
  
  if (variant === 'crown') {
    return (
      <div className={cn("relative flex items-center my-6", className)}>
        <div className={cn("w-full border-t", colorClass)} />
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
          <Crown className={cn("h-6 w-6", color === 'gold' ? 'text-royal-gold' : color === 'crimson' ? 'text-royal-crimson' : color === 'royal' ? 'text-royal-purple' : color === 'purple' ? 'text-purple-500' : color === 'navy' ? 'text-blue-900' : 'text-white/50')} />
        </div>
        {(label || text) && (
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-4 px-2 text-xs">
            <span className={cn("font-medium", colorClass)}>{label || text}</span>
          </div>
        )}
      </div>
    );
  }
  
  if (variant === 'fancy') {
    return (
      <div className={cn("relative flex items-center justify-center my-6", className)}>
        <div className={cn("w-full border-t", colorClass)} />
        <div className="absolute bg-background px-4 flex items-center">
          <div className={cn("w-2 h-2 rounded-full", colorClass.replace('border-', 'bg-').split(' ')[0])} />
          {(label || text) && (
            <span className={cn("mx-2 text-sm font-medium", colorClass)}>{label || text}</span>
          )}
          <div className={cn("w-2 h-2 rounded-full", colorClass.replace('border-', 'bg-').split(' ')[0])} />
        </div>
      </div>
    );
  }
  
  if (variant === 'double') {
    return (
      <div className={cn("space-y-1", className)}>
        <div className={cn("w-full border-t", colorClass)} />
        <div className={cn("w-full border-t", colorClass)} />
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={cn("relative flex items-center my-6", className)}>
        <div className={cn("w-full border-t", colorClass)} />
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6">
          <div className="flex items-center space-x-2">
            <div className={cn("w-2 h-2 rotate-45", colorClass.replace('border-', 'bg-').split(' ')[0])} />
            {(label || text) && <span className={cn("text-sm font-medium", colorClass)}>{label || text}</span>}
            <div className={cn("w-2 h-2 rotate-45", colorClass.replace('border-', 'bg-').split(' ')[0])} />
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'scroll') {
    return (
      <div className={cn("relative flex items-center my-4", className)}>
        <div className={cn("flex-grow h-px bg-gradient-to-r", colorClass)} />
        {(label || text) && (
          <div className={cn("absolute left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-royal-gold font-medieval", textClassName)}>
            {label || text}
          </div>
        )}
        <div className="absolute left-0 -top-1 w-4 h-4 bg-gray-900 rounded-full border border-royal-gold/50" />
        <div className="absolute right-0 -top-1 w-4 h-4 bg-gray-900 rounded-full border border-royal-gold/50" />
      </div>
    );
  }
  
  // Default: simple line
  return <div className={cn("w-full border-t", colorClass, className)} />;
};

export default RoyalDivider;
