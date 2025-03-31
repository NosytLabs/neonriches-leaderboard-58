
// Sound types used throughout the application
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
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'seal'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'boost'
  | 'reward'
  | 'rank_up'
  | 'royal'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh'
  | 'message';

// Audio options for sounds
export interface AudioOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

// Options for playing sounds
export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
  delay?: number;
}

// Sound configuration state
export interface SoundConfig {
  volume: number;
  enabled: boolean;
  muted: boolean;
  premium: boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
}

// Define alias for backward compatibility
export type NotificationSoundOptions = SoundOptions;
