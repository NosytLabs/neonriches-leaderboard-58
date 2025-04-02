
import React from 'react';
import { cn } from '@/lib/utils';
import { MedievalIconProps } from '@/types/ui/icon-types';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  animated = false,
  ...props
}) => {
  // Map of size values to CSS classes
  const sizeMap = {
    'xs': 'h-3 w-3',
    'sm': 'h-4 w-4',
    'md': 'h-6 w-6',
    'lg': 'h-8 w-8',
    'xl': 'h-10 w-10',
    '2xl': 'h-12 w-12',
  };

  // Map of color values to CSS classes
  const colorMap = {
    'default': 'text-foreground',
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'muted': 'text-muted-foreground',
    'accent': 'text-accent',
    'destructive': 'text-destructive',
    'gold': 'text-royal-gold',
    'white': 'text-white',
    'black': 'text-black',
  };

  // Determine the correct size and color classes
  const sizeClass = sizeMap[size as keyof typeof sizeMap] || sizeMap.md;
  const colorClass = colorMap[color as keyof typeof colorMap] || colorMap.default;
  const animatedClass = animated ? 'animate-pulse' : '';

  // Get the icon path
  const iconPath = `/assets/icons/medieval/${name}.svg`;

  return (
    <span 
      className={cn(
        "inline-block medieval-icon", 
        sizeClass, 
        colorClass, 
        animatedClass, 
        className
      )} 
      {...props}
    >
      {/* Use an img tag for the medieval icon */}
      <img src={iconPath} alt={`${name} icon`} className="w-full h-full" />
    </span>
  );
};

export default MedievalIcon;
