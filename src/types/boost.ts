
/**
 * Boost related type definitions
 */

import { UserTier } from './mockery-types';

export type BoostEffectType = 
  | 'rank'
  | 'visibility'
  | 'protection'
  | 'spotlight'
  | 'discount'
  | 'multiplier'
  | 'feature'
  | 'cosmetic'
  | 'effect'
  | 'animation'
  | 'appearance'
  | 'badge'
  | 'aura'
  | 'enhancement'
  | 'general';  // Added for compatibility with authUtils.ts

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  icon: string;
  duration: number; // Duration in hours
  price: number;
  discount?: number;
  tier?: UserTier;
  color?: string;
  effectValue?: number | string;
  requiredTier?: UserTier;
  stackable?: boolean;
  effectId?: string; // Added for compatibility with ProfileBoostDisplay
  cssClass?: string; // Added for styling support
  // Additional fields for compatibility
  durationDays?: number;
  previewImage?: string;
  strength?: number;
  allowStacking?: boolean;
  minTier?: string;
  iconName?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string; // Used by ProfileBoostDisplay
  type: BoostEffectType | string; // Allow string for backward compatibility
  startTime: string;
  endTime: string;
  active: boolean;
  value?: number | string;
  metadata?: Record<string, any>;
  level?: number;
  // For compatibility with user-consolidated
  startDate?: string;
  endDate?: string; 
  isActive?: boolean;
  strength?: number;
  appliedBy?: string;
  name?: string;
  icon?: string;
  duration?: number;
  price?: number;
}

export interface BoostService {
  getAvailableBoosts: () => Promise<BoostEffect[]>;
  getUserBoosts: (userId: string) => Promise<ProfileBoost[]>;
  purchaseBoost: (userId: string, boostId: string) => Promise<ProfileBoost>;
  activateBoost: (boostId: string) => Promise<boolean>;
  deactivateBoost: (boostId: string) => Promise<boolean>;
  getActiveBoosts: (userId: string) => Promise<ProfileBoost[]>;
}
