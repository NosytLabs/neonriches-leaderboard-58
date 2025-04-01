
import { 
  IconColor, 
  MedievalIconColor, 
  IconSize, 
  MedievalIconName, 
  MedievalIconSize 
} from '@/types/ui/icon-types';

/**
 * Adapt a standard icon color to a medieval icon color
 */
export const adaptIconColor = (color: IconColor | string): MedievalIconColor => {
  switch (color) {
    case 'royal': return 'royal';
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'purple': return 'purple';
    case 'crimson': return 'crimson';
    case 'emerald': return 'emerald';
    default: return 'gold';
  }
};

/**
 * Adapt a standard icon size to a medieval icon size
 */
export const adaptIconSize = (size: IconSize | number | string): MedievalIconSize => {
  if (typeof size === 'number') {
    if (size <= 16) return 'sm';
    if (size <= 24) return 'md';
    if (size <= 32) return 'lg';
    return 'xl';
  }
  
  // If it's already a size string
  if (typeof size === 'string') {
    switch (size) {
      case 'xs': return 'xs';
      case 'sm': return 'sm';
      case 'md': return 'md';
      case 'lg': return 'lg';
      case 'xl': return 'xl';
      case '2xl': return '2xl';
      case '3xl': return '3xl';
      default: return 'md';
    }
  }
  
  return 'md';
};

/**
 * Convert a string name to a medieval icon name
 */
export const adaptIconName = (name: string): MedievalIconName => {
  // Map of common names to MedievalIconName values
  const medievalIconMap: Record<string, MedievalIconName> = {
    'crown': 'crown',
    'shield': 'shield',
    'sword': 'sword',
    'banner': 'banner',
    'scroll': 'scroll',
    'goblet': 'goblet',
    'castle': 'castle',
    'dragon': 'dragon',
    'knight': 'knight',
    'king': 'king',
    'queen': 'queen',
    'jester': 'jester',
    'wizard': 'wizard',
    'coin': 'coin',
    'coins': 'coins',
    'treasure': 'treasure',
    'treasure-chest': 'treasure-chest',
    'horse': 'horse',
    'fleur': 'fleur',
    'chalice': 'chalice',
    'throne': 'throne',
    'crossed-swords': 'crossed-swords',
    'helmet': 'helmet',
    'bow': 'bow',
    'arrow': 'arrow',
    'candle': 'candle',
    'torch': 'torch',
    'flag': 'flag',
    'axe': 'axe',
    'mace': 'mace',
    'key': 'key',
    'tower': 'tower',
    // Support for capitalized variants
    'Crown': 'Crown',
    'Scroll': 'Scroll',
    'Shield': 'Shield',
    'Coins': 'Coins',
    'Sparkles': 'Sparkles',
    'Trophy': 'Trophy',
    'Users': 'Users',
    'User': 'User'
  };
  
  const sanitizedName = typeof name === 'string' ? name : '';
  return medievalIconMap[sanitizedName] || 'crown';
};

// Use these functions for type adapting
export default {
  adaptIconColor,
  adaptIconSize,
  adaptIconName
};
