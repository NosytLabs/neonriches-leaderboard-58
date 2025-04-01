
export type SoundType = 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification'
  | 'achievement'
  | 'coin'
  | 'purchase'
  | 'deposit'
  | 'withdrawal'
  | 'level_up'
  | 'boost'
  | 'message'
  | 'mockery'
  | 'coinDrop'
  | 'shame'
  | 'fanfare'
  | 'levelUp'
  | 'royal'
  | 'protection'
  | 'sparkle';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
}

export interface SoundFunction {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  toggleMuted: () => boolean;
  isMuted: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
}
