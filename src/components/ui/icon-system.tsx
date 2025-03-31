import React from 'react';
import { IconProps, MedievalIconName, MedievalIconColor, MedievalIconSize, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const IconSystem = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'default', className, animated, ...props }, ref) => {
    // Handle size - can be a string type or a number
    let sizeClass: string;
    if (typeof size === 'string') {
      sizeClass = iconSizeMap[size as MedievalIconSize] || 'w-6 h-6';
    } else {
      sizeClass = `w-${size} h-${size}`;
    }

    // Handle color
    const colorClass = iconColorMap[color as MedievalIconColor] || 'text-current';
    
    // Animation class
    const animationClass = animated ? 'animate-pulse' : '';

    return (
      <div 
        className={cn(
          'inline-flex items-center justify-center',
          sizeClass,
          colorClass,
          animationClass,
          className
        )}
        {...props}
      >
        {/* Here we would render the actual icon SVG based on name */}
        <span className="sr-only">{name} icon</span>
      </div>
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
