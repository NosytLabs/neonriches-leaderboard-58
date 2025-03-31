
import { useCallback, useEffect, useState } from 'react';
import { SoundType, AudioOptions } from '@/types/sound-types';
import { getSoundPath } from '@/utils/getSoundPath';

/**
 * Unified hook for playing sound effects
 */
export const useSounds = () => {
  const [sounds, setSounds] = useState<Record<SoundType, HTMLAudioElement>>({});
  const [volume, setVolume] = useState<number>(() => {
    const savedVolume = localStorage.getItem('soundVolume');
    return savedVolume ? parseFloat(savedVolume) : 0.5;
  });
  
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    const savedEnabled = localStorage.getItem('soundEnabled');
    return savedEnabled !== null ? JSON.parse(savedEnabled) : true;
  });

  // Initialize sounds
  useEffect(() => {
    const soundTypes: SoundType[] = [
      'success', 'error', 'notification', 'purchase', 
      'achievement', 'deposit', 'withdrawal', 'rank_up', 
      'level_up', 'coin', 'shame', 'mockery', 'boost', 
      'throne', 'royal', 'click'
    ];
    
    const newSounds: Record<SoundType, HTMLAudioElement> = {} as Record<SoundType, HTMLAudioElement>;
    
    soundTypes.forEach(type => {
      const audio = new Audio(getSoundPath(type));
      audio.volume = volume;
      newSounds[type] = audio;
    });
    
    setSounds(newSounds);
    
    return () => {
      // Cleanup audio instances
      Object.values(newSounds).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  // Update volume for all sounds when it changes
  useEffect(() => {
    Object.values(sounds).forEach(audio => {
      audio.volume = volume;
    });
    localStorage.setItem('soundVolume', volume.toString());
  }, [volume, sounds]);

  // Save sound enabled preference
  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(isEnabled));
  }, [isEnabled]);

  // Play a sound with options
  const play = useCallback((
    soundType: SoundType, 
    options: AudioOptions = {}
  ) => {
    if (!isEnabled) return;
    
    const sound = sounds[soundType];
    if (!sound) return;
    
    // Apply options
    if (options.volume !== undefined) {
      sound.volume = options.volume;
    }
    
    if (options.loop !== undefined) {
      sound.loop = options.loop;
    }
    
    // If interrupt is true or not specified, reset the sound to start from beginning
    if (options.interrupt !== false) {
      sound.currentTime = 0;
    }
    
    // Handle delay
    if (options.delay && options.delay > 0) {
      setTimeout(() => {
        sound.play().catch(err => console.error('Failed to play sound:', err));
      }, options.delay);
    } else {
      sound.play().catch(err => console.error('Failed to play sound:', err));
    }
  }, [sounds, isEnabled]);

  // Stop a specific sound
  const stop = useCallback((soundType: SoundType) => {
    const sound = sounds[soundType];
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }, [sounds]);

  // Stop all sounds
  const stopAll = useCallback(() => {
    Object.values(sounds).forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
  }, [sounds]);

  return {
    play,
    stop,
    stopAll,
    setVolume,
    volume,
    isEnabled,
    setEnabled: setIsEnabled,
    sounds
  };
};

export type UseSoundsReturn = ReturnType<typeof useSounds>;

export default useSounds;
