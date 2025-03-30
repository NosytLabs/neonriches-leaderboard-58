
// Sound types
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
  | 'crown'
  | 'royal'
  | 'medieval'
  | 'award'
  | 'info'
  | 'warning'
  | 'seal'
  | 'deposit'
  | 'reward'
  | 'unlock'
  | 'team'
  | 'applause'
  | 'levelUp'
  | 'boost'
  | 'curse'
  | 'laugh'
  | 'magic'
  | 'celebration'
  | 'message'
  | 'treasure'
  | 'bell';

export interface AudioLoaderReturn {
  audios: Record<SoundType, HTMLAudioElement>;
  playSound: (sound: SoundType) => void;
  stopSound: (sound: SoundType) => void;
  isPlaying: (sound: SoundType) => boolean;
  setVolume: (sound: SoundType, volume: number) => void;
  loadingComplete: boolean;
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

export { SoundType, AudioLoaderReturn, PremiumSoundPackDetails };
