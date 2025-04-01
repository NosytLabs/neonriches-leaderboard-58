
import React from 'react';
import { cn } from '@/lib/utils';
import { RoyalDividerColor } from '@/types/ui/decorations/types';

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'crown' | 'simple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: RoyalDividerColor;
  className?: string;
  label?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({ 
  variant = 'line',
  color = 'default',
  className = '',
  label
}) => {
  const colorClasses = {
    default: 'border-white/20',
    royal: 'border-royal-purple/50',
    gold: 'border-royal-gold/50',
    crimson: 'border-royal-crimson/50',
    purple: 'border-purple-500/50',
    navy: 'border-royal-navy/50'
  };
  
  const variantClasses = {
    line: 'h-px',
    double: 'h-0.5 border-t-2 border-b-2 border-t-white/10 border-b-white/5',
    fancy: 'h-px bg-gradient-to-r from-transparent via-white/20 to-transparent',
    ornate: 'h-px bg-[repeating-linear-gradient(90deg,transparent,white/5_1px,transparent_2px,white/20_3px)]',
    crown: 'h-px relative',
    simple: 'h-px'
  };
  
  const baseClass = cn(
    'w-full my-4',
    variantClasses[variant] || variantClasses.line,
    colorClasses[color] || colorClasses.default,
    className
  );
  
  if (label) {
    return (
      <div className="relative flex items-center w-full py-2">
        <div className={baseClass}></div>
        <span className="absolute px-2 left-1/2 transform -translate-x-1/2 bg-background text-sm text-muted-foreground">
          {label}
        </span>
      </div>
    );
  }
  
  return <div className={baseClass}></div>;
};

export default RoyalDivider;
