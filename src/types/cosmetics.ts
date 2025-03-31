// Types related to user cosmetics and profile customization

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

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  cssClass: string;
  rarity: string;
  type?: string;
  imageSrc?: string;
  image?: string;
}

export type BoostEffectType =
  | 'aura'
  | 'particles'
  | 'glimmer'
  | 'ripple'
  | 'border'
  | 'shadow'
  | 'pulse'
  | 'crown'
  | 'sparkle'
  | 'glow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number; // in days
  durationDays?: number; // for compatibility
  icon: string;
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  appliedBy: string;
  startDate?: string;
  endDate?: string;
  level: number;
  strength: number;
  isActive: boolean;
  effectId?: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number; // in days
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

export interface UserCosmeticState {
  title: string[];
  color: string[];
  border: string[];
  background: string[];
  emoji: string[];
  font: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  activeTitle?: string;
  activeColor?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEmoji?: string;
  activeFont?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}

// Type alias for backward compatibility
export type UserCosmetics = UserCosmeticState;

export interface SocialLink {
  type: string;
  url: string;
  title?: string;
  icon?: string;
  clicks?: number;
}

export interface ProfileTheme {
  id: string;
  name: string;
  description: string;
  price: number;
  preview: string;
  rarity: CosmeticRarity;
  cssClasses: {
    background: string;
    text: string;
    accent: string;
    border: string;
  };
}
