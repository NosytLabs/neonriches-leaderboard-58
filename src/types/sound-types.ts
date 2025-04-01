
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
  | 'message'
  | 'alert'
  | 'reward'
  | 'boost'
  | 'unlock'
  | 'collect'
  | 'spend'
  | 'rank'
  | 'win'
  | 'lose'
  | 'countdown'
  | 'timer'
  | 'start'
  | 'finish'
  | 'withdrawal'
  | 'transfer'
  | 'team'
  | 'protection' 
  | 'sparkle'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'royal'
  | 'rank_up'
  | 'coinDrop'
  | 'royalAnnouncement'
  | 'swordClash'
  | 'noblesLaugh';

export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  interrupt?: boolean;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  effects?: Record<string, boolean>;
  music: boolean;
  musicVolume: number;
  muted: boolean;
  premium: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  isPurchased?: boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  setMuted?: (muted: boolean) => void;
  setVolume?: (volume: number) => void;
  toggleMuted?: () => boolean;
  isMuted?: boolean;
  play?: (type: SoundType, options?: SoundOptions) => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  currentVolume?: number;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
}
