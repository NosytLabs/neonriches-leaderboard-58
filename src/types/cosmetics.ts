
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

export type CosmeticType = 
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
  | 'legendary'
  | 'mythic'
  | 'limited'
  | 'exclusive';

export type CosmeticPlacement = 'profile' | 'feed' | 'global';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  placement: CosmeticPlacement;
  rarity: CosmeticRarity;
  image?: string;
  preview?: string;
  price: number;
  cssClass?: string;
  isLimited?: boolean;
  releaseDate?: string;
  expiryDate?: string;
  type?: CosmeticType;  // For backward compatibility
  cost?: number;        // For backward compatibility
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
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  activeBackground?: string | null;
  activeEffect?: string | null;
  activeBadge?: string | null;
  activeTheme?: string | null;
  foundersPass?: boolean;
}

// Helper function for cosmetic preview styles
export const getCosmeticPreviewStyle = (item: CosmeticItem): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {};
  
  switch (item.category) {
    case 'borders':
      return {
        ...baseStyle,
        borderRadius: '4px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: item.cssClass?.includes('gold') ? '#d4af37' : 
                    item.cssClass?.includes('crimson') ? '#dc143c' : 
                    item.cssClass?.includes('emerald') ? '#50c878' : '#9370db'
      };
    case 'colors':
      return {
        ...baseStyle,
        backgroundColor: item.cssClass?.includes('gold') ? 'rgba(212, 175, 55, 0.2)' :
                        item.cssClass?.includes('crimson') ? 'rgba(220, 20, 60, 0.2)' :
                        item.cssClass?.includes('emerald') ? 'rgba(80, 200, 120, 0.2)' : 'rgba(147, 112, 219, 0.2)',
        borderRadius: '4px'
      };
    case 'fonts':
      return {
        ...baseStyle,
        fontFamily: item.cssClass || 'inherit'
      };
    default:
      return baseStyle;
  }
};

// Helper function to get colors for rarities
export const getRarityColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'mythic': return 'text-rose-400';
    case 'limited': return 'text-amber-400';
    case 'exclusive': return 'text-cyan-400';
    default: return 'text-gray-300';
  }
};

export const getRarityBgColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'bg-gray-800/50';
    case 'uncommon': return 'bg-green-900/30';
    case 'rare': return 'bg-blue-900/30';
    case 'epic': return 'bg-purple-900/30';
    case 'legendary': return 'bg-yellow-900/30';
    case 'mythic': return 'bg-rose-900/30';
    case 'limited': return 'bg-amber-900/30';
    case 'exclusive': return 'bg-cyan-900/30';
    default: return 'bg-gray-800/50';
  }
};

export const getRarityBorderColor = (rarity: CosmeticRarity): string => {
  switch (rarity) {
    case 'common': return 'border-gray-600/50';
    case 'uncommon': return 'border-green-500/30';
    case 'rare': return 'border-blue-500/30';
    case 'epic': return 'border-purple-500/30';
    case 'legendary': return 'border-yellow-500/30';
    case 'mythic': return 'border-rose-500/30';
    case 'limited': return 'border-amber-500/30';
    case 'exclusive': return 'border-cyan-500/30';
    default: return 'border-gray-600/50';
  }
};
