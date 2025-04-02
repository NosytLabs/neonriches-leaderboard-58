
// Define the available sound types
export type SoundType = 
  | 'click'
  | 'hover'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'coins'
  | 'achievement'
  | 'levelUp'
  | 'warning'
  | 'toggle'
  | 'alert'
  | 'badge'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'royal_preview'
  | 'royal_bell'
  | 'royal_fanfare'
  | 'royalAnnouncement'
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
  | 'throne';

// Sound configuration options
export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
  pitch?: number;
  playbackRate?: number;
  groupId?: string;
  stopOthers?: boolean;
  onEnd?: () => void;
}

// Sound configuration
export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  effects: Record<string, boolean>;
  premium: boolean;
  theme: string;
}

// Sound hook return type
export interface SoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  isSoundEnabled: boolean;
  currentVolume: number;
  currentSound?: SoundType;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  toggleSounds?: () => void;
  toggleMuted?: () => void;
  setVolume?: (volume: number) => void;
  soundConfig?: SoundConfig;
}

// Use Sound hook return type for broader functionality
export interface UseSoundHook extends SoundHook {
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  toggleSounds: () => void;
  toggleMuted: () => void;
  setVolume: (volume: number) => void;
  soundConfig: SoundConfig;
}

// Notification sounds hook return type
export interface UseNotificationSoundsReturn {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  playNotificationSound: (type?: SoundType, options?: SoundOptions) => void;
}
