
export type BoostEffectType = 'visibility' | 'rank' | 'profile' | 'cosmetic' | 'marketing';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: string | BoostEffectType;
  duration: number;
  icon: string;
  price?: number;
  durationDays?: number;
  previewImage?: string;
  cssClass?: string;
  tier?: string;
  strength?: number; // Added for compatibility
  cost?: number; // Added for compatibility
  rarity?: string; // Added for compatibility
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startTime: string; // Use string for compatibility
  endTime: string; // Use string for compatibility
  duration: number;
  level: number;
  isActive: boolean;
  type: string;
  startDate?: string; // Added for compatibility
  endDate?: string; // Added for compatibility
  strength?: number;
  appliedBy: string;
}
