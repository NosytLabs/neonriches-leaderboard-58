
export type SoundType = 
  | 'click'
  | 'hover'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'coinDrop'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'seal'
  | 'royalAnnouncement'
  | 'reward'
  | 'wish'
  | 'advertisement'
  | 'levelUp'
  | 'shame'
  | 'swordClash'
  | 'pageChange'
  | 'trumpet'
  | 'medallion'
  | 'noblesLaugh'
  | 'inkScribble';

export interface SoundAsset {
  src: string;
  preload?: boolean;
}

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

export interface AudioState {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  isLoaded: boolean;
  volume: number;
}

export interface Sound {
  key: SoundType;
  asset: SoundAsset;
  state: AudioState;
}

export interface PremiumSoundPack {
  id: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  isPurchased?: boolean;
  previewSound?: SoundType;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  preview?: string;
  features: string[];
  sounds?: SoundType[];
  isPurchased?: boolean;
  previewSound?: SoundType;
}

export interface AudioLoaderReturn {
  loadedSounds: Record<string, HTMLAudioElement | null>;
  isLoading: boolean;
  error?: Error | null;
  audioElements?: Record<string, HTMLAudioElement>;
  loadSound?: (type: SoundType) => Promise<HTMLAudioElement | null>;
  playSound: (type: SoundType, volumeMultiplier?: number) => void;
}
