
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'exclusive';
export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  cssClass: string;
  rarity: CosmeticRarity;
  type: CosmeticType;
  cost: number;
  price?: number;
  previewUrl?: string;
  enabled?: boolean;
}

export interface UserCosmetics {
  [key: string]: string[];
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
}

export interface CosmeticSlot {
  id: string;
  name: string;
  category: CosmeticCategory;
  equipped: string | null;
  available: string[];
}

export interface CosmeticPreview {
  id: string;
  category: CosmeticCategory;
  preview: string;
}

export interface CosmeticInventory {
  slots: CosmeticSlot[];
  equipped: Record<CosmeticCategory, string | null>;
  owned: UserCosmetics;
}
