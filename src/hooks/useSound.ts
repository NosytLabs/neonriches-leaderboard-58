
import { useState, useEffect, useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { useSettings } from '@/contexts/SettingsContext';

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
  'level_up': '/sounds/level-up.mp3',
  'rank_up': '/sounds/rank-up.mp3',
  'shame': '/sounds/shame.mp3',
  'protection': '/sounds/protection.mp3',
  'sparkle': '/sounds/sparkle.mp3',
  'message': '/sounds/message.mp3',
  'boost': '/sounds/boost.mp3',
  'reward': '/sounds/reward.mp3',
  'royal': '/sounds/royal.mp3',
  'withdrawal': '/sounds/withdrawal.mp3',
  'royalAnnouncement': '/sounds/royal-announcement.mp3',
  'trumpet': '/sounds/trumpet.mp3',
  'trumpets': '/sounds/trumpets.mp3',
  'medallion': '/sounds/medallion.mp3',
  'seal': '/sounds/seal.mp3',
  'coinDrop': '/sounds/coin-drop.mp3'
};

// Premium sound paths
const PREMIUM_SOUND_FILES: Record<SoundType, string> = {
  'coin': '/sounds/premium/coin.mp3',
  'success': '/sounds/premium/success.mp3',
  'error': '/sounds/premium/error.mp3',
  'click': '/sounds/premium/click.mp3',
  'notification': '/sounds/premium/notification.mp3',
  'achievement': '/sounds/premium/achievement.mp3',
  'purchase': '/sounds/premium/purchase.mp3',
  'deposit': '/sounds/premium/deposit.mp3',
  'mockery': '/sounds/premium/mockery.mp3',
  'fanfare': '/sounds/premium/fanfare.mp3',
  'levelUp': '/sounds/premium/level-up.mp3',
  'level_up': '/sounds/premium/level-up.mp3',
  'rank_up': '/sounds/premium/rank-up.mp3',
  'shame': '/sounds/premium/shame.mp3',
  'protection': '/sounds/premium/protection.mp3',
  'sparkle': '/sounds/premium/sparkle.mp3',
  'message': '/sounds/premium/message.mp3',
  'boost': '/sounds/premium/boost.mp3',
  'reward': '/sounds/premium/reward.mp3',
  'royal': '/sounds/premium/royal.mp3',
  'withdrawal': '/sounds/premium/withdrawal.mp3',
  'royalAnnouncement': '/sounds/premium/royal-announcement.mp3',
  'trumpet': '/sounds/premium/trumpet.mp3',
  'trumpets': '/sounds/premium/trumpets.mp3',
  'medallion': '/sounds/premium/medallion.mp3',
  'seal': '/sounds/premium/seal.mp3',
  'coinDrop': '/sounds/premium/coin-drop.mp3'
};

// Track current playing sounds to avoid memory leaks
const audioInstances: Record<string, HTMLAudioElement> = {};

/**
 * Unified hook for playing sound effects in the application
 * Uses settings context for configuration
 */
export const useSound = () => {
  const { soundConfig } = useSettings();
  
  // Play a sound with given options
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    // Choose standard or premium sound
    const soundFiles = soundConfig.premium ? PREMIUM_SOUND_FILES : SOUND_FILES;
    const soundFile = soundFiles[type];
    
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
      audio.volume = options.volume !== undefined ? options.volume : soundConfig.volume;
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
  }, [soundConfig]);

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
    if (!soundConfig.enabled || soundConfig.muted) return;

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
  }, [soundConfig]);

  // Check if a sound is playing
  const isPlaying = useCallback((type: SoundType): boolean => {
    const audio = audioInstances[type];
    return !!(audio && !audio.paused);
  }, []);

  return {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    // For backward compatibility
    play: playSound,
    toggleSounds: null, // This is handled by the settings context now
    isSoundEnabled: soundConfig.enabled,
    setVolume: null, // This is handled by the settings context now
    currentVolume: soundConfig.volume
  };
};

export default useSound;
