
export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' | 'profile';
export type CosmeticCategory = 'appearance' | 'profile' | 'interaction' | 'special' | 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticPlacement = 'profile' | 'chat' | 'leaderboard' | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type: CosmeticType;
  rarity: CosmeticRarity;
  cost: number;
  imageSrc?: string;
  cssClass?: string;
  placement?: CosmeticPlacement;
  imageUrl?: string; // Adding this to be compatible with existing code
}

export interface UserCosmeticItem extends CosmeticItem {
  purchasedAt: string;
  equipped: boolean;
}

export interface CosmeticPurchaseResponse {
  success: boolean;
  message: string;
  newBalance?: number;
  cosmetic?: CosmeticItem;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-amber-300';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-800/60';
    case 'uncommon': return 'bg-green-900/40';
    case 'rare': return 'bg-blue-900/40';
    case 'epic': return 'bg-purple-900/40';
    case 'legendary': return 'bg-amber-900/40';
    default: return 'bg-gray-800/60';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600';
    case 'uncommon': return 'border-green-600';
    case 'rare': return 'border-blue-600';
    case 'epic': return 'border-purple-600';
    case 'legendary': return 'border-amber-500';
    default: return 'border-gray-600';
  }
};
