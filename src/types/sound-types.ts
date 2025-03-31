
// Define the types of sounds available in the application
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

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
  onComplete?: () => void;
}

export interface UseSoundOptions {
  baseUrl?: string;
  volume?: number;
  disabled?: boolean;
  soundEnabled?: boolean;
  loop?: boolean;
  interrupt?: boolean;
  onComplete?: () => void;
}

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

export interface AudioLoaderReturn {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isLoaded: boolean;
}

export interface SoundConfig {
  volume: number;
  enabled: boolean;
  muted: boolean;
  premium: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
  features?: string[];
  includes?: string[];
  tags?: string[];
  isPurchased?: boolean;
}
