
export type CosmeticType = 
  | 'badge'
  | 'title'
  | 'border'
  | 'effect'
  | 'emoji'
  | 'font'
  | 'color'
  | 'background'
  | 'theme'
  | 'profile';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal';

export type CosmeticPlacement = 'profile' | 'leaderboard' | 'certificate' | 'chat' | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type: CosmeticType;
  rarity: CosmeticRarity;
  image?: string;
  cost: number;
  price?: number; // Alias for cost to support legacy code
  isUnlocked?: boolean;
  unlockDate?: string;
  isNew?: boolean;
  category?: string;
  cssClass?: string;
}

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  type: CosmeticType;
  items: CosmeticItem[];
}

export interface UserCosmeticState {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes: string[];
}

// Alias UserCosmetics to UserCosmeticState for backward compatibility
export type UserCosmetics = UserCosmeticState;

// Utility functions for rarity colors
export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-white';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'bg-gray-700/30';
    case 'uncommon': return 'bg-green-700/30';
    case 'rare': return 'bg-blue-700/30';
    case 'epic': return 'bg-purple-700/30';
    case 'legendary': return 'bg-yellow-700/30';
    case 'royal': return 'bg-royal-gold/30';
    default: return 'bg-gray-700/30';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'border-gray-500';
    case 'uncommon': return 'border-green-500';
    case 'rare': return 'border-blue-500';
    case 'epic': return 'border-purple-500';
    case 'legendary': return 'border-yellow-500';
    case 'royal': return 'border-royal-gold';
    default: return 'border-gray-500';
  }
}
