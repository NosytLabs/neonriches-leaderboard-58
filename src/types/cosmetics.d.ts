
export type CosmeticCategory = 
  | 'badge' 
  | 'title' 
  | 'border' 
  | 'effect' 
  | 'emoji' 
  | 'font' 
  | 'color' 
  | 'background';

export type CosmeticRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type CosmeticPlacement =
  | 'profile'
  | 'leaderboard'
  | 'chat'
  | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  unlockRequirement?: string;
  requiredRank?: number;
  minSpend?: number;
  image?: string;
  preview?: string;
  type: string;
  placement?: CosmeticPlacement;
  cssClass?: string;
  limitedEdition?: boolean;
  releaseDate?: string;
  expiryDate?: string;
  isAnimated?: boolean;
  includes?: string[];
  cost?: number;
}

export interface UserCosmeticItem extends CosmeticItem {
  isOwned: boolean;
  isEquipped: boolean;
  acquiredDate: string;
  source: 'purchase' | 'achievement' | 'reward' | 'event';
}

// Helper functions to get the appropriate CSS classes based on rarity
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'legendary': return 'text-orange-400';
    case 'epic': return 'text-purple-400';
    case 'rare': return 'text-blue-400';
    case 'uncommon': return 'text-green-400';
    case 'common':
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'legendary': return 'bg-orange-900/20';
    case 'epic': return 'bg-purple-900/20';
    case 'rare': return 'bg-blue-900/20';
    case 'uncommon': return 'bg-green-900/20';
    case 'common':
    default: return 'bg-gray-900/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'legendary': return 'border-orange-400/30';
    case 'epic': return 'border-purple-400/30';
    case 'rare': return 'border-blue-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'common':
    default: return 'border-gray-400/30';
  }
};
