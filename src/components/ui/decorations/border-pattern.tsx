
import React from 'react';
import { cn } from '@/lib/utils';
import { BaseDecorationProps, sizeClasses } from '@/types/ui/decorations/types';
import MedievalIcon from '@/components/ui/medieval-icon';

const BorderPattern: React.FC<BaseDecorationProps> = ({
  size = 'md',
  color = 'gold',
  className,
  animate = false,
  icon,
}) => {
  // Choose container classes based on props
  const containerClass = cn(
    'relative rounded-lg border border-dashed overflow-hidden',
    sizeClasses[size].container,
    className
  );

  // Add icon if provided
  const iconElement = icon ? (
    <div className="absolute top-2 right-2">
      <MedievalIcon 
        name={icon} 
        size={sizeClasses[size].icon} 
        color={color} 
      />
    </div>
  ) : null;

  // Animation classes
  const animationClass = animate ? 'animate-pulse-slow' : '';

  return (
    <div className={cn(containerClass, animationClass)}>
      {iconElement}
    </div>
  );
};

export default BorderPattern;
