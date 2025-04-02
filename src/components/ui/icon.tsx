
import React, { forwardRef } from 'react';
import { IconProps } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';

// Map of icon sizes to Tailwind classes
const sizeClasses = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-7 w-7',
  '2xl': 'h-8 w-8',
};

// Map of icon colors to Tailwind classes
const colorClasses = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'success': 'text-green-500',
  'warning': 'text-yellow-500',
  'error': 'text-red-500',
  'info': 'text-blue-500',
  'muted': 'text-muted-foreground',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, size = 'md', color = 'default', className = '', animated = false, style = 'default', ...props }, ref) => {
    // Determine the icon component to use
    const iconName = icon as keyof typeof LucideIcons;
    const IconComponent = LucideIcons[iconName];

    if (!IconComponent) {
      console.warn(`Icon "${icon}" not found`);
      return null;
    }

    // Determine size class
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    
    // Determine color class
    const colorClass = colorClasses[color] || color;
    
    // Determine animation class
    const animatedClass = animated ? 'animate-pulse' : '';

    return (
      <IconComponent
        ref={ref}
        className={`${sizeClass} ${colorClass} ${animatedClass} ${className}`}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
