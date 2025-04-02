
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

interface IconSystemProps {
  icon: string;
  size?: string | number;
  color?: string;
  className?: string;
  style?: string | React.CSSProperties;
}

const IconSystem: React.FC<IconSystemProps> = ({
  icon,
  size = 'md',
  color = 'default',
  className = '',
  style = 'default',
}) => {
  // Handle empty icon
  if (!icon) return null;

  // Determine if we're using medieval style or default (Lucide)
  if (typeof style === 'string' && style === 'medieval') {
    // Medieval icon path
    const iconPath = `/assets/icons/medieval/${icon}.svg`;
    
    // Size class
    const sizeClass = typeof size === 'string' ? (iconSizeMap[size] || iconSizeMap.md) : `w-${size} h-${size}`;
    
    // Color class
    const colorClass = typeof color === 'string' ? (iconColorMap[color] || color) : 'text-current';
    
    return (
      <span className={cn("inline-block medieval-icon", sizeClass, colorClass, className)}>
        <img src={iconPath} alt={`${icon} icon`} className="w-full h-full" />
      </span>
    );
  }
  
  // Handle Lucide icons
  const IconComponent = (LucideIcons as any)[icon];
  
  if (!IconComponent) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }
  
  // Size class for Lucide
  const sizeClass = typeof size === 'string' ? (iconSizeMap[size] || iconSizeMap.md) : `w-${size} h-${size}`;
  
  // Color class for Lucide
  const colorClass = typeof color === 'string' ? (iconColorMap[color] || color) : 'text-current';
  
  return React.createElement(IconComponent, {
    className: cn(sizeClass, colorClass, className),
    style: typeof style === 'object' ? style : undefined
  });
};

export default IconSystem;
