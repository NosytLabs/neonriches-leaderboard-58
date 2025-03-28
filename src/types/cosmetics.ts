
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

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type CosmeticType = 
  | 'profile'
  | 'feed'
  | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type: CosmeticType;
  rarity: CosmeticRarity;
  cost: number;
  imageUrl?: string;
  imageSrc?: string;
  cssClass?: string;
}

// Helper functions
export const getCosmeticPreviewStyle = (item: CosmeticItem): string => {
  switch (item.rarity) {
    case 'legendary':
      return 'bg-gradient-to-r from-royal-gold/20 to-amber-500/20 border border-royal-gold/30';
    case 'epic':
      return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30';
    case 'rare':
      return 'bg-gradient-to-r from-royal-navy/20 to-blue-500/20 border border-royal-navy/30';
    case 'uncommon':
      return 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30';
    case 'common':
    default:
      return 'bg-white/10 border border-white/20';
  }
};

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'text-royal-gold';
    case 'epic':
      return 'text-purple-400';
    case 'rare':
      return 'text-royal-navy';
    case 'uncommon':
      return 'text-emerald-400';
    case 'common':
    default:
      return 'text-white/70';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'bg-royal-gold/20';
    case 'epic':
      return 'bg-purple-400/20';
    case 'rare':
      return 'bg-royal-navy/20';
    case 'uncommon':
      return 'bg-emerald-400/20';
    case 'common':
    default:
      return 'bg-white/10';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary':
      return 'border-royal-gold/30';
    case 'epic':
      return 'border-purple-400/30';
    case 'rare':
      return 'border-royal-navy/30';
    case 'uncommon':
      return 'border-emerald-400/30';
    case 'common':
    default:
      return 'border-white/20';
  }
};
