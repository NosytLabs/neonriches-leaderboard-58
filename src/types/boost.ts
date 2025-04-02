
// Export the ProfileBoost interface
export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean; // Make isActive a required property
  strength: number;
  appliedBy: string;
  // Optional properties
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  effectId?: string; // Add effectId property
  // Legacy/compatibility
  active?: boolean;
}

export type BoostEffectType = 
  | 'glow'
  | 'sparkle'
  | 'border'
  | 'background'
  | 'crown'
  | 'stars'
  | 'badge'
  | 'halo'
  | 'aura'
  | 'premium'
  | 'royal'
  | 'fire'
  | 'ice'
  | 'thunder'
  | 'shadow'
  | 'prestige'
  | 'vip'
  | 'rainbow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number;
  durationDays: number;
  icon: string;
  previewImage?: string;
  strength: number;
  minTier?: string;
  iconName?: string;
  allowStacking?: boolean; // Add allowStacking property to support boostEffects.ts
}

export interface BoostService {
  getAvailableBoosts: () => BoostEffect[];
  getUserBoosts: (userId: string) => Promise<ProfileBoost[]>;
  applyBoost: (userId: string, boostId: string) => Promise<boolean>;
  removeBoost: (userId: string, boostId: string) => Promise<boolean>;
  purchaseBoost: (userId: string, boostId: string) => Promise<boolean>;
}
