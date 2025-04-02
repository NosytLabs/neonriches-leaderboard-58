
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
  | 'putridEgg'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
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
  delay?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  premium?: boolean;
}

export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
  play?: (sound: SoundType, options?: SoundOptions) => void;
  isPlaying: boolean;
  isSoundEnabled: boolean;
  
  // Additional properties for compatibility
  toggleMuted: () => boolean;
  soundConfig: SoundConfig;
  mute: () => void;
  unmute: () => void;
  currentVolume: number;
}

export type { SoundHook as UseSoundHook };

// For compatibility with notification sounds
export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  toggleMuted: () => boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
  playNotificationSound: (type?: string, options?: SoundOptions) => void;
}
