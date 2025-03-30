
export type BoostEffectType = 'visibility' | 'ranking' | 'cosmetic' | 'profile' | 'premium';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  type: string;
  icon: string;
  tier: string;
  strength?: number;
  cost?: number;
  rarity?: string;
  cssClass?: string;
  durationDays?: number;
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
  strength?: number;
  appliedBy: string;
  startTime?: string | Date;
  endTime?: string | Date;
  startDate?: string;
  endDate?: string;
}
