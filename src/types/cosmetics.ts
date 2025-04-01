
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';
export type CosmeticCategory = 
  | 'title'
  | 'border' 
  | 'background' 
  | 'effect' 
  | 'theme' 
  | 'badge' 
  | 'emoji' 
  | 'color' 
  | 'font' 
  | 'appearance' 
  | 'profile' 
  | 'interaction';

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
  imageSrc?: string; // Add this to fix imageSrc property errors
  cost?: number; // Add this for backward compatibility
  image?: string; // Add this for backward compatibility
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  // Legacy compatibility fields
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
}

// Alias UserCosmetics as UserCosmeticState for backward compatibility
export type UserCosmeticState = UserCosmetics;

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

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
  updatedCosmetics?: UserCosmetics;
}
