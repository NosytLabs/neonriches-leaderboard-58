
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
  | 'advertisement';

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
