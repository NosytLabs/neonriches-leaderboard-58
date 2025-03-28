
// Sound type definitions

// Types of sounds available in the application
export type SoundType =
  | 'notification'
  | 'success'
  | 'error'
  | 'shame'
  | 'purchase'
  | 'levelUp'
  | 'swordClash'
  | 'click'
  | 'hover'
  | 'coinDrop'
  | 'pageTransition'
  | 'parchmentUnfurl'
  | 'seal'
  | 'royalAnnouncement'
  | 'reward'
  | 'wish'
  | 'advertisement'
  | 'pageChange'
  | 'trumpet'
  | 'medallion'
  | 'noblesLaugh'
  | 'inkScribble';

// Premium sound pack types
export type PremiumSoundPack = string;

// Sound settings
export interface SoundSettings {
  enabled: boolean;
  volume: number;
  pack: PremiumSoundPack;
}
