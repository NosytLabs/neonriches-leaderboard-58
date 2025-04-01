
import { IconSize, IconColor, MedievalIconSize, MedievalIconColor } from '@/types/ui/icon-types';

/**
 * Adapts a string name to the correct medieval icon name format
 */
export const adaptIconName = (name: string): string => {
  // Check if already in correct format
  if (name.includes('-medieval')) {
    return name;
  }
  
  // Convert camelCase to kebab-case
  const kebabCase = name
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
  
  // Add -medieval suffix if not present
  return `${kebabCase}-medieval`;
};

/**
 * Adapts an icon size value to the correct format
 */
export const adaptIconSize = (size: IconSize | MedievalIconSize | string): IconSize => {
  if (typeof size === 'number') {
    // Map number to closest icon size
    if (size <= 4) return 'xs';
    if (size <= 5) return 'sm';
    if (size <= 6) return 'md';
    if (size <= 8) return 'lg';
    if (size <= 10) return 'xl';
    return '2xl';
  }
  
  // Map the size if needed
  const sizeMap: Record<string, IconSize> = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl',
    // Add custom mappings if needed
    'small': 'sm',
    'medium': 'md',
    'large': 'lg',
    'extra-large': 'xl'
  };
  
  return sizeMap[size] || 'md';
};

/**
 * Adapts a color name to the correct format
 */
export const adaptIconColor = (color: string = 'default'): IconColor => {
  // Map colors to proper format if needed
  const colorMap: Record<string, IconColor> = {
    'default': 'default',
    'gold': 'gold',
    'royal': 'royal',
    'purple': 'purple',
    'crimson': 'crimson',
    'red': 'red',
    'blue': 'blue',
    'green': 'green',
    'silver': 'silver',
    'bronze': 'bronze',
    'navy': 'navy'
  };
  
  return colorMap[color] || color;
};
