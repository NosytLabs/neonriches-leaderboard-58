
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
    iconName, // Support iconName prop
    size = 'md',
    color = 'default', 
    className, 
    animated = false,
    style = 'default',
    ...restProps 
  } = props;

  // Use either icon, name, or iconName
  const iconToUse = icon || name || iconName;

  if (!iconToUse) {
    console.warn('Icon component requires either icon, name, or iconName prop');
    return null;
  }

  // Get the appropriate size class
  const sizeClass = typeof size === 'string' 
    ? (size in iconSizeMap ? iconSizeMap[size] : iconSizeMap.md)
    : `h-${size} w-${size}`;

  // Get the appropriate color class
  const colorClass = color in iconColorMap ? iconColorMap[color] : (color || iconColorMap.default);

  // Get the icon component
  const IconComponent = (LucideIcons as any)[iconToUse] || LucideIcons.HelpCircle;

  return (
    <IconComponent
      ref={ref}
      className={cn(sizeClass, colorClass, animated && 'animate-pulse', className)}
      {...restProps}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
