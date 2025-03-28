

export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes' | 'appearance' | 'profile' | 'interaction';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  image?: string;
  price: number;
  cost?: number; // Adding cost property for compatibility
  type?: string; // Adding type property for compatibility
  cssClass?: string; // Adding cssClass property for compatibility
  isLimited?: boolean;
  isActive?: boolean;
  metadata?: Record<string, any>;
}

export interface UserCosmeticItem {
  id: string;
  itemId: string;
  userId: string;
  category: CosmeticCategory;
  acquiredAt: string;
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  foundersPass?: boolean;
}

// Utility functions for rarity styling
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-white/80';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-white/80';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-white/10';
    case 'uncommon':
      return 'bg-green-500/20';
    case 'rare':
      return 'bg-blue-500/20';
    case 'epic':
      return 'bg-purple-500/20';
    case 'legendary':
      return 'bg-royal-gold/20';
    case 'royal':
      return 'bg-royal-gold/20';
    default:
      return 'bg-white/10';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-white/20';
    case 'uncommon':
      return 'border-green-500/30';
    case 'rare':
      return 'border-blue-500/30';
    case 'epic':
      return 'border-purple-500/30';
    case 'legendary':
      return 'border-royal-gold/30';
    case 'royal':
      return 'border-royal-gold/30';
    default:
      return 'border-white/20';
  }
};

// Types for cosmetic service
export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticPlacement = 'profile' | 'leaderboard' | 'chat' | 'global';
