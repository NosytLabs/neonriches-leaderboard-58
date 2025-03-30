
// Types for animations

export type AnimationType = 
  | 'particles'
  | 'overlay'
  | 'container'
  | 'accessory'
  | 'confetti'
  | 'fireworks'
  | 'rain'
  | 'snow'
  | 'hearts'
  | 'coins'
  | 'spotlight';

export interface AnimationConfig {
  type: AnimationType;
  particleImage?: string;
  particleCount?: number;
  overlayImage?: string;
  containerImage?: string;
  accessoryImage?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration: number;
  colors?: string[];
  intensity?: 'low' | 'medium' | 'high';
}

export interface AnimationState {
  isActive: boolean;
  config: AnimationConfig | null;
  onComplete?: () => void;
}

export interface AnimationContextType {
  animation: AnimationState;
  showAnimation: (config: AnimationConfig, onComplete?: () => void) => void;
  hideAnimation: () => void;
}
