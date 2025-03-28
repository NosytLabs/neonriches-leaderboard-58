
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
  | 'advertisement';

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
