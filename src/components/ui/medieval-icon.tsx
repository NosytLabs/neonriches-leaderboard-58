import React from 'react';
import { MedievalIconProps, MedievalIconSize, MedievalIconColor, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  className = '',
  animate = false
}) => {
  const sizeClass = typeof size === 'string' ? iconSizeMap[size] : `w-${size} h-${size}`;
  const colorClass = iconColorMap[color];
  const animationClass = animate ? 'animate-pulse' : '';

  return (
    <div className={cn(`medieval-icon medieval-icon-${name}`, colorClass, sizeClass, animationClass, className)}>
      {/* Icon SVG would go here */}
      <span className="sr-only">{name} icon</span>
    </div>
  );
};

export default MedievalIcon;
