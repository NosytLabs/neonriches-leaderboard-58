
export type SoundType = 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'coin' 
  | 'level_up' 
  | 'boost' 
  | 'royal' 
  | string;  // Allow string to be extensible

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
}

export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (sound?: SoundType) => void;
  pauseSound: (sound: SoundType) => void;
  resumeSound: (sound: SoundType) => void;
  toggleMute: () => void;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
}

// Legacy compatibility for older code
export interface UseSoundHook extends SoundHook {}
