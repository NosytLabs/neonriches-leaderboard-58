
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps, sizeClasses, getColorClass } from '@/types/ui/decorations/types';
import { adaptIconName, adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const RoyalBanner: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className = ''
}) => {
  const sizeClass = sizeClasses[size];
  const containerSize = typeof sizeClass === 'string' ? sizeClass : sizeClass.container;
  const bgColor = getColorClass(color);
  const borderColor = getColorClass(color, 'border');
  const animateClass = animate ? 'animate-pulse-slow' : '';
  
  const bannerIcons = [
    { name: "crown", position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
    { name: "sword", position: 'bottom-1/4 left-1/4' },
    { name: "shield", position: 'bottom-1/4 right-1/4' }
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
            name={adaptIconName(icon.name as any)}
            size={adaptIconSize(typeof sizeClass === 'string' ? 'md' : sizeClass.icon)}
            color={adaptIconColor(color)}
          />
        </div>
      ))}
    </div>
  );
};

export default RoyalBanner;
