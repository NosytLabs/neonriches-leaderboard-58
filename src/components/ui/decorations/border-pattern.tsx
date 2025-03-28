
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, toMedievalIconColor } from './types';

const BorderPattern: React.FC<BaseDecorationProps> = ({
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
      <div className={cn(
        'absolute inset-0 opacity-20',
        animate ? 'animate-spin-slow' : ''
      )}>
        <MedievalIcon 
          name="scroll" 
          size={sizeClasses[size].icon} 
          color={toMedievalIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default BorderPattern;
