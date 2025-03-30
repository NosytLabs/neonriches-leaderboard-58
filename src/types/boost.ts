
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
  type: string;
  tier: string;
  price: number;
  duration: number;
  icon: ReactNode;
  cssClass?: string;
  minTier?: string;
  strength?: number;
  allowStacking?: boolean;
  iconName?: string;
  durationDays?: number;
  previewImage?: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  duration: number; // in days
  price: number;
  cssClass: string;
  type: BoostEffectType;
  strength: number;
  tier: string;
}
