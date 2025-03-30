
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
  | 'wish';

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
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
