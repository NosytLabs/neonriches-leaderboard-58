
export type CosmeticCategory = 
  | "title" 
  | "badge" 
  | "border" 
  | "color" 
  | "font" 
  | "emoji" 
  | "background" 
  | "effect"
  | "borders"
  | "colors"
  | "fonts"
  | "emojis"
  | "titles"
  | "backgrounds" 
  | "effects";

export type CosmeticRarity = 
  | "common" 
  | "uncommon" 
  | "rare" 
  | "epic" 
  | "legendary"
  | "royal";

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  category: CosmeticCategory;
  // Additional properties
  cssClass?: string;
  imageSrc?: string;
  cost?: number;
  imageUrl?: string;
}

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
}

// Helper functions for cosmetic rarity
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'text-amber-300';
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-600/20';
    case 'uncommon': return 'bg-green-600/20';
    case 'rare': return 'bg-blue-600/20';
    case 'epic': return 'bg-purple-600/20';
    case 'legendary': return 'bg-amber-600/20';
    case 'royal': return 'bg-amber-500/20';
    default: return 'bg-gray-600/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-500/50';
    case 'uncommon': return 'border-green-500/50';
    case 'rare': return 'border-blue-500/50';
    case 'epic': return 'border-purple-500/50';
    case 'legendary': return 'border-amber-500/50';
    case 'royal': return 'border-amber-400/50';
    default: return 'border-gray-500/50';
  }
};

export type UserCosmeticItem = CosmeticItem;
export type CosmeticType = CosmeticCategory;
export type CosmeticPlacement = "profile" | "leaderboard" | "chat" | "global";
