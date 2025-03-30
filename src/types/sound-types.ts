
export type SoundType = 
  | 'notification'
  | 'success'
  | 'error'
  | 'purchase'
  | 'trumpets'
  | 'achievement'
  | 'deposit'
  | 'shame'
  | 'click'
  | 'royal'
  | 'levelUp'
  | 'win'
  | 'lose'
  | 'reward'
  | 'warning'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh'
  | 'seal'
  | 'medallion'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'hover';

export interface AudioLoaderReturn {
  isLoaded: boolean;
  isError: boolean;
  load: () => Promise<void>;
  sounds: Record<SoundType, HTMLAudioElement | null>;
}

export interface PremiumSoundPackDetails {
  name: string;
  description: string;
  tags: string[];
  royalSounds: SoundType[];
  gameSounds: SoundType[];
  price: number;
  isUnlocked: boolean;
}
