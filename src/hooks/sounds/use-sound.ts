
import { useState, useEffect, useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';

// Default sound configuration
const DEFAULT_SOUND_CONFIG = {
  enabled: true,
  volume: 0.7,
  effects: {},
  music: false,
  musicVolume: 0.3
};

// Sound mapping - centralized to avoid duplication
const SOUND_FILES: Record<SoundType, string> = {
  'coin': '/sounds/coin.mp3',
  'success': '/sounds/success.mp3',
  'error': '/sounds/error.mp3',
  'click': '/sounds/click.mp3',
  'notification': '/sounds/notification.mp3',
  'achievement': '/sounds/achievement.mp3',
  'purchase': '/sounds/purchase.mp3',
  'deposit': '/sounds/deposit.mp3',
  'mockery': '/sounds/mockery.mp3',
  'fanfare': '/sounds/fanfare.mp3',
  'levelUp': '/sounds/level-up.mp3',
  'shame': '/sounds/shame.mp3',
  'protection': '/sounds/protection.mp3',
  'sparkle': '/sounds/sparkle.mp3',
  'royalAnnouncement': '/sounds/royal-announcement.mp3',
  'trumpet': '/sounds/trumpet.mp3',
  'medallion': '/sounds/medallion.mp3',
  'seal': '/sounds/seal.mp3',
  'coinDrop': '/sounds/coin-drop.mp3',
  'swordClash': '/sounds/sword-clash.mp3',
  'noblesLaugh': '/sounds/nobles-laugh.mp3'
};

// Track current playing sounds to avoid memory leaks
const audioInstances: Record<string, HTMLAudioElement> = {};

/**
 * Hook for playing sound effects in the application
 */
export const useSoundHook = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    // Check user settings in localStorage
    const savedSettings = localStorage.getItem('sound-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        return parsed.enabled !== undefined ? parsed.enabled : DEFAULT_SOUND_CONFIG.enabled;
      } catch (e) {
        return DEFAULT_SOUND_CONFIG.enabled;
      }
    }
    return DEFAULT_SOUND_CONFIG.enabled;
  });

  const [volume, setVolumeState] = useState(() => {
    // Check user volume settings in localStorage
    const savedSettings = localStorage.getItem('sound-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        return parsed.volume !== undefined ? parsed.volume : DEFAULT_SOUND_CONFIG.volume;
      } catch (e) {
        return DEFAULT_SOUND_CONFIG.volume;
      }
    }
    return DEFAULT_SOUND_CONFIG.volume;
  });

  // Update localStorage when sound settings change
  useEffect(() => {
    try {
      const currentSettings = localStorage.getItem('sound-settings');
      const settings = currentSettings ? JSON.parse(currentSettings) : DEFAULT_SOUND_CONFIG;
      
      localStorage.setItem('sound-settings', JSON.stringify({
        ...settings,
        enabled: isSoundEnabled,
        volume: volume
      }));
    } catch (e) {
      console.error('Failed to save sound settings:', e);
    }
  }, [isSoundEnabled, volume]);

  // Play a sound with given options
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    if (!isSoundEnabled) return;

    const soundFile = SOUND_FILES[type];
    if (!soundFile) {
      console.warn(`Sound file not found for type: ${type}`);
      return;
    }

    try {
      // Reuse existing audio instance if available
      let audio = audioInstances[type];
      if (!audio) {
        audio = new Audio(soundFile);
        audioInstances[type] = audio;
      } else {
        // Reset the audio to start from beginning
        audio.currentTime = 0;
      }

      // Apply options
      audio.volume = options.volume !== undefined ? options.volume : volume;
      audio.loop = options.loop || false;
      
      if (options.playbackRate !== undefined) {
        audio.playbackRate = options.playbackRate;
      }

      // Handle onEnd callback
      if (options.onEnd) {
        audio.onended = options.onEnd;
      } else {
        audio.onended = null;
      }

      // Play the sound
      audio.play().catch(err => {
        console.warn(`Error playing sound (${type}):`, err);
      });
    } catch (error) {
      console.error(`Failed to play sound (${type}):`, error);
    }
  }, [isSoundEnabled, volume]);

  // Stop a playing sound
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop specific sound
      const audio = audioInstances[type];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } else {
      // Stop all sounds
      Object.values(audioInstances).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  }, []);

  // Pause a playing sound
  const pauseSound = useCallback((type?: SoundType) => {
    if (type) {
      // Pause specific sound
      const audio = audioInstances[type];
      if (audio) {
        audio.pause();
      }
    } else {
      // Pause all sounds
      Object.values(audioInstances).forEach(audio => {
        audio.pause();
      });
    }
  }, []);

  // Resume a paused sound
  const resumeSound = useCallback((type?: SoundType) => {
    if (!isSoundEnabled) return;

    if (type) {
      // Resume specific sound
      const audio = audioInstances[type];
      if (audio) {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
      }
    } else {
      // Resume all sounds
      Object.values(audioInstances).forEach(audio => {
        audio.play().catch(err => {
          console.warn(`Error resuming sound:`, err);
        });
      });
    }
  }, [isSoundEnabled]);

  // Check if a sound is playing
  const isPlaying = useCallback((type: SoundType): boolean => {
    const audio = audioInstances[type];
    return !!(audio && !audio.paused);
  }, []);

  // Toggle sound on/off
  const toggleSounds = useCallback(() => {
    setIsSoundEnabled(prev => !prev);
  }, []);

  // Set volume level
  const setVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.min(Math.max(newVolume, 0), 1);
    setVolumeState(clampedVolume);
    
    // Update volume for all currently loaded audio instances
    Object.values(audioInstances).forEach(audio => {
      audio.volume = clampedVolume;
    });
  }, []);

  // Clean up audio instances on unmount
  useEffect(() => {
    return () => {
      Object.values(audioInstances).forEach(audio => {
        audio.pause();
        audio.onended = null;
      });
    };
  }, []);

  return {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    toggleSounds,
    isSoundEnabled,
    setVolume,
    currentVolume: volume,
    // For backward compatibility
    play: playSound
  };
};

// Export both default and named exports for backward compatibility
export default useSoundHook;
export const useSound = useSoundHook;
