
/**
 * Sound types for the platform sound system
 */

// Sound type represents all available sound effects
export type SoundType = 
  | 'click'
  | 'coins'
  | 'coins_drop'
  | 'success'
  | 'error'
  | 'purchase'
  | 'trumpets'
  | 'notification'
  | 'achievement'
  | 'rankUp'
  | 'button'
  | 'hover'
  | 'medieval'
  | 'royal'
  | 'parchment'
  | 'deposit'
  | 'message'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'seal'
  | 'medallion'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh'
  | 'parchmentUnfurl'
  | 'rankChange'
  | 'coin'
  | 'reward'
  | 'pageTransition'
  | 'shame'
  | 'levelUp'
  | 'fanfare'
  | 'wish'; // Add missing sound types

export interface AudioLoaderReturn {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (isPremium: boolean) => void;
  isLoaded: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  tags: string[]; // Add missing property
  isPurchased?: boolean;
  includes?: string[];
}

export interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: boolean;
}

export interface UseSoundOptions {
  volume?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  onComplete?: () => void;
  baseVolume?: number;
  loop?: boolean;
  onEnd?: () => void;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  play: (options?: UseSoundOptions) => void;
  stop: () => void;
  isPlaying: boolean;
  duration?: number; 
  playSound?: (sound: SoundType) => void;
  playSuccess?: (sound?: SoundType) => void;
}

export interface NotificationSoundOptions {
  volume?: number;
}
