
import { MedievalIconName, IconSize, IconColor } from '@/types/ui/icon-types';

// Convert lowercase icon names to the proper capitalized format required by MedievalIconName
export const adaptIconName = (name: string): MedievalIconName => {
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
    'wallet': 'Wallet',
    'gem': 'Gem',
    'seal': 'Seal'
  };

  return iconMap[name.toLowerCase()] || 'Crown';
};

// Convert size string to the proper format required by IconSize
export const adaptIconSize = (size: string): IconSize => {
  const sizeMap: Record<string, IconSize> = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl'
  };

  return sizeMap[size.toLowerCase()] || 'md';
};

// Convert color string to the proper format required by IconColor
export const adaptIconColor = (color: string): IconColor => {
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

  return colorMap[color.toLowerCase()] || 'default';
};

// Legacy exports for backward compatibility
export const toMedievalIconName = adaptIconName;
export const toMedievalIconColor = adaptIconColor;
export const toMedievalIconSize = adaptIconSize;
