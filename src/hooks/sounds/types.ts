
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
  | 'fanfare'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh'
  | 'purchase'
  | 'withdrawal'
  | 'boost'
  | 'message'
  | 'mockery'
  | 'shame'
  | 'royal'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'transfer'
  | 'team'
  | 'reward'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'advertisement';

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

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  play: (type: SoundType, options?: SoundOptions) => void; // Alias for playSound
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleMuted: () => boolean;
  toggleSounds: () => boolean;
  setVolume: (volume: number) => void;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  enabled: boolean;
  sounds: SoundDefinition[];
  previewUrl?: string;
  author?: string;
  authorUrl?: string;
  releaseDate?: string;
}
