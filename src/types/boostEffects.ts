
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: 'basic' | 'premium' | 'royal';
  type: 'effect' | 'appearance' | 'visibility' | 'animation';
  durationDays: number;
  previewImage: string;
}

export type BoostEffectType = 'glow' | 'sparkle' | 'crown';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  category?: string;
}

export interface FeatureInfo extends Feature {
  category: string;
}
