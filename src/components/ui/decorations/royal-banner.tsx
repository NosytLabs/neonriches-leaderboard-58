
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { sizeClasses, getColorClass } from '@/types/ui/decorations/types';

const RoyalBanner: React.FC<BaseDecorationProps & { text?: string }> = ({
  color = 'gold',
  size = 'md',
  animated = false,
  animate = false,
  className,
  text
}) => {
  const actualAnimate = animated || animate; // Support both prop names
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];
  
  return (
    <div className={cn(
      'flex items-center justify-center',
      sizeClass,
      className
    )}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Banner background */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          color === 'gold' ? 'bg-royal-gold/20' : 
          color === 'royal' ? 'bg-royal-purple/20' : 
          color === 'crimson' ? 'bg-royal-crimson/20' :
          color === 'navy' ? 'bg-royal-navy/20' :
          'bg-white/10',
          'border-t border-b',
          color === 'gold' ? 'border-royal-gold/30' : 
          color === 'royal' ? 'border-royal-purple/30' : 
          color === 'crimson' ? 'border-royal-crimson/30' :
          color === 'navy' ? 'border-royal-navy/30' :
          'border-white/20'
        )}>
        </div>
        
        {/* Banner icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MedievalIcon 
            name="banner" 
            size={size === 'xs' ? 'xs' : 
                 size === 'sm' ? 'sm' : 
                 size === 'md' ? 'md' : 
                 size === 'lg' ? 'lg' : 
                 size === 'xl' ? 'xl' : 'lg'}
            color={color as any}
            animated={actualAnimate}
          />
        </div>
        
        {/* Banner text */}
        {text && (
          <span className={cn(
            'relative z-10 text-center font-semibold',
            size === 'xs' ? 'text-[8px]' : 
            size === 'sm' ? 'text-xs' : 
            size === 'md' ? 'text-sm' : 
            size === 'lg' ? 'text-base' : 
            size === 'xl' ? 'text-lg' : 'text-sm',
            color === 'gold' ? 'text-royal-gold' : 
            color === 'royal' ? 'text-royal-purple' : 
            color === 'crimson' ? 'text-royal-crimson' :
            color === 'navy' ? 'text-royal-navy' :
            'text-white'
          )}>
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default RoyalBanner;
