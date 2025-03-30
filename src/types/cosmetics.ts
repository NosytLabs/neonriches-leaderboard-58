
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' | 'appearance' | 'profile' | 'interaction';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price?: number;
  cost?: number;
  image?: string;
  cssClass?: string;
  unlockCriteria?: string;
  unlocked?: boolean;
  tier?: string;
  type?: string;
}

export interface UserCosmeticItem extends CosmeticItem {
  equipped: boolean;
  purchasedAt: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  tier: string;
  icon: string;
  price: number;
  category?: string;
  features?: string[];
}

export interface FeatureInfo extends Feature {
  category: string;
}

export interface CosmeticPurchaseResult {
  success: boolean;
  item?: CosmeticItem;
  error?: string;
  newBalance?: number;
}
