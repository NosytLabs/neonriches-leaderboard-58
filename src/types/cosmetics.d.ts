
// Cosmetics-related types
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background' 
  | 'effect' 
  | 'badge' 
  | 'theme';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic'
  | 'unique'
  | 'royal';

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  price?: number; // Added for cosmetic purchases
}

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  imageSrc?: string;
  image?: string;
  cssClass?: string;
  cost?: number;
}

export interface UserCosmeticState {
  // Currently active cosmetics
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  
  // Unlocked cosmetics
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // For legacy support
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

export interface CosmeticSet {
  id: string;
  name: string;
  description: string;
  price: number;
  items: CosmeticItem[];
  discount: number;
  rarity: CosmeticRarity;
  limited: boolean;
  expiresAt?: string;
}

export interface CosmeticShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: CosmeticCategory;
  rarity: CosmeticRarity;
  imageSrc?: string;
  isPurchased: boolean;
  isEquipped: boolean;
  isLimited?: boolean;
  expiresAt?: string;
}

export interface CosmeticShopState {
  items: CosmeticShopItem[];
  sets: CosmeticSet[];
  featured: CosmeticShopItem[];
  loading: boolean;
  error: string | null;
}

// Type alias for UserCosmetics
export type UserCosmetics = UserCosmeticState;
