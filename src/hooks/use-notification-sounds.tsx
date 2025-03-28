
import { useCallback, useState, useEffect } from 'react';
import type { SoundType } from './sounds/types';

const useNotificationSounds = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [preloadStatus, setPreloadStatus] = useState<Record<string, boolean>>({});
  
  // Preload common sounds
  const preloadSounds = useCallback(() => {
    console.log('Preloading sounds');
    const commonSounds: SoundType[] = ['click', 'success', 'notification'];
    
    commonSounds.forEach(type => {
      try {
        const audio = new Audio();
        // In a real implementation, we would set actual sound sources
        audio.src = `/sounds/${type}.mp3`;
        audio.load();
        setPreloadStatus(prev => ({ ...prev, [type]: true }));
      } catch (error) {
        console.error(`Error preloading sound ${type}:`, error);
      }
    });
  }, []);
  
  // Initialize preloading on mount
  useEffect(() => {
    preloadSounds();
  }, [preloadSounds]);
  
  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    if (isMuted) return;
    
    try {
      console.log(`Playing sound: ${type} at volume ${volume}`);
      // Implementation would play actual sounds
      // In this mockup, we just log the action
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [isMuted]);
  
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
    console.log('Toggle mute functionality');
  }, []);

  return { 
    playSound,
    isMuted,
    toggleMute,
    preloadSounds
  };
};

export default useNotificationSounds;
