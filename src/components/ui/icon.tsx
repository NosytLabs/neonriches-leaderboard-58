
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconProps } from '@/types/ui/icon-types';

export interface IconComponentProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
  size?: string | number;
  color?: string;
  className?: string;
  animated?: boolean;
}

/**
 * Icon component that renders Lucide icons with appropriate styling
 */
export const Icon = React.forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
  const { 
    iconName, 
    size = 'md',
    color = 'default', 
    className, 
    animated = false,
    ...restProps 
  } = props;

  // Size mapping
  const sizeMap = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
    '3xl': 'h-12 w-12',
    '4xl': 'h-16 w-16'
  };

  // Color mapping
  const colorMap = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    accent: 'text-accent-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    royal: 'text-purple-500',
    gold: 'text-yellow-400'
  };

  // Get the appropriate size class
  const sizeClass = typeof size === 'string' 
    ? (sizeMap[size as keyof typeof sizeMap] || sizeMap.md)
    : `h-${size} w-${size}`;

  // Get the appropriate color class
  let colorClass = colorMap[color as keyof typeof colorMap] || '';
  if (!colorClass && typeof color === 'string') {
    if (color.startsWith('#') || color.startsWith('rgb')) {
      // If it's a custom color, use inline style
      colorClass = '';
    } else {
      // Assume it's a Tailwind color utility
      colorClass = `text-${color}`;
    }
  }

  // Animation class if animated is true
  const animationClass = animated ? 'animate-pulse' : '';

  // Find the matching Lucide icon component
  // Format iconName to match Lucide export names (PascalCase)
  const formattedIconName = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');

  // Get the icon component
  const LucideIcon = (LucideIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[formattedIconName];

  if (!LucideIcon) {
    console.warn(`Icon not found: ${iconName}`);
    return null;
  }

  return (
    <LucideIcon
      ref={ref}
      className={cn(sizeClass, colorClass, animationClass, className)}
      {...restProps}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
