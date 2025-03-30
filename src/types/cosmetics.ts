
/**
 * Cosmetic item types
 */

export type CosmeticCategory = 
  | 'title' 
  | 'border' 
  | 'background' 
  | 'color' 
  | 'font' 
  | 'emoji' 
  | 'effect'
  | 'badge';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  preview?: string;
  unlockRequirement?: {
    type: 'tier' | 'rank' | 'spend' | 'achievement';
    value: string | number;
  };
  cssClass?: string;
  type?: string;
  cost?: number;
}

export interface UserCosmetics {
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeEffect?: string;
  activeBadge?: string;
  unlockedItems: string[]; // IDs of unlocked cosmetic items
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  tier: 'basic' | 'premium' | 'elite';
  cost: number;
  visualEffect?: string;
  stackable?: boolean;
  allowStacking?: boolean;
  cssClass?: string;
  minTier?: string;
}
