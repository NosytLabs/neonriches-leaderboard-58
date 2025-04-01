
import { DecorationSize, MedievalIconName, IconSize, IconColor } from '@/components/ui/decorations/types';

/**
 * Convert decoration size to icon size
 * @param size The decoration size
 * @returns Icon size
 */
export const toIconSize = (size?: DecorationSize): IconSize => {
  const sizeMap: Record<DecorationSize, IconSize> = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': 'xl',
    '3xl': '2xl',
    '4xl': '2xl'
  };
  
  return sizeMap[size || 'md'] || 'md';
};

/**
 * Get CSS classes for decoration size
 * @param size Decoration size
 * @returns CSS class string
 */
export const getSizeClasses = (size?: DecorationSize): string => {
  const classes: Record<DecorationSize, string> = {
    'xs': 'h-4 w-4',
    'sm': 'h-6 w-6',
    'md': 'h-8 w-8',
    'lg': 'h-10 w-10',
    'xl': 'h-12 w-12',
    '2xl': 'h-16 w-16',
    '3xl': 'h-20 w-20',
    '4xl': 'h-24 w-24'
  };
  
  return classes[size || 'md'] || classes.md;
};

/**
 * Get CSS classes for icon color
 * @param color Icon color
 * @returns CSS class string
 */
export const getIconColorClass = (color?: IconColor): string => {
  const colorMap: Record<string, string> = {
    'default': 'text-white',
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'purple': 'text-purple-500',
    'crimson': 'text-royal-crimson',
    'royal': 'text-royal-purple'
  };
  
  return colorMap[color || 'default'] || colorMap.default;
};

/**
 * Verify if an icon name is a valid MedievalIconName
 */
export const isValidMedievalIcon = (iconName?: string): boolean => {
  if (!iconName) return false;
  
  const validIcons: MedievalIconName[] = [
    'crown', 'scroll', 'shield', 'sword', 'banner',
    'goblet', 'dragon', 'knight', 'king', 'queen', 
    'jester', 'wizard', 'coin', 'treasure', 'horse',
    'fleur', 'chalice', 'throne', 'crossed-swords',
    'helmet', 'bow', 'arrow', 'candle', 'torch',
    'flag', 'axe', 'mace', 'castle', 'goblet'
  ];
  
  return validIcons.includes(iconName as MedievalIconName);
};

/**
 * Get position classes for decorations
 */
export const getPositionClasses = (position?: string): string => {
  const positionMap: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'top-center': 'top-0 left-1/2 transform -translate-x-1/2'
  };
  
  return positionMap[position || 'top-left'] || positionMap['top-left'];
};
