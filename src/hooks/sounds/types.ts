
// Sound types
export type SoundType = 
  | 'coinDrop'
  | 'reward'
  | 'notification'
  | 'click'
  | 'success'
  | 'error'
  | 'royalAnnouncement'
  | 'levelUp'
  | 'purchase'
  | 'shame'
  | 'swordClash'
  | 'pageTransition'
  | 'wish'
  | 'pageChange'
  | 'parchmentUnfurl'
  | 'medallion'
  | 'seal'
  | 'trumpet'
  | 'noblesLaugh'
  | 'inkScribble';

// Sound map type
export interface SoundMap {
  [key: string]: HTMLAudioElement;
}

// Audio loader return type
export interface AudioLoaderReturn {
  loadedSounds: string[];
  isLoading: boolean;
  error: Error | null;
}

// Premium sound pack options
export type PremiumSoundPack = 
  | 'royal'
  | 'medieval'
  | 'fantasy'
  | 'comedy'
  | 'elegant';

export interface PremiumSoundPackDetails {
  id: PremiumSoundPack;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound: SoundType;
  isPurchased: boolean;
}
