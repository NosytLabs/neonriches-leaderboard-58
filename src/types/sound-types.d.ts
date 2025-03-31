
export type SoundType = 
  | 'achievement'
  | 'boost'
  | 'button_click'
  | 'challenge'
  | 'coins_drop'
  | 'coins_multiple'
  | 'deposit'
  | 'error'
  | 'level_up'
  | 'message'
  | 'mockery'
  | 'notification'
  | 'purchase'
  | 'rank_change'
  | 'rank_up'
  | 'shame'
  | 'success'
  | 'team_join'
  | 'transaction'
  | 'upgrade'
  | 'wishingwell'
  | 'parchment'
  | 'click'
  | 'trumpets'
  | 'coinDrop'
  | 'royal'
  | 'coin'
  | 'reward'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'seal'
  | 'medallion'
  | 'hover'
  | 'fanfare'
  | 'wish'
  | 'levelUp'
  | 'crown'
  | 'ding'
  | 'sparkle'
  | 'sweep'
  | 'tada'
  | 'thud'
  | 'tier_up';

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
  soundEnabled?: boolean;
  onComplete?: () => void;
}

export type NotificationSoundOptions = AudioOptions;

export interface AudioLoaderReturn {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isLoaded: boolean;
}

export interface UseSoundOptions extends AudioOptions {
  [key: string]: any; // Allow string indexing for flexibility
}

export interface UseSoundReturn {
  play: (sound: SoundType | string, options?: UseSoundOptions) => void;
  stop: (sound: SoundType) => void;
  isPlaying?: boolean;
  duration?: number;
  playSound: (sound: SoundType) => void;
  playSuccess: (sound?: SoundType) => void;
  stopAll?: () => void;
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
  includes?: string[];
}
