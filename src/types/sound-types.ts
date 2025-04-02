
/**
 * Sound system type definitions
 */

// Add 'message', 'reward', 'chime', 'fanfare' and other missing types
export type SoundType = 
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'achievement'
  | 'deposit'
  | 'withdrawal'
  | 'rank_up'
  | 'level_up'
  | 'coin'
  | 'shame'
  | 'mockery'
  | 'boost'
  | 'throne'
  | 'royal'
  | 'click'
  | 'message'
  | 'reward'
  | 'chime'
  | 'fanfare'
  | 'coinDrop'
  | 'royal_preview'
  | 'royal_bell'
  | 'royal_fanfare'
  | 'royal_announcement'
  | 'royal_success'
  | 'epic_preview'
  | 'epic_victory'
  | 'epic_defeat'
  | 'epic_discovery'
  | 'epic_challenge'
  | 'minimal_preview'
  | 'minimal_notification'
  | 'minimal_success'
  | 'minimal_alert'
  | 'minimal_action';

export interface SoundOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  fadeIn?: boolean;
  fadeOut?: boolean;
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onEnd?: () => void;
  playbackRate?: number;
  delay?: number;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: string;
  muted: boolean;
}

export interface Sound {
  id: string;
  type: SoundType;
  url: string;
  volume?: number;
  duration?: number;
  pack?: string;
}

export interface SoundPack {
  id: string;
  name: string;
  description: string;
  author: string;
  sounds: Record<SoundType, string>;
  isDefault?: boolean;
  isPremium?: boolean;
  price?: number;
}

export interface SoundState {
  isPlaying: boolean;
  currentSound: string | null;
  volume: number;
  muted: boolean;
}

export type PlaySoundFunction = (
  sound: SoundType,
  options?: SoundOptions
) => void;

export type StopSoundFunction = (sound?: SoundType) => void;

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}
