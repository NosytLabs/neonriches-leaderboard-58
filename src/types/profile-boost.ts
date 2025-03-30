
// Profile boost types
export type BoostEffectType = 
  | 'glow' 
  | 'sparkle' 
  | 'shine' 
  | 'pulse' 
  | 'royal' 
  | 'diamond' 
  | 'gold' 
  | 'aura' 
  | 'highlight' 
  | 'shadow'
  | 'crown'
  | 'sparkle'
  | 'glow';

export type BoostStrength = 'low' | 'medium' | 'high' | 'extreme';

export type BoostTier = 'basic' | 'premium' | 'royal' | 'elite';

export interface BoostEffect {
  type: BoostEffectType;
  strength: BoostStrength;
  color?: string;
  duration: number;
  icon: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  type: BoostEffectType;
  tier: BoostTier;
  startDate: string;
  endDate: string;
  active: boolean;
  strength: BoostStrength;
  level?: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  tier: BoostTier;
  strength: BoostStrength;
  duration: number;
  price: number;
  icon: string;
  startDate?: string;
}

export type { ProfileBoost, BoostEffect, BoostEffectType, BoostStrength, BoostTier, ProfileBoostData };
