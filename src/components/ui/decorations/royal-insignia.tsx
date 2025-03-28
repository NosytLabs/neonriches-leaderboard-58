
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, toMedievalIconColor, getColorClass } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const RoyalInsignia: React.FC<BaseDecorationProps> = ({
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
      <div className="absolute inset-0 flex items-center justify-center">
        <MedievalIcon 
          name="crown" 
          size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)} 
          color={adaptIconColor(color)} 
          animate={animate} 
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className={cn(
          'absolute rounded-full',
          typeof sizeClass === 'string' ? 'border-2' : sizeClass.border,
          getColorClass(color, 'border'),
          'border-2'
        )}></div>
      </div>
    </div>
  );
};

export default RoyalInsignia;
