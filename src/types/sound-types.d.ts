
import { RefObject } from 'react';

export type SoundType = 
  'success' | 'error' | 'notification' | 'purchase' | 
  'achievement' | 'deposit' | 'withdrawal' | 'rank_up' | 
  'level_up' | 'coin' | 'shame' | 'mockery' | 'boost' | 
  'throne' | 'royal' | 'click';

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
}

export type NotificationSoundOptions = AudioOptions;

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

export interface UseSoundReturn {
  play: (sound: SoundType, options?: AudioOptions) => void;
  stop: (sound: SoundType) => void;
  stopAll: () => void;
}

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}
