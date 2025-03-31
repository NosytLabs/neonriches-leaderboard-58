
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
  | 'royal';

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
  muted: boolean; // Add this property
  premium: boolean; // Add this property
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
