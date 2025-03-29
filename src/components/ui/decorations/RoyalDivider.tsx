
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

interface RoyalDividerProps {
  variant?: 'line' | 'fancy' | 'double';
  label?: string;
  color?: 'gold' | 'royal' | 'crimson' | 'default';
  className?: string;
  icon?: React.ReactNode;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'default',
  className,
  icon
}) => {
  const colorClasses = {
    gold: 'border-royal-gold/50 text-royal-gold',
    royal: 'border-royal-purple/50 text-royal-purple',
    crimson: 'border-royal-crimson/50 text-royal-crimson',
    default: 'border-white/20 text-white/50'
  };
  
  const colorClass = colorClasses[color];
  
  if (variant === 'line' && label) {
    return (
      <div className={cn("flex items-center", className)}>
        <div className={cn("flex-grow border-t", colorClass)} />
        <div className="flex-shrink mx-3 flex items-center space-x-2">
          {icon || (color === 'gold' && <Crown className="h-4 w-4 text-royal-gold" />)}
          <span className={cn("text-sm font-medium", colorClass)}>{label}</span>
        </div>
        <div className={cn("flex-grow border-t", colorClass)} />
      </div>
    );
  }
  
  if (variant === 'fancy') {
    return (
      <div className={cn("relative flex items-center justify-center my-6", className)}>
        <div className={cn("w-full border-t", colorClass)} />
        <div className="absolute bg-background px-4 flex items-center">
          <div className={cn("w-2 h-2 rounded-full", colorClass.replace('border-', 'bg-').split(' ')[0])} />
          {label && (
            <span className={cn("mx-2 text-sm font-medium", colorClass)}>{label}</span>
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
  
  // Default: simple line
  return <div className={cn("w-full border-t", colorClass, className)} />;
};

export default RoyalDivider;
