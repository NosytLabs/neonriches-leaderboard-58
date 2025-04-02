
import React, { forwardRef } from 'react';
import { IconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className = '', animated = false, style = 'default', ...props }, ref) => {
    // Use name as fallback for icon (for backward compatibility)
    const iconName = (icon || name) as keyof typeof LucideIcons;
    
    // Get the Lucide icon component
    const IconComponent = LucideIcons[iconName];

    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found`);
      return null;
    }

    // Determine size class based on the type
    let sizeClass = '';
    if (typeof size === 'number') {
      sizeClass = `w-${size} h-${size}`;
    } else {
      sizeClass = iconSizeMap[size] || iconSizeMap.md;
    }
    
    // Determine color class
    const colorClass = iconColorMap[color as keyof typeof iconColorMap] || color;
    
    // Determine animation class
    const animatedClass = animated ? 'animate-pulse' : '';

    // Create props for the icon component
    const iconProps = {
      ref,
      className: cn(sizeClass, colorClass, animatedClass, className),
      'aria-hidden': true,
      ...props
    };

    // @ts-ignore - Using createElement with the Lucide icon component
    return React.createElement(IconComponent, iconProps);
  }
);

Icon.displayName = 'Icon';

export default Icon;
