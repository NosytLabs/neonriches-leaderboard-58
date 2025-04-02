
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'purchase'
  | 'rank-up'
  | 'level-up'
  | 'unlock'
  | 'loading'
  | 'complete'
  | 'alert'
  | 'message'
  | 'join'
  | 'leave'
  | 'badge'
  | 'boost'
  | 'chime'
  | 'coin'
  | 'deposit'
  | 'withdrawal'
  | 'fanfare'
  | 'royal'
  | 'protection'
  | 'sparkle'
  | 'reward'
  | 'rank_up'  // Alias for rank-up
  | 'level_up'; // Alias for level-up

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  onComplete?: () => void;
  onEnd?: () => void;  // Alias for onComplete
  playbackRate?: number;
}

export interface SoundState {
  enabled: boolean;
  muted: boolean;
  volume: number;
  currentSound?: string;
  playing: boolean;
}

export interface Sound {
  id: string;
  type: SoundType;
  src: string;
  volume?: number;
  loop?: boolean;
}

export interface SoundContextType {
  sounds: Sound[];
  state: SoundState;
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleMute: () => void;
  toggleSounds: () => void;
  setVolume: (volume: number) => void;
  isPlaying: (type?: SoundType) => boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type?: SoundType) => boolean;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleMuted: () => boolean;
  toggleSounds: () => boolean;
  setVolume: (volume: number) => void;
}
