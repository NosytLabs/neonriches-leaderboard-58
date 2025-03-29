
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' | 'profile' | 'interaction' | 'appearance';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  imageUrl?: string;
  cssClass?: string;
  type?: string;
  cost?: number;
}

export interface UserCosmetics {
  border?: string;
  color?: string;
  font?: string;
  emoji?: string;
  title?: string;
  background?: string;
  effect?: string;
  badge?: string;
  theme?: string;
}

export interface CosmeticPurchase {
  id: string;
  userId: string;
  cosmeticId: string;
  purchaseDate: string;
  price: number;
  active: boolean;
}
