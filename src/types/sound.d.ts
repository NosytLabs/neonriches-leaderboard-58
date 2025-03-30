
export type SoundType = 
  'success' | 'error' | 'notification' | 'royal' | 'trumpets' | 
  'tab' | 'coinDrop' | 'rankUp' | 'spend' | 'purchase' | 'shame' | 
  'achievement' | 'medalion' | 'medallion';

export interface SoundAsset {
  url: string;
  volume: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  includes?: string[]; // Add the missing property
}

export interface UseSoundReturn {
  playSound: (type: SoundType) => void;
  stopSound: (type: SoundType) => void;
  toggleMute: () => void;
  isMuted: boolean;
  playSuccess?: () => void; // For compatibility
}
