
export type SoundType = 
  | 'click'
  | 'success'
  | 'error' 
  | 'notification'
  | 'purchase'
  | 'achievement'
  | 'rank_up'
  | 'team'
  | 'mockery'
  | 'level_up'
  | 'message'
  | 'withdrawal'
  | 'coin'
  | 'chime';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  detune?: number;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
}

export interface SoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type: SoundType) => void;
  pauseSound: (type: SoundType) => void;
  resumeSound: (type: SoundType) => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
  soundConfig: SoundConfig;
  mute: () => void;
  unmute: () => void;
  toggleMuted: () => boolean;
  currentVolume: number;
  play: (type: SoundType, options?: SoundOptions) => void;
  isPlaying: boolean | ((type: SoundType) => boolean);
  isSoundEnabled: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  timestamp: Date;
}

export interface UseNotificationSoundsReturn {
  playSoundForNotification: (type: string) => void;
  playNewNotificationSound: () => void;
  playSound: (type: SoundType, options?: SoundOptions) => void;
  playNotificationSound: (type?: string, options?: any) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  toggleMuted: () => boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
}

export interface UseNotificationsResult {
  notifications: Notification[];
  unreadCount: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  handleMarkAllAsRead: () => void;
  handleMarkAsRead: (id: string) => void;
  handleDeleteNotification: (id: string) => void;
  formatTimestamp: (timestamp: Date) => string;
  playSound: (soundType: SoundType, volume?: number) => void;
}
