
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, toMedievalIconColor } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const CoatOfArms: React.FC<BaseDecorationProps> = ({
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
      <MedievalIcon 
        name="shield" 
        size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)} 
        color={adaptIconColor(color)} 
        animate={animate} 
      />
    </div>
  );
};

export default CoatOfArms;
