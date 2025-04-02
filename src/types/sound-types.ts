
// Create this file to include all needed sound types
export type SoundType =
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'coins'
  | 'purchase'
  | 'levelUp'
  | 'achievement'
  | 'transition'
  | 'hover'
  | 'select'
  | 'warning'
  | 'celebration'
  | 'welcome'
  | 'boost'
  | 'shame'
  | 'reward'
  | 'chime'
  | 'fanfare'
  | 'coinDrop'
  | 'coin'
  | 'deposit'
  | 'withdrawal'
  | 'rank_up'
  | 'mockery'
  | 'royal'
  | 'message'
  | 'level_up'
  | 'unlock'
  | 'withdraw'
  | 'team'
  | 'trumpet'
  | 'medallion'
  | 'royalAnnouncement'
  | 'royal_announcement'
  | 'throne'
  | 'toggle'
  | 'alert'
  | 'badge'
  | 'upgrade'
  | 'down'
  | 'up';

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  effects: Record<string, boolean>;
  premium: boolean;
  theme: string;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previews: Record<SoundType, string>;
  purchasable: boolean;
  icon?: string;
}

export interface SoundHook {
  playSound: (type: SoundType) => void;
  stopSound: (fade?: boolean) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  isPlaying: boolean;
  pauseSound?: () => void;
  resumeSound?: () => void;
  currentSound?: string | null;
}

export interface UseSoundHook {
  playSound: (type: SoundType) => void;
  stopSound: (type?: SoundType) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  isPlaying: (type: SoundType) => boolean;
  soundConfig?: SoundConfig;
  toggleMuted?: () => boolean;
  pauseSound?: () => void;
}

export type SoundEffectMap = Record<SoundType, HTMLAudioElement>;

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  detune?: number;
  muted?: boolean;
}

export interface UseNotificationSoundsReturn {
  playNotificationSound: (type: SoundType) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}
