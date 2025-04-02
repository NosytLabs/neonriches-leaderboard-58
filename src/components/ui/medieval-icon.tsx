
import React from 'react';
import { MedievalIconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  animated = false
}) => {
  // Path to medieval icons
  const iconPath = `/assets/icons/medieval/${name}.svg`;
  
  // Get size class
  const sizeClass = iconSizeMap[size] || iconSizeMap.md;
  
  // Get color class
  const colorClass = iconColorMap[color] || 'text-current';
  
  // Animation class
  const animationClass = animated ? 'animate-pulse' : '';
  
  return (
    <div className={cn("inline-flex medieval-icon", sizeClass, colorClass, animationClass, className)}>
      <img 
        src={iconPath} 
        alt={`${name} icon`}
        className="w-full h-full"
      />
    </div>
  );
};

export default MedievalIcon;
