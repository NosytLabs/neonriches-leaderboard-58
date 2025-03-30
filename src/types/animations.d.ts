
export interface AnimationConfig {
  type: 'particles' | 'overlay' | 'container' | 'accessory';
  particleImage?: string;
  particleCount?: number;
  overlayImage?: string;
  containerImage?: string;
  accessoryImage?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration: number;
}
