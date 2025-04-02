
// Define sound system types
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'chime'
  | 'levelUp'
  | 'purchase'
  | 'royal'
  | 'claim'
  | 'coin'
  | 'swoosh'
  | 'message'
  | 'reward'
  | 'fanfare'
  | 'rank_up'
  | 'transfer';

export type SoundPackType = 
  | 'default'
  | 'premium'
  | 'royal'
  | 'minimal'
  | 'classic'
  | 'modern'
  | 'retro';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnded?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: SoundPackType;
  muted: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: string;
  sounds: string[];
  features: string[];
  enabled: boolean;
}
