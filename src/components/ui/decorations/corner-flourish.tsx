
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass, toMedievalIconColor } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const CornerFlourish: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  const sizeClass = sizeClasses[size];
  
  return (
    <div className={cn(
      'relative',
      typeof sizeClass === 'string' ? sizeClass : sizeClass.container,
      className
    )}>
      <div className={cn(
        'absolute border-t-2 border-l-2',
        typeof sizeClass === 'string' ? 'border-2' : sizeClass.border,
        getColorClass(color)
      )}></div>
      <div className={cn(
        'absolute',
        typeof sizeClass === 'string' ? sizeClass : sizeClass.container,
        animate ? 'animate-pulse-slow' : ''
      )} style={{ transform: 'rotate(-45deg)', opacity: 0.2 }}>
        <MedievalIcon 
          name="scroll" 
          size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default CornerFlourish;
