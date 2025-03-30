
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
  | 'certificate';

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
