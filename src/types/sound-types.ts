
export type SoundType = 
  | 'coin' 
  | 'success'
  | 'error'
  | 'click'
  | 'notification'
  | 'achievement'
  | 'purchase'
  | 'deposit'
  | 'mockery'
  | 'fanfare'
  | 'levelUp'
  | 'shame'
  | 'message'
  | 'alert'
  | 'reward'
  | 'boost'
  | 'unlock'
  | 'collect'
  | 'spend'
  | 'rank'
  | 'win'
  | 'lose'
  | 'countdown'
  | 'timer'
  | 'start'
  | 'finish'
  | 'withdrawal'
  | 'transfer'
  | 'team';

export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  interrupt?: boolean;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  effects?: Record<string, boolean>;
  music: boolean;
  musicVolume: number;
  muted: boolean;
  premium: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  isPurchased?: boolean;
}
