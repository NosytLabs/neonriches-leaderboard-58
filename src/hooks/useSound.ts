
import { useCallback } from 'react';

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

export const useSound = () => {
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    console.log(`Playing sound: ${type} with options:`, options);
    // Actual sound implementation would go here
  }, []);

  const stopSound = useCallback((type?: SoundType) => {
    console.log(`Stopping sound: ${type || 'all'}`);
    // Actual sound stopping implementation would go here
  }, []);

  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);

  return {
    playSound,
    stopSound,
    play,
    isSoundEnabled: true,
    currentVolume: 1.0
  };
};

export default useSound;
