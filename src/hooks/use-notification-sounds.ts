
import { useState, useEffect, useCallback } from 'react';

interface SoundEffects {
  [key: string]: HTMLAudioElement;
}

/**
 * Custom hook for managing notification sounds in the application
 */
const useNotificationSounds = () => {
  const [sounds, setSounds] = useState<SoundEffects>({});
  const [isMuted, setIsMuted] = useState<boolean>(
    localStorage.getItem('soundEffectsMuted') === 'true'
  );

  // Initialize sounds
  useEffect(() => {
    const soundEffects: SoundEffects = {
      notification: new Audio('/sounds/notification.mp3'),
      success: new Audio('/sounds/success.mp3'),
      error: new Audio('/sounds/error.mp3'),
      click: new Audio('/sounds/click.mp3'),
      purchase: new Audio('/sounds/purchase.mp3'),
      coinDrop: new Audio('/sounds/coin-drop.mp3'),
      levelUp: new Audio('/sounds/level-up.mp3'),
      reward: new Audio('/sounds/reward.mp3'),
      royalAnnouncement: new Audio('/sounds/royal-announcement.mp3'),
      swordClash: new Audio('/sounds/sword-clash.mp3'),
      trumpets: new Audio('/sounds/trumpets.mp3'),
      shame: new Audio('/sounds/shame.mp3')
    };
    
    // Set default volume for all sounds
    Object.values(soundEffects).forEach(sound => {
      sound.volume = 0.5;
    });
    
    setSounds(soundEffects);
  }, []);

  // Play a sound with customizable volume
  const playSound = useCallback(
    (soundName: string, customVolume?: number) => {
      if (isMuted || !sounds[soundName]) return;
      
      try {
        const sound = sounds[soundName];
        
        // Reset sound to beginning if it's already playing
        sound.pause();
        sound.currentTime = 0;
        
        // Set custom volume if provided
        if (customVolume !== undefined) {
          sound.volume = Math.min(Math.max(customVolume, 0), 1);
        }
        
        // Play the sound
        sound.play().catch(error => {
          console.error(`Error playing sound ${soundName}:`, error);
        });
        
        // Reset volume back to default after playing
        if (customVolume !== undefined) {
          sound.addEventListener('ended', () => {
            sound.volume = 0.5;
          }, { once: true });
        }
      } catch (error) {
        console.error(`Error playing sound ${soundName}:`, error);
      }
    },
    [sounds, isMuted]
  );

  // Toggle mute state
  const toggleMute = useCallback(() => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem('soundEffectsMuted', newMuteState.toString());
  }, [isMuted]);

  // Preload all sounds
  const preloadSounds = useCallback(() => {
    Object.values(sounds).forEach(sound => {
      sound.load();
    });
  }, [sounds]);

  return {
    playSound,
    toggleMute,
    isMuted,
    preloadSounds
  };
};

export default useNotificationSounds;
