
export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  image?: string;
  price: number;
  isLimited?: boolean;
  isActive?: boolean;
  metadata?: Record<string, any>;
}

export interface UserCosmeticItem {
  id: string;
  itemId: string;
  userId: string;
  category: CosmeticCategory;
  acquiredAt: string;
  isEquipped: boolean;
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  foundersPass?: boolean;
}
