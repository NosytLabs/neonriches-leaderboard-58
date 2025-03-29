
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
  cost: number;
  type: 'visibility' | 'effect' | 'appearance' | 'animation';
  rarity: CosmeticRarity;
  allowStacking: boolean;
  minTier: UserTier;
  cssClass?: string; // Add cssClass property to fix errors
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId: BoostEffectType;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}
