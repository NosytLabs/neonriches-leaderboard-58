
export type BoostEffectType = 'visibility' | 'appearance' | 'animation' | 'effect';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: string;
  effectType: BoostEffectType;
  strength: number;
  rarity: string;
  cost: number;
  duration: number;
  durationDays: number;
  allowStacking: boolean;
  minTier: string;
  tier: string;
  cssClass?: string;
}

export interface ProfileBoost {
  id: string;
  type?: string;
  name?: string;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: number;
  level: number;
  effectId?: string;
  strength?: number;
  appliedBy?: string;
  boostId?: string;
  active?: boolean;
}

export interface BoostPurchaseOptions {
  userId: string;
  boostId: string;
  level: number;
  targetUserId?: string;
}

export interface VisibilityBoost extends ProfileBoost {
  type: 'visibility';
  multiplier: number;
}

export interface AppearanceBoost extends ProfileBoost {
  type: 'appearance';
  effect: string;
}

export interface AnimationBoost extends ProfileBoost {
  type: 'animation';
  animation: string;
}
