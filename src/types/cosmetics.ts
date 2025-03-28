
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: CosmeticRarity;
  cost: number;
  type: string;
  imageSrc?: string;
  cssClass?: string;
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
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-800/60';
    case 'uncommon':
      return 'bg-green-900/60';
    case 'rare':
      return 'bg-blue-900/60';
    case 'epic':
      return 'bg-purple-900/60';
    case 'legendary':
      return 'bg-amber-900/60';
    default:
      return 'bg-gray-800/60';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-600';
    case 'uncommon':
      return 'border-green-500';
    case 'rare':
      return 'border-blue-500';
    case 'epic':
      return 'border-purple-500';
    case 'legendary':
      return 'border-royal-gold';
    default:
      return 'border-gray-600';
  }
};

export const getCosmeticPreviewStyle = (item: CosmeticItem) => {
  // Return appropriate styles based on the cosmetic item
  if (item.cssClass) {
    return item.cssClass;
  }
  return '';
};
