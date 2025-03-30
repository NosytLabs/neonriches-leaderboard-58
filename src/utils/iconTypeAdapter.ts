
import { MedievalIconName, MedievalIconColor, MedievalIconSize } from '@/components/ui/medieval-icon.d';

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

// Convert size string to the proper format required by MedievalIconSize
export const adaptIconSize = (size: string): MedievalIconSize => {
  const sizeMap: Record<string, MedievalIconSize> = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl'
  };

  return sizeMap[size.toLowerCase()] || 'md';
};

// Convert color string to the proper format required by MedievalIconColor
export const adaptIconColor = (color: string): MedievalIconColor => {
  const colorMap: Record<string, MedievalIconColor> = {
    'default': 'default',
    'gold': 'gold',
    'silver': 'silver',
    'crimson': 'crimson',
    // Map other colors to the allowed values
    'navy': 'default',
    'purple': 'default',
    'copper': 'default',
    'bronze': 'default',
    'emerald': 'default'
  };

  return colorMap[color.toLowerCase()] || 'default';
};
