
export type CosmeticCategory = 
  'badge' | 
  'emote' |
  'profile' |
  'frame' |
  'background' |
  'title' |
  'animation' |
  'icon' |
  'appearance' |
  'interaction' |
  'borders' |
  'colors' |
  'fonts' |
  'emojis' |
  'titles' |
  'backgrounds' |
  'effects';

export type CosmeticRarity = 
  'common' | 
  'uncommon' | 
  'rare' | 
  'epic' | 
  'legendary' |
  'mythic' |
  'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  image?: string;
  type?: string;
  imageSrc?: string;
  imageUrl?: string;
}

export interface UserCosmeticState {
  badges: string[];
  titles: string[];
  frames: string[];
  backgrounds: string[];
  animations: string[];
  activeBadge?: string;
  activeTitle?: string;
  activeFrame?: string;
  activeBackground?: string;
  activeAnimation?: string;
}
