
import { MedievalIconName } from '@/types/ui/icon-types';

/**
 * Converts different icon name formats to a consistent format for the icon system
 * @param icon - The icon name to adapt
 */
export const adaptIconName = (icon: string): string => {
  // Convert kebab-case or snake_case to camelCase
  const camelCaseName = icon.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  
  // Capitalize first letter for PascalCase
  const pascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
  
  return pascalCaseName;
};

/**
 * Maps common icon names to medieval icon names
 * @param name - The icon name to map
 */
export const mapToMedievalIcon = (name: string): MedievalIconName => {
  const iconMap: Record<string, MedievalIconName> = {
    'user': 'knight',
    'crown': 'crown',
    'money': 'coins',
    'coin': 'coin',
    'shield': 'shield',
    'sword': 'sword',
    'scrolls': 'scroll',
    'scroll': 'scroll',
    'chalice': 'chalice',
    'castle': 'castle',
    'king': 'king',
    'queen': 'queen',
    'treasure': 'treasure-chest',
    'flag': 'flag',
    'key': 'key',
  };
  
  return iconMap[name.toLowerCase()] || 'sword';
};

/**
 * Checks if an icon name is a valid MedievalIconName
 * @param name - The name to check
 */
export const isMedievalIcon = (name: string): boolean => {
  const medievalIcons: string[] = [
    'crown', 'sword', 'shield', 'scroll', 'chalice', 'castle', 
    'dragon', 'knight', 'king', 'queen', 'treasure-chest', 'flag',
    'throne', 'tower', 'banner', 'coin', 'coins', 'key', 'dagger',
    'potion', 'goblet', 'fleur', 'horse', 'wizard', 'jester',
    'treasure', 'crossed-swords', 'helmet', 'bow', 'arrow',
    'candle', 'torch', 'axe', 'mace'
  ];
  
  return medievalIcons.includes(name.toLowerCase());
};

export default {
  adaptIconName,
  mapToMedievalIcon,
  isMedievalIcon
};
