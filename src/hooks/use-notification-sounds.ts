
import { useEffect, useRef, useCallback, useState } from 'react';
import type { SoundType } from './sounds/types';

const useNotificationSounds = () => {
  const sounds = useRef<Record<string, HTMLAudioElement>>({});
  const isMounted = useRef(true);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize audio objects
  useEffect(() => {
    // Sound paths - in a real app, these would be actual sound files
    const soundPaths: Record<SoundType, string> = {
      notification: '/sounds/notification.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      shame: '/sounds/shame.mp3',
      purchase: '/sounds/purchase.mp3',
      levelUp: '/sounds/level-up.mp3',
      swordClash: '/sounds/sword-clash.mp3',
      click: '/sounds/click.mp3',
      hover: '/sounds/hover.mp3',
      coinDrop: '/sounds/coin-drop.mp3',
      pageTransition: '/sounds/page-transition.mp3',
      parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
      seal: '/sounds/seal.mp3',
      royalAnnouncement: '/sounds/royal-announcement.mp3',
      reward: '/sounds/reward.mp3',
      wish: '/sounds/wish.mp3',
      advertisement: '/sounds/advertisement.mp3',
      pageChange: '/sounds/page-change.mp3',
      trumpet: '/sounds/trumpet.mp3',
      medallion: '/sounds/medallion.mp3',
      noblesLaugh: '/sounds/nobles-laugh.mp3',
      inkScribble: '/sounds/ink-scribble.mp3'
    };

    // Create audio objects for each sound
    Object.entries(soundPaths).forEach(([key, path]) => {
      try {
        sounds.current[key] = new Audio(path);
        sounds.current[key].preload = 'auto';
      } catch (error) {
        console.error(`Failed to load sound: ${key}`, error);
      }
    });

    return () => {
      // Clean up audio objects on unmount
      isMounted.current = false;
      Object.values(sounds.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      sounds.current = {};
    };
  }, []);

  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    if (isMuted) return;
    
    try {
      if (isMounted.current && sounds.current[type]) {
        const audio = sounds.current[type];
        audio.volume = volume;
        audio.currentTime = 0;
        
        // Some browsers require user interaction before playing audio
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented, this is normal on some browsers
            console.log('Audio playback was prevented by the browser', error);
          });
        }
      }
    } catch (error) {
      console.error(`Error playing sound: ${type}`, error);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prevMuted => !prevMuted);
  }, []);

  const preloadSounds = useCallback(() => {
    console.log('Preloading sounds');
    const commonSounds: SoundType[] = ['click', 'success', 'notification'];
    
    commonSounds.forEach(type => {
      try {
        if (sounds.current[type]) {
          const audio = sounds.current[type];
          audio.load();
        }
      } catch (error) {
        console.error(`Error preloading sound ${type}:`, error);
      }
    });
  }, []);

  return { 
    playSound,
    isMuted,
    toggleMute,
    preloadSounds
  };
};

export default useNotificationSounds;
