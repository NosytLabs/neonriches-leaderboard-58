
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
  | 'chime'; // Added 'chime' to match the imported type

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  onComplete?: () => void;
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
