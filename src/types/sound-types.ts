
export type SoundType = 'click' | 'success' | 'error' | 'notification' | 'achievement' | 'purchase' | 'rank-up' | 'deposit';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  playbackRate?: number;
}
