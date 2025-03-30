
export type BoostEffectType = 'visibility' | 'priority' | 'highlight' | 'feature' | 'promote' | 'crown' | 'sparkle' | 'glow';

export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
  effectId?: string;
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  cssClass: string;
  type: BoostEffectType;
  tier: string;
  icon: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  cssClass: string;
  tier: string;
  type: BoostEffectType;
  startDate?: string;
}

export type BoostStatus = 'active' | 'expired' | 'pending';
