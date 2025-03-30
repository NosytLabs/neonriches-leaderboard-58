
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  image?: string;
  isOwned?: boolean;
  isActive?: boolean;
  type?: string;
}

// User state for cosmetics
export type UserCosmeticState = {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  foundersPass?: boolean;
};
