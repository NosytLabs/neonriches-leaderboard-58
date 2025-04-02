
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

/**
 * Icon component that renders Lucide icons with appropriate styling
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { 
    icon,
    name, // For backward compatibility
    size = 'md',
    color = 'default', 
    className, 
    animated = false,
    style = 'default',
    ...restProps 
  } = props;

  // Use either icon or name
  const iconToUse = icon || name;

  if (!iconToUse) {
    console.warn('Icon component requires either icon or name prop');
    return null;
  }

  // Get the appropriate size class
  const sizeClass = typeof size === 'string' 
    ? (size in iconSizeMap ? iconSizeMap[size] : iconSizeMap.md)
    : `h-${size} w-${size}`;

  // Get the appropriate color class
  let colorClass = '';
  if (typeof color === 'string') {
    if (color in iconColorMap) {
      colorClass = iconColorMap[color as keyof typeof iconColorMap];
    } else if (color.startsWith('#') || color.startsWith('rgb')) {
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
  const formattedIconName = iconToUse
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');

  // Get the icon component - cast LucideIcons to any to avoid TypeScript errors
  const LucideIcon = (LucideIcons as any)[formattedIconName];

  if (!LucideIcon) {
    console.warn(`Icon not found: ${iconToUse}`);
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
