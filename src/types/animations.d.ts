
export type AnimationType = 'particles' | 'overlay' | 'container' | 'accessory';

export interface ParticleConfig {
  particleImage: string;
  particleCount: number;
  duration: number;
}

export interface OverlayConfig {
  overlayImage: string;
  duration: number;
}

export interface ContainerConfig {
  containerImage: string;
  duration: number;
}

export interface AccessoryConfig {
  accessoryImage: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration: number;
}

export interface AnimationConfig {
  type: AnimationType;
  particleImage?: string;
  particleCount?: number;
  overlayImage?: string;
  containerImage?: string;
  accessoryImage?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration: number;
}
