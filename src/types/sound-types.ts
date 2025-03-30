
// Sound type definitions

export type SoundType = 
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'notification'
  | 'achievement'
  | 'purchase'
  | 'levelUp'
  | 'royal'
  | 'trumpets'
  | 'fanfare'
  | 'coins'
  | 'spend'
  | 'deposit'
  | 'withdrawal'
  | 'click'
  | 'hover'
  | 'tab'
  | 'shame'
  | 'taunt'
  | 'mockery'
  | 'shatter'
  | 'sweep'
  | 'pop'
  | 'swoosh'
  | 'chime'
  | 'bell'
  | 'alert'
  | 'drum'
  | 'throne'
  | 'applause'
  | 'boo'
  | 'medal'
  | 'medallion'
  | 'certificate'
  | 'coinDrop'
  | 'swordClash'
  | 'noblesLaugh';

export interface AudioLoaderReturn {
  isLoading: boolean;
  isReady: boolean;
  soundLibrary: Record<SoundType, string>;
  playSound: (sound: SoundType) => void;
  error: Error | null;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  includes: SoundType[];
}

export interface UseSoundOptions {
  volume?: number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface UseSoundReturn {
  play: (sound?: SoundType) => void;
  pause: () => void;
  stop: () => void;
  isPlaying: boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  playRandom: (sounds: SoundType[]) => void;
}
