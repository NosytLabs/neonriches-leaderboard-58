
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass } from './types';

const CornerFlourish: React.FC<BaseDecorationProps> = ({
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
        'absolute border-t-2 border-l-2',
        sizeClasses[size].border,
        getColorClass(color, 'border')
      )}></div>
      <div className={cn(
        'absolute',
        sizeClasses[size].container,
        animate ? 'animate-pulse-slow' : ''
      )} style={{ transform: 'rotate(-45deg)', opacity: 0.2 }}>
        <MedievalIcon name="pattern" size={sizeClasses[size].icon} color={color} />
      </div>
    </div>
  );
};

export default CornerFlourish;
