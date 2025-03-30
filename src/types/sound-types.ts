
export type SoundType =
  | 'hover'
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'levelUp'
  | 'achievement'
  | 'reward'
  | 'coinDrop'
  | 'royalAnnouncement'
  | 'shame'
  | 'swordClash'
  | 'trumpets'
  | 'trumpet'
  | 'scroll'
  | 'potion'
  | 'chatMessage'
  | 'unlock'
  | 'win'
  | 'message'
  | 'coin'
  | 'boost'
  | 'advertisement'
  | 'pageTransition'
  | 'seal'
  | 'parchmentUnfurl'
  | 'wish'
  | 'pageChange'
  | 'medallion'
  | 'noblesLaugh'
  | 'inkScribble'
  | 'smoke'
  | 'tab';

export interface UseSoundOptions {
  baseVolume?: number;
  disableCache?: boolean;
  volume?: number; // Support for legacy volume option
}

export interface UseSoundReturn {
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
  playSound: (soundType: SoundType, volumeMultiplier?: number) => void; // Alias for backward compatibility
  playSuccess: (volumeMultiplier?: number) => void;
  playError: (volumeMultiplier?: number) => void;
  playNotification: (volumeMultiplier?: number) => void;
  playClick: (volumeMultiplier?: number) => void;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

export interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl?: string;
  previewSound?: SoundType;
  sounds?: SoundType[];
  includes: string[];
  features?: string[];
  isPurchased?: boolean;
}

export interface AudioLoaderReturn {
  load: (soundType: SoundType) => Promise<HTMLAudioElement>;
  isLoaded: (soundType: SoundType) => boolean;
  getVolume: (soundType: SoundType) => number;
  setVolume: (soundType: SoundType, volume: number) => void;
}
