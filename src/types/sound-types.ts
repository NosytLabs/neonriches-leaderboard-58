
export type SoundType =
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'coin'
  | 'purchase'
  | 'deposit'
  | 'withdrawal'
  | 'levelUp'
  | 'level_up'
  | 'boost'
  | 'message'
  | 'mockery'
  | 'coinDrop'
  | 'shame'
  | 'fanfare'
  | 'royal'
  | 'protection'
  | 'sparkle'
  | 'royalAnnouncement'
  | 'trumpet'
  | 'medallion'
  | 'seal'
  | 'transfer'
  | 'unlock'
  | 'team'
  | 'rank_up'
  | 'reward'
  | 'swordClash'
  | 'noblesLaugh'
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
  | 'throne'
  | 'chime'
  | 'warning'
  | 'withdraw';

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
}

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  effects?: Record<string, boolean>;
  premium?: boolean;
  theme?: string;
}

export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  toggleMuted: () => boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
  playNotificationSound: (type?: string, options?: SoundOptions) => void;
}

export interface UseSoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  pauseSound?: (sound: SoundType) => void;
  resumeSound?: () => void;
  stopSound?: (sound: SoundType) => void;
  currentSound?: string | null;
  currentVolume?: number;
  isSoundEnabled?: boolean;
  isMuted?: boolean;
  soundConfig?: SoundConfig;
  toggleMuted?: () => boolean;
  mute?: () => void;
  unmute?: () => void;
  setVolume?: (volume: number) => void;
  play?: (sound: SoundType, options?: SoundOptions) => void;
  isPlaying?: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  cost: number;
  sounds: Record<string, string>;
  previews: string[];
  icon?: string;
}

export type SoundHook = {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (sound: SoundType) => void;
  pauseSound?: (sound: SoundType) => void;
  resumeSound?: () => void;
  isPlaying: boolean;
  currentSound?: string | null;
  currentVolume?: number;
  isSoundEnabled?: boolean;
  isMuted?: boolean;
  soundConfig?: SoundConfig;
  toggleMuted?: () => boolean;
  mute?: () => void;
  unmute?: () => void;
  setVolume?: (volume: number) => void;
};
