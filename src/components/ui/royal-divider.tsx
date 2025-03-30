
import React from 'react';
import { cn } from '@/lib/utils';

export type RoyalDividerVariant = 
  | 'line' 
  | 'double' 
  | 'fancy' 
  | 'ornate' 
  | 'simple' 
  | 'treasure' 
  | 'quill';

export type RoyalDividerColor = 
  | 'default' 
  | 'royal' 
  | 'gold' 
  | 'crimson' 
  | 'silver' 
  | 'navy' 
  | 'purple';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: RoyalDividerColor;
  className?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'default',
  className
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'royal': return 'text-royal-purple';
      case 'gold': return 'text-royal-gold';
      case 'crimson': return 'text-royal-crimson';
      case 'silver': return 'text-gray-300';
      case 'navy': return 'text-royal-navy';
      case 'purple': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getLineClass = () => {
    switch (variant) {
      case 'double': return 'h-[3px] border-t-2 border-b-[1px] border-current opacity-60';
      case 'fancy': return 'h-[1px] bg-gradient-to-r from-transparent via-current to-transparent';
      case 'ornate': return 'h-[4px] bg-gradient-to-r from-transparent via-current to-transparent border-t border-b border-current opacity-40';
      case 'simple': return 'h-[1px] bg-current opacity-40';
      case 'treasure': return 'h-[2px] bg-gradient-to-r from-royal-gold/20 via-royal-gold to-royal-gold/20 border-t border-royal-gold/40';
      case 'quill': return 'h-[1px] bg-gradient-to-r from-royal-purple/20 via-royal-purple to-royal-purple/20';
      default: return 'h-[1px] bg-current opacity-40';
    }
  };

  return (
    <div className={cn('flex items-center w-full', className)}>
      <div className={cn('flex-1', getColorClass(), getLineClass())} />
      
      {label && (
        <div className={cn('px-4 text-sm font-medium uppercase tracking-wider', getColorClass())}>
          {label}
        </div>
      )}
      
      <div className={cn('flex-1', getColorClass(), getLineClass())} />
    </div>
  );
};

export default RoyalDivider;
