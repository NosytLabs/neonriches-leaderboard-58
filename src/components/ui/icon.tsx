
import React, { forwardRef } from 'react';
import { IconProps } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the size map here to avoid any type issues
const iconSizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

// Define color map here to avoid any type issues
const iconColorMap = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-muted-foreground',
  accent: 'text-accent',
  success: 'text-green-500',
  warning: 'text-amber-500',
  danger: 'text-red-500',
  info: 'text-blue-500',
  royal: 'text-royal-gold',
  muted: 'text-muted-foreground',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className = '', animated = false, ...props }, ref) => {
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
      sizeClass = iconSizeMap[size as keyof typeof iconSizeMap] || iconSizeMap.md;
    }
    
    // Determine color class - handle both string literal types and CSS class strings
    let colorClass = '';
    if (color in iconColorMap) {
      colorClass = iconColorMap[color as keyof typeof iconColorMap];
    } else {
      colorClass = color as string; // Allow custom color classes
    }
    
    // Determine animation class
    const animatedClass = animated ? 'animate-pulse' : '';

    // Create props for the icon component
    const iconProps = {
      ref,
      className: cn(sizeClass, colorClass, animatedClass, className),
      'aria-hidden': true,
      ...props
    };

    // Using createElement with the Lucide icon component
    return React.createElement(IconComponent, iconProps);
  }
);

Icon.displayName = 'Icon';

export default Icon;
