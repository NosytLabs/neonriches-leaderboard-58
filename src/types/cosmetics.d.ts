
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme'
  | 'banner'
  | 'borders'
  | 'colors'
  | 'fonts'
  | 'emojis'
  | 'titles'
  | 'backgrounds'
  | 'effects'
  | 'badges'
  | 'themes'
  | 'banners'
  | 'appearance'
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'free'
  | 'premium'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  isLimited?: boolean;
  limitedCount?: number;
  isActive?: boolean;
  releaseDate?: string;
  expiryDate?: string;
  minTier?: string;
  image?: string;
  imageSrc?: string;
  cost?: number;
  type?: string;
  previewImage?: string;
  cssClass?: string;
  unlockRequirement?: {
    type: 'rank' | 'spend' | 'special';
    value: number;
  };
}

export interface UserCosmeticItem extends CosmeticItem {
  acquired: string;
  fromEvent?: string;
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
  banners?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  activeEmoji?: string;
  socialLinks?: any; // Temporary fix
}

export type CosmeticType = 'profile' | 'message' | 'post' | 'achievement';
export type CosmeticPlacement = 'avatar' | 'name' | 'border' | 'background' | 'title' | 'profile' | 'leaderboard' | 'chat' | 'global';

// Helper functions for working with cosmetics
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-200';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'free': return 'text-gray-200';
    case 'premium': return 'text-purple-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-200';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-900/60';
    case 'uncommon': return 'bg-green-900/20';
    case 'rare': return 'bg-blue-900/20';
    case 'epic': return 'bg-purple-900/20';
    case 'legendary': return 'bg-orange-900/20';
    case 'free': return 'bg-gray-900/60';
    case 'premium': return 'bg-purple-900/20';
    case 'royal': return 'bg-orange-900/20';
    default: return 'bg-gray-900/60';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-700';
    case 'uncommon': return 'border-green-700';
    case 'rare': return 'border-blue-700';
    case 'epic': return 'border-purple-700';
    case 'legendary': return 'border-royal-gold/50';
    case 'free': return 'border-gray-700';
    case 'premium': return 'border-purple-700';
    case 'royal': return 'border-royal-gold/50';
    default: return 'border-gray-700';
  }
};
