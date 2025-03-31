
// Sound types for the application
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
  | 'level_up' // for backward compatibility
  | 'rank_up'
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'message'
  | 'boost'
  | 'reward'
  | 'royal'
  | 'withdrawal'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'trumpets'
  | 'medallion'
  | 'seal'
  | 'coinDrop';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  rate?: number;
}

export interface NotificationSoundOptions extends SoundOptions {
  category?: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface SoundSettings {
  enabled: boolean;
  volume: number;
  sfxVolume: number;
  musicVolume: number;
  notificationSounds: boolean;
  uiSounds: boolean;
  achievementSounds: boolean;
  ambientSounds: boolean;
}

export interface SoundPack {
  id: string;
  name: string;
  author: string;
  description: string;
  preview: string;
  price: number;
  free: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  samples: Record<SoundType, string>;
  author: string;
  version: string;
  releaseDate: string;
  fileSize: number;
  tags: string[];
}
