
export type CosmeticCategory = 'borders' | 'titles' | 'effects' | 'backgrounds' | 'emojis' | 'fonts' | 'colors' | 'badges' | 'themes';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: CosmeticRarity;
  category: CosmeticCategory;
  imageSrc?: string;
  image?: string;
  cssClass?: string;
  minTier?: string;
  includedWith?: string;
}

export type CosmeticType = CosmeticItem;

export interface UserCosmeticItem extends CosmeticItem {
  purchasedAt: string;
  isActive: boolean;
}

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

export type CosmeticPlacement = 'profile' | 'avatar' | 'nameplate' | 'background' | 'card' | 'chat';

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'royal': return 'text-royal-purple';
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-400/10';
    case 'uncommon': return 'bg-green-400/10';
    case 'rare': return 'bg-blue-400/10';
    case 'epic': return 'bg-purple-400/10';
    case 'legendary': return 'bg-royal-gold/10';
    case 'royal': return 'bg-royal-purple/10';
    default: return 'bg-gray-400/10';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'rare': return 'border-blue-400/30';
    case 'epic': return 'border-purple-400/30';
    case 'legendary': return 'border-royal-gold/30';
    case 'royal': return 'border-royal-purple/30';
    default: return 'border-gray-400/30';
  }
};
