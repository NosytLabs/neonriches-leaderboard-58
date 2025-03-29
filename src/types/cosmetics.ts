
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background' 
  | 'effect' 
  | 'badge' 
  | 'theme'
  | 'appearance'
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  price: number;
  cost?: number;
  type?: string;
  previewImage?: string;
  cssClass?: string;
  unlockRequirement?: {
    type: 'rank' | 'spend' | 'special';
    value: number;
  };
}

export interface CosmeticType {
  id: string;
  name: string;
  category: CosmeticCategory;
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  banners?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
}

export interface UserCosmeticItem {
  id: string;
  cosmeticId: string;
  userId: string;
  acquiredAt: string;
  isActive: boolean;
}

export type CosmeticPlacement = 'profile' | 'leaderboard' | 'chat' | 'global';

// Helper functions for working with cosmetics
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
      return 'text-royal-gold';
    default:
      return 'text-gray-200';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-900/60';
    case 'uncommon':
      return 'bg-green-900/20';
    case 'rare':
      return 'bg-blue-900/20';
    case 'epic':
      return 'bg-purple-900/20';
    case 'legendary':
      return 'bg-orange-900/20';
    default:
      return 'bg-gray-900/60';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-700';
    case 'uncommon':
      return 'border-green-700';
    case 'rare':
      return 'border-blue-700';
    case 'epic':
      return 'border-purple-700';
    case 'legendary':
      return 'border-royal-gold/50';
    default:
      return 'border-gray-700';
  }
};
