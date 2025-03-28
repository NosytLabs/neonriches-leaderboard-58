
import { useCallback, useEffect, useRef, useState } from 'react';
import { soundAssets, defaultVolumes, SoundNames } from './sounds/sound-assets';
import { SoundType } from './sounds/types';

const useNotificationSounds = () => {
  const audioRefs = useRef<{[key: string]: HTMLAudioElement}>({});
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [soundsLoaded, setSoundsLoaded] = useState<boolean>(false);
  const [loadedSoundTypes, setLoadedSoundTypes] = useState<string[]>([]);
  
  // Initialize audio elements
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if user has muted sounds previously
    const savedMuteState = localStorage.getItem('soundMuted');
    if (savedMuteState === 'true') {
      setIsMuted(true);
    }

    Object.keys(soundAssets).forEach(soundKey => {
      try {
        const audio = new Audio(soundAssets[soundKey as SoundNames]);
        audio.preload = 'auto';
        audioRefs.current[soundKey] = audio;
      } catch (err) {
        console.error(`Failed to load sound: ${soundKey}`, err);
      }
    });
    
    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      audioRefs.current = {};
    };
  }, []);
  
  const preloadSounds = useCallback(() => {
    const loadedTypes: string[] = [];
    
    Object.keys(soundAssets).forEach(soundKey => {
      const audio = audioRefs.current[soundKey];
      if (audio) {
        audio.load();
        loadedTypes.push(soundKey);
      }
    });
    
    setLoadedSoundTypes(loadedTypes);
    setSoundsLoaded(true);
  }, []);
  
  const playSound = useCallback((soundType: SoundType, volumeMultiplier = 1.0) => {
    if (isMuted) return;
    
    const audio = audioRefs.current[soundType];
    
    if (!audio) {
      console.warn(`Sound ${soundType} not found`);
      return;
    }
    
    // Reset the audio to the beginning if it's already playing
    audio.pause();
    audio.currentTime = 0;
    
    // Get the base volume for this sound type or use a default
    const baseVolume = defaultVolumes[soundType as SoundNames] || 0.3;
    
    // Apply the volume multiplier
    const finalVolume = Math.min(Math.max(baseVolume * volumeMultiplier, 0), 1);
    audio.volume = finalVolume;
    
    // Play the sound
    audio.play().catch(err => {
      console.error(`Error playing sound ${soundType}:`, err);
    });
  }, [isMuted]);
  
  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newState = !prev;
      // Save mute state to localStorage
      localStorage.setItem('soundMuted', String(newState));
      return newState;
    });
  }, []);
  
  const pauseAllSounds = useCallback(() => {
    Object.values(audioRefs.current).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }, []);
  
  return { 
    playSound, 
    preloadSounds, 
    pauseAllSounds, 
    soundsLoaded, 
    loadedSoundTypes, 
    isMuted, 
    toggleMute 
  };
};

export default useNotificationSounds;
