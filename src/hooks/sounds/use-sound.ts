
import { useState, useEffect, useCallback, useRef } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from './types';
import { getSoundPath } from '@/utils/getSoundPath';

// Central unified sound hook
export const useSound = (): UseSoundHook => {
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(() => {
    const savedPreference = localStorage.getItem('soundEnabled');
    return savedPreference !== null ? savedPreference === 'true' : true;
  });
  
  const [volume, setVolumeState] = useState<number>(() => {
    const savedVolume = localStorage.getItem('soundVolume');
    return savedVolume !== null ? parseFloat(savedVolume) : 0.5;
  });
  
  const audioElements = useRef<Record<string, HTMLAudioElement>>({});
  
  useEffect(() => {
    localStorage.setItem('soundEnabled', isSoundEnabled.toString());
  }, [isSoundEnabled]);
  
  useEffect(() => {
    localStorage.setItem('soundVolume', volume.toString());
    
    // Update volume for all existing audio elements
    Object.values(audioElements.current).forEach(audio => {
      audio.volume = volume;
    });
  }, [volume]);
  
  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  }, []);
  
  const toggleSounds = useCallback(() => {
    setIsSoundEnabled(prev => !prev);
  }, []);
  
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (!isSoundEnabled) return;
    
    const soundOptions = {
      volume: options?.volume !== undefined ? options.volume : volume,
      loop: options?.loop || false,
      playbackRate: options?.playbackRate || 1,
      onEnd: options?.onEnd
    };
    
    // Stop any existing sound of the same type
    stopSound(type);
    
    // Get the appropriate sound file path
    const soundPath = getSoundPath(type);
    if (!soundPath) return;
    
    // Create and configure the audio element
    const audio = new Audio(soundPath);
    audio.volume = soundOptions.volume;
    audio.loop = soundOptions.loop;
    audio.playbackRate = soundOptions.playbackRate;
    
    if (soundOptions.onEnd) {
      audio.addEventListener('ended', soundOptions.onEnd);
    }
    
    // Store the audio element for later reference
    audioElements.current[type] = audio;
    
    // Play the sound
    audio.play().catch(error => {
      console.error(`Error playing sound ${type}:`, error);
    });
  }, [isSoundEnabled, volume]);
  
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop a specific sound
      const audio = audioElements.current[type];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        delete audioElements.current[type];
      }
    } else {
      // Stop all sounds
      Object.values(audioElements.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioElements.current = {};
    }
  }, []);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(audioElements.current).forEach(audio => {
        audio.pause();
      });
      audioElements.current = {};
    };
  }, []);
  
  return {
    playSound,
    stopSound,
    toggleSounds,
    isSoundEnabled,
    setVolume
  };
};

// Default export for convenience
export default useSound;
