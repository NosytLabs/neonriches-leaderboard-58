
export type SoundType = 
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'click'
  | 'hover'
  | 'purchase'
  | 'spend'
  | 'boost'
  | 'level-up'
  | 'level_up'
  | 'royal'
  | 'coin'
  | 'coinDrop'
  | 'fanfare'
  | 'alert'
  | 'message'
  | 'deposit'
  | 'withdrawal'
  | 'withdraw'
  | 'mockery'
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'reward'
  | 'rank_up'
  | 'team'
  | 'trumpet'
  | 'warning'
  | 'medallion'
  | 'royalAnnouncement'
  | 'seal'
  | 'swordClash'
  | 'noblesLaugh'
  | 'transfer'
  | 'unlock'
  | 'wish'
  | 'chime'
  | 'badge'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'inkScribble'
  | 'advertisement'
  | 'effect'
  | 'taunt'
  | 'joust'
  | 'duel'
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'stocks'
  | 'crown'
  | 'jester'
  | 'courtJester'
  | 'smokeBomb'
  | 'silence'
  | 'throne';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
  playbackRate?: number;
  detune?: number;
  delay?: number;
  seek?: number;
  interrupt?: boolean;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
  effects: Record<SoundType, boolean>;
  music: boolean;
  ambience: boolean;
}

export interface PremiumSoundPackDetails {
  id?: string;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound?: SoundType;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
  isSoundEnabled: boolean;
  toggleSounds?: () => boolean;
  toggleMuted: () => boolean;
  setVolume?: (volume: number) => void;
  currentVolume: number;
  soundConfig?: SoundConfig;
  currentSound?: SoundType | null;
}

export type SoundFunction = (type: SoundType, options?: SoundOptions) => void;
