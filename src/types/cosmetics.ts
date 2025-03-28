
export type CosmeticCategory = 
  'borders' | 
  'colors' | 
  'fonts' | 
  'emojis' | 
  'titles' | 
  'backgrounds' | 
  'effects' | 
  'badges' | 
  'themes';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  price?: number;
  cost?: number;  // For backward compatibility
  type?: 'profile' | 'feed' | 'global';
  rarity: CosmeticRarity;
  imageSrc?: string;
  cssClasses?: string;
  cssClass?: string; // For backward compatibility
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  activeEmoji?: string;
  foundersPass?: boolean;
}

// Utility functions for cosmetics styling
export const getCosmeticPreviewStyle = (item: CosmeticItem): string => {
  switch (item.rarity) {
    case 'legendary':
      return 'bg-gradient-to-br from-yellow-600/20 to-amber-800/30 border border-yellow-500/50';
    case 'epic':
      return 'bg-gradient-to-br from-purple-600/20 to-indigo-800/30 border border-purple-500/50';
    case 'rare':
      return 'bg-gradient-to-br from-blue-600/20 to-indigo-800/30 border border-blue-500/50';
    case 'uncommon':
      return 'bg-gradient-to-br from-green-600/20 to-emerald-800/30 border border-green-500/50';
    case 'common':
      return 'bg-gradient-to-br from-gray-600/20 to-gray-800/30 border border-gray-500/50';
    case 'royal':
      return 'bg-gradient-to-br from-purple-600/20 to-indigo-900/30 border border-purple-400/50';
    default:
      return 'bg-gradient-to-br from-gray-600/20 to-gray-800/30 border border-gray-500/50';
  }
};

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'text-yellow-500';
    case 'epic': return 'text-purple-500';
    case 'rare': return 'text-blue-500';
    case 'uncommon': return 'text-green-500';
    case 'common': return 'text-gray-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'bg-yellow-500/20';
    case 'epic': return 'bg-purple-500/20';
    case 'rare': return 'bg-blue-500/20';
    case 'uncommon': return 'bg-green-500/20';
    case 'common': return 'bg-gray-500/20';
    case 'royal': return 'bg-royal-gold/20';
    default: return 'bg-gray-500/20';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'border-yellow-500/30';
    case 'epic': return 'border-purple-500/30';
    case 'rare': return 'border-blue-500/30';
    case 'uncommon': return 'border-green-500/30';
    case 'common': return 'border-gray-500/30';
    case 'royal': return 'border-royal-gold/30';
    default: return 'border-gray-500/30';
  }
};
