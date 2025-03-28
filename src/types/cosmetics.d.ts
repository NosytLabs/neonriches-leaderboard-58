
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'title' | 'badge' | 'theme';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type: string;
  category?: CosmeticCategory;
  rarity: CosmeticRarity;
  cost: number;
  price?: number;
  imageUrl?: string;
  imageSrc?: string;
  preview?: string;
  previewUrl?: string;
  metadata?: Record<string, any>;
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  foundersPass?: boolean;
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

export function getRarityColor(rarity: CosmeticRarity): string;
export function getRarityBgColor(rarity: CosmeticRarity): string;
export function getRarityBorderColor(rarity: CosmeticRarity): string;
export function getCosmeticPreviewStyle(rarity: CosmeticRarity): string;
export function formatCategoryName(category: CosmeticCategory): string;
