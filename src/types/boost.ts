
export type BoostEffectType = 
  | 'rank' 
  | 'profile' 
  | 'visibility'
  | 'badge'
  | 'appearance'
  | 'animation'
  | 'effect';

export interface BoostEffect {
  type: BoostEffectType;
  description: string;
  multiplier: number;
  duration: number;
  id?: string;
  name?: string;
  tier?: string;
  price?: number;
  durationDays?: number;
  effectId?: string;
}

export interface ProfileBoost {
  id: string;
  type: BoostEffectType;
  startDate: string;
  endDate: string;
  level: number;
  active: boolean;
  effectId?: string;
}

export interface BoostService {
  applyBoost(userId: string, boostType: BoostEffectType, days: number, level?: number): Promise<boolean>;
  getActiveBoosts(userId: string): Promise<ProfileBoost[]>;
  cancelBoost(userId: string, boostId: string): Promise<boolean>;
}
