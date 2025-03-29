
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background'
  | 'effect'
  | 'badge';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'free'
  | 'premium'
  | 'royal';

export type CosmeticType = 
  | 'profile' 
  | 'message' 
  | 'post' 
  | 'achievement';

export type CosmeticPlacement = 
  | 'avatar' 
  | 'name' 
  | 'border' 
  | 'background' 
  | 'title';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  isLimited?: boolean;
  limitedCount?: number;
  isActive?: boolean;
  releaseDate?: string;
  expiryDate?: string;
  minTier?: string;
  image?: string; // Add image property to fix errors
  imageSrc?: string; // Add imageSrc property to fix errors
}

export interface UserCosmeticItem extends CosmeticItem {
  acquired: string;
  fromEvent?: string;
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
  banners?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  activeEmoji?: string; // Add activeEmoji property to fix errors
}
