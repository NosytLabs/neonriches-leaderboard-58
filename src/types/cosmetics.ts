
/**
 * Types for cosmetic items in the application
 */

export type CosmeticCategory = 
  | 'badge'
  | 'title'
  | 'border'
  | 'effect'
  | 'emoji'
  | 'color'
  | 'font'
  | 'background'
  | 'frame';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cssClass?: string;
  icon?: string;
  image?: string;
  unlockRequirement?: string;
  requiresSubscription?: boolean;
  minRank?: number;
  minTier?: string;
}

export interface UserCosmeticItem {
  id: string;
  userId: string;
  cosmeticId: string;
  acquired: Date;
  isActive: boolean;
  expiresAt?: Date;
}

export interface CosmeticType {
  id: string;
  name: string;
  icon: string;
}

export interface CosmeticPlacement {
  id: string;
  name: string;
  description: string;
}

/**
 * Get CSS color based on rarity
 */
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-amber-400';
    case 'mythic':
      return 'text-red-400';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-gray-300';
  }
};

/**
 * Get CSS background color based on rarity
 */
export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-800/40';
    case 'uncommon':
      return 'bg-green-900/40';
    case 'rare':
      return 'bg-blue-900/40';
    case 'epic':
      return 'bg-purple-900/40';
    case 'legendary':
      return 'bg-amber-900/40';
    case 'mythic':
      return 'bg-red-900/40';
    case 'royal':
      return 'bg-royal-gold/20';
    default:
      return 'bg-gray-800/40';
  }
};

/**
 * Get CSS border color based on rarity
 */
export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-400/30';
    case 'uncommon':
      return 'border-green-400/30';
    case 'rare':
      return 'border-blue-400/30';
    case 'epic':
      return 'border-purple-400/30';
    case 'legendary':
      return 'border-amber-400/30';
    case 'mythic':
      return 'border-red-400/30';
    case 'royal':
      return 'border-royal-gold/30';
    default:
      return 'border-gray-400/30';
  }
};

// Export a UserCosmetics type for the user
export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  colors?: string[];
  fonts?: string[];
  backgrounds?: string[];
  frames?: string[];
  boosts?: any[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeFrame?: string;
  foundersPass?: boolean;
}

