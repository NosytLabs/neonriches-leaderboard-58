
export interface SoundConfig {
  volume: number;
  enabled: boolean;
  muted: boolean;
  premium: boolean;
}

export type SoundType = 
  | 'notification'
  | 'achievement'
  | 'button'
  | 'success'
  | 'error'
  | 'purchase'
  | 'levelUp'
  | 'coinCollect'
  | 'rankChange'
  | 'mockery'
  | 'teamChange';

export type SoundPack = 'default' | 'royal' | 'premium' | 'medieval';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  pack?: SoundPack;
}

export interface SoundEffect {
  id: string;
  name: string;
  type: SoundType;
  fileName: string;
  url?: string;
  pack: SoundPack;
  description?: string;
}
