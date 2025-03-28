
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'theme' | 'badge' | 'background' | 'effect';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  rarity: CosmeticRarity;
  cost: number;
  cssClass?: string;
  imageSrc?: string;
}

export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'text-royal-gold';
    case 'epic': return 'text-purple-400';
    case 'rare': return 'text-blue-400';
    case 'uncommon': return 'text-green-400';
    case 'common': return 'text-gray-300';
    default: return 'text-white';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'bg-royal-gold/20';
    case 'epic': return 'bg-purple-500/20';
    case 'rare': return 'bg-blue-500/20';
    case 'uncommon': return 'bg-green-500/20';
    case 'common': return 'bg-gray-500/20';
    default: return 'bg-white/10';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'legendary': return 'border-royal-gold/50';
    case 'epic': return 'border-purple-500/50';
    case 'rare': return 'border-blue-500/50';
    case 'uncommon': return 'border-green-500/50';
    case 'common': return 'border-gray-500/50';
    default: return 'border-white/10';
  }
};

export const getCosmeticPreviewStyle = (cosmetic: CosmeticItem, size: 'sm' | 'md' | 'lg' = 'md'): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    borderRadius: '0.25rem',
    overflow: 'hidden',
  };

  const sizeMap = {
    sm: { width: '32px', height: '32px' },
    md: { width: '48px', height: '48px' },
    lg: { width: '64px', height: '64px' },
  };

  return {
    ...baseStyle,
    ...sizeMap[size],
  };
};
