
// Define the types of sounds available in the application
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
  | 'royal';

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

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

export interface UseSoundReturn {
  play: (options?: { volume?: number; interrupt?: boolean }) => void;
  stop: () => void;
  isPlaying: boolean;
  duration: number;
}

export interface UseSoundOptions {
  volume?: number;
  interrupt?: boolean;
}

export interface PremiumSoundPackDetails {
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
}
