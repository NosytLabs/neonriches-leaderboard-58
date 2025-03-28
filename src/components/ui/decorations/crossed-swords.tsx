
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const CrossedSwords: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className = ''
}) => {
  const sizeClass = sizeClasses[size];
  const containerSize = typeof sizeClass === 'string' ? sizeClass : sizeClass.container;
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
  return (
    <div className={cn(
      'relative flex items-center justify-center',
      containerSize,
      animationClass,
      className
    )}>
      <div className="absolute transform -rotate-45 -translate-x-1">
        <MedievalIcon 
          name="sword" 
          size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
      
      <div className="absolute transform rotate-45 translate-x-1">
        <MedievalIcon 
          name="sword" 
          size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default CrossedSwords;
