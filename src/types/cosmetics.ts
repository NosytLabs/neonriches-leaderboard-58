
export type CosmeticCategory = 
  'border' | 'color' | 'font' | 'emoji' | 'title' | 
  'effect' | 'background' | 'badge' | 'theme';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cssClass?: string;
  image?: string;
  discountPrice?: number;
  isLimited?: boolean;
  limitedUntil?: string;
  unlockRequirement?: string;
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
}

// Helper functions for rendering cosmetic rarities
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'royal-gradient';
    default: return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-800/30';
    case 'uncommon': return 'bg-green-900/30';
    case 'rare': return 'bg-blue-900/30';
    case 'epic': return 'bg-purple-900/30';
    case 'legendary': return 'bg-amber-900/30';
    case 'royal': return 'bg-royal-purple/30';
    default: return 'bg-gray-800/30';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600';
    case 'uncommon': return 'border-green-600';
    case 'rare': return 'border-blue-600';
    case 'epic': return 'border-purple-600';
    case 'legendary': return 'border-royal-gold';
    case 'royal': return 'border-royal-purple';
    default: return 'border-gray-600';
  }
};
