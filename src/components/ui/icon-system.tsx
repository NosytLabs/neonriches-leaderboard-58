
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
  animated?: boolean;
}

const IconSystem: React.FC<IconSystemProps> = ({
  icon,
  size = 'md',
  color = 'default',
  className = '',
  style = 'default',
  animated = false
}) => {
  // Handle empty icon
  if (!icon) return null;

  // Animation class
  const animationClass = animated ? 'animate-pulse' : '';

  // Determine if we're using medieval style or default (Lucide)
  if (typeof style === 'string' && style === 'medieval') {
    // Medieval icon path
    const iconPath = `/assets/icons/medieval/${icon.toLowerCase()}.svg`;
    
    // Size class
    const sizeClass = typeof size === 'string' 
      ? (size in iconSizeMap ? iconSizeMap[size as keyof typeof iconSizeMap] : iconSizeMap.md)
      : `w-${size} h-${size}`;
    
    // Color class
    const colorClass = typeof color === 'string' && color in iconColorMap
      ? iconColorMap[color as keyof typeof iconColorMap]
      : (typeof color === 'string' ? color : 'text-current');
    
    return (
      <span className={cn("inline-block medieval-icon", sizeClass, colorClass, animationClass, className)}>
        <img src={iconPath} alt={`${icon} icon`} className="w-full h-full" />
      </span>
    );
  }
  
  // Handle Lucide icons
  // Format iconName to match Lucide export names (PascalCase)
  const formattedIconName = icon
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
  
  const IconComponent = (LucideIcons as any)[formattedIconName];
  
  if (!IconComponent) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }
  
  // Size class for Lucide
  const sizeClass = typeof size === 'string' 
    ? (size in iconSizeMap ? iconSizeMap[size as keyof typeof iconSizeMap] : iconSizeMap.md)
    : `w-${size} h-${size}`;
  
  // Color class for Lucide
  const colorClass = typeof color === 'string' && color in iconColorMap
    ? iconColorMap[color as keyof typeof iconColorMap]
    : (typeof color === 'string' ? color : 'text-current');
  
  return <IconComponent className={cn(sizeClass, colorClass, animationClass, className)} style={typeof style === 'object' ? style : undefined} />;
};

export default IconSystem;
