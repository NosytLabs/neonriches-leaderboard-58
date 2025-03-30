
export type SoundType = 
  | 'click' 
  | 'hover' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'rankUp' 
  | 'coinDrop' 
  | 'achievement' 
  | 'trumpets' 
  | 'fanfare' 
  | 'shame' 
  | 'parchment' 
  | 'pageFlip' 
  | 'medal' 
  | 'coin' 
  | 'info' 
  | 'warning' 
  | 'seal' 
  | 'deposit' 
  | 'reward' 
  | 'advertisement' 
  | 'message' 
  | 'royal'
  | 'levelUp'
  | 'wish'
  | 'pageChange';

export interface SoundConfig {
  volume: number;
  enabled: boolean;
  isMuted: boolean;
  premium: boolean;
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
  includes?: string[];
}

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
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

export interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: boolean;
}
