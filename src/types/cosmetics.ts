
export type CosmeticCategory = 
  | 'borders'
  | 'colors'
  | 'fonts'
  | 'emojis'
  | 'titles'
  | 'badges'
  | 'backgrounds'
  | 'effects'
  | 'themes';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type CosmeticScope = 
  | 'profile'
  | 'feed'
  | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  scope: CosmeticScope;
  rarity: CosmeticRarity;
  price: number;
  cssClass?: string;
  imageSrc?: string;
  isAnimated?: boolean;
}

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
      return 'text-gray-300';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-500/40';
    case 'uncommon':
      return 'border-green-500/40';
    case 'rare':
      return 'border-blue-500/40';
    case 'epic':
      return 'border-purple-500/40';
    case 'legendary':
      return 'border-royal-gold/40';
    default:
      return 'border-gray-500/40';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-500/20';
    case 'uncommon':
      return 'bg-green-500/20';
    case 'rare':
      return 'bg-blue-500/20';
    case 'epic':
      return 'bg-purple-500/20';
    case 'legendary':
      return 'bg-royal-gold/20';
    default:
      return 'bg-gray-500/20';
  }
};

// Re-export UserCosmetics for compatibility
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
