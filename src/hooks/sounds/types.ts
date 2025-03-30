
export type SoundType = 
  | 'click'
  | 'coinDrop'
  | 'purchase'
  | 'royalAnnouncement'
  | 'pageTransition'
  | 'reward'
  | 'win'
  | 'message'
  | 'shame'
  | 'swordClash'
  | 'seal'
  | 'parchmentUnfurl';

export interface AudioLoaderReturn {
  play: (soundType: SoundType) => void;
  stop: (soundType: SoundType) => void;
  pauseAll: () => void;
  resumeAll: () => void;
  isPlaying: (soundType: SoundType) => boolean;
  setVolume: (volume: number) => void;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  includes: SoundType[];
}
