
// Define all the necessary cosmic types to match what's used in the code
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
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  cost?: number;
  category: CosmeticCategory;
  cssClass: string;
  rarity: CosmeticRarity | string;
  type: CosmeticType | string;
  enabled: boolean;
  previewUrl?: string;
  imageSrc?: string;
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
}

export interface CosmeticFilter {
  category?: CosmeticCategory;
  rarity?: CosmeticRarity;
  search?: string;
  sortBy?: 'name' | 'price' | 'rarity' | 'newest';
  owned?: boolean;
}

// Adding SocialLink for the components requiring it
export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title: string;
  displayText?: string;
  icon?: string; 
  label?: string;
}
