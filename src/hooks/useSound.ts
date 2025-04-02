
import { useCallback } from 'react';
import { useSound as useBaseSound } from './sounds/use-sound';

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
  | 'level_up' 
  | 'shame' 
  | 'royal' 
  | 'boost' 
  | 'message'
  | 'swordClash'
  | 'noblesLaugh'
  | 'withdraw'
  | 'withdrawal'
  | 'coinDrop'
  | 'protection'
  | 'sparkle'
  | 'reward'
  | 'rank_up'
  | 'team'
  | 'trumpet'
  | 'warning'
  | 'medallion'
  | 'royalAnnouncement'
  | 'seal';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

// Create a function that will be returned by the hook
export type SoundFunction = (type: SoundType, options?: SoundOptions) => void;

// The main hook interface
export interface SoundHook {
  playSound: SoundFunction;
  stopSound: (type?: SoundType) => void;
  play: SoundFunction;
  isSoundEnabled: boolean;
  currentVolume: number;
}

export const useSound = (): SoundHook => {
  // Use the base sound hook
  const baseSound = useBaseSound();
  
  // Forward the methods
  return {
    playSound: baseSound.playSound,
    stopSound: baseSound.stopSound,
    play: baseSound.play,
    isSoundEnabled: baseSound.isSoundEnabled,
    currentVolume: baseSound.currentVolume
  };
};

// Also export default as a function that returns the hook result
const defaultUseSound = (): SoundHook => {
  return useSound();
};

export default defaultUseSound;
