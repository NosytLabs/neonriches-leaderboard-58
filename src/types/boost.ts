
export interface ProfileBoost {
  id: string;
  type: string;
  level?: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
  effectId?: string;
}

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
  previewImage: string;
  strength?: number;
  cost?: number; // For backward compatibility
}

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
  | 'aura';

export interface ProfileBoostData extends ProfileBoost {
  cssClass: string;
  tier: string;
}
