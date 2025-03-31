
/**
 * Core sound types for the application
 */

/**
 * Available sound types in the system
 */
export type SoundType =
  | 'achievement'
  | 'boost'
  | 'click'
  | 'coin'
  | 'coinDrop'
  | 'deposit'
  | 'error'
  | 'level_up'
  | 'message'
  | 'mockery'
  | 'notification'
  | 'purchase'
  | 'rank_up'
  | 'reward'
  | 'royal'
  | 'royalAnnouncement'
  | 'seal'
  | 'shame'
  | 'success'
  | 'trumpet'
  | 'trumpets'
  | 'withdrawal';

/**
 * Sound configuration state
 */
export interface SoundConfig {
  volume: number;
  enabled: boolean;
  muted: boolean;
  premium: boolean;
}

/**
 * Options for sound playback
 */
export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

/**
 * Return type for useSound hook
 */
export interface UseSoundReturn {
  play: (options?: AudioOptions | string) => void;
  playSound: (sound: SoundType, options?: AudioOptions) => void;
  stop: () => void;
  isPlaying: boolean;
  duration?: number;
  playSuccess: (options?: AudioOptions) => void;
  playError: (options?: AudioOptions) => void;
  playNotification: (options?: AudioOptions) => void;
  playClick: (options?: AudioOptions) => void;
}

/**
 * Options for the useSound hook
 */
export interface UseSoundOptions extends AudioOptions {}
