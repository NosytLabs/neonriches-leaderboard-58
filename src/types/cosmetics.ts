
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  icon?: string;
  price?: number;
  unlockRequirement?: string;
  isDefault?: boolean;
  preview?: string;
}

export interface UserCosmeticItem extends CosmeticItem {
  unlocked: boolean;
  unlockDate?: string;
  equipped: boolean;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-200';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-yellow-400';
    default:
      return 'text-gray-200';
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
      return 'bg-yellow-900';
    default:
      return 'bg-gray-800';
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
      return 'border-yellow-500';
    default:
      return 'border-gray-600';
  }
};
