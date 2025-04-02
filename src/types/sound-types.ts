
export type SoundType = 
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'click'
  | 'hover'
  | 'purchase'
  | 'spend'
  | 'boost'
  | 'level-up'
  | 'royal'
  | 'coin'
  | 'fanfare'
  | 'alert'
  | 'interaction'
  | 'theme';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  detune?: number;
  delay?: number;
  seek?: number;
  interrupt?: boolean;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  effects: Record<SoundType, boolean>;
  music: boolean;
  ambience: boolean;
}
