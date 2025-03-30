
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
  const capitalizedName = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  
  // Map common medieval icons to their correct names
  const iconMap: Record<string, MedievalIconName> = {
    'crown': 'Crown',
    'shield': 'Shield',
    'sword': 'Sword',
    'scroll': 'Scroll',
    'heart': 'Heart',
    'medal': 'Medal',
    'trophy': 'Trophy',
    'key': 'Key',
    'coins': 'Coins',
    'coin': 'Coins',
    'wallet': 'Wallet',
    'gem': 'Gem',
    'seal': 'Seal',
  };

  return iconMap[name.toLowerCase()] || capitalizedName;
}

/**
 * Adapts icon color
 */
export function adaptIconColor(color: string): IconColor {
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
    'accent': 'accent',
  };

  return colorMap[color.toLowerCase()] || 'default';
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
    '2xl': '2xl',
  };

  return sizeMap[size] || 'md';
}
