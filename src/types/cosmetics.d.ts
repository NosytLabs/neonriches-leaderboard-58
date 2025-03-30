
export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'theme'
  | 'badge'
  // For backward compatibility
  | 'borders'
  | 'colors'
  | 'fonts'
  | 'emojis'
  | 'titles'
  | 'backgrounds'
  | 'effects'
  | 'badges'
  | 'themes';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  isUnlocked?: boolean;
  image?: string; // For compatibility
}

export type CosmeticType = CosmeticCategory;
