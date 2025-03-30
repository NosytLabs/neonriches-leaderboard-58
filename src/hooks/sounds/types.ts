
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
  | 'parchmentUnfurl'
  | 'success'
  | 'error'
  | 'notification'
  | 'levelUp'
  | 'wish'
  | 'pageChange'
  | 'medallion'
  | 'trumpet'
  | 'noblesLaugh'
  | 'inkScribble'
  | 'hover'
  | 'advertisement';

export interface AudioLoaderReturn {
  loading?: boolean;
  loaded?: boolean;
  error?: Error | null;
  sounds?: Record<string, HTMLAudioElement>;
  audioElements?: Record<string, HTMLAudioElement>;
  loadedSounds?: string[];
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewUrl: string;
  includes: SoundType[];
}
