
import { UserTier } from './user';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic'
  | 'unique'
  | 'royal';

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

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  cssClass: string;
  rarity: CosmeticRarity;
  type?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  icon: string;
  clicks: number;
}

export type BoostEffectType = 
  | 'visibility' 
  | 'highlight' 
  | 'premium' 
  | 'featured' 
  | 'priority' 
  | 'glow'
  | 'sparkle'
  | 'crown';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: BoostEffectType;
  tier: string;
  price: number;
  duration: number;
  icon: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  type: BoostEffectType;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  duration: number;
  price: number;
  cssClass: string;
  tier: string;
}

export interface ProfileBoostData extends ProfileBoost {
  strength?: number;
  level?: number;
}

export type BoostDuration = 'day' | 'week' | 'month';
