
export type BoostEffectType = 
  | 'spotlight'
  | 'glow'
  | 'shimmer'
  | 'particles'
  | 'pulse'
  | 'shadow'
  | 'aura'
  | 'sparkle'
  | 'flame'
  | 'rainbow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  effectType: BoostEffectType;
  duration: number;
  strength: number;
  price?: number;
  tier?: string;
  durationDays?: number;
  cssClass?: string;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string | BoostEffectType;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
  boostId?: string;
}
