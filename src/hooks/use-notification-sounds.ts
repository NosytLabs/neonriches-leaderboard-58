
import { useState, useCallback, useEffect } from 'react';
import { SoundType, UseNotificationSoundsReturn } from './sounds/types';
import { coreSounds, additionalSounds, getSoundInfo, soundExists } from './sounds/sound-assets';
import useAudioLoader from './sounds/use-audio-loader';
import { useToast } from './use-toast';

// Key for storing mute preference in localStorage
const MUTE_PREFERENCE_KEY = 'p2w_sound_muted';

const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(MUTE_PREFERENCE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  
  const {
    audioElements,
    loadedSounds,
    isInitialLoadComplete,
    preloadCoreSounds,
    loadSound,
    pauseAllSounds
  } = useAudioLoader();
  
  const { toast } = useToast();
  
  // Load core sounds on mount
  useEffect(() => {
    preloadCoreSounds(coreSounds);
  }, [preloadCoreSounds]);
  
  // Store mute preference in localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(MUTE_PREFERENCE_KEY, isMuted ? 'true' : 'false');
    } catch (e) {
      console.warn('Could not save sound preference to localStorage', e);
    }
  }, [isMuted]);
  
  // Toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  // Wrapper for preloadSounds to match the existing API
  const preloadSounds = useCallback(() => {
    preloadCoreSounds(coreSounds);
  }, [preloadCoreSounds]);
  
  // Play a specific sound with custom volume
  const playSound = useCallback(async (type: SoundType, volumeMultiplier = 1) => {
    // Skip if muted
    if (isMuted) return;
    
    // Skip if sound type doesn't exist
    if (!soundExists(String(type))) {
      console.warn(`Sound "${type}" not defined`);
      return;
    }
    
    const soundInfo = getSoundInfo(String(type));
    
    // Skip if sound doesn't exist
    if (!soundInfo) {
      console.warn(`Sound "${type}" info not found`);
      return;
    }
    
    try {
      // Load sound if not already loaded
      let audioElement = audioElements[String(type)];
      
      if (!audioElement) {
        audioElement = await loadSound(String(type), soundInfo);
        
        if (!audioElement) {
          console.warn(`Failed to load sound "${type}"`);
          
          // Show fallback visual notification for important sounds
          if (['notification', 'error', 'success'].includes(String(type))) {
            toast({
              title: `${String(type).charAt(0).toUpperCase() + String(type).slice(1)}`,
              description: "Sound could not be played",
              variant: String(type) === 'error' ? 'destructive' : 'default',
              duration: 2000,
            });
          }
          return;
        }
      }
      
      // Create a clone to allow for overlapping sounds
      const sound = audioElement.cloneNode() as HTMLAudioElement;
      
      // Set volume (capped at 1.0)
      sound.volume = Math.min(soundInfo.volume * volumeMultiplier, 1.0);
      
      // Play the sound and handle errors
      sound.play()
        .catch(e => {
          // Most browsers require user interaction before playing audio
          console.log('Audio playback error (likely needs user interaction):', e);
          
          // Show fallback visual notification for important sounds
          if (['notification', 'error', 'success'].includes(String(type))) {
            toast({
              title: `${String(type).charAt(0).toUpperCase() + String(type).slice(1)}`,
              description: "Sound could not be played. Try interacting with the page first.",
              variant: String(type) === 'error' ? 'destructive' : 'default',
              duration: 3000,
            });
          }
        });
    } catch (error) {
      console.error('Failed to play sound:', error);
    }
  }, [audioElements, loadSound, isMuted, toast]);
  
  return {
    playSound,
    preloadSounds,
    pauseAllSounds,
    soundsLoaded: isInitialLoadComplete,
    loadedSoundTypes: loadedSounds,
    isMuted,
    toggleMute
  };
};

export default useNotificationSounds;
