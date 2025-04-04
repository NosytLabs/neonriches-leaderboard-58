
export type SoundType =
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'coin'
  | 'purchase'
  | 'deposit'
  | 'withdrawal'
  | 'levelUp'
  | 'level_up'
  | 'boost'
  | 'message'
  | 'mockery'
  | 'coinDrop'
  | 'shame'
  | 'fanfare'
  | 'royal'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'transfer'
  | 'unlock'
  | 'team'
  | 'rank_up'
  | 'reward'
  | 'swordClash'
  | 'noblesLaugh'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'advertisement';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
}

export interface SoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isMuted?: boolean;
  toggleMute?: () => boolean;
  toggleMuted: () => boolean;
  setVolume: (volume: number) => void;
  soundConfig?: SoundConfig;
  mute?: () => void;
  unmute?: () => void;
  toggleEnabled?: () => boolean;
  isEnabled?: boolean;
  isSoundEnabled: boolean;
  isPlaying: (type: SoundType) => boolean;
  currentVolume: number;
  getVolume?: () => number;
}

// Legacy interface for backwards compatibility
export interface UseSoundHook extends SoundHook {}

