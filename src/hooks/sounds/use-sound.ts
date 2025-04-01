
import { useState, useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';

/**
 * Custom hook for playing sound effects
 */
export const useSound = () => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  // Basic sound paths
  const soundPaths: Record<string, string> = {
    coin: '/sounds/coin.mp3',
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3',
    click: '/sounds/click.mp3',
    notification: '/sounds/notification.mp3',
    achievement: '/sounds/achievement.mp3',
    purchase: '/sounds/purchase.mp3',
    deposit: '/sounds/deposit.mp3',
    mockery: '/sounds/mockery.mp3',
    fanfare: '/sounds/fanfare.mp3',
    levelUp: '/sounds/level-up.mp3',
    shame: '/sounds/shame.mp3',
    reward: '/sounds/reward.mp3',
    boost: '/sounds/boost.mp3',
    coinDrop: '/sounds/coin-drop.mp3',
    message: '/sounds/message.mp3',
    level_up: '/sounds/level-up.mp3',
    royal: '/sounds/royal.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    sparkle: '/sounds/sparkle.mp3',
    protection: '/sounds/protection.mp3',
    transfer: '/sounds/transfer.mp3',
    unlock: '/sounds/unlock.mp3',
    noblesLaugh: '/sounds/nobles-laugh.mp3'
  };
  
  /**
   * Play a sound with options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (muted) return;
    
    // Get the sound path or use a default
    const soundPath = soundPaths[type] || soundPaths.notification;
    if (!soundPath) return;
    
    try {
      // Create a new audio element
      const audio = new Audio(soundPath);
      
      // Set volume
      audio.volume = options?.volume !== undefined ? options.volume : volume;
      
      // Set other options
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      // Attach onend callback if provided
      if (options?.onEnd) {
        audio.onended = options.onEnd;
      }
      
      // Play the sound
      audio.play().catch(err => {
        console.warn(`Error playing sound (${type}):`, err);
      });
    } catch (err) {
      console.error(`Error setting up sound (${type}):`, err);
    }
  }, [muted, volume, soundPaths]);
  
  /**
   * Toggle mute state
   */
  const toggleMute = useCallback(() => {
    setMuted(prevMuted => !prevMuted);
    return !muted;
  }, [muted]);
  
  /**
   * Set volume level
   */
  const changeVolume = useCallback((newVolume: number) => {
    // Ensure volume is between 0 and 1
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
  }, []);

  // Add a compatibility method for the play function that some components are using
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  return {
    playSound,
    play,
    isMuted: muted,
    toggleMute,
    setMuted,
    volume,
    setVolume: changeVolume
  };
};

export default useSound;
