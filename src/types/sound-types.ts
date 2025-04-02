/**
 * Sound system type definitions
 */

// Complete list of all valid sound types in the application
export type SoundType = 
  // Core sounds
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
  // Premium sound pack sounds
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
  | 'minimal_action'
  // Other specific sounds
  | 'levelUp'
  | 'sparkle'
  | 'protection'
  | 'transfer'
  | 'unlock';

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

// Backwards compatibility types
export type NotificationSoundOptions = SoundOptions;

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
}

export interface AudioLoaderReturn {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isLoaded: boolean;
}

export interface UseSoundReturn {
  play: (sound: SoundType, options?: AudioOptions) => void;
  stop: (sound: SoundType) => void;
  stopAll: () => void;
}
