
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, toMedievalIconColor } from '@/types/ui/decorations/types';

const CoatOfArms: React.FC<BaseDecorationProps> = ({
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
      <MedievalIcon 
        name="shield" 
        size={sizeClasses[size].icon} 
        color={toMedievalIconColor(color)} 
        animate={animate} 
      />
    </div>
  );
};

export default CoatOfArms;
