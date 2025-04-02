
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
  | 'level_up'
  | 'royal'
  | 'coin'
  | 'coinDrop'
  | 'fanfare'
  | 'alert'
  | 'message'
  | 'deposit'
  | 'withdrawal'
  | 'mockery'
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'reward'
  | 'rank_up'
  | 'team'
  | 'trumpet'
  | 'warning'
  | 'medallion'
  | 'royalAnnouncement'
  | 'seal'
  | 'swordClash'
  | 'noblesLaugh'
  | 'transfer'
  | 'unlock'
  | 'wish'
  | 'chime'
  | 'badge';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  playbackRate?: number;
  detune?: number;
  delay?: number;
  seek?: number;
  interrupt?: boolean;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  effects: Record<SoundType, boolean>;
  music: boolean;
  ambience: boolean;
}
