
export type BoostEffectType = 'glow' | 'sparkle' | 'pulse' | 'shimmer' | 'highlight' | 'crown' | 'glow' | 'sparkle';
export type BoostStrength = 'low' | 'medium' | 'high';
export type BoostTier = 'basic' | 'pro' | 'royal';

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: number;
  endDate: number;
  isActive: boolean;
  strength?: BoostStrength;
  level?: string;
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  cssClass: string;
  tier: BoostTier;
  price: number;
  duration: number;
  icon: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  cssClass: string;
  tier: BoostTier;
  price: number;
  duration: number;
  strength: BoostStrength;
  icon: string;
  previewImage: string;
  startDate?: number;
}
