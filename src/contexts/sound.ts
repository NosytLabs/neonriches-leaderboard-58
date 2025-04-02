
import { createContext } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';

export interface SoundContextType {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const defaultContext: SoundContextType = {
  playSound: () => {},
  stopSound: () => {},
  pauseSound: () => {},
  resumeSound: () => {},
  isMuted: false,
  setMuted: () => {},
  volume: 0.5,
  setVolume: () => {},
  isPremium: false,
  setPremium: () => {},
  isEnabled: true,
  setEnabled: () => {}
};

export const SoundContext = createContext<SoundContextType>(defaultContext);

export default SoundContext;
