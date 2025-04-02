
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
  cost?: number; // Make cost optional
  price?: number; // Price can be used as a fallback for cost
  previewUrl?: string;
  image?: string;
  imageSrc?: string; // Added to support existing code
  icon?: string;
  strength?: number; // Added for boost effects
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  enabled: boolean;
  title?: string; // Added for compatibility
  displayText?: string;
  label?: string;
  clicks?: number; // Add clicks property
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
  [key: string]: string[] | string | undefined;
  // Individual active items
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
