export enum CosmeticCategory {
  APPEARANCE = 'appearance',
  PROFILE = 'profile',
  INTERACTION = 'interaction',
  VISUAL = 'visual',
  ANIMATION = 'animation',
  SOUND = 'sound',
  SPECIAL = 'special'
}

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type: string;
  rarity: CosmeticRarity;
  cost: number;
  price: number;
  cssClass?: string;
  imageSrc?: string;
  imageUrl?: string;
  image?: string;
}

export interface UserCosmeticState {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts?: string[];
  colors?: string[];
  backgrounds?: string[];
  themes?: string[];
  socialLinks?: any[];
  activeTitle?: string;
  activeBorder?: string;
  activeEffect?: string;
  activeBackground?: string;
  activeEmoji?: string;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    case 'mythic': return 'text-pink-400';
    case 'unique': return 'text-orange-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'bg-gray-700/50';
    case 'uncommon': return 'bg-green-900/50';
    case 'rare': return 'bg-blue-900/50';
    case 'epic': return 'bg-purple-900/50';
    case 'legendary': return 'bg-yellow-900/50';
    case 'mythic': return 'bg-pink-900/50';
    case 'unique': return 'bg-orange-900/50';
    case 'royal': return 'bg-royal-gold/20';
    default: return 'bg-gray-700/50';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'border-gray-500/50';
    case 'uncommon': return 'border-green-500/50';
    case 'rare': return 'border-blue-500/50';
    case 'epic': return 'border-purple-500/50';
    case 'legendary': return 'border-yellow-500/50';
    case 'mythic': return 'border-pink-500/50';
    case 'unique': return 'border-orange-500/50';
    case 'royal': return 'border-royal-gold/50';
    default: return 'border-gray-500/50';
  }
};

export type UserCosmetics = UserCosmeticState;

export type CosmeticType = string;
export type CosmeticPlacement = 'profile' | 'card' | 'leaderboard' | 'chat' | 'global';
export type UserCosmeticItem = CosmeticItem & { equipped: boolean; acquired: string };
