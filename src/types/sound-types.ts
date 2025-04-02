
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'transfer'
  | 'level_up'
  | 'level-up'
  | 'rank_up'
  | 'rank-up'
  | 'reward'
  | 'coin'
  | 'chime'
  | 'alert'
  | 'fanfare'
  | 'achievement'
  | 'message'
  | 'mockery'
  | 'royal';

export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
  loop?: boolean;
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
  enabled: boolean;
}

export type SoundCategory = 'effects' | 'music' | 'ambient' | 'ui' | 'voice';
