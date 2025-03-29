
export type BoostTier = 'basic' | 'premium' | 'royal';
export type BoostType = 'appearance' | 'visibility' | 'effect' | 'animation';

export interface BoostEffect {
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
