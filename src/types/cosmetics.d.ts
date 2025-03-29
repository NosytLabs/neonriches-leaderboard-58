
export type CosmeticCategory = 
  | 'border' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'title' 
  | 'background' 
  | 'effect' 
  | 'badge' 
  | 'theme'
  | 'appearance'
  | 'profile'
  | 'interaction';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'; // Added 'royal'

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  price: number;
  cost?: number;
  type?: string;
  previewImage?: string;
  cssClass?: string;
  unlockRequirement?: string;
  imageSrc?: string; // Added imageSrc property
  image?: string; // Added image property
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
  banners?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  activeEmoji?: string;
  socialLinks?: any;
}

export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-amber-400';
    case 'royal': return 'text-rose-400';
    default: return 'text-gray-400';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'bg-gray-500/10';
    case 'uncommon': return 'bg-green-500/10';
    case 'rare': return 'bg-blue-500/10';
    case 'epic': return 'bg-purple-500/10';
    case 'legendary': return 'bg-amber-500/10';
    case 'royal': return 'bg-rose-500/10';
    default: return 'bg-gray-500/10';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common': return 'border-gray-500/20';
    case 'uncommon': return 'border-green-500/20';
    case 'rare': return 'border-blue-500/20';
    case 'epic': return 'border-purple-500/20';
    case 'legendary': return 'border-amber-500/20';
    case 'royal': return 'border-rose-500/20';
    default: return 'border-gray-500/20';
  }
}

export type CosmeticType = 'permanent' | 'consumable' | 'limited';
export type CosmeticPlacement = 'profile' | 'leaderboard' | 'chat' | 'global';

export interface UserCosmeticItem extends CosmeticItem {
  equippedAt?: string;
  acquiredAt: string;
  active: boolean;
}
