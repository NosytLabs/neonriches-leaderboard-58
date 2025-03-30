
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
  | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  type: string;
  rarity: string;
  cssClass?: string;
  imageSrc?: string;
  image?: string;
  cost?: number; // Adding cost as an optional property
}

export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  unlockedBorders?: string[];
  unlockedColors?: string[];
  unlockedFonts?: string[];
  unlockedEmojis?: string[];
  unlockedTitles?: string[];
  unlockedBackgrounds?: string[];
  unlockedEffects?: string[];
  unlockedBadges?: string[];
  unlockedThemes?: string[];
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
}

export interface Cosmetic {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
}
