
import React, { ComponentType } from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconProps, IconSize, IconColor, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

// Dynamic icon component
export const Icon = React.forwardRef<
  SVGSVGElement, 
  IconProps & { iconName?: string }
>((props, ref) => {
  const { 
    icon,
    name,
    iconName,
    size = 'md', 
    color = 'default', 
    className, 
    animated,
    style = 'default',
    ...restProps 
  } = props;

  // Determine which icon name to use
  const iconToRender = iconName || icon || name;

  if (!iconToRender) {
    console.warn('Icon component requires either icon, name, or iconName prop');
    return null;
  }

  // Get size and color classes
  const sizeClass = typeof size === 'string' 
    ? iconSizeMap[size as IconSize] || 'w-6 h-6'
    : typeof size === 'number'
      ? `w-${size} h-${size}`
      : 'w-6 h-6';

  const colorClass = typeof color === 'string'
    ? (color in iconColorMap)
      ? iconColorMap[color as IconColor]
      : color.startsWith('#') || color.startsWith('var(')
        ? '' // Will be set as a style
        : `text-${color}`
    : 'text-current';

  // Check if the icon exists in Lucide
  const LucideIcon = getLucideIcon(iconToRender);

  // Animation class based on the animated prop
  const animationClass = animated ? 'animate-pulse' : '';

  // Style object for direct color values
  const styleObject = color && (color.startsWith('#') || color.startsWith('var('))
    ? { color }
    : {};

  if (LucideIcon) {
    return (
      <LucideIcon
        ref={ref}
        className={cn(sizeClass, colorClass, animationClass, className)}
        style={styleObject}
        {...restProps}
      />
    );
  }

  // If not a Lucide icon, return a warning component in dev and null in prod
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Icon "${iconToRender}" not found in Lucide icons`);
    return (
      <div 
        className={cn(
          'flex items-center justify-center border border-dashed',
          sizeClass, 
          'text-red-500 bg-red-100 rounded',
          className
        )}
        ref={ref as any}
      >
        ?
      </div>
    );
  }

  return null;
});

Icon.displayName = 'Icon';

// Helper function to get Lucide icon component
function getLucideIcon(iconName: string): ComponentType<LucideProps> | null {
  // Convert iconName to match Lucide's naming convention (e.g., 'chevron-down' to 'ChevronDown')
  const formattedName = formatIconName(iconName);
  
  // Access the component from Lucide icons
  const icon = (LucideIcons as Record<string, ComponentType<LucideProps>>)[formattedName];
  
  return icon || null;
}

// Helper function to format icon name to match Lucide naming convention
function formatIconName(name: string): string {
  // If the name is already in PascalCase, return it
  if (/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    return name;
  }
  
  // Convert kebab-case or snake_case to PascalCase
  return name
    .split(/[-_]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

export default Icon;
