
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
  | 'royal'
  | 'coin'
  | 'reward'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'seal'
  | 'medallion';

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
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

export interface UseSoundReturn {
  play: (sound: SoundType, options?: AudioOptions) => void;
  stop: (sound: SoundType) => void;
  stopAll: () => void;
}

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}
