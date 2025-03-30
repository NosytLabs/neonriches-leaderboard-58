

export type SoundType = 
  | 'royal'
  | 'success'
  | 'error'
  | 'notification'
  | 'tab'
  | 'coinDrop'
  | 'coinStack'
  | 'purchase'
  | 'rankUp'
  | 'rankDown'
  | 'upgrade'
  | 'click'
  | 'hover'
  | 'deposit'
  | 'withdraw'
  | 'boost'
  | 'shame'
  | 'splat'
  | 'crack'
  | 'stink'
  | 'lock'
  | 'trumpets'
  | 'trumpet'
  | 'jingle'
  | 'confetti'
  | 'celebrate'
  | 'fanfare'
  | 'achievement'
  | 'levelUp'
  | 'pageLoad'
  | 'message'
  | 'warning'
  | 'medallion';

export interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  interrupt?: boolean;
  baseVolume?: number;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  playSound: (sound: SoundType, volume?: number) => void;
  stopSound: (sound?: SoundType) => void;
  playSuccess?: () => void;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  includes: (sound: SoundType) => boolean;
}

