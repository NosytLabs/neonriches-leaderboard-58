
/**
 * Types for sound system
 */

// Basic sound types that can be played in the system
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'transfer'
  | 'message'
  | 'level_up'  // Changed from level-up to match other code
  | 'rank_up'
  | 'reward'
  | 'achievement'
  | 'royal'
  | 'coin'
  | 'chime'
  | 'alert'
  | 'mockery'    // Add missing sound types
  | 'fanfare'
  | 'deposit'     // Add missing sound types from sound-types.d.ts
  | 'withdrawal'
  | 'shame'
  | 'boost'
  | 'throne';

// Sound pack types for premium sounds
export type SoundPackType = 
  | 'default'
  | 'premium'
  | 'royal'
  | 'minimal'
  | 'medieval'
  | 'gold';

// Sound options when playing sounds
export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  onEnd?: () => void;
}

// Sound configuration for a user
export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: SoundPackType;
  soundTypes: {
    [key in SoundType]?: boolean;
  };
}

// Details of a premium sound pack
export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: SoundType | string;
  sounds: (SoundType | string)[];
  features: string[];
  enabled: boolean;
}

// Export all types
export { SoundType, SoundPackType, SoundOptions, SoundConfig, PremiumSoundPackDetails };
