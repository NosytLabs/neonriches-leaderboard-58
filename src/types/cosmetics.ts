
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'border' | 'background' | 'badge' | 'title' | 'effect' | 'emote';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cost: number;
  imageSrc?: string;
  animationData?: any;
  colors?: string[];
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
      return 'bg-gray-600/30';
    case 'uncommon':
      return 'bg-green-900/30';
    case 'rare':
      return 'bg-blue-900/30';
    case 'epic':
      return 'bg-purple-900/30';
    case 'legendary':
      return 'bg-amber-900/30';
    default:
      return 'bg-gray-800/30';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-400/30';
    case 'uncommon':
      return 'border-green-400/30';
    case 'rare':
      return 'border-blue-400/30';
    case 'epic':
      return 'border-purple-400/30';
    case 'legendary':
      return 'border-royal-gold/30';
    default:
      return 'border-white/10';
  }
};
