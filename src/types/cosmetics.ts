
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  rarity: CosmeticRarity;
  cost: number;
  imageUrl?: string; // Make imageUrl optional
  cssClass?: string;
  imageSrc?: string;
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
}

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  items: CosmeticItem[];
}
