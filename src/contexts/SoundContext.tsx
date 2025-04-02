
import { createContext } from 'react';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

/**
 * Sound context for the application
 */
export interface SoundContextType extends SoundHook {
  // All the properties are already defined in SoundHook
}

const defaultContext: SoundContextType = {
  playSound: () => {},
  stopSound: () => {},
  pauseSound: () => {},
  resumeSound: () => {},
  toggleMute: () => false,
  isMuted: false,
  setVolume: () => {},
  getVolume: () => 0,
  isEnabled: false,
  toggleEnabled: () => {},
  
  // Additional properties for compatibility
  play: () => {},
  soundConfig: {
    enabled: false,
    volume: 0,
    muted: true
  },
  mute: () => {},
  unmute: () => {},
  toggleMuted: () => false,
  currentVolume: 0,
  isPlaying: false,
  isSoundEnabled: false,
};

export const SoundContext = createContext<SoundContextType>(defaultContext);

export default SoundContext;
