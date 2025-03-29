
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number; // in milliseconds
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  tier?: 'free' | 'premium' | 'royal';
  cost?: number;
  type?: string;
  cssClass?: string;
}

export interface ProfileBoost {
  id: string;
  name: string;
  description: string;
  duration: number;
  startTime: number;
  endTime: number;
  effectId?: string;
  strength?: number;
  type?: string;
}

export type BoostEffectType = 'border' | 'glow' | 'background' | 'particles' | 'animation';
