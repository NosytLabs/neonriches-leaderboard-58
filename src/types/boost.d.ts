
import { CosmeticRarity } from './cosmetics';
import { UserTier } from './user';

export type BoostEffectType = 
  | 'gold-aura'
  | 'rainbow-name'
  | 'royal-glow'
  | 'sparkling-border'
  | 'floating-crown'
  | 'visibility-boost'
  | 'attention-pulse'
  | 'royal-banner'
  | 'golden-frame';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number; // in hours
  durationDays?: number; // for UI display
  cost: number;
  price?: number; // alias for cost
  type: 'visibility' | 'effect' | 'appearance' | 'animation';
  rarity: CosmeticRarity;
  allowStacking: boolean;
  minTier: UserTier;
  cssClass?: string;
  tier?: SubscriptionTier;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId: BoostEffectType | string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}
