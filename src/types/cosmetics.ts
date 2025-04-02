
/**
 * Cosmetic items and related types
 */

export type CosmeticType = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'badge'
  | 'background'
  | 'effect'
  | 'theme'
  | 'profile'
  | 'appearance'
  | 'interaction'
  | 'animation';

export type CosmeticCategory = CosmeticType;

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'unique'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticType;
  rarity: CosmeticRarity;
  price: number;
  preview?: string;
  previewUrl?: string;
  imageSrc?: string;
  image?: string;
  enabled: boolean;
  type?: CosmeticType;
  cssClass?: string;
  cost?: number;
}

export interface SocialLink {
  id?: string;
  type: string;
  url: string;
  displayName?: string;
  icon?: string;
  active?: boolean;
}

export interface UserCosmetics {
  [key: string]: string[];
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
}

export type UserCosmeticState = Record<CosmeticType, string | null>;

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  items: CosmeticItem[];
}

export interface CosmeticStoreSection {
  id: string;
  title: string;
  items: CosmeticItem[];
}
