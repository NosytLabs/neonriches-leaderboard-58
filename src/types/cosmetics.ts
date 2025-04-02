
/**
 * Cosmetics type definitions
 */

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
  | 'appearance' // Added to match existing code
  | 'profile'    // Added to match existing code
  | 'interaction'; // Added to match existing code

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'  // Added to match existing code
  | 'unique'; // Added to match existing code

export type CosmeticType = 
  | 'standard'
  | 'premium'
  | 'exclusive'
  | 'event'
  | 'seasonal'
  | 'limited';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  enabled: boolean;
  preview?: string;
  previewUrl?: string; // Added for compatibility
  image?: string;
  imageSrc?: string; // Added for compatibility
  cost?: number; // Added for compatibility
  cssClass?: string; // Added for compatibility
  type?: CosmeticType; // Added for compatibility
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
  [key: string]: string[];
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  username?: string;
  isVerified?: boolean;
}

export interface UserCosmeticState {
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string[];
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string[];
  activeTheme?: string;
  [key: string]: string | string[] | undefined;
}
