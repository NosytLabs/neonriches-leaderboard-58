
export type SoundType = 
  | 'click'
  | 'coins'
  | 'coins_drop'
  | 'coins_pour'
  | 'deposit'
  | 'success'
  | 'error'
  | 'notification'
  | 'royal'
  | 'achievement'
  | 'unlock'
  | 'purchase'
  | 'level_up'
  | 'shame'
  | 'message'
  | 'parchment'
  | 'trumpet';

export interface AudioLoaderReturn {
  audioMap: Record<SoundType, HTMLAudioElement>;
  playSound: (sound: SoundType) => void;
  stopSound: (sound: SoundType) => void;
  toggleMute: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  isMuted: boolean;
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
  tags: string[];
}

export interface UseSoundOptions {
  volume?: number;
  interrupt?: boolean;
  sprite?: Record<string, [number, number]>;
  loop?: boolean;
  onEnd?: () => void;
  baseVolume?: number;
  disableCache?: boolean;
}

export interface UseSoundReturn {
  play: (options?: { id?: string; }) => void;
  stop: (id?: string) => void;
  pause: (id?: string) => void;
  isPlaying: boolean;
  duration: number;
}
