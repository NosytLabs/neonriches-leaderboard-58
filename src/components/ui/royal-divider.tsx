
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

export type RoyalDividerVariant = 'line' | 'crown' | 'simple' | 'ornate';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  className?: string;
  color?: 'gold' | 'silver' | 'default';
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  className,
  color = 'default'
}) => {
  const colorClasses = {
    gold: 'border-royal-gold text-royal-gold',
    silver: 'border-gray-400 text-gray-400',
    default: 'border-white/20 text-white/60'
  };

  const baseColorClass = colorClasses[color];

  return (
    <div className={cn('flex items-center justify-center my-4', className)}>
      {variant === 'line' && !label && (
        <div className={cn('w-full border-t', baseColorClass)} />
      )}

      {variant === 'simple' && !label && (
        <div className={cn('w-full border-t', baseColorClass)} />
      )}

      {variant === 'ornate' && !label && (
        <div className="flex items-center w-full">
          <div className={cn('w-full border-t', baseColorClass)} />
          <div className={cn('mx-2 text-lg', baseColorClass)}>❖</div>
          <div className={cn('w-full border-t', baseColorClass)} />
        </div>
      )}

      {variant === 'crown' && !label && (
        <div className="flex items-center w-full">
          <div className={cn('flex-1 border-t', baseColorClass)} />
          <Crown className={cn('mx-4 h-4 w-4', color === 'gold' ? 'text-royal-gold' : color === 'silver' ? 'text-gray-400' : 'text-white/60')} />
          <div className={cn('flex-1 border-t', baseColorClass)} />
        </div>
      )}

      {label && (
        <div className="flex items-center w-full">
          <div className={cn('flex-1 border-t', baseColorClass)} />
          <div className="flex items-center mx-4">
            {variant === 'crown' && (
              <Crown className={cn('mr-2 h-4 w-4', color === 'gold' ? 'text-royal-gold' : color === 'silver' ? 'text-gray-400' : 'text-white/60')} />
            )}
            <span className={cn('text-xs font-medium', color === 'gold' ? 'text-royal-gold' : color === 'silver' ? 'text-gray-400' : 'text-white/60')}>
              {label}
            </span>
            {variant === 'crown' && (
              <Crown className={cn('ml-2 h-4 w-4', color === 'gold' ? 'text-royal-gold' : color === 'silver' ? 'text-gray-400' : 'text-white/60')} />
            )}
          </div>
          <div className={cn('flex-1 border-t', baseColorClass)} />
        </div>
      )}
    </div>
  );
};

export default RoyalDivider;
