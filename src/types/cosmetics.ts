
export type CosmeticType = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'badge'
  | 'background'
  | 'effect'
  | 'theme';

export type CosmeticCategory = CosmeticType;

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'exclusive'
  | 'limited'
  | 'standard'
  | 'premium';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cost: number;
  type: string;
  imageSrc?: string;
  cssClass?: string;
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
  [key: string]: string[] | string | undefined;
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeTheme?: string;
}

export interface UserCosmeticState {
  owned: UserCosmetics;
  active: {
    border?: string;
    color?: string;
    font?: string;
    emoji?: string;
    title?: string;
    background?: string;
    effect?: string;
    badge?: string;
    theme?: string;
  };
}

export interface CosmeticStoreSection {
  id: string;
  title: string;
  description: string;
  items: CosmeticItem[];
  category: CosmeticCategory;
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
  newBalance?: number;
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
  label?: string;
  icon?: string;
  clicks?: number;
  display?: string;
  primary?: boolean;
  type?: string;
}
