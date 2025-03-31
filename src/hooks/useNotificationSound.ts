
import { useState, useEffect, useCallback } from 'react';
import { NotificationSoundOptions } from '@/types/mockery';

// Define the supported sound types
export type SoundType = 
  | 'click' 
  | 'coins' 
  | 'coins_drop' 
  | 'success' 
  | 'error' 
  | 'purchase' 
  | 'levelUp'
  | 'fanfare'
  | 'wish'
  | 'trumpets' 
  | 'notification' 
  | 'achievement' 
  | 'rankUp' 
  | 'button' 
  | 'hover' 
  | 'confetti' 
  | 'bell' 
  | 'fanfare' 
  | 'pop' 
  | 'whoosh'
  | 'magic' 
  | 'chime' 
  | 'royalty' 
  | 'pageChange' 
  | 'payment' 
  | 'reward' 
  | 'clap' 
  | 'surprise' 
  | 'shame';

const DEFAULT_VOLUME = 0.5;

/**
 * Custom hook for playing notification sounds with volume control
 */
const useNotificationSound = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [masterVolume, setMasterVolume] = useState<number>(0.5);
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);

  // Load user's sound preferences from localStorage on init
  useEffect(() => {
    const savedMuted = localStorage.getItem('sound_muted');
    const savedVolume = localStorage.getItem('sound_volume');
    
    if (savedMuted !== null) {
      setIsMuted(savedMuted === 'true');
    }
    
    if (savedVolume !== null) {
      setMasterVolume(parseFloat(savedVolume));
    }
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('sound_muted', isMuted.toString());
    localStorage.setItem('sound_volume', masterVolume.toString());
  }, [isMuted, masterVolume]);

  const playSound = useCallback((soundType: SoundType, options?: NotificationSoundOptions) => {
    if (isMuted) return;
    
    try {
      // Get the sound URL - placeholder for now, would be part of an asset system
      const soundUrl = `/sounds/${soundType}.mp3`;
      
      // Create the audio element
      const audio = new Audio(soundUrl);
      
      // Set volume (apply master volume × individual sound volume)
      const soundVolume = options?.volume !== undefined ? options.volume : DEFAULT_VOLUME;
      audio.volume = Math.min(masterVolume * soundVolume, 1.0);
      
      // Set other options
      if (options?.loop) {
        audio.loop = true;
      }
      
      // Play the sound (with optional delay)
      const delay = options?.delay || 0;
      if (delay > 0) {
        setTimeout(() => audio.play().catch(e => console.warn('Sound play error:', e)), delay * 1000);
      } else {
        audio.play().catch(e => console.warn('Sound play error:', e));
      }
      
      // Update last played sound type
      setLastPlayed(soundType);
      
      // Return audio object for external control
      return audio;
    } catch (error) {
      console.warn('Failed to play sound:', error);
      return null;
    }
  }, [isMuted, masterVolume]);

  const toggleMute = useCallback(() => {
    setIsMuted(prevMuted => !prevMuted);
  }, []);

  const setVolume = useCallback((volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    setMasterVolume(clampedVolume);
  }, []);

  return {
    playSound,
    toggleMute,
    setVolume,
    isMuted,
    masterVolume,
    lastPlayed
  };
};

export default useNotificationSound;
