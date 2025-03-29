
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' | 'banner';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  cost: number;
  lockRequirement?: {
    type: 'tier' | 'spend' | 'boost' | 'free';
    value: string | number;
  };
  cssClass?: string;
  previewUrl?: string;
  imageSrc?: string;
  image?: string;
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
