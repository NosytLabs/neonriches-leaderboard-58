
// Cosmetic item types

export type CosmeticCategory = 
  | 'title'
  | 'border'
  | 'background'
  | 'effect'
  | 'emoji'
  | 'font'
  | 'color'
  | 'badge'
  | 'theme';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal';  // Additional rarity used in the codebase

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  image?: string;
  previewUrl?: string;
  cssClass?: string;
  unlockCondition?: string;
  isDefault?: boolean;
  cost?: number;  // Alias for price used in some components
  type?: string;  // Used in some components
}

export interface UserCosmetics {
  titles?: string[];
  borders?: string[];
  backgrounds?: string[];
  effects?: string[];
  emojis?: string[];
  fonts?: string[];
  colors?: string[];
  badges?: string[];
  themes?: string[];
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeEmoji?: string;
  activeFont?: string;
  activeColor?: string;
  activeBadge?: string;
  activeTheme?: string;
  socialLinks?: Record<string, string>;
  foundersPass?: boolean;
}

export type CosmeticPlacement = 'profile' | 'comments' | 'posts' | 'global';

export type UserCosmeticItem = CosmeticItem & {
  active: boolean;
  purchasedAt: string;
};

// Helper functions for rarity colors
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-500';
    case 'rare': return 'text-blue-500';
    case 'epic': return 'text-purple-500';
    case 'legendary': return 'text-yellow-500';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'bg-gray-400/10';
    case 'uncommon': return 'bg-green-500/10';
    case 'rare': return 'bg-blue-500/10';
    case 'epic': return 'bg-purple-500/10';
    case 'legendary': return 'bg-yellow-500/10';
    case 'royal': return 'bg-royal-gold/10';
    default: return 'bg-gray-400/10';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch(rarity) {
    case 'common': return 'border-gray-400/30';
    case 'uncommon': return 'border-green-500/30';
    case 'rare': return 'border-blue-500/30';
    case 'epic': return 'border-purple-500/30';
    case 'legendary': return 'border-yellow-500/30';
    case 'royal': return 'border-royal-gold/30';
    default: return 'border-gray-400/30';
  }
};
