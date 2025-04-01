
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticType = 'standard' | 'premium' | 'exclusive' | 'founder';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  cssClass: string;
  rarity: CosmeticRarity;
  type: CosmeticType;
  enabled: boolean;
  previewUrl?: string;
}

export type CosmeticCategory = 
  | 'title'
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme';

export interface UserCosmetics {
  title?: string[] | string;
  border?: string[] | string;
  color?: string[] | string;
  font?: string[] | string;
  emoji?: string[] | string;
  background?: string[] | string;
  effect?: string[] | string;
  badge?: string[] | string;
  theme?: string[] | string;
}
