
// Cosmetics-related types
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';

export interface UserCosmeticState {
  // Active selections
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  
  // Unlocked items
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // Also include arrays for compatibility
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];

  // Special flags
  foundersPass?: boolean;
}

export interface CosmeticItem {
  id: string;
  name: string;
  category: CosmeticCategory;
  description: string;
  rarity: CosmeticRarity;
  price: number;
  isPurchasable: boolean;
  isLimited: boolean;
  requiredTier?: string;
  requiredRank?: number;
  requiredTeam?: string;
  cssClass?: string;
  previewUrl?: string;
}

export interface CosmeticPurchase {
  id: string;
  userId: string;
  cosmeticId: string;
  purchaseDate: string | Date;
  price: number;
  method: string;
}

export interface CosmeticUnlock {
  userId: string;
  cosmeticId: string;
  category: CosmeticCategory;
  unlockDate: string | Date;
  method: 'purchase' | 'reward' | 'achievement' | 'event' | 'admin';
}

export interface CosmeticSet {
  id: string;
  name: string;
  description: string;
  items: CosmeticItem[];
  price: number;
  discountPercent: number;
}
