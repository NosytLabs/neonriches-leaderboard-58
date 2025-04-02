
/**
 * Types for the sound system
 */

export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'purchase'
  | 'levelUp'
  | 'transaction'
  | 'warning'
  | 'message'
  | 'ui'
  | 'transition'
  | 'hover';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  playbackRate?: number;
}

export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
  toggleMute: () => void;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
  
  // Additional properties for compatibility
  toggleMuted?: () => void;
  soundConfig?: any;
  mute?: () => void;
  unmute?: () => void;
  currentVolume?: number;
}

export type UseSoundHook = SoundHook;
