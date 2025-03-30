
// Consolidated sound types used throughout the application

// Define the types of sounds available in the application
export type SoundType = 
  | 'hover' 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'levelUp' 
  | 'achievement' 
  | 'reward'
  | 'coinDrop'
  | 'royalAnnouncement'
  | 'shame'
  | 'swordClash'
  | 'trumpets'
  | 'scroll'
  | 'potion'
  | 'chatMessage'
  | 'unlock'
  | 'win'
  | 'message'
  | 'trumpet'
  | 'coin'
  | 'boost'
  | 'advertisement'
  | 'pageTransition'
  | 'seal'
  | 'parchmentUnfurl'
  | 'wish'
  | 'pageChange'
  | 'medallion'
  | 'noblesLaugh'
  | 'inkScribble';

// Audio loader return type
export interface AudioLoaderReturn {
  loading?: boolean;
  loaded?: boolean;
  error?: Error | null;
  sounds?: Record<string, HTMLAudioElement>;
  audioElements?: Record<string, HTMLAudioElement>;
  loadedSounds?: string[];
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
}

// Sound hook options
export interface UseSoundOptions {
  baseVolume?: number;
  disableCache?: boolean;
  volume?: number;
}

// Sound hook return type
export interface UseSoundReturn {
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
  playSuccess: (volumeMultiplier?: number) => void;
  playError: (volumeMultiplier?: number) => void;
  playNotification: (volumeMultiplier?: number) => void;
  playClick: (volumeMultiplier?: number) => void;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

// Premium sound pack details
export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  includes: SoundType[];
}
