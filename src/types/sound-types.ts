
/**
 * Sound system type definitions
 */

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
  | 'withdraw'
  | 'swordClash'
  | 'noblesLaugh'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'team'
  | 'transfer'
  | 'unlock'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'advertisement'
  | 'alert'
  | 'badge'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'warning'
  | 'levelUp'; // Added for compatibility with useSound.ts

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
  interrupt?: boolean;
  fadeIn?: boolean;
  fadeOut?: boolean;
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  delay?: number;
}

export type NotificationSoundOptions = SoundOptions;

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  premium: boolean;
  theme: 'standard' | 'royal' | 'minimal' | 'epic';
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

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}
