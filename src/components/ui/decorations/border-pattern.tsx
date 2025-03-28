
import React from 'react';
import { cn } from '@/lib/utils';
import { BaseDecorationProps, MedievalDecorationColor, MedievalDecorationSize } from '@/types/ui/decorations/types';
import MedievalIcon from '@/components/ui/medieval-icon';

const BorderPattern: React.FC<BaseDecorationProps> = ({
  size = 'md',
  color = 'gold',
  className,
  container,
  icon,
  animate = false,
}) => {
  // Size mapping for the container
  const containerSizeClasses = {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
    xl: 'p-5',
    '2xl': 'p-6',
    '3xl': 'p-7',
    '4xl': 'p-8',
  };

  // Choose container classes based on props
  const containerClass = cn(
    'relative rounded-lg border border-dashed overflow-hidden',
    containerSizeClasses[size],
    container
  );

  // Add icon if provided
  const iconElement = icon ? (
    <div className="absolute top-2 right-2">
      <MedievalIcon name={icon} size={size} color={color} />
    </div>
  ) : null;

  // Animation classes
  const animationClass = animate ? 'animate-pulse-slow' : '';

  return (
    <div className={cn(containerClass, animationClass, className)}>
      {iconElement}
    </div>
  );
};

export default BorderPattern;
