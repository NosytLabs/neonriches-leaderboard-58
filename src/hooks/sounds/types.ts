
export type SoundType = 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification'
  | 'achievement'
  | 'coin'
  | 'purchase'
  | 'deposit'
  | 'withdrawal'
  | 'levelUp'
  | 'boost'
  | 'message'
  | 'mockery'
  | 'coinDrop'
  | 'shame'
  | 'fanfare'
  | 'royal'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'transfer'
  | 'unlock'
  | 'team'
  | 'rank_up'
  | 'reward'
  | 'swordClash'
  | 'noblesLaugh'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'advertisement'
  | 'level_up';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  onEnd?: () => void;
  playbackRate?: number;
}

export interface SoundFunction {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  setMuted?: (muted: boolean) => void;
  setVolume?: (volume: number) => void;
  isMuted?: boolean;
  play?: (type: SoundType, options?: SoundOptions) => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  currentVolume?: number;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  isSoundEnabled: boolean;
  toggleSounds: () => void;
  toggleMuted: () => void; // Fixed return type
  setVolume: (volume: number) => void;
  currentVolume: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound?: SoundType;
  sounds?: SoundType[];
  features?: string[];
}
