
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
  | 'medieval';

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
  tags: string[];
  isPurchased?: boolean;
}

export interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: boolean;
}
