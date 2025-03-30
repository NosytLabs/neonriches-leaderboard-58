
export type BoostEffectType = 'glow' | 'sparkle' | 'pulse' | 'shimmer' | 'highlight';
export type BoostStrength = 'low' | 'medium' | 'high';
export type BoostTier = 'basic' | 'pro' | 'royal';

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: number;
  endDate: number;
  isActive: boolean;
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
}
