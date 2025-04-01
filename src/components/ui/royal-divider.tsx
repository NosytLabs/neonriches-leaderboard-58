
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';
import { RoyalDividerProps } from '@/types/royal-divider-types';

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'default',
  className,
  icon,
  size = 'md',
  fullWidth = false
}) => {
  const colorClasses = {
    gold: 'border-royal-gold/50 text-royal-gold',
    royal: 'border-royal-purple/50 text-royal-purple',
    crimson: 'border-royal-crimson/50 text-royal-crimson',
    navy: 'border-royal-navy/50 text-royal-navy',
    purple: 'border-purple-500/50 text-purple-500',
    default: 'border-white/20 text-white/50'
  };
  
  const sizeClasses = {
    sm: 'border-t',
    md: 'border-t-2',
    lg: 'border-t-3',
    xl: 'border-t-4'
  };
  
  const colorClass = colorClasses[color] || colorClasses.default;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const widthClass = fullWidth ? 'w-full' : 'max-w-4xl mx-auto';
  
  if (variant === 'line' && label) {
    return (
      <div className={cn("flex items-center", widthClass, className)}>
        <div className={cn("flex-grow", sizeClass, colorClass)} />
        <div className="flex-shrink mx-3 flex items-center space-x-2">
          {icon || (color === 'gold' && <Crown className="h-4 w-4 text-royal-gold" />)}
          <span className={cn("text-sm font-medium", colorClass)}>{label}</span>
        </div>
        <div className={cn("flex-grow", sizeClass, colorClass)} />
      </div>
    );
  }
  
  if (variant === 'fancy') {
    return (
      <div className={cn("relative flex items-center justify-center my-6", widthClass, className)}>
        <div className={cn("w-full", sizeClass, colorClass)} />
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
      <div className={cn("space-y-1", widthClass, className)}>
        <div className={cn("w-full", sizeClass, colorClass)} />
        <div className={cn("w-full", sizeClass, colorClass)} />
        {label && (
          <div className="text-center mt-2">
            <span className={cn("text-sm font-medium", colorClass)}>{label}</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'crown') {
    return (
      <div className={cn("flex items-center", widthClass, className)}>
        <div className={cn("flex-grow", sizeClass, colorClass)} />
        <div className="flex-shrink mx-3 flex items-center space-x-2">
          <Crown className={cn("h-5 w-5", colorClass)} />
          {label && <span className={cn("text-sm font-medium", colorClass)}>{label}</span>}
        </div>
        <div className={cn("flex-grow", sizeClass, colorClass)} />
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={cn("relative flex items-center", widthClass, className)}>
        <div className={cn("flex-grow", sizeClass, colorClass)} />
        <div className="mx-2">
          <div className={cn("h-4 w-4 rounded-full border-2", colorClass.replace('text-', 'border-'))} />
        </div>
        {label && (
          <span className={cn("absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background px-4 text-sm font-medium", colorClass)}>
            {label}
          </span>
        )}
        <div className={cn("flex-grow", sizeClass, colorClass)} />
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={cn("relative", widthClass, className)}>
        <div className={cn("w-full", sizeClass, colorClass)} />
        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn("bg-background px-4 text-sm font-medium", colorClass)}>{label}</span>
          </div>
        )}
      </div>
    );
  }
  
  // Default: simple line
  return <div className={cn("w-full", sizeClass, colorClass, widthClass, className)} />;
};

export default RoyalDivider;
