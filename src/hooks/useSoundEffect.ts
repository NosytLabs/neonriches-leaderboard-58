
import { useState, useEffect, useCallback } from 'react';

interface UseSoundEffectOptions {
  baseUrl?: string;
  volume?: number;
  enabled?: boolean;
}

interface Sound {
  name: string;
  url: string;
  element?: HTMLAudioElement;
}

export interface UseSoundEffectResult {
  playSound: (name: string) => void;
  stopSound: (name: string) => void;
  stopAllSounds: () => void;
  isPlaying: (name: string) => boolean;
  toggleMute: () => void;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
}

/**
 * A hook for playing sound effects in React components
 */
const useSoundEffect = (
  sounds: Record<string, string>,
  options: UseSoundEffectOptions = {}
): UseSoundEffectResult => {
  const { baseUrl = '/sounds/', volume = 0.5, enabled = true } = options;
  const [audioElements, setAudioElements] = useState<Sound[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);

  // Initialize audio elements
  useEffect(() => {
    if (!enabled) return;
    
    const initialSounds = Object.entries(sounds).map(([name, url]) => ({
      name,
      url: url.startsWith('http') ? url : `${baseUrl}${url}`,
      element: new Audio(url.startsWith('http') ? url : `${baseUrl}${url}`)
    }));
    
    initialSounds.forEach(sound => {
      if (sound.element) {
        sound.element.volume = currentVolume;
        sound.element.preload = 'auto';
      }
    });
    
    setAudioElements(initialSounds);
    
    // Cleanup
    return () => {
      initialSounds.forEach(sound => {
        if (sound.element) {
          sound.element.pause();
          sound.element.src = '';
        }
      });
    };
  }, [baseUrl, sounds, enabled, currentVolume]);

  // Play a sound by name
  const playSound = useCallback((name: string) => {
    if (!enabled || isMuted) return;
    
    const sound = audioElements.find(s => s.name === name);
    if (sound?.element) {
      sound.element.currentTime = 0;
      sound.element.play().catch(error => {
        console.error(`Error playing sound "${name}":`, error);
      });
    }
  }, [audioElements, enabled, isMuted]);

  // Stop a sound by name
  const stopSound = useCallback((name: string) => {
    const sound = audioElements.find(s => s.name === name);
    if (sound?.element) {
      sound.element.pause();
      sound.element.currentTime = 0;
    }
  }, [audioElements]);

  // Stop all sounds
  const stopAllSounds = useCallback(() => {
    audioElements.forEach(sound => {
      if (sound.element) {
        sound.element.pause();
        sound.element.currentTime = 0;
      }
    });
  }, [audioElements]);

  // Check if a sound is playing
  const isPlaying = useCallback((name: string) => {
    const sound = audioElements.find(s => s.name === name);
    return sound?.element ? !sound.element.paused : false;
  }, [audioElements]);

  // Toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  // Set volume for all sounds
  const setVolume = useCallback((volume: number) => {
    const clampedVolume = Math.min(1, Math.max(0, volume));
    setCurrentVolume(clampedVolume);
    
    audioElements.forEach(sound => {
      if (sound.element) {
        sound.element.volume = clampedVolume;
      }
    });
  }, [audioElements]);

  // Get current volume
  const getVolume = useCallback(() => {
    return currentVolume;
  }, [currentVolume]);

  return {
    playSound,
    stopSound,
    stopAllSounds,
    isPlaying,
    toggleMute,
    isMuted,
    setVolume,
    getVolume
  };
};

export default useSoundEffect;
