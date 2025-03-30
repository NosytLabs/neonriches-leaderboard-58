
export type SoundType =
  | 'click'
  | 'hover'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'rankUp'
  | 'coinDrop'
  | 'achievement'
  | 'trumpets'
  | 'fanfare'
  | 'shame'
  | 'parchment'
  | 'crown'
  | 'royal'
  | 'medallion'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'info'
  | 'warning'
  | 'seal'
  | 'deposit'
  | 'reward'
  | 'unlock'
  | 'team'
  | 'applause'
  | 'levelUp'
  | 'boost'
  | 'curse'
  | 'laugh'
  | 'magic'
  | 'celebration'
  | 'message'
  | 'treasure'
  | 'bell'
  | 'royalAnnouncement'
  | 'swordClash'
  | 'coins'
  | 'trumpet'
  | 'coin'
  | 'medieval'
  | 'award';

export interface AudioLoaderReturn {
  audioElements: Record<SoundType, HTMLAudioElement | null>;
  isLoaded: boolean;
  loadProgress: number;
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
}

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  onEnd?: () => void;
  baseVolume?: number;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  play: (sound?: SoundType) => void;
  stop: () => void;
  isPlaying: boolean;
  duration: number;
  playSound?: (sound: SoundType) => void;
}

export type {
  SoundType,
  AudioLoaderReturn,
  PremiumSoundPackDetails,
  UseSoundOptions,
  UseSoundReturn
};
