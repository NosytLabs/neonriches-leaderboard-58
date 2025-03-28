
export type CosmeticCategory = 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  previewImage?: string;
  unlockCriteria?: string;
  availableUntil?: string;
  cssClasses?: string;
};

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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  foundersPass?: boolean;
}
