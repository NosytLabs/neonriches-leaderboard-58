
/**
 * Sound hooks types
 */

import { SoundType, SoundOptions } from '@/types/sound-types';

export interface PlayOptions extends SoundOptions {
  interrupt?: boolean;
  fadeIn?: boolean;
  fadeOut?: boolean;
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

export interface SoundHook {
  playSound: (sound: SoundType, options?: PlayOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
  isPlaying: boolean;
  currentSound: SoundType | null;
}

export interface SoundProviderProps {
  children: React.ReactNode;
}

export interface SoundContextType {
  playSound: (sound: SoundType, options?: PlayOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
  isPlaying: boolean;
  currentSound: SoundType | null;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  volume: number;
}

// Alias for backwards compatibility
export type UseSoundHook = SoundHook;

// Re-export SoundType and SoundOptions
export type { SoundType, SoundOptions };
