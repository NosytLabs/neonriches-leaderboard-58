import { SocialLink } from './social-links';

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
  | 'profile'
  | 'appearance'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'mythic'
  | 'unique'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type?: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cssClass?: string;
  isLocked?: boolean;
  image?: string;
  imageUrl?: string;
  imageSrc?: string;
  cost?: number; // Alternative to price for compatibility
}

export interface UserCosmeticState {
  // Collections of unlocked items
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // Currently active items
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  
  // Legacy/compatibility properties
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  
  // Feature flags
  foundersPass?: boolean;
  
  // Other optional properties
  socialLinks?: SocialLink[];
}

export interface CosmeticSet {
  id: string;
  name: string;
  items: CosmeticItem[];
  price: number;
  discount?: number;
  rarity: CosmeticRarity;
}

export interface CosmeticShopItem extends CosmeticItem {
  isOwned: boolean;
  isFeatured?: boolean;
  onSale?: boolean;
  salePrice?: number;
  saleEnds?: string;
}

export interface CosmeticShopState {
  featured: CosmeticShopItem[];
  borders: CosmeticShopItem[];
  colors: CosmeticShopItem[];
  fonts: CosmeticShopItem[];
  emojis: CosmeticShopItem[];
  titles: CosmeticShopItem[];
  backgrounds: CosmeticShopItem[];
  effects: CosmeticShopItem[];
  badges: CosmeticShopItem[];
  themes: CosmeticShopItem[];
  sets: CosmeticSet[];
}
