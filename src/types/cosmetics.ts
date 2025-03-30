
export enum CosmeticCategory {
  BORDER = 'borders',
  COLOR = 'colors',
  FONT = 'fonts',
  EMOJI = 'emojis',
  TITLE = 'titles',
  BACKGROUND = 'backgrounds',
  EFFECT = 'effects',
  BADGE = 'badges',
  THEME = 'themes',
  APPEARANCE = 'appearance',
  PROFILE = 'profile',
  INTERACTION = 'interaction'
}

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'mythic' | 'unique';
export type CosmeticType = string;
export type CosmeticPlacement = string;

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory | string;
  rarity: CosmeticRarity | string;
  image?: string;
  cssClass?: string;
  tags?: string[];
  type?: string; // For backward compatibility
  cost?: number; // For backward compatibility
  requirements?: {
    tier?: string;
    minRank?: number;
    maxRank?: number;
    minSpent?: number;
    achievement?: string;
  };
  originalCost?: number;
}

export type UserCosmeticState = Record<string, string[]>;
export type UserCosmeticItem = CosmeticItem & { acquiredAt: string; isEquipped: boolean };
export type UserCosmetics = Record<string, string[]> & {
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeEmoji?: string;
  activeTheme?: string;
};

// Utility functions for handling cosmetic rarities
export function getRarityColor(rarity: CosmeticRarity | string): string {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-orange-400';
    case 'royal': return 'text-royal-gold';
    case 'mythic': return 'text-pink-400';
    case 'unique': return 'text-royal-purple';
    default: return 'text-gray-300';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity | string): string {
  switch (rarity) {
    case 'common': return 'bg-gray-500/20';
    case 'uncommon': return 'bg-green-500/20';
    case 'rare': return 'bg-blue-500/20';
    case 'epic': return 'bg-purple-500/20';
    case 'legendary': return 'bg-orange-500/20';
    case 'royal': return 'bg-royal-gold/20';
    case 'mythic': return 'bg-pink-500/20';
    case 'unique': return 'bg-royal-purple/20';
    default: return 'bg-gray-500/20';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity | string): string {
  switch (rarity) {
    case 'common': return 'border-gray-500/40';
    case 'uncommon': return 'border-green-500/40';
    case 'rare': return 'border-blue-500/40';
    case 'epic': return 'border-purple-500/40';
    case 'legendary': return 'border-orange-500/40';
    case 'royal': return 'border-royal-gold/40';
    case 'mythic': return 'border-pink-500/40';
    case 'unique': return 'border-royal-purple/40';
    default: return 'border-gray-500/40';
  }
}
