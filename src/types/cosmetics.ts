
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  rarity: CosmeticRarity;
  cost: number;
  imageUrl?: string; // Make imageUrl optional
  cssClass?: string;
  imageSrc?: string;
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
}

export interface CosmeticCategory {
  id: string;
  name: string;
  description: string;
  items: CosmeticItem[];
}

// Add the utility functions that are missing
export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'legendary':
      return 'text-royal-gold';
    case 'epic':
      return 'text-purple-400';
    case 'rare':
      return 'text-blue-400';
    case 'uncommon':
      return 'text-green-400';
    case 'common':
    default:
      return 'text-gray-300';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'legendary':
      return 'bg-royal-gold/20';
    case 'epic':
      return 'bg-purple-400/20';
    case 'rare':
      return 'bg-blue-400/20';
    case 'uncommon':
      return 'bg-green-400/20';
    case 'common':
    default:
      return 'bg-gray-500/20';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'legendary':
      return 'border-royal-gold/40';
    case 'epic':
      return 'border-purple-400/40';
    case 'rare':
      return 'border-blue-400/40';
    case 'uncommon':
      return 'border-green-400/40';
    case 'common':
    default:
      return 'border-gray-500/40';
  }
}

export function getCosmeticPreviewStyle(item: CosmeticItem): string {
  if (item.cssClass) {
    return item.cssClass;
  }
  return getRarityBgColor(item.rarity);
}

export function formatCategoryName(category: string): string {
  // Convert camelCase or dash-case to Title Case with spaces
  return category
    .replace(/([A-Z])/g, ' $1') // Insert a space before capital letters
    .replace(/-/g, ' ') // Replace dashes with spaces
    .replace(/^\w/, (c) => c.toUpperCase()) // Uppercase first letter
    .trim(); // Remove any leading/trailing spaces
}
