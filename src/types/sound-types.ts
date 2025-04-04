
export type SoundType = 
  | 'click'
  | 'success' 
  | 'error'
  | 'notification'
  | 'achievement'
  | 'level_up'
  | 'purchase'
  | 'coin'
  | 'button'
  | 'hover'
  | 'open'
  | 'close'
  | 'deposit'
  | 'withdraw'
  | 'unlock'
  | 'toggle'
  | 'alert'
  | 'badge'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'fanfare'
  | 'royal'
  | 'warning'
  | 'levelUp';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (sound?: SoundType) => void;
  pauseSound: (sound?: SoundType) => void;
  resumeSound: (sound?: SoundType) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => boolean;
  soundConfig: {
    enabled: boolean;
    volume: number;
    muted: boolean;
  };
  mute: () => void;
  unmute: () => void;
  toggleMuted: () => boolean;
  currentVolume: number;
  play: (sound: SoundType, options?: SoundOptions) => void;
  isPlaying: boolean;
  isSoundEnabled: boolean;
}

export type SoundAssetMap = Record<SoundType, string>;
