
// Cosmetics-related types
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

// Helper functions for cosmetic rarity
export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    case 'mythic': return 'text-red-400';
    case 'unique': return 'text-pink-400';
    case 'royal': return 'text-amber-400';
    default: return 'text-gray-300';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'bg-gray-800/50';
    case 'uncommon': return 'bg-green-900/50';
    case 'rare': return 'bg-blue-900/50';
    case 'epic': return 'bg-purple-900/50';
    case 'legendary': return 'bg-yellow-900/50';
    case 'mythic': return 'bg-red-900/50';
    case 'unique': return 'bg-pink-900/50';
    case 'royal': return 'bg-amber-900/50';
    default: return 'bg-gray-800/50';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'border-gray-700';
    case 'uncommon': return 'border-green-600';
    case 'rare': return 'border-blue-600';
    case 'epic': return 'border-purple-600';
    case 'legendary': return 'border-yellow-600';
    case 'mythic': return 'border-red-600';
    case 'unique': return 'border-pink-600';
    case 'royal': return 'border-amber-600';
    default: return 'border-gray-700';
  }
}

export { CosmeticCategory, CosmeticRarity, CosmeticItem, UserCosmeticState, CosmeticSet, CosmeticShopItem, CosmeticShopState };
