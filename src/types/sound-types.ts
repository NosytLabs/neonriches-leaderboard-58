
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
  | 'info';

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
}
