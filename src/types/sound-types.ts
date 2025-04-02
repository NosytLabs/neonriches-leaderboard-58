
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
  | 'swoosh';

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

// Re-export types using export type for TypeScript isolatedModules compatibility
export type { 
  SoundType, 
  SoundPackType, 
  SoundOptions, 
  SoundConfig, 
  PremiumSoundPackDetails 
};
