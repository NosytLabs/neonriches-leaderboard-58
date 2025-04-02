
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
  | 'royalAnnouncement';

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
  icon?: string; // Added for compatibility
}

export interface SoundHook {
  playSound: (type: SoundType) => void;
  stopSound: (fade?: boolean) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  isPlaying: boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType) => void;
  stopSound: (type?: SoundType) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  isPlaying: (type: SoundType) => boolean;
}

export type SoundEffectMap = Record<SoundType, HTMLAudioElement>;
