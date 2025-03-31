
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  cssClass: string;
  type: string;
  rarity: CosmeticRarity;
  imageSrc?: string;
  image?: string;
}

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
  // Legacy compatibility fields - these should not be used in new code
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

export interface CosmeticPurchaseResult {
  success: boolean;
  message: string;
  item?: CosmeticItem;
  updatedCosmetics?: UserCosmeticState;
}
