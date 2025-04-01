
import React, { useState, useCallback, useEffect } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from './types';
import { useSoundsConfig } from './use-sounds-config';

/**
 * Custom hook for playing sound effects in the application
 * @returns The sound control functions and state
 */
export const useSound = (): UseSoundHook => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume } = useSoundsConfig();
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  
  // Sound paths mapping
  const soundPaths: Record<SoundType, string> = {
    click: '/sounds/click.mp3',
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3',
    notification: '/sounds/notification.mp3',
    achievement: '/sounds/achievement.mp3',
    coin: '/sounds/coin.mp3',
    purchase: '/sounds/purchase.mp3',
    deposit: '/sounds/deposit.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    levelUp: '/sounds/level-up.mp3',
    boost: '/sounds/boost.mp3',
    message: '/sounds/message.mp3',
    mockery: '/sounds/mockery.mp3',
    coinDrop: '/sounds/coin-drop.mp3',
    shame: '/sounds/shame.mp3',
    fanfare: '/sounds/fanfare.mp3',
    royal: '/sounds/royal.mp3',
    protection: '/sounds/protection.mp3',
    sparkle: '/sounds/sparkle.mp3',
    royalAnnouncement: '/sounds/royal-announcement.mp3',
    trumpet: '/sounds/trumpet.mp3',
    medallion: '/sounds/medallion.mp3',
    seal: '/sounds/seal.mp3',
    transfer: '/sounds/transfer.mp3',
    unlock: '/sounds/unlock.mp3',
    team: '/sounds/team.mp3',
    rank_up: '/sounds/rank-up.mp3',
    reward: '/sounds/reward.mp3'
  };
  
  // Cleanup audio elements when component unmounts
  useEffect(() => {
    return () => {
      Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      setAudioElements({});
    };
  }, [audioElements]);
  
  /**
   * Play a sound with options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    const soundPath = soundPaths[type];
    if (!soundPath) {
      console.warn(`Sound path for type ${type} not found`);
      return;
    }
    
    try {
      // Check if we already have an audio element for this sound
      let audio = audioElements[type];
      
      // If not, create a new one
      if (!audio) {
        audio = new Audio(soundPath);
        setAudioElements(prev => ({ ...prev, [type]: audio }));
      } else {
        // Reset the audio element if it exists
        audio.pause();
        audio.currentTime = 0;
      }
      
      // Set volume
      audio.volume = options?.volume !== undefined 
        ? options.volume 
        : soundConfig.volume;
      
      // Set playback rate if provided
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      // Set loop option
      audio.loop = options?.loop || false;
      
      // Handle onEnd callback
      if (options?.onEnd) {
        audio.onended = () => {
          setIsPlaying(prev => ({ ...prev, [type]: false }));
          options.onEnd?.();
        };
      } else {
        audio.onended = () => {
          setIsPlaying(prev => ({ ...prev, [type]: false }));
        };
      }
      
      // Play the sound
      const playPromise = audio.play();
      setIsPlaying(prev => ({ ...prev, [type]: true }));
      
      // Handle errors
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn(`Error playing sound (${type}):`, err);
          setIsPlaying(prev => ({ ...prev, [type]: false }));
        });
      }
    } catch (err) {
      console.error(`Error setting up sound (${type}):`, err);
    }
  }, [soundConfig, audioElements, soundPaths]);
  
  /**
   * Stop a playing sound
   */
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(prev => ({ ...prev, [type]: false }));
      }
    } else {
      // Stop all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.pause();
        audio.currentTime = 0;
      });
      setIsPlaying({});
    }
  }, [audioElements]);
  
  /**
   * Pause a sound without resetting it
   */
  const pauseSound = useCallback((type?: SoundType) => {
    if (type) {
      // Pause a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.pause();
        setIsPlaying(prev => ({ ...prev, [type]: false }));
      }
    } else {
      // Pause all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.pause();
      });
      setIsPlaying({});
    }
  }, [audioElements]);
  
  /**
   * Resume a paused sound
   */
  const resumeSound = useCallback((type?: SoundType) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    if (type) {
      // Resume a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
        setIsPlaying(prev => ({ ...prev, [type]: true }));
      }
    } else {
      // Resume all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
        setIsPlaying(prev => ({ ...prev, [type]: true }));
      });
    }
  }, [soundConfig, audioElements]);
  
  /**
   * Check if a sound is currently playing
   */
  const isSoundPlaying = useCallback((type: SoundType) => {
    return isPlaying[type] || false;
  }, [isPlaying]);
  
  // Compatibility alias
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  return {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying: isSoundPlaying,
    isSoundEnabled: !soundConfig.muted && soundConfig.enabled,
    toggleSounds,
    toggleMuted,
    setVolume,
    currentVolume: soundConfig.volume
  };
};

export default useSound;
