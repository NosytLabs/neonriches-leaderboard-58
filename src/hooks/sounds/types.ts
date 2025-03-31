
// Sound system type definitions

export type SoundType = 
  | 'coin' 
  | 'success' 
  | 'error' 
  | 'click' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'deposit'
  | 'mockery'
  | 'fanfare'
  | 'levelUp'
  | 'shame'
  | 'protection'
  | 'sparkle';

export interface SoundCategory {
  name: string;
  sounds: SoundFile[];
}

export interface SoundFile {
  id: string;
  name: string;
  file: string;
  duration?: number;
  category: string;
  description?: string;
}

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  effects: Record<string, boolean>;
  music: boolean;
  musicVolume: number;
}

export interface UseAudioReturn {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
}
