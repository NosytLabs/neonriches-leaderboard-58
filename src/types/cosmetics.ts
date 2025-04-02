
export type CosmeticType = 'avatar' | 'badge' | 'banner' | 'emote' | 'frame' | 'title' | 'nameplate' | 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'theme';

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
  | 'appearance' // Added to support existing code
  | 'profile' // Added to support existing code
  | 'interaction'; // Added to support existing code

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
  category: CosmeticCategory;
  cssClass: string;
  rarity: CosmeticRarity;
  type: CosmeticType | string;
  enabled: boolean;
  cost: number;
  price?: number; // Added for RoyalBoutique component
  previewUrl?: string;
  image?: string;
  imageSrc?: string; // Added to support existing code
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  enabled: boolean;
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
  [key: string]: string[] | undefined;
}

export interface UserCosmeticState {
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  [key: string]: string | undefined;
}

export interface CosmeticStoreSection {
  title: string;
  items: CosmeticItem[];
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
  newBalance?: number;
}
