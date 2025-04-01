
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
  minTier?: string; // Add minTier property
  iconName?: string;
  previewImage?: string;
  durationDays?: number;
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
