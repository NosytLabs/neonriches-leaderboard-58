
export type SoundType = 
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'deposit'
  | 'withdraw'
  | 'unlock'
  | 'level_up'
  | 'rank_up'
  | 'click'
  | 'toggle'
  | 'alert'
  | 'badge'
  | 'coin'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'fanfare';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundMap {
  [key: string]: string;
}

export interface SoundDefinition {
  soundType: SoundType;
  url: string;
  defaultVolume?: number;
  defaultPlaybackRate?: number;
  preload?: boolean;
}

export interface SoundState {
  muted: boolean;
  volume: number;
  theme: 'default' | 'royal' | 'minimal';
  soundPack: string;
}
