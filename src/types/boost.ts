
export type BoostEffectType = 
  | 'rank' 
  | 'profile' 
  | 'visibility'
  | 'badge'
  | 'appearance'
  | 'animation'
  | 'effect'
  | 'aura'
  | 'general'; // Added for addProfileBoostWithDays compatibility

export interface BoostEffect {
  type: BoostEffectType;
  description: string;
  multiplier?: number; // Make multiplier optional
  duration: number;
  id?: string;
  name?: string;
  tier?: string;
  price?: number;
  durationDays?: number;
  effectId?: string;
  cssClass?: string;
  // Add properties that were causing errors
  icon?: string;
  previewImage?: string;
  strength?: number;
  allowStacking?: boolean;
  minTier?: string;
  iconName?: string;
}

export interface ProfileBoost {
  id: string;
  type: BoostEffectType | string; // Allow string for compatibility
  startDate: string;
  endDate: string;
  level: number;
  active?: boolean; // Make active optional
  effectId?: string;
  // Add properties needed for user.ts ProfileBoost
  isActive?: boolean; // Optional for backward compatibility
  strength?: number;
  appliedBy?: string;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
}

export interface BoostService {
  applyBoost(userId: string, boostType: BoostEffectType, days: number, level?: number): Promise<boolean>;
  getActiveBoosts(userId: string): Promise<ProfileBoost[]>;
  cancelBoost(userId: string, boostId: string): Promise<boolean>;
}
