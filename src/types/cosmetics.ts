
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background' 
  | 'effect' 
  | 'borders'
  | 'colors'
  | 'fonts'
  | 'emojis'
  | 'titles'
  | 'backgrounds'
  | 'effects'
  | 'badge'
  | 'profile'
  | 'interaction'
  | 'appearance';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type?: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cssClass?: string;
  price?: number;
  cost?: number;
  unlockRequirement?: string;
  previewImage?: string;
  originalCost?: number;
}
