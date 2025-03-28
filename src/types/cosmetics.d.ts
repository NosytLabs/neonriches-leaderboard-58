
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: 'borders' | 'colors' | 'fonts' | 'emojis' | 'titles' | 'backgrounds' | 'effects' | 'badges' | 'themes';
  rarity: CosmeticRarity;
  price: number;
  image?: string;
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
