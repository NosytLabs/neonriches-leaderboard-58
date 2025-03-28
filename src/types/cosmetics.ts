
// Cosmetic Types
export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme';

export type CosmeticType = 
  | 'animation'
  | 'static'
  | 'color'
  | 'text'
  | 'badge'
  | 'emoji'
  | 'profile'
  | 'border'
  | 'background';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type CosmeticPlacement =
  | 'profile'
  | 'post'
  | 'comment'
  | 'avatar'
  | 'background'
  | 'name';

// Cosmetic item structure
export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  cost?: number;
  price?: number;
  placement: CosmeticPlacement;
  cssClass?: string;
  type?: CosmeticType;
  imageUrl?: string;
  imageSrc?: string;
}

// User Cosmetics
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
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  activeBackground?: string | null;
  activeEffect?: string | null;
  activeBadge?: string | null;
  activeTheme?: string | null;
  foundersPass?: boolean;
}

// Color utilities for rarities
export const getRarityColor = (rarity: CosmeticRarity): string => {
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
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
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
    default:
      return 'bg-gray-800/50';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-600';
    case 'uncommon':
      return 'border-green-600';
    case 'rare':
      return 'border-blue-600';
    case 'epic':
      return 'border-purple-600';
    case 'legendary':
      return 'border-royal-gold';
    default:
      return 'border-gray-600';
  }
};

export const getCosmeticPreviewStyle = (item: CosmeticItem): React.CSSProperties => {
  return {};
};

export const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export default CosmeticItem;
