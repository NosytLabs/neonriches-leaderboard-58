
// Define boost types
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  icon: string;
  type: BoostEffectType;
  tier: string;
  strength?: number;
  cost?: number;
  cssClass?: string;
  durationDays?: number;
  previewImage?: string;
  rarity?: string;
}

export type BoostEffectType = 'profile' | 'marketing' | 'visibility' | 'engagement' | 'conversion' | 'reach';

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  duration: number;
  level: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  type?: string;
  strength?: number;
  appliedBy?: string;
  startTime?: string;
  endTime?: string;
}
