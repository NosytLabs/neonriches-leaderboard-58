
/**
 * Sound system type definitions
 */

export type SoundType = 
  | 'coin' 
  | 'success' 
  | 'error' 
  | 'click' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'deposit'
  | 'mockery'
  | 'fanfare'
  | 'levelUp'
  | 'level_up'
  | 'rank_up'
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'message'
  | 'boost'
  | 'reward'
  | 'royal'
  | 'withdrawal'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'trumpets'
  | 'medallion'
  | 'seal'
  | 'coinDrop';

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
  premium: boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  currentVolume?: number;
  toggleMuted?: () => void; 
  togglePremium?: () => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  play?: (type: SoundType, options?: SoundOptions) => void;  // For backward compatibility
}
