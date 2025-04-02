
export type BoostEffectType = 
  | 'rank' 
  | 'profile' 
  | 'visibility'
  | 'badge'
  | 'appearance'
  | 'animation'
  | 'effect'
  | 'general'; // Added for addProfileBoostWithDays compatibility

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
  cssClass?: string;
  // Add missing properties
  icon?: string;
  previewImage?: string;
  strength?: number;
  allowStacking?: boolean;
}

export interface ProfileBoost {
  id: string;
  type: BoostEffectType | string; // Allow string for compatibility
  startDate: string;
  endDate: string;
  level: number;
  active: boolean; // Required by boost.ts
  effectId?: string;
  // Add properties needed for user.ts ProfileBoost
  isActive?: boolean; // Optional in user.ts
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
