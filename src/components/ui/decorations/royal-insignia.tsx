
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, toMedievalIconColor } from './types';

const RoyalInsignia: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  return (
    <div className={cn(
      'relative',
      sizeClasses[size].container,
      className
    )}>
      <div className="absolute inset-0 flex items-center justify-center">
        <MedievalIcon 
          name="crown" 
          size={sizeClasses[size].icon} 
          color={toMedievalIconColor(color)} 
          animate={animate} 
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className={cn(
          'absolute rounded-full',
          sizeClasses[size].border,
          color === 'gold' ? 'border-royal-gold' : 
          color === 'silver' ? 'border-gray-400' :
          color === 'bronze' ? 'border-amber-700' :
          color === 'crimson' ? 'border-royal-crimson' :
          color === 'navy' ? 'border-royal-navy' :
          'border-white/40',
          'border-2'
        )}></div>
      </div>
    </div>
  );
};

export default RoyalInsignia;
