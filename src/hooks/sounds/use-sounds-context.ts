
import { useContext } from 'react';
import { SoundContext } from './SoundProvider';
import { SoundHook } from '../sound-types';

/**
 * Hook to use the sound context
 */
export const useSoundsContext = (): SoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    console.error('useSoundsContext must be used within a SoundProvider');
    
    // Return a no-op implementation
    return {
      playSound: () => {},
      stopSound: () => {},
      pauseSound: () => {},
      resumeSound: () => {},
      toggleMute: () => {},
      isMuted: false,
      setVolume: () => {},
      getVolume: () => 0,
      isEnabled: false,
      toggleEnabled: () => {}
    };
  }
  
  return context;
};

export default useSoundsContext;
