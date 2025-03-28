
export type CosmeticCategory = 
  | 'borders' 
  | 'colors' 
  | 'fonts' 
  | 'emojis' 
  | 'titles' 
  | 'backgrounds' 
  | 'effects' 
  | 'badges' 
  | 'themes';

export type CosmeticType = 'profile' | 'feed' | 'global';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

export type CosmeticPlacement = 'border' | 'background' | 'overlay' | 'badge' | 'text';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type?: CosmeticType;
  rarity: CosmeticRarity;
  price?: number;
  cost?: number; // Legacy property, use price instead
  placement?: CosmeticPlacement;
  cssClass?: string;
  imageSrc?: string;
  imageUrl?: string;
}

// Color helpers for cosmetic display
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-800';
    case 'uncommon': return 'bg-green-900';
    case 'rare': return 'bg-blue-900';
    case 'epic': return 'bg-purple-900';
    case 'legendary': return 'bg-amber-900';
    default: return 'bg-gray-800';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600';
    case 'uncommon': return 'border-green-500';
    case 'rare': return 'border-blue-500';
    case 'epic': return 'border-purple-500';
    case 'legendary': return 'border-royal-gold';
    default: return 'border-gray-600';
  }
};

// Preview style helper
export const getCosmeticPreviewStyle = (item: CosmeticItem): string => {
  switch (item.rarity) {
    case 'common':
      return 'bg-gray-800 border border-gray-600';
    case 'uncommon':
      return 'bg-green-900/30 border border-green-500/50';
    case 'rare':
      return 'bg-blue-900/30 border border-blue-500/50';
    case 'epic':
      return 'bg-purple-900/30 border border-purple-500/50';
    case 'legendary':
      return 'bg-amber-900/30 border border-royal-gold/50';
    default:
      return 'bg-gray-800 border border-gray-600';
  }
};
