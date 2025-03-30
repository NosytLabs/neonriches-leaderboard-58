
export type BoostEffectType = 
  | 'visual'
  | 'ranking'
  | 'marketing'
  | 'economic'
  | 'exclusive';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  price: number;
  duration: number; // in days
  cssClass: string;
  tier: string;
  icon: string;
  previewImage?: string;
  allowStacking?: boolean;
  minTier?: string;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  userId: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  duration: number; // in days
  level?: number;
}
