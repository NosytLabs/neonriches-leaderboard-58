
export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'title' | 'badge' | 'theme';
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'title' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  enabled: boolean;
  cssClass: string;
  previewUrl?: string;
  icon?: string;
  cost?: number; // Make this optional
}

export interface SocialLink {
  id?: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
  enabled?: boolean;
}

export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeTheme?: string;
  [key: string]: string[] | string | undefined;
}

export interface UserCosmeticState {
  cosmetics: UserCosmetics;
  activeBorder: string | null;
  activeColor: string | null;
  activeFont: string | null;
  activeEmoji: string | null;
  activeTitle: string | null;
}

export interface CosmeticStoreSection {
  id: string;
  title: string;
  description: string;
  items: CosmeticItem[];
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  itemId: string;
  category: CosmeticCategory;
}

// Re-export SocialLink to ensure it's accessible when importing from this file
export type { SocialLink };
