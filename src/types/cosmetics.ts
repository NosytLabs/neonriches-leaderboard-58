
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
  | 'mythic'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  price: number;
  rarity: CosmeticRarity;
  previewUrl?: string;
  enabled: boolean;
  unlockRequirement?: string;
  cost?: number; // For backward compatibility
  previewImage?: string; // Alternative to previewUrl
  image?: string; // For backward compatibility
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  socialLinks?: Record<string, string>;
}

// Interface for consistent property name access
export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  [key: string]: string[] | string | Record<string, string> | undefined;
}
