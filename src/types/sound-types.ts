
// Define sound system types
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'chime'
  | 'levelUp'
  | 'level_up'    // alias for levelUp
  | 'purchase'
  | 'royal'
  | 'claim'
  | 'coin'
  | 'swoosh'
  | 'message'
  | 'reward'
  | 'fanfare'
  | 'rank_up'     // keep both formats for compatibility
  | 'rankUp'      // alternative format
  | 'transfer'
  | 'boost'
  | 'unlock'
  | 'loading'
  | 'complete'
  | 'alert'
  | 'join'
  | 'leave'
  | 'badge'
  | 'deposit'
  | 'withdrawal'
  | 'protection'
  | 'sparkle';

export type SoundPackType = 
  | 'default'
  | 'premium'
  | 'royal'
  | 'minimal'
  | 'classic'
  | 'modern'
  | 'retro';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  interrupt?: boolean;
  onEnded?: () => void;
  onEnd?: () => void;       // Alias for onEnded
  onComplete?: () => void;  // Alias for onEnded
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: SoundPackType;
  muted: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: string;
  sounds: string[];
  features: string[];
  enabled: boolean;
}

// Export to avoid duplicate declaration conflicts
export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
}

export type NotificationSoundOptions = AudioOptions;

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

// Re-export the Sound interface from hooks/sounds
export interface Sound {
  id: string;
  type: SoundType;
  src: string;
  volume?: number;
  loop?: boolean;
}

export interface SoundState {
  enabled: boolean;
  muted: boolean;
  volume: number;
  currentSound?: string;
  playing: boolean;
}

export interface SoundContextType {
  sounds: Sound[];
  state: SoundState;
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleMute: () => void;
  toggleSounds: () => void;
  setVolume: (volume: number) => void;
  isPlaying: (type?: SoundType) => boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type?: SoundType) => boolean;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleMuted: () => boolean;
  toggleSounds: () => boolean;
  setVolume: (volume: number) => void;
}
