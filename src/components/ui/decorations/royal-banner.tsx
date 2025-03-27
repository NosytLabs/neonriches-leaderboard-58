
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass } from './types';
import { MedievalIconName } from '../medieval-icon';

const RoyalBanner: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  const getIconName = (): MedievalIconName => {
    if (color === 'gold') return 'crown';
    if (color === 'crimson') return 'sword';
    if (color === 'navy') return 'shield';
    return 'seal';
  };

  return (
    <div className={cn(
      'relative flex items-center justify-center',
      sizeClasses[size].container,
      className
    )}>
      <div className={cn(
        'absolute w-full h-1/3',
        getColorClass(color, 'bg')
      )}>
        {animate && (
          <div className="absolute inset-0 royal-shine"></div>
        )}
      </div>
      <div className="absolute z-10">
        <MedievalIcon 
          name={getIconName()} 
          size="sm" 
          color={color} 
          animate={animate} 
        />
      </div>
    </div>
  );
};

export default RoyalBanner;
