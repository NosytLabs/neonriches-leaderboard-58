
import { MedievalIconName, IconColor, IconSize } from '@/types/ui/icon-types';

/**
 * Adapts a lowercase icon name to the proper capitalized format
 */
export function adaptIconName(name: string): string {
  // Convert kebab-case or snake_case to camelCase first
  const camelCase = name
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/[-_]/g, '');
  
  // Capitalize first letter
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * Maps common icon names to their proper format
 */
export function toMedievalIconName(name: string): MedievalIconName {
  // Lowercase all inputs for consistency
  const lowerName = name.toLowerCase();
  
  // Map common medieval icons to their correct MedievalIconName values
  const iconMap: Record<string, MedievalIconName> = {
    'crown': 'crown',
    'shield': 'shield',
    'sword': 'sword',
    'scroll': 'scroll',
    'heart': 'heart',
    'medal': 'medal',
    'trophy': 'trophy',
    'key': 'key',
    'coins': 'coins',
    'coin': 'coins',
    'gem': 'gem',
    'seal': 'seal'
  };

  return iconMap[lowerName] || 'crown';
}

/**
 * Adapts icon color
 */
export function toMedievalIconColor(color: string): IconColor {
  const lowerColor = (color || '').toLowerCase();
  const colorMap: Record<string, IconColor> = {
    'default': 'default',
    'gold': 'gold',
    'silver': 'silver',
    'crimson': 'crimson',
    'royal': 'royal',
    'navy': 'navy',
    'bronze': 'bronze',
    'purple': 'purple',
    'primary': 'primary',
    'secondary': 'secondary',
    'muted': 'muted',
    'accent': 'accent'
  };

  return colorMap[lowerColor] || 'default';
}

/**
 * Adapts icon size
 */
export function adaptIconSize(size: IconSize | number): IconSize | number {
  if (typeof size === 'number') {
    return size;
  }

  const sizeMap: Record<string, IconSize> = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl'
  };

  return sizeMap[size] || 'md';
}
