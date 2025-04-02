
import { MedievalIconName } from '@/types/ui/icon-types';

/**
 * Adapts a generic icon name to a valid MedievalIconName
 * @param name - Icon name to adapt
 * @returns A valid MedievalIconName or fallback
 */
export const adaptIconName = (name: string): MedievalIconName => {
  // Map of common icon names to medieval icon names
  const iconMap: Record<string, MedievalIconName> = {
    'crown': 'crown',
    'sword': 'sword',
    'shield': 'shield',
    'scroll': 'scroll',
    'potion': 'potion',
    'coin': 'coin',
    'coins': 'coins',
    'key': 'key',
    'dagger': 'dagger',
    'banner': 'banner',
    'castle': 'castle',
    'chalice': 'chalice',
    'dragon': 'dragon',
    'flag': 'flag',
    'throne': 'throne',
    'tower': 'tower',
    // Fallbacks for common icons
    'money': 'coin',
    'gold': 'coin',
    'weapon': 'sword',
    'defense': 'shield',
    'document': 'scroll',
    'spell': 'potion',
    'magic': 'potion',
    'lock': 'key',
    'knife': 'dagger',
    'flag': 'banner',
    'fort': 'castle',
    'cup': 'chalice',
    'monster': 'dragon',
    'royal': 'crown',
    'king': 'crown',
    'queen': 'crown',
  };

  // Return the mapped icon name or default to 'crown'
  return (iconMap[name.toLowerCase()] || 'crown');
};

/**
 * Adapts a size value to a standardized size
 * @param size - Size to adapt
 * @returns Standardized size
 */
export const adaptIconSize = (size: string | number): string => {
  if (typeof size === 'number') {
    // Convert number to nearest standard size
    if (size <= 3) return 'xs';
    if (size <= 4) return 'sm';
    if (size <= 6) return 'md';
    if (size <= 8) return 'lg';
    return 'xl';
  }

  // Map of common size names to standardized sizes
  const sizeMap: Record<string, string> = {
    'tiny': 'xs',
    'small': 'sm',
    'medium': 'md',
    'large': 'lg',
    'huge': 'xl',
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
  };

  return sizeMap[size.toLowerCase()] || 'md';
};

/**
 * Adapts a color value to a standardized color
 * @param color - Color to adapt
 * @returns Standardized color
 */
export const adaptIconColor = (color: string): string => {
  // Map of common color names to standardized colors
  const colorMap: Record<string, string> = {
    'gold': 'gold',
    'silver': 'silver',
    'red': 'crimson',
    'crimson': 'crimson',
    'purple': 'royal',
    'royal': 'royal',
    'green': 'emerald',
    'emerald': 'emerald',
    'default': 'default',
    // Additional color mappings
    'yellow': 'gold',
    'orange': 'gold',
    'blue': 'royal',
    'regal': 'royal',
    'nature': 'emerald',
  };

  return colorMap[color.toLowerCase()] || 'default';
};
