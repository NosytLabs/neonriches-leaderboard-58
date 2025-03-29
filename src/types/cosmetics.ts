
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  previewUrl?: string;
  cssClass?: string;
  unlockRequirement?: string;
  unlockDate?: string;
  imageSrc?: string;
  image?: string;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-white';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-gold font-bold';
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-700';
    case 'uncommon':
      return 'bg-green-800';
    case 'rare':
      return 'bg-blue-800';
    case 'epic':
      return 'bg-purple-800';
    case 'legendary':
      return 'bg-amber-800';
    case 'royal':
      return 'bg-gradient-to-r from-amber-900 to-amber-800';
    default:
      return 'bg-gray-700';
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
      return 'border-royal-gold';
    default:
      return 'border-gray-500';
  }
};
