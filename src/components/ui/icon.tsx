
import React, { forwardRef } from 'react';
import { IconProps } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

// Define the size map 
const iconSizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-16 h-16',
  '4xl': 'w-20 h-20'
};

// Define color map
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
  gold: 'text-royal-gold',
  silver: 'text-gray-300',
  crimson: 'text-royal-crimson',
  emerald: 'text-emerald-500',
  bronze: 'text-amber-600',
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500'
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className = '', animated = false, ...props }, ref) => {
    // Use either icon or name prop for backwards compatibility
    const iconName = (icon || name || '') as keyof typeof LucideIcons;
    
    if (!iconName) {
      console.warn('Icon component must have either icon or name prop');
      return null;
    }
    
    // Get the Lucide icon component
    const LucideIcon = iconName in LucideIcons ? LucideIcons[iconName] : null;

    if (!LucideIcon) {
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
    if (typeof color === 'string' && color in iconColorMap) {
      colorClass = iconColorMap[color as keyof typeof iconColorMap];
    } else {
      colorClass = color as string; // Allow custom color classes
    }
    
    // Determine animation class
    const animatedClass = animated ? 'animate-pulse' : '';

    // Use React.createElement to avoid type errors with LucideIcon
    return React.createElement(
      LucideIcon,
      {
        ref,
        className: cn(sizeClass, colorClass, animatedClass, className),
        'aria-hidden': 'true',
        ...props
      }
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
