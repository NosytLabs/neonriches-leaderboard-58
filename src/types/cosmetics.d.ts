
export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticType = 'appearance' | 'interactive' | 'status' | 'profile' | 'special';
export type CosmeticPlacement = 'profile' | 'leaderboard' | 'chat' | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  unlockRequirement?: {
    type: 'rank' | 'tier' | 'spend' | 'team' | 'special';
    value: string | number;
  };
  previewUrl?: string;
  type: CosmeticType;
  placement: CosmeticPlacement;
  effectClass?: string;
  unlockDate?: string;
  isLimited?: boolean;
}

export interface UserCosmeticItem extends CosmeticItem {
  unlocked: boolean;
  dateAcquired?: string;
  isActive?: boolean;
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
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  foundersPass?: boolean;
  socialLinks?: Record<string, string>;
}

/**
 * Get the color for a cosmetic rarity
 * @param rarity Rarity of the cosmetic
 * @returns CSS color class for the rarity
 */
export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-500';
    case 'epic': return 'text-purple-500';
    case 'legendary': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
}

/**
 * Get the background color for a cosmetic rarity
 * @param rarity Rarity of the cosmetic
 * @returns CSS background color class for the rarity
 */
export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'bg-gray-400/10';
    case 'uncommon': return 'bg-green-400/10';
    case 'rare': return 'bg-blue-500/10';
    case 'epic': return 'bg-purple-500/10';
    case 'legendary': return 'bg-yellow-400/10';
    default: return 'bg-gray-400/10';
  }
}

/**
 * Get the border color for a cosmetic rarity
 * @param rarity Rarity of the cosmetic
 * @returns CSS border color class for the rarity
 */
export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'border-gray-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'rare': return 'border-blue-500/30';
    case 'epic': return 'border-purple-500/30';
    case 'legendary': return 'border-yellow-400/30';
    default: return 'border-gray-400/30';
  }
}
