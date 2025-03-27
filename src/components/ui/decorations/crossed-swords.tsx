
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses } from './types';

const CrossedSwords: React.FC<BaseDecorationProps> = ({
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
      <div className="absolute transform -rotate-45">
        <MedievalIcon name="sword" size={sizeClasses[size].icon} color={color} animate={animate} />
      </div>
      <div className="absolute transform rotate-45">
        <MedievalIcon name="sword" size={sizeClasses[size].icon} color={color} animate={animate} />
      </div>
    </div>
  );
};

export default CrossedSwords;
