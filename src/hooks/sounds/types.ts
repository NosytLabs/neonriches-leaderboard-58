
// Sound type definitions

// Types of sounds available in the application
export type SoundType =
  | 'notification'
  | 'success'
  | 'error'
  | 'shame'
  | 'purchase'
  | 'levelUp'
  | 'swordClash'
  | 'click'
  | 'hover'
  | 'coinDrop'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'seal'
  | 'royalAnnouncement'
  | 'reward'
  | 'wish'
  | 'advertisement'
  | 'pageChange'
  | 'trumpet'
  | 'medallion'
  | 'noblesLaugh'
  | 'inkScribble';

// Premium sound pack types
export type PremiumSoundPack = string;

// Sound settings
export interface SoundSettings {
  enabled: boolean;
  volume: number;
  pack: PremiumSoundPack;
}

// Premium sound pack details
export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  preview?: string;
  previewSound?: string;
  sounds?: Record<string, string>;
  isPurchased?: boolean;
}

// Audio loader return type
export interface AudioLoaderReturn {
  loading: boolean;
  loaded: boolean;
  error: Error | null;
  sounds: Record<string, HTMLAudioElement>;
  play: (sound: string) => void;
  loadedSounds?: string[];
}
