
export type SoundType = 
  | 'click' 
  | 'button' 
  | 'hover' 
  | 'coins' 
  | 'coins_drop' 
  | 'success' 
  | 'error' 
  | 'purchase' 
  | 'trumpets' 
  | 'notification' 
  | 'achievement' 
  | 'rankUp' 
  | 'royal' 
  | 'shame'
  | 'levelUp'
  | 'fanfare'
  | 'wish'
  | 'pageChange';

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
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
  tags: string[];
}
