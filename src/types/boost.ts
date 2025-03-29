
export type BoostEffectType = 'glow' | 'sparkle' | 'crown' | 'shine' | 'aura' | 'highlight';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  minTier: string;
  duration: number; // in hours
  strength: number;
  cssClass: string;
  allowStacking: boolean;
  iconName?: string;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startDate: string;
  endDate: string;
  level: number;
}
