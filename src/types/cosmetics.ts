
export type CosmeticCategory = 
  'borders' | 
  'colors' | 
  'fonts' | 
  'emojis' | 
  'titles' | 
  'backgrounds' | 
  'effects' | 
  'badges' | 
  'themes' | 
  'appearance' | 
  'profile' | 
  'interaction';

export type CosmeticRarity = 
  'common' | 
  'uncommon' | 
  'rare' | 
  'epic' | 
  'legendary' | 
  'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cost?: number;
  cssClass?: string;
  type?: string;
  imageUrl?: string;
  imageSrc?: string;
  placement?: string;
  preview?: string;
  previewUrl?: string;
  metadata?: Record<string, any>;
  image?: string;
}

export interface UserCosmeticItem extends CosmeticItem {
  equippedAt?: string;
  purchasedAt: string;
  isEquipped: boolean;
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  socialLinks?: SocialLinks;
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}

// Utility functions for working with cosmetics
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'text-royal-gold';
    default: return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'bg-gray-300/20';
    case 'uncommon': return 'bg-green-400/20';
    case 'rare': return 'bg-blue-400/20';
    case 'epic': return 'bg-purple-400/20';
    case 'legendary': return 'bg-royal-gold/20';
    case 'royal': return 'bg-royal-gold/20';
    default: return 'bg-white/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'border-gray-300';
    case 'uncommon': return 'border-green-400';
    case 'rare': return 'border-blue-400';
    case 'epic': return 'border-purple-400';
    case 'legendary': return 'border-royal-gold';
    case 'royal': return 'border-royal-gold';
    default: return 'border-white';
  }
};

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  [key: string]: string | undefined;
}

export type CosmeticType = string;
export type CosmeticPlacement = string;
