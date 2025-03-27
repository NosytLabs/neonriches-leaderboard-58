
import { useState, useCallback, useEffect } from 'react';
import { SoundType, UseNotificationSoundsReturn } from './sounds/types';
import { coreSounds, additionalSounds, getSoundInfo } from './sounds/sound-assets';
import useAudioLoader from './sounds/use-audio-loader';

const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const {
    audioElements,
    loadedSounds,
    isInitialLoadComplete,
    preloadCoreSounds,
    loadSound
  } = useAudioLoader();
  
  // Load core sounds on mount
  useEffect(() => {
    preloadCoreSounds(coreSounds);
  }, [preloadCoreSounds]);
  
  // Wrapper for preloadSounds to match the existing API
  const preloadSounds = useCallback(() => {
    preloadCoreSounds(coreSounds);
  }, [preloadCoreSounds]);
  
  // Play a specific sound with custom volume
  const playSound = useCallback(async (type: SoundType, volumeMultiplier = 1) => {
    const soundInfo = getSoundInfo(type);
    
    // Skip if sound doesn't exist
    if (!soundInfo) {
      console.warn(`Sound "${type}" not defined`);
      return;
    }
    
    // Load sound if not already loaded
    if (!audioElements[type]) {
      await loadSound(type, soundInfo);
    }
    
    // Skip if sound still doesn't exist after attempting to load
    if (!audioElements[type]) {
      return;
    }
    
    try {
      // Create a clone to allow for overlapping sounds
      const sound = audioElements[type].cloneNode() as HTMLAudioElement;
      
      // Set volume (capped at 1.0)
      sound.volume = Math.min(soundInfo.volume * volumeMultiplier, 1.0);
      
      // Play the sound
      sound.play().catch(e => {
        // Most browsers require user interaction before playing audio
        console.log('Audio playback error (likely needs user interaction):', e);
      });
    } catch (error) {
      console.error('Failed to play sound:', error);
    }
  }, [audioElements, loadSound]);
  
  return {
    playSound,
    preloadSounds,
    soundsLoaded: isInitialLoadComplete,
    loadedSoundTypes: loadedSounds
  };
};

export default useNotificationSounds;
