
// Define sound types
export type SoundType = 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'levelUp' 
  | 'transaction' 
  | 'warning' 
  | 'message' 
  | 'ui' 
  | 'transition' 
  | 'hover'
  | 'shame'
  | 'royal'
  | 'coin'
  | 'coinDrop'
  | 'team'
  | 'badge'
  | 'alert'
  | 'chime'
  | 'reward'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'withdraw'
  | 'royalAnnouncement'
  | 'fanfare'
  | 'trumpet'
  | 'medallion'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'crown'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'putridEgg'
  | 'fish'
  | 'deposit'
  | 'rank_up'
  | 'mockery'
  | 'level_up'
  | 'throne'
  | 'boost'
  | 'unlock';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  premium?: boolean;
}

// Sound hook interface
export interface SoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: () => void;
  pauseSound: () => void;
  resumeSound: () => void;
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
  play: (sound: SoundType, options?: SoundOptions) => void;
  isPlaying: boolean;
  isSoundEnabled: boolean;
}

// Alias for backward compatibility
export type UseSoundHook = SoundHook;

// Add missing types for notification sounds
export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  playNotificationSound: (type?: string, options?: SoundOptions) => void;
  playSoundForNotification: (type: string) => void;
  playNewNotificationSound: () => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  toggleMuted: () => boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
}

// Add notification type for NotificationItem
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'rank_change' | 'achievement' | 'royal' | 'event' | 'poke' | 'system' | 'deposit' | 'milestone';
  read: boolean;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

// Add use-notifications interface
export interface UseNotificationsResult {
  notifications: Notification[];
  unreadCount: number;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  handleMarkAllAsRead: () => void;
  handleMarkAsRead: (id: string) => void;
  handleDeleteNotification: (id: string) => void;
  formatTimestamp: (timestamp: Date) => string;
  playSound: (sound: SoundType, volume?: number) => void;
}
