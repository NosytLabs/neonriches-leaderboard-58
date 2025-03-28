
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon, { MedievalIconColor, MedievalIconSize } from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass } from './types';

const CrossedSwords: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className = ''
}) => {
  const containerSize = sizeClasses[size].container;
  const borderColor = getColorClass(color, 'border');
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
  return (
    <div className={cn(
      'relative flex items-center justify-center',
      containerSize,
      animationClass,
      className
    )}>
      <div className="absolute transform -rotate-45 -translate-x-1">
        <MedievalIcon name="swords" size={size} color={color} />
      </div>
      
      <div className="absolute transform rotate-45 translate-x-1">
        <MedievalIcon name="swords" size={size} color={color} />
      </div>
    </div>
  );
};

export default CrossedSwords;
