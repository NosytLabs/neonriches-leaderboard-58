
/**
 * Types for the sound system
 */

export type SoundType = 
  | 'click'
  | 'hover'
  | 'notification'
  | 'success'
  | 'error'
  | 'purchase'
  | 'deposit'
  | 'withdraw'
  | 'rank-up'
  | 'achievement'
  | 'royal-decree'
  | 'message'
  | 'coin-drop'
  | 'crown-click'
  | 'pageTransition'
  | 'shame'
  | 'win'
  | 'lose'
  | 'reward'
  | 'seal'
  | 'parchmentUnfurl'
  | 'swordClash'
  | 'coinDrop'
  | 'royalAnnouncement';

export interface SoundAsset {
  id: string;
  url: string;
  volume?: number;
  loop?: boolean;
  duration?: number;
}

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  delay?: number;
}

