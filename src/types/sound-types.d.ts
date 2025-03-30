
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
  | 'fanfare'
  | 'wish'
  | 'levelUp'
  | 'crown'
  | 'ding'
  | 'sparkle'
  | 'sweep'
  | 'tada'
  | 'thud'
  | 'tier_up'
  | 'rank_up'
  | 'rank_down'
  | 'shame';

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  [key: string]: any; // Allow string indexing for flexibility
}

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  interrupt?: boolean;
  [key: string]: any; // Allow string indexing for flexibility
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

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  tags: string[]; // Added required property
}
