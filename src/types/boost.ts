
// Define BoostEffect type for profile boosts
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: BoostEffectType;
  tier: string;
  price: number;
  duration: number;
  icon: string;
  strength: number;
  allowStacking?: boolean;
  minTier?: string;
  iconName?: string;
  previewImage?: string;
  durationDays?: number;
}

// Export ProfileBoost interface
export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  appliedBy: string;
  strength: number;
  isActive: boolean;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  effectId?: string;
}

// Effect types for profile boosts
export type BoostEffectType =
  | 'visibility'
  | 'highlight'
  | 'animation'
  | 'badge'
  | 'particle'
  | 'background'
  | 'border'
  | 'crown'
  | 'sparkle'
  | 'glow'
  | 'aura'
  | 'effect'
  | 'appearance';
