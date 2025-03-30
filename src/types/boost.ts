
export type BoostEffectType = 'visibility' | 'rank' | 'mockery' | 'appearance' | 'crown' | 'sparkle' | 'glow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  tier: string;
  duration: number;
  icon: string;
  cost?: number;
  allowStacking?: boolean;
  cssClass?: string;
  durationDays?: number;
  price?: number;
  previewImage?: string;
}
