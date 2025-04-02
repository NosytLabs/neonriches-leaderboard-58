export interface CosmeticType {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  unlockRequirement?: string;
  isDefault?: boolean;
}

export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'background' 
  | 'effect' 
  | 'title' 
  | 'badge' 
  | 'theme'
  | 'appearance'  // Add missing values
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'mythic'   // Add missing values
  | 'unique'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  enabled: boolean;
  cssClass: string;
  previewUrl?: string;
  icon?: string;
  cost?: number; // Make this optional
  imageSrc?: string;
  image?: string;
}

export interface SocialLinkInterface {
  id?: string | number;
  platform: string;
  url: string;
  username?: string;
  verified?: boolean;
  enabled?: boolean;
  title?: string;
  clicks?: number;
  icon?: string;
  label?: string;
}

export interface ProfileLinkInterface {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  icon?: string;
  label?: string;
}

export { SocialLinkInterface as SocialLink };
export { ProfileLinkInterface as ProfileLink };

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
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeTheme?: string;
  [key: string]: string[] | string | undefined;
}

export interface UserCosmeticState {
  cosmetics: UserCosmetics;
  activeBorder: string | null;
  activeColor: string | null;
  activeFont: string | null;
  activeEmoji: string | null;
  activeTitle: string | null;
}

export interface CosmeticStoreSection {
  id: string;
  title: string;
  description: string;
  items: CosmeticItem[];
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  itemId: string;
  category: CosmeticCategory;
}

// Re-export specific types
export type { SocialLink, ProfileLink };
