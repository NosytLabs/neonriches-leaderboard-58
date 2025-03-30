
// Cosmetic item types

export type CosmeticCategory = 
  | 'badges' 
  | 'titles' 
  | 'borders' 
  | 'effects' 
  | 'emojis' 
  | 'fonts' 
  | 'colors' 
  | 'backgrounds' 
  | 'themes';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic' 
  | 'unique' 
  | 'limited';

export type CosmeticType = 
  | 'badge' 
  | 'title' 
  | 'border' 
  | 'effect' 
  | 'emoji' 
  | 'font' 
  | 'color' 
  | 'background' 
  | 'theme';

export type CosmeticPlacement = 
  | 'profile' 
  | 'avatar' 
  | 'username' 
  | 'card' 
  | 'leaderboard' 
  | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cssClass?: string;
  imageUrl?: string;
  unlockRequirement?: string;
  previewImage?: string;
  type?: CosmeticType;
  placement?: CosmeticPlacement;
}

export interface UserCosmeticItem extends CosmeticItem {
  acquiredAt: string;
  isActive: boolean;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
}

// Helper functions for cosmetic items
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-orange-400';
    case 'mythic': return 'text-pink-400';
    case 'unique': return 'text-indigo-400';
    case 'limited': return 'text-red-400';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-500/20';
    case 'uncommon': return 'bg-green-500/20';
    case 'rare': return 'bg-blue-500/20';
    case 'epic': return 'bg-purple-500/20';
    case 'legendary': return 'bg-orange-500/20';
    case 'mythic': return 'bg-pink-500/20';
    case 'unique': return 'bg-indigo-500/20';
    case 'limited': return 'bg-red-500/20';
    default: return 'bg-gray-500/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'rare': return 'border-blue-400/30';
    case 'epic': return 'border-purple-400/30';
    case 'legendary': return 'border-orange-400/30';
    case 'mythic': return 'border-pink-400/30';
    case 'unique': return 'border-indigo-400/30';
    case 'limited': return 'border-red-400/30';
    default: return 'border-gray-400/30';
  }
};
