
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'deposit'
  | 'rankup'
  | 'coins_drop'
  | 'trumpet'
  | 'achievement'
  | 'level_up'
  | 'notification'
  | 'purchase'
  | 'unlock';

export type SoundPackType = 'standard' | 'royal' | 'medieval' | 'fantasy' | 'premium';

export interface UserSoundPreferences {
  volume: number;
  pack: SoundPackType;
  enableSounds: boolean;
  enableMusic: boolean;
  enableNotifications: boolean;
  mutedTypes: SoundType[];
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
}
