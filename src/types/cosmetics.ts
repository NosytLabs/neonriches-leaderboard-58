
// Types for cosmetic items and related functionality

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
  | 'unique';

export type CosmeticType = 
  | 'standard' 
  | 'premium' 
  | 'exclusive' 
  | 'limited' 
  | 'event' 
  | 'achievement';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  cssClass: string;
  rarity: string;
  type: string;
  imageSrc?: string;
  unlockRequirement?: string;
  duration?: string | number;
  effectStrength?: number;
  isAnimated?: boolean;
}

export type BoostEffectType = 
  | 'aura' 
  | 'particles' 
  | 'border' 
  | 'background' 
  | 'nameplate' 
  | 'crown' 
  | 'sparkle' 
  | 'glow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  duration: number;
  type: BoostEffectType;
  tier: string;
  price: number;
  icon: string;
  durationDays?: number;
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
  status?: string;
}

export interface ProfileBoostData extends ProfileBoost {
  name?: string;
  description?: string;
  cssClass: string;
  tier: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  isPublic?: boolean;
}

export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}
