
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
  type?: string;
  cssClass?: string;
  minTier?: string;
  allowStacking?: boolean;
  tier?: string; 
  durationDays?: number;
  previewImage?: string;
}

export type BoostEffectType = 
  | 'appearance'
  | 'animation'
  | 'visibility'
  | 'effect'
  | 'protection'
  | 'enhancement';
