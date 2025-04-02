
import { useContext } from 'react';
import { SoundContext } from '@/contexts/sound';
import { SoundType, SoundOptions } from '@/types/sound-types';

interface UseSoundHook {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
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

/**
 * Hook to play sound effects in the application
 */
export const useSound = (): UseSoundHook => {
  const soundContext = useContext(SoundContext);
  
  if (!soundContext) {
    console.warn('useSound must be used within a SoundProvider');
    
    // Return a dummy implementation that does nothing
    return {
      playSound: () => {},
      stopSound: () => {},
      pauseSound: () => {},
      resumeSound: () => {},
      isPlaying: false,
      currentSound: null,
      mute: () => {},
      unmute: () => {},
      isMuted: false,
      setVolume: () => {},
      volume: 1
    };
  }
  
  return soundContext;
};

export default useSound;
