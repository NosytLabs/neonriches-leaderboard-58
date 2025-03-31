
import { RefObject } from 'react';

export type SoundType = 
  'success' | 'error' | 'notification' | 'purchase' | 
  'achievement' | 'deposit' | 'withdrawal' | 'rank_up' | 
  'level_up' | 'coin' | 'shame' | 'mockery' | 'boost' | 
  'throne' | 'royal' | 'click';

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

export interface UseSoundsOptions {
  volume?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  onComplete?: () => void;
  loop?: boolean;
}

export interface UseSoundReturn {
  play: (options?: UseSoundsOptions) => void;
  stop: () => void;
  playSound: (sound: SoundType) => void;
  playSuccess: (sound?: SoundType) => void;
}
