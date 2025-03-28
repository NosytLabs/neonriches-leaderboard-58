
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass } from '@/types/ui/decorations/types';

const RoyalBanner: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className = ''
}) => {
  const containerSize = sizeClasses[size].container;
  const bgColor = getColorClass(color, 'text');
  const borderColor = getColorClass(color, 'border');
  const animateClass = animate ? 'animate-pulse-slow' : '';
  
  const bannerIcons = [
    { name: "crown" as const, position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
    { name: "sword" as const, position: 'bottom-1/4 left-1/4' },
    { name: "shield" as const, position: 'bottom-1/4 right-1/4' }
  ];
  
  return (
    <div className={cn(
      'relative flex items-center justify-center',
      containerSize,
      animateClass,
      className
    )}>
      <div className={cn(
        'absolute inset-0 rounded-sm',
        'bg-opacity-20',
        borderColor,
        'border'
      )} />
      
      {bannerIcons.map((icon, index) => (
        <div key={index} className={cn('absolute', icon.position)}>
          <MedievalIcon
            name={icon.name}
            size={sizeClasses[size].icon}
            color={color}
          />
        </div>
      ))}
    </div>
  );
};

export default RoyalBanner;
