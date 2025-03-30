
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
  | 'royal';

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
}
