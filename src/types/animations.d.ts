
export interface AnimationConfig {
  type: 'particles' | 'overlay' | 'container' | 'accessory';
  particleImage?: string;
  particleCount?: number;
  overlayImage?: string;
  containerImage?: string;
  accessoryImage?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  duration: number;
}

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  offset?: number;
  anchorPlacement?: string;
}
