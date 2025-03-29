
export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  banners: string[];
  themes: string[];
  effects: string[];
  titles: string[];
}

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  preview?: string;
  effects?: any;
}

export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'banner' | 'theme' | 'effect' | 'title';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface BorderCosmetic extends CosmeticItem {
  category: 'border';
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  animation?: string;
}

export interface ColorCosmetic extends CosmeticItem {
  category: 'color';
  colorHex: string;
  gradient?: string;
  textShadow?: string;
}

export interface FontCosmetic extends CosmeticItem {
  category: 'font';
  fontFamily: string;
  fontWeight: string;
  letterSpacing?: string;
}

export interface EmojiCosmetic extends CosmeticItem {
  category: 'emoji';
  emoji: string;
  animation?: string;
}

export interface BannerCosmetic extends CosmeticItem {
  category: 'banner';
  imageUrl: string;
  position?: string;
  size?: string;
}

export interface ThemeCosmetic extends CosmeticItem {
  category: 'theme';
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  borderColor?: string;
}

export interface EffectCosmetic extends CosmeticItem {
  category: 'effect';
  animation: string;
  duration: string;
  selector?: string;
}

export interface TitleCosmetic extends CosmeticItem {
  category: 'title';
  title: string;
  style?: string;
}
