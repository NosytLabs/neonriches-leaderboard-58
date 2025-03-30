
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
  | 'win' 
  | 'message' 
  | 'seal' 
  | 'applause' 
  | 'throne' 
  | 'mockery' 
  | 'deposit' 
  | 'rankUp' 
  | 'royal' 
  | 'rankChange' 
  | 'smoke' 
  | 'tab' 
  | 'achievement'
  | 'trumpets'
  | 'scroll'
  | 'potion'
  | 'boost'
  | 'advertisement'
  | 'parchmentUnfurl'
  | 'wish'
  | 'coin'
  | 'hover'
  | 'pageChange';

export interface AudioLoaderReturn {
  play: (sound: SoundType) => void;
  stop: (sound: SoundType) => void;
  isReady: boolean;
  sounds: Record<SoundType, string>;
  volumes: Record<SoundType, number>;
  loading?: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  includes: string[];
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
}
