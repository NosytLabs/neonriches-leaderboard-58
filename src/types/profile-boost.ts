
// Define types for profile boosts
export type BoostStrength = 'low' | 'medium' | 'high' | 'extreme';
export type BoostTier = 'basic' | 'premium' | 'royal' | 'legendary';
export type BoostEffectType = 
  'spotlight' | 
  'highlight' | 
  'featured' | 
  'promoted' | 
  'enhanced' |
  'crown' |
  'sparkle' |
  'glow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  tier: string;
  price: number;
  duration: number;
  durationDays?: number;
  cssClass: string;
  icon: string;
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  tier?: BoostTier;
  strength?: BoostStrength;
  level?: string; // Added for compatibility
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  tier: string;
  price: number;
  duration: number;
  startDate?: string;
  cssClass: string;
  icon: string;
  previewImage?: string;
}

export type { ProfileBoost, BoostEffect, BoostEffectType, BoostStrength, BoostTier, ProfileBoostData };
