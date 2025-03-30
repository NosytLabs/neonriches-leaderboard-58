
export type SoundType = 
  | 'click'
  | 'hover'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'rankUp'
  | 'coinDrop'
  | 'achievement'
  | 'trumpets'
  | 'fanfare'
  | 'shame'
  | 'parchment'
  | 'treasure'
  | 'royal'
  | 'crown'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'info'
  | 'seal'
  | 'deposit'
  | 'reward'
  | 'win'
  | 'warning'
  | 'medallion'
  | 'trumpet'
  | 'royalAnnouncement'
  | 'levelUp'
  | 'wish'
  | 'seal';

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  themeSound: string;
  effectsVolume: number;
  musicVolume: number;
  notificationsVolume: number;
  uiVolume: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  tags: string[];
  royalSounds: Record<SoundType, string>;
  gameSounds: Record<SoundType, string>;
  isUnlocked: boolean;
  includes?: string[];
}

export interface AudioLoaderReturn {
  sounds: Record<SoundType, HTMLAudioElement | null>;
  loadingComplete: boolean;
  loadingError: boolean;
  loading: boolean;
  loadSound: (type: SoundType) => Promise<HTMLAudioElement | null>;
}

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  onEnd?: () => void;
  baseVolume?: number;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  play: (sound?: SoundType) => void;
  stop: (sound?: SoundType) => void;
  isPlaying: boolean;
  duration: number;
  playSound?: (sound: SoundType) => void;
  playSuccess?: () => void; // Fixing these to not expect a second parameter
}
