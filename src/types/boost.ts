
export type BoostEffectType = 
  | 'visibility'
  | 'rank'
  | 'profile'
  | 'cosmetic'
  | 'special'
  | 'monetary';

export interface BoostEffect {
  type: BoostEffectType;
  strength: number;
  description: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
}

export interface BoostService {
  applyBoost: (userId: string, boostType: string, level: number, days: number) => Promise<boolean>;
  getActiveBoosts: (userId: string) => Promise<ProfileBoost[]>;
  calculateBoostEffect: (boost: ProfileBoost) => BoostEffect;
}
