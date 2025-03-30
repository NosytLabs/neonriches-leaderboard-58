
export type CosmeticCategory = 
  | 'appearance' 
  | 'profile' 
  | 'interaction'
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description?: string;
  category?: CosmeticCategory;
  type?: string;
  rarity?: CosmeticRarity | string;
  cost?: number;
  price: number;
  cssClass?: string;
  imageSrc?: string;
  allowStacking?: boolean;
}

export interface UserCosmeticItem extends CosmeticItem {
  purchasedOn?: string;
  expiresOn?: string | null;
  isActive?: boolean;
}

// Helper functions to get colors based on rarity
export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'text-orange-400';
    case 'epic': return 'text-purple-400';
    case 'rare': return 'text-blue-400';
    case 'uncommon': return 'text-green-400';
    case 'common':
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'bg-orange-400/20';
    case 'epic': return 'bg-purple-400/20';
    case 'rare': return 'bg-blue-400/20';
    case 'uncommon': return 'bg-green-400/20';
    case 'common':
    default: return 'bg-gray-400/20';
  }
};

export const getRarityBorderColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'border-orange-400/30';
    case 'epic': return 'border-purple-400/30';
    case 'rare': return 'border-blue-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'common':
    default: return 'border-gray-400/30';
  }
};
