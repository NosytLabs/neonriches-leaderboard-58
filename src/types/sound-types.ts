
// Sound system type definitions

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
  | 'shame'
  | 'reward'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh'
  | 'boost'
  | 'level_up'
  | 'message'
  | 'rank_up'
  | 'royal'
  | 'trumpets'
  | 'withdrawal'
  | 'transfer'
  | 'unlock'
  | 'team';

export interface SoundCategory {
  name: string;
  sounds: SoundFile[];
}

export interface SoundFile {
  id: string;
  name: string;
  file: string;
  duration?: number;
  category: string;
  description?: string;
}

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
  [key: string]: any; // Allow any additional properties
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  effects: Record<string, boolean>;
  music: boolean;
  musicVolume: number;
  muted?: boolean;
  premium?: boolean;
}

export interface UseAudioReturn {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
  play?: (type: SoundType, options?: SoundOptions) => void;  // For backward compatibility
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  currentVolume?: number;
  play?: (type: SoundType, options?: SoundOptions) => void;
  isMuted?: boolean;
  toggleMute?: () => boolean;
  setMuted?: (muted: boolean) => void;
  volume?: number;
}

// Premium sound pack details
export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  preview: string;
  previewSound?: SoundType;
  icon: string;
  features?: string[];
  tier?: string;
}

// Notification sound options
export interface NotificationSoundOptions {
  sound?: SoundType;
  volume?: number;
  loop?: boolean;
}
