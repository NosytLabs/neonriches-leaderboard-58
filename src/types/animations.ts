
export type AnimationType = 'particles' | 'overlay' | 'container' | 'accessory';

export interface ParticleAnimationConfig {
  type: 'particles';
  particleImage: string;
  particleCount: number;
  duration: number;
}

export interface OverlayAnimationConfig {
  type: 'overlay';
  overlayImage: string;
  duration: number;
}

export interface ContainerAnimationConfig {
  type: 'container';
  containerImage: string;
  duration: number;
}

export interface AccessoryAnimationConfig {
  type: 'accessory';
  accessoryImage: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  duration: number;
}

export type AnimationConfig = 
  | ParticleAnimationConfig
  | OverlayAnimationConfig
  | ContainerAnimationConfig
  | AccessoryAnimationConfig;

export interface WishResult {
  status: 'pending' | 'win' | 'lose';
  message?: string;
  title?: string;
  rarity?: string;
  reward?: any;
}
