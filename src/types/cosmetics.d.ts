
/**
 * Types for cosmetic items and cosmetic state
 */

export type CosmeticCategory = 
  | 'border' | 'color' | 'font' | 'emoji' 
  | 'title' | 'background' | 'effect' | 'badge' | 'theme';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  category: CosmeticCategory;
  imageSrc?: string;
  icon?: string;
  cssClass?: string;
  preview?: string;
  unlockCondition?: string;
  cost?: number;
  tags?: string[];
  image?: string;
}

export interface UserCosmeticState {
  border: string;
  color: string;
  font: string;
  emoji: string;
  title: string;
  background: string;
  effect: string;
  badge: string;
  theme: string;
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // For backward compatibility
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  foundersPass?: boolean;
}
