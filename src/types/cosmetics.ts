
/**
 * Cosmetic items and related types
 */

// All valid cosmetic types in the application
export type CosmeticType = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'badge'
  | 'background'
  | 'effect'
  | 'theme'
  | 'profile'
  | 'appearance'
  | 'interaction'
  | 'animation'
  | 'premium'    // Added for compatibility
  | 'standard'   // Added for compatibility
  | 'exclusive'  // Added for compatibility
  | 'aura'       // Added for compatibility with boost.ts
  | 'cosmetic'   // Added for compatibility with boost.ts
  | 'feature';   // Added for compatibility with boost.ts

// String literal type for category
export type CosmeticCategory = string;

// No conflicting exports
export { CosmeticType };

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'unique'
  | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticType;
  rarity: CosmeticRarity;
  price: number;
  preview?: string;
  previewUrl?: string;
  imageSrc?: string;
  image?: string;
  enabled: boolean;
  type?: CosmeticType;
  cssClass?: string;
  cost?: number;
}

export interface SocialLink {
  id?: string;
  type: string;
  url: string;
  displayName?: string;
  icon?: string;
  active?: boolean;
  // Extra properties from user-consolidated
  platform?: string;
  title?: string;
  verified?: boolean;
  username?: string;
  label?: string;
  clicks?: number;
  display?: string;
  primary?: boolean;
}

// Updated interface to allow for string indices and handle active* properties
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
  [key: string]: string[] | string | undefined; // Index signature to allow accessing by string key AND string values for active properties
  // Compatibility with user-consolidated
  activeBorder?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
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

export type UserCosmeticState = Record<CosmeticType, string | null>;

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  items: CosmeticItem[];
}

export interface CosmeticStoreSection {
  id: string;
  title: string;
  items: CosmeticItem[];
}

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
  updatedCosmetics?: UserCosmeticState;
}
