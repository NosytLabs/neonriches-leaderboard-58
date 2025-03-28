
import { useEffect, useRef } from 'react';

// Define sound types
type SoundType = 'coinDrop' | 'reward' | 'purchase' | 'error' | 'levelUp' | 'unlock';

// Map of sound URLs
const SOUND_URLS: Record<SoundType, string> = {
  coinDrop: 'https://assets.mixkit.co/sfx/preview/mixkit-coin-falling-on-surface-42.mp3',
  reward: 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-complete-or-approved-mission-205.mp3',
  purchase: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
  error: 'https://assets.mixkit.co/sfx/preview/mixkit-negative-answer-lose-2032.mp3',
  levelUp: 'https://assets.mixkit.co/sfx/preview/mixkit-player-boost-in-video-game-2161.mp3',
  unlock: 'https://assets.mixkit.co/sfx/preview/mixkit-magic-sweep-game-trophy-257.mp3'
};

// Hook for managing notification sounds
export default function useNotificationSounds() {
  // Using refs to store audio objects
  const audioRefs = useRef<Record<SoundType, HTMLAudioElement | null>>({
    coinDrop: null,
    reward: null,
    purchase: null,
    error: null,
    levelUp: null,
    unlock: null
  });
  
  // Initialize audio elements on mount
  useEffect(() => {
    // Create audio elements for each sound type
    const audioElements: Record<SoundType, HTMLAudioElement> = {
      coinDrop: new Audio(SOUND_URLS.coinDrop),
      reward: new Audio(SOUND_URLS.reward),
      purchase: new Audio(SOUND_URLS.purchase),
      error: new Audio(SOUND_URLS.error),
      levelUp: new Audio(SOUND_URLS.levelUp),
      unlock: new Audio(SOUND_URLS.unlock)
    };
    
    // Set common properties
    Object.values(audioElements).forEach(audio => {
      audio.preload = 'auto';
      audio.volume = 0.5;
    });
    
    // Store in refs
    audioRefs.current = audioElements;
    
    // Cleanup function
    return () => {
      // Pause and nullify all audio elements
      Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);
  
  // Function to play a specific sound
  const playSound = (type: SoundType, volume: number = 0.5) => {
    const audio = audioRefs.current[type];
    if (audio) {
      audio.volume = volume;
      // Reset audio to beginning if already playing
      audio.currentTime = 0;
      audio.play().catch(err => {
        // Browser might block autoplay, handle gracefully
        console.log('Audio playback blocked or error:', err);
      });
    }
  };
  
  return { playSound };
}
