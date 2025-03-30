
// Types for cosmetic items

export type CosmeticCategory = 
  | 'title'
  | 'border'
  | 'background'
  | 'effect'
  | 'emoji'
  | 'font'
  | 'color'
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
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  image?: string;
  previewUrl?: string;
  cssClass?: string;
  unlockCondition?: string;
  isDefault?: boolean;
}

export interface CosmeticPurchaseResult {
  success: boolean;
  itemId?: string;
  error?: string;
}

export interface CosmeticState {
  ownedItems: Record<CosmeticCategory, string[]>;
  activeItems: Record<CosmeticCategory, string | null>;
  isLoading: boolean;
  error: string | null;
}

export interface CosmeticContextType {
  cosmetics: CosmeticState;
  purchaseCosmetic: (itemId: string, category: CosmeticCategory) => Promise<CosmeticPurchaseResult>;
  activateCosmetic: (itemId: string | null, category: CosmeticCategory) => Promise<boolean>;
  refreshCosmetics: () => Promise<void>;
}
