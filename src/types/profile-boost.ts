
export type BoostType = 'visibility' | 'appearance' | 'animation' | 'effect';
export type BoostTier = 'basic' | 'premium' | 'royal';

export interface ProfileBoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: BoostType;
  tier: BoostTier;
  price: number;
  durationDays: number;
  previewImage?: string;
}

export interface UserBoost {
  id: string;
  userId: string;
  boostId: string;
  startDate: string;
  endDate: string;
  active: boolean;
}
