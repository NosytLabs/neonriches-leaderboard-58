
/**
 * Icon type adapter utilities
 */

import { IconSize, IconColor, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

/**
 * Adapt icon size to appropriate CSS class
 * @param size Icon size
 * @returns CSS class string
 */
export const adaptIconSize = (size: IconSize | number | undefined): string => {
  if (typeof size === 'undefined') {
    return iconSizeMap.md;
  }
  
  if (typeof size === 'number') {
    return `w-${size} h-${size}`;
  }
  
  return iconSizeMap[size] || iconSizeMap.md;
};

/**
 * Adapt icon color to appropriate CSS class
 * @param color Icon color
 * @returns CSS class string
 */
export const adaptIconColor = (color: IconColor | string | undefined): string => {
  if (!color) {
    return iconColorMap.default;
  }
  
  // Check if it's a predefined color
  if (color in iconColorMap) {
    return iconColorMap[color as IconColor];
  }
  
  // If it's a hex color or CSS variable
  if (color.startsWith('#') || color.startsWith('var(')) {
    return color;
  }
  
  // Default text color
  return `text-${color}`;
};

/**
 * Adapt icon name for consistency
 * @param name Icon name
 * @returns Formatted icon name
 */
export const adaptIconName = (name: string): string => {
  // Convert kebab case to camel case
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

// Export functions individually and as default object
export default {
  adaptIconSize,
  adaptIconColor,
  adaptIconName
};
