
import { UserProfile } from './user';

export type CosmeticCategory = 
  | 'border'
  | 'background'  
  | 'profile'
  | 'badge'
  | 'title'
  | 'effect'
  | 'emoji'
  | 'font'
  | 'theme'
  | 'color'
  | 'appearance'
  | 'interaction';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal';

export type CosmeticPlacement = 
  | 'profile'
  | 'leaderboard'
  | 'messages'
  | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type: CosmeticCategory;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  placement?: CosmeticPlacement;
  price: number;
  cost: number;
  previewImage?: string;
  cssClass?: string;
  imageSrc?: string;
  imageUrl?: string;
  requiredTier?: string;
  animationClass?: string;
  isLimited?: boolean;
  isOwned?: boolean;
}

export type UserCosmeticItem = CosmeticItem & {
  isEquipped: boolean;
  acquiredAt: string;
  source: string;
};

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
  activeTitle?: string;
  activeBackground?: string;
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
      return 'text-yellow-400';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'bg-gray-700/30';
    case 'uncommon':
      return 'bg-green-900/30';
    case 'rare':
      return 'bg-blue-900/30';
    case 'epic':
      return 'bg-purple-900/30';
    case 'legendary':
      return 'bg-yellow-900/30';
    case 'royal':
      return 'bg-royal-gold/20';
    default:
      return 'bg-gray-800/30';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common':
      return 'border-gray-500/30';
    case 'uncommon':
      return 'border-green-500/30';
    case 'rare':
      return 'border-blue-500/30';
    case 'epic':
      return 'border-purple-500/30';
    case 'legendary':
      return 'border-yellow-500/30';
    case 'royal':
      return 'border-royal-gold/30';
    default:
      return 'border-white/10';
  }
};
