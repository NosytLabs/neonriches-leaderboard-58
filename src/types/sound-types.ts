
// Define all possible sound types
export type SoundType = 
  | 'coin' 
  | 'success' 
  | 'error' 
  | 'click' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'deposit' 
  | 'mockery' 
  | 'fanfare' 
  | 'levelUp' 
  | 'level_up' 
  | 'shame' 
  | 'royal' 
  | 'boost' 
  | 'message'
  | 'swordClash'
  | 'noblesLaugh'
  | 'withdraw'
  | 'withdrawal'
  | 'coinDrop'
  | 'protection'
  | 'sparkle'
  | 'reward'
  | 'rank_up'
  | 'team'
  | 'trumpet'
  | 'warning'
  | 'medallion'
  | 'royalAnnouncement'
  | 'seal'
  | 'transfer'
  | 'unlock'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'advertisement'
  | 'chime';

// Sound options for playback
export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
  interrupt?: boolean;
  delay?: number;
}

// Define the sound configuration type
export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  effects?: Record<string, boolean>;
  music?: Record<string, boolean>;
  ambience?: Record<string, boolean>;
}

// Define the hook interface for sound system
export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  play: (type: SoundType, options?: SoundOptions) => void;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleSounds?: () => void;
  toggleMuted?: () => void;
  setVolume?: (volume: number) => void;
  soundConfig?: SoundConfig;
}

// NotificationSoundOptions is an alias for SoundOptions
export type NotificationSoundOptions = SoundOptions;

// Audio related types
export type AudioLoaderReturn = {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isLoaded: boolean;
};

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}
