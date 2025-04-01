
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'title' | 'border' | 'background' | 'effect' | 'theme' | 'badge' | 'emoji' | 'color' | 'font';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rarity: CosmeticRarity;
  type: string;
  category: CosmeticCategory;
  enabled: boolean;
  previewUrl?: string;
  unlockRequirement?: string;
  cssClass?: string;
  restrictedTo?: string[];
  icon?: string;
}

export interface UserCosmetics {
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
}

export interface SocialLink {
  id: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
}
