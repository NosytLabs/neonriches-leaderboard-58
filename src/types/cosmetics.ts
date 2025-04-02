
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
  | 'legendary'
  | 'royal'
  | 'exclusive';

export interface CosmeticItem {
  id: string;
  name: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  description: string;
  price: number;
  value: string;
  preview?: string;
  icon?: string;
  enabled: boolean;
  effects?: string[];
  exclusive?: boolean;
  date_created?: string;
  created_at?: string;
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
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
}

// Export aliases for backward compatibility
export type { CosmeticItem as Cosmetic };
export type { UserCosmetics as UserCosmeticsType };
