
export type SoundType = 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'rank-up' 
  | 'deposit'
  | 'message'
  | 'reward'
  | 'mockery'
  | 'royal'
  | 'coin';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  playbackRate?: number;
}
