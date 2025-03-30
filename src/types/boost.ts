
import { ReactNode } from 'react';

export type BoostEffectType = 
  'glow' | 
  'sparkle' | 
  'shine' | 
  'pulse' | 
  'crown' | 
  'flash' | 
  'shadow' | 
  'spotlight' | 
  'aura';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType | string;
  tier: string;
  price: number;
  cost?: number; // For backward compatibility
  duration: number;
  icon: ReactNode;
  cssClass?: string;
  minTier?: string;
  strength?: number;
  allowStacking?: boolean;
  iconName?: string;
  durationDays?: number;
  previewImage?: string;
  rarity?: string; // For backward compatibility
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  duration: number; // in days
  price: number;
  cssClass: string;
  type: BoostEffectType | string;
  strength: number;
  tier: string;
}

// Alias for backward compatibility
export type ProfileBoost = ProfileBoostData;
