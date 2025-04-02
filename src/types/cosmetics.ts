
// Fix export type conflicts
export interface SocialLinkInterface {
  id?: string; // Change to string only
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
  displayText?: string;
  icon?: string;
  label?: string;
}

// Re-export with proper syntax to avoid conflicts
export type SocialLink = SocialLinkInterface;
export type ProfileLink = ProfileLinkInterface;

export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' |
  'premium' | 'standard' | 'exclusive' | 'profile' | 'appearance'; // Added for backward compatibility

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
  | 'appearance' // Added for compatibility
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'royal' 
  | 'exclusive' 
  | 'limited'
  | 'mythic'  // Added for compatibility
  | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  imageUrl?: string;
  previewUrl?: string;
  price: number;
  cost?: number; // Added for backward compatibility
  currency?: 'coins' | 'cash' | 'free';
  isOwned?: boolean;
  isActive?: boolean;
  isAvailable?: boolean;
  isLimited?: boolean;
  endsAt?: string;
  cssClass?: string;
  attributes?: Record<string, string | number | boolean>;
  type?: CosmeticType; // Added for backward compatibility
  imageSrc?: string; // Added for backward compatibility
  image?: string; // Added for backward compatibility
  enabled?: boolean; // Added for backward compatibility
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
  cosmetics: UserCosmetics;
  activeBorder?: string;
  activeBackground?: string;
  activeColor?: string;
  activeTitle?: string;
}

export interface CosmeticStoreSection {
  title: string;
  items: CosmeticItem[];
  description?: string;
  imageUrl?: string;
  category: CosmeticCategory;
  isNew?: boolean;
  isLimited?: boolean;
  endsAt?: string;
}

export interface CosmeticPurchaseResult {
  success: boolean;
  item?: CosmeticItem;
  error?: string;
  newBalance?: number;
  transactionId?: string;
}
