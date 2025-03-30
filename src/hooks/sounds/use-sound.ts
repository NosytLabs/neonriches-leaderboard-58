
import { useEffect, useState, useCallback } from 'react';
import { SoundType } from './types';
import { soundAssets, soundVolumes } from './sound-assets';

export interface UseSoundOptions {
  enabled?: boolean;
  volume?: number;
  preload?: boolean;
}

const useSound = (options: UseSoundOptions = {}) => {
  const { enabled = true, volume = 0.5, preload = true } = options;
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  const [loading, setLoading] = useState(preload);
  const [loaded, setLoaded] = useState(false);
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  // Load all sounds on component mount if preload is true
  useEffect(() => {
    if (preload && enabled) {
      const loadAudio = async () => {
        try {
          setLoading(true);
          const elements: Record<string, HTMLAudioElement> = {};
          const loaded: string[] = [];

          for (const [type, path] of Object.entries(soundAssets)) {
            const audio = new Audio(path);
            audio.preload = 'auto';
            elements[type] = audio;
            loaded.push(type);
          }

          setAudioElements(elements);
          setLoadedSounds(loaded);
          setLoaded(true);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Error loading sounds'));
        } finally {
          setLoading(false);
        }
      };

      loadAudio();
    }
  }, [preload, enabled]);

  // Play sound function
  const play = useCallback((soundType: SoundType, volumeMultiplier = 1) => {
    if (!enabled) return;
    
    try {
      // If the sound is not loaded yet, load it on demand
      if (!audioElements[soundType]) {
        const soundPath = soundAssets[soundType];
        if (!soundPath) {
          console.warn(`Sound "${soundType}" not found`);
          return;
        }
        
        const audio = new Audio(soundPath);
        audioElements[soundType] = audio;
        setAudioElements({ ...audioElements });
      }
      
      const audio = audioElements[soundType];
      if (audio) {
        // Reset audio to start
        audio.currentTime = 0;
        
        // Set volume (base volume * type-specific volume * passed multiplier)
        const baseVolume = volume;
        const typeVolume = soundVolumes[soundType] || 1;
        audio.volume = Math.min(baseVolume * typeVolume * volumeMultiplier, 1);
        
        // Play the sound
        audio.play().catch(err => {
          console.warn(`Error playing sound "${soundType}":`, err);
        });
      }
    } catch (err) {
      console.warn(`Error playing sound "${soundType}":`, err);
    }
  }, [audioElements, enabled, volume]);

  return {
    loading,
    loaded,
    error,
    sounds: audioElements,
    loadedSounds,
    play
  };
};

export default useSound;
