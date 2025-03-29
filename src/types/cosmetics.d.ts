
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
  | 'appearance'
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'; // Added 'royal'

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cost?: number;
  type?: string;
  previewImage?: string;
  cssClass?: string;
  unlockRequirement?: string;
  imageSrc?: string; // Added imageSrc property
  image?: string; // Added image property
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
  activeEmoji?: string;
  socialLinks?: any;
}
