
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
  | 'levelUp'
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
  | 'sparkle'
  | 'protection'
  | 'transfer'
  | 'unlock'
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
  | 'alert'
  | 'badge'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'withdraw'
  | 'thumbsDown'
  | 'advertisement'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'noblesLaugh'
  | 'swordClash'
  | 'medallion'
  | 'trumpet'
  | 'seal'
  | 'team'
  | 'royalAnnouncement'
  | 'warning'; // Added missing warning type for compatibility

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
  once?: boolean;
  format?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
  duration?: number;
  playbackRate?: number; // Added for compatibility with hooks/useSound.ts
  onEnd?: () => void; // Added for compatibility with hooks/useSound.ts
  interrupt?: boolean; // Added for compatibility with hooks/sounds/types.ts
  onStart?: () => void; // Added for compatibility with hooks/sounds/types.ts
  onPause?: () => void; // Added for compatibility with hooks/sounds/types.ts
  onResume?: () => void; // Added for compatibility with hooks/sounds/types.ts
  delay?: number; // Added for compatibility with sound-types.d.ts
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  previewSound: SoundType;
  price: number;
  tier: string;
  icon?: string;
  sounds?: SoundType[];
}

// For backward compatibility with sound-types.d.ts
export type NotificationSoundOptions = SoundOptions;
export type AudioOptions = SoundOptions;

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
  play: (sound: SoundType, options?: SoundOptions) => void;
  stop: (sound: SoundType) => void;
  stopAll: () => void;
}
