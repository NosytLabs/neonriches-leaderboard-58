
import React from 'react';
import { MedievalIconName, MedievalIconColor, MedievalIconSize, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize | number;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
}

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
    <div className={`medieval-icon medieval-icon-${name} ${colorClass} ${sizeClass} ${animationClass} ${className}`}>
      {/* Icon SVG would go here */}
      <span className="sr-only">{name} icon</span>
    </div>
  );
};

export { MedievalIconProps, MedievalIconName, MedievalIconColor, MedievalIconSize };
export default MedievalIcon;
