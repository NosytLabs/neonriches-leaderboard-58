
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'title' | 'badge' | 'theme';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type?: string;
  category?: CosmeticCategory; 
  rarity: CosmeticRarity;
  cost: number;
  price?: number; // For backward compatibility
  imageUrl?: string;
  imageSrc?: string;
  preview?: string;
  previewUrl?: string;
  cssClass?: string;
  metadata?: Record<string, any>;
}

export interface CosmeticCollection {
  borders: CosmeticItem[];
  colors: CosmeticItem[];
  fonts: CosmeticItem[];
  emojis: CosmeticItem[];
  backgrounds: CosmeticItem[];
  effects: CosmeticItem[];
  titles: CosmeticItem[];
}

export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'bg-gray-800/50';
    case 'uncommon':
      return 'bg-green-900/50';
    case 'rare':
      return 'bg-blue-900/50';
    case 'epic':
      return 'bg-purple-900/50';
    case 'legendary':
      return 'bg-amber-900/50';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'border-gray-500/50';
    case 'uncommon':
      return 'border-green-500/50';
    case 'rare':
      return 'border-blue-500/50';
    case 'epic':
      return 'border-purple-500/50';
    case 'legendary':
      return 'border-royal-gold/50';
  }
}

export function getCosmeticPreviewStyle(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'bg-gray-700/50 border border-gray-500/50';
    case 'uncommon':
      return 'bg-green-900/30 border border-green-500/50';
    case 'rare':
      return 'bg-blue-900/30 border border-blue-500/50';
    case 'epic':
      return 'bg-purple-900/30 border border-purple-500/50';
    case 'legendary':
      return 'bg-amber-900/30 border border-royal-gold/50';
  }
}

export function formatCategoryName(category: CosmeticCategory): string {
  const categoryMap: Record<CosmeticCategory, string> = {
    border: 'Borders',
    color: 'Colors',
    font: 'Fonts',
    emoji: 'Emojis',
    background: 'Backgrounds',
    effect: 'Effects',
    title: 'Titles',
    badge: 'Badges',
    theme: 'Themes'
  };
  
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}
