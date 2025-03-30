
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
