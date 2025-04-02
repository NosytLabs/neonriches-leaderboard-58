
import { UserProfile as ConsolidatedUserProfile } from './user-consolidated';

export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme'
  | 'appearance'
  | 'interaction'
  | 'profile';

export type CosmeticType = 
  | 'premium'
  | 'standard'
  | 'exclusive'
  | 'epic'
  | 'legendary'
  | 'rare'
  | 'uncommon'
  | 'common'
  | 'basic'
  | 'emoji'
  | 'profile';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'mythic'
  | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  cost?: number;
  category: CosmeticCategory;
  cssClass: string; // Required field
  rarity: CosmeticRarity | string;
  type: CosmeticType | string;
  enabled: boolean;
  previewUrl?: string;
  imageSrc?: string;
  image?: string;
}

export interface UserCosmetics {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  items?: CosmeticItem[];
  equipped?: {
    [key in CosmeticCategory]?: string;
  };
  // Legacy fields for backward compatibility
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
}

export interface CosmeticFilter {
  category?: CosmeticCategory;
  rarity?: CosmeticRarity;
  search?: string;
  sortBy?: 'name' | 'price' | 'rarity' | 'newest';
  owned?: boolean;
}

// Create UserCosmeticState for compatibility
export type UserCosmeticState = UserCosmetics;
