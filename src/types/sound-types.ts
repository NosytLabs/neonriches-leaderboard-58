
// Define sound types
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
  | 'hover'
  | 'shame'
  | 'royal'
  | 'coin'
  | 'coinDrop'
  | 'team'
  | 'badge'
  | 'alert'
  | 'chime'
  | 'reward'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'withdraw'
  | 'royalAnnouncement'
  | 'fanfare'
  | 'trumpet'
  | 'medallion'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'crown'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'putridEgg'
  | 'fish'
  | 'deposit'
  | 'rank_up'
  | 'mockery'
  | 'level_up'
  | 'throne'
  | 'boost'
  | 'unlock';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
}

// Sound hook interface
export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: () => void;
  pauseSound: () => void;
  resumeSound: () => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
  soundConfig: SoundConfig;
  mute: () => void;
  unmute: () => void;
  toggleMuted: () => boolean;
  currentVolume: number;
  play: (sound: SoundType, options?: SoundOptions) => void;
  isPlaying: boolean;
  isSoundEnabled: boolean;
}
