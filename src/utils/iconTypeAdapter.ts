
import { IconColor, MedievalIconColor, IconSize, MedievalIconName, MedievalIconSize } from '@/types/ui/decorations/types';

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
    default: return 'gold';
  }
};

/**
 * Adapt a standard icon size to a medieval icon size
 */
export const adaptIconSize = (size: IconSize | number): MedievalIconSize => {
  if (typeof size === 'number') {
    if (size <= 16) return 'sm';
    if (size <= 24) return 'md';
    if (size <= 32) return 'lg';
    return 'xl';
  }
  
  // If it's already a size string
  return size as MedievalIconSize;
};

/**
 * Convert a string name to a medieval icon name
 */
export const toMedievalIconName = (name: string): MedievalIconName => {
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
    'treasure': 'treasure',
    'horse': 'horse',
    'fleur': 'fleur',
    'chalice': 'chalice',
    'throne': 'throne',
    'crossedSwords': 'crossed-swords',
    'helmet': 'helmet',
    'bow': 'bow',
    'arrow': 'arrow',
    'candle': 'candle',
    'torch': 'torch',
    'flag': 'flag',
    'axe': 'axe',
    'mace': 'mace',
  };
  
  return medievalIconMap[name] || 'crown';
};

/**
 * Convert a string color to a medieval icon color
 */
export const toMedievalIconColor = (color: string | undefined): MedievalIconColor => {
  if (!color) return 'gold';
  
  const medievalColorMap: Record<string, MedievalIconColor> = {
    'gold': 'gold',
    'royal': 'royal',
    'silver': 'silver',
    'bronze': 'bronze',
    'red': 'red',
    'blue': 'blue',
    'green': 'green',
    'purple': 'purple',
    'default': 'gold',
  };
  
  return medievalColorMap[color] || 'gold';
};

/**
 * Convert a string name to an icon name
 */
export const adaptIconName = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

export default {
  adaptIconColor,
  adaptIconSize,
  toMedievalIconName,
  toMedievalIconColor,
  adaptIconName
};
