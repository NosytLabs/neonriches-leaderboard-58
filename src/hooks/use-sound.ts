import { useCallback } from 'react';

type SoundName = 
  | 'click'
  | 'success'
  | 'error'
  | 'purchase'
  | 'notification'
  | 'levelUp'
  | 'coin';

interface SoundAPI {
  playSound: (soundName: SoundName) => void;
  stopSound: (soundName: SoundName) => void;
  stopAllSounds: () => void;
}

// Simple sound implementation (to be enhanced later)
export const useSound = (): SoundAPI => {
  const playSound = useCallback((soundName: SoundName) => {
    try {
      const audio = new Audio(`/sounds/${soundName}.mp3`);
      audio.volume = 0.5;
      audio.play().catch(err => {
        console.log(`Failed to play sound ${soundName}:`, err);
      });
    } catch (err) {
      console.log(`Error playing sound ${soundName}:`, err);
    }
  }, []);

  const stopSound = useCallback((soundName: SoundName) => {
    // This would require keeping reference to active sounds
    console.log(`Stopping sound ${soundName}`);
  }, []);

  const stopAllSounds = useCallback(() => {
    console.log('Stopping all sounds');
  }, []);

  return {
    playSound,
    stopSound,
    stopAllSounds
  };
};

export default useSound;
