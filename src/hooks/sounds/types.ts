
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
  | 'levelUp';

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
  name: string;
  description: string;
  price: number;
  sounds: Record<SoundType, string>;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  preview?: string;
  features: string[];
}

export interface AudioLoaderReturn {
  loadedSounds: Record<SoundType, HTMLAudioElement | null>;
  isLoading: boolean;
  loadSound: (type: SoundType) => Promise<HTMLAudioElement | null>;
  playSound: (type: SoundType, options?: SoundOptions) => void;
}
