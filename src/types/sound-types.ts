
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
  | 'bell'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'royalAnnouncement'
  | 'swordClash'
  | 'coins'
  | 'trumpet'
  | 'medallion'
  | 'coin';

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
  includes?: string[];
}

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  onEnd?: () => void;
  baseVolume?: number;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  play: (sound?: SoundType) => void;
  stop: (sound?: SoundType) => void;
  isPlaying: boolean;
  duration: number;
  playSound?: (sound: SoundType) => void;
  playSuccess?: (sound?: SoundType) => void;
}

// Use export type to avoid TS1205 errors
export type { SoundType, AudioLoaderReturn, PremiumSoundPackDetails, UseSoundOptions, UseSoundReturn };
