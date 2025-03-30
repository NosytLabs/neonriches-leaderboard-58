
export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'theme'
  | 'badge'
  // For backward compatibility
  | 'borders'
  | 'colors'
  | 'fonts'
  | 'emojis'
  | 'titles'
  | 'backgrounds'
  | 'effects'
  | 'badges'
  | 'themes'
  // Additional categories
  | 'appearance'
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'mythic'
  | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity | string;
  type?: string;
  isUnlocked?: boolean;
  image?: string;
  cssClass?: string;
}

export type CosmeticType = CosmeticCategory;
export type UserCosmeticItem = CosmeticItem;
export type UserCosmetics = UserCosmeticState;

export interface UserCosmeticState {
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBadges: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  // Legacy compatibility properties
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  foundersPass?: boolean;
}

export type CosmeticPlacement = "profile" | "leaderboard" | "chat" | "global";

// Helper functions for cosmetic rarity
export const getRarityColor = (rarity: CosmeticRarity | string): string => {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'text-amber-300';
    case 'mythic': return 'text-pink-400';
    case 'unique': return 'text-teal-400';
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity | string): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-600/20';
    case 'uncommon': return 'bg-green-600/20';
    case 'rare': return 'bg-blue-600/20';
    case 'epic': return 'bg-purple-600/20';
    case 'legendary': return 'bg-amber-600/20';
    case 'royal': return 'bg-amber-500/20';
    case 'mythic': return 'bg-pink-600/20';
    case 'unique': return 'bg-teal-600/20';
    default: return 'bg-gray-600/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity | string): string => {
  switch (rarity) {
    case 'common': return 'border-gray-500/50';
    case 'uncommon': return 'border-green-500/50';
    case 'rare': return 'border-blue-500/50';
    case 'epic': return 'border-purple-500/50';
    case 'legendary': return 'border-amber-500/50';
    case 'royal': return 'border-amber-400/50';
    case 'mythic': return 'border-pink-500/50';
    case 'unique': return 'border-teal-500/50';
    default: return 'border-gray-500/50';
  }
};
