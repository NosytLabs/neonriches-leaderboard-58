
export type CosmeticCategory = 
  | 'border' 
  | 'background' 
  | 'color' 
  | 'font'
  | 'emoji'  
  | 'title'
  | 'badge'
  | 'theme'
  | 'effect';

export type CosmeticType = 
  | 'static'
  | 'animated'
  | 'gradient'
  | 'pattern'
  | 'glow'
  | 'pulse'
  | 'shimmer'
  | 'rainbow'
  | 'particle'
  | 'custom'
  | 'profile'; // Added profile as a type

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'exclusive'
  | 'limited';

export type CosmeticPlacement = 'profile' | 'post' | 'comment' | 'avatar' | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type: CosmeticType;
  rarity: CosmeticRarity;
  cost: number;
  placement: CosmeticPlacement;
  imageSrc?: string;
  imageUrl?: string; // Added for compatibility
  cssClass?: string;
  requirements?: {
    tier?: string;
    spending?: number;
    team?: string;
  };
}

export interface UserCosmetics {
  userId: string;
  items: CosmeticItem[];
  equipped: {
    [key in CosmeticCategory]?: string;
  };
}

// Utility functions for cosmetics
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'text-royal-gold';
    case 'exclusive': return 'text-royal-crimson';
    case 'limited': return 'text-amber-400';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-700/50';
    case 'uncommon': return 'bg-green-900/50';
    case 'rare': return 'bg-blue-900/50';
    case 'epic': return 'bg-purple-900/50';
    case 'legendary': return 'bg-amber-900/50';
    case 'royal': return 'bg-royal-gold/20';
    case 'exclusive': return 'bg-royal-crimson/20';
    case 'limited': return 'bg-amber-700/50';
    default: return 'bg-gray-700/50';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600';
    case 'uncommon': return 'border-green-600';
    case 'rare': return 'border-blue-600';
    case 'epic': return 'border-purple-600';
    case 'legendary': return 'border-royal-gold';
    case 'royal': return 'border-royal-gold';
    case 'exclusive': return 'border-royal-crimson';
    case 'limited': return 'border-amber-600';
    default: return 'border-gray-600';
  }
};
