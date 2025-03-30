
// Define the CosmeticItem type
export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  category: CosmeticCategory;
  cssClass: string;
  rarity: string;
  image?: string;
  imageSrc?: string;
  cost?: number; // Added for backward compatibility
}

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

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'unique';

export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}

export type CosmeticType = keyof UserCosmeticState;
