
// Sound-related types
export type SoundType = 
  | 'button_click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'achievement' 
  | 'level_up' 
  | 'coins_drop'
  | 'purchase'
  | 'royal_fanfare'
  | 'trumpet'
  | 'crowd_cheer'
  | 'click'
  | 'hover'
  | 'pop'
  | 'swoosh'
  | 'chime'
  | 'bell'
  | 'cash';

export interface AudioLoaderReturn {
  play: () => void;
  stop: () => void;
  isPlaying: boolean;
  duration: number;
}

export interface UseSoundOptions {
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: Record<string, [number, number]>;
  onload?: () => void;
  onplay?: () => void;
  onend?: () => void;
  onpause?: () => void;
  onstop?: () => void;
}

export interface UseSoundReturn {
  play: (options?: { id?: string }) => void;
  stop: (id?: string) => void;
  pause: (id?: string) => void;
  isPlaying: boolean;
  duration: number | null;
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
  isPurchased?: boolean;
}

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  premiumSoundPacks: string[];
}

// Sound configuration
export const DEFAULT_SOUND_CONFIG: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premiumSoundPacks: []
};

// Re-export types with 'export type' syntax for TS modules
export type { SoundType };
export type { AudioLoaderReturn };
export type { PremiumSoundPackDetails };
export type { UseSoundOptions };
export type { UseSoundReturn };
