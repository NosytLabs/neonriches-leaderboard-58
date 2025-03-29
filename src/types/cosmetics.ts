
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';
export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: CosmeticRarity;
  price: number;
  image?: string;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'royal':
      return 'text-red-400';
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-800';
    case 'uncommon':
      return 'bg-green-900';
    case 'rare':
      return 'bg-blue-900';
    case 'epic':
      return 'bg-purple-900';
    case 'legendary':
      return 'bg-amber-900';
    case 'royal':
      return 'bg-red-900';
    default:
      return 'bg-gray-800';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-500';
    case 'uncommon':
      return 'border-green-500';
    case 'rare':
      return 'border-blue-500';
    case 'epic':
      return 'border-purple-500';
    case 'legendary':
      return 'border-royal-gold';
    case 'royal':
      return 'border-red-500';
    default:
      return 'border-gray-500';
  }
};

export const getRarityGradient = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gradient-to-br from-gray-700 to-gray-900';
    case 'uncommon':
      return 'bg-gradient-to-br from-green-700 to-green-900';
    case 'rare':
      return 'bg-gradient-to-br from-blue-700 to-blue-900';
    case 'epic':
      return 'bg-gradient-to-br from-purple-700 to-purple-900';
    case 'legendary':
      return 'bg-gradient-to-br from-amber-500 to-amber-800';
    case 'royal':
      return 'bg-gradient-to-br from-red-600 to-red-900';
    default:
      return 'bg-gradient-to-br from-gray-700 to-gray-900';
  }
};

export const getCosmeticCategories = (): CosmeticCategory[] => {
  return [
    'borders',
    'colors',
    'fonts',
    'emojis',
    'titles',
    'backgrounds',
    'effects',
    'badges',
    'themes'
  ];
};
