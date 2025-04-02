
export type CosmeticType = 'border' | 'color' | 'effect' | 'theme' | 'background' | 'title' | 'font' | 'frame' | 'badge' | 'banner' | 'emote' | 'avatar' | 'nameplate' | 'sound';
export type CosmeticCategory = 'border' | 'color' | 'effect' | 'theme' | 'background' | 'title' | 'font' | 'frame' | 'badge' | 'banner' | 'emote' | 'avatar' | 'nameplate' | 'sound' | 'appearance';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  cost?: number; // Alias for price to maintain backward compatibility
  type: CosmeticType;
  category: CosmeticCategory;
  cssClass?: string;
  rarity: CosmeticRarity;
  enabled: boolean;
  previewUrl?: string;
  image?: string;
  acquiredAt?: string;
  expiresAt?: string;
  isLimited?: boolean;
  isPromotional?: boolean;
  isExclusive?: boolean;
  tierRequired?: string;
  minRank?: number;
  requirements?: string[];
}

export interface UserCosmetics {
  items: CosmeticItem[];
  equipped: {
    border?: string;
    color?: string;
    effect?: string;
    theme?: string;
    background?: string;
    title?: string;
    font?: string;
    frame?: string;
    badge?: string;
    banner?: string;
    emote?: string;
    avatar?: string;
    nameplate?: string;
    sound?: string;
  };
  activeTitle?: string; // For backward compatibility
  activeBorder?: string; // For backward compatibility
  activeBackground?: string; // For backward compatibility
  activeEffect?: string; // For backward compatibility
}

export interface CosmeticStoreItem extends CosmeticItem {
  isOwned: boolean;
  isFeatured?: boolean;
  discount?: number;
  originalPrice?: number;
  endsAt?: string;
}

export type CosmeticFilterType = 'all' | CosmeticCategory | 'owned' | 'not-owned' | 'limited' | 'exclusive';
export type CosmeticSortType = 'newest' | 'price-asc' | 'price-desc' | 'rarity' | 'alphabetical';
