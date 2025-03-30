
export type CosmeticType = 
  | 'badge'
  | 'title'
  | 'border'
  | 'effect'
  | 'emoji'
  | 'font'
  | 'color'
  | 'background'
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
  type: CosmeticType;
  rarity: CosmeticRarity;
  image?: string;
  cost: number;
  isUnlocked?: boolean;
  unlockDate?: string;
  isNew?: boolean;
  category?: string;
}

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  type: CosmeticType;
  items: CosmeticItem[];
}

export interface UserCosmeticState {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes: string[];
}
