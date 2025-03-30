
import { useCallback, useEffect, useState } from 'react';
import { SoundType } from './types';

interface UseSoundOptions {
  volume?: number;
  disabled?: boolean;
}

const useSound = (options: UseSoundOptions = {}) => {
  const { volume = 0.5, disabled = false } = options;
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  const [soundsLoaded, setSoundsLoaded] = useState(false);
  
  useEffect(() => {
    // Load basic sound assets
    const baseSounds: Record<SoundType, string> = {
      click: '/sounds/click.mp3',
      coinDrop: '/sounds/coin-drop.mp3',
      purchase: '/sounds/purchase.mp3',
      royalAnnouncement: '/sounds/royal-announcement.mp3',
      pageTransition: '/sounds/page-transition.mp3',
      reward: '/sounds/reward.mp3',
      win: '/sounds/win.mp3',
      message: '/sounds/message.mp3',
      shame: '/sounds/shame.mp3',
      swordClash: '/sounds/sword-clash.mp3',
      seal: '/sounds/seal.mp3',
      parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      notification: '/sounds/notification.mp3',
      levelUp: '/sounds/level-up.mp3',
      wish: '/sounds/wish.mp3',
      pageChange: '/sounds/page-change.mp3',
      medallion: '/sounds/medallion.mp3',
      trumpet: '/sounds/trumpet.mp3',
      noblesLaugh: '/sounds/nobles-laugh.mp3',
      inkScribble: '/sounds/ink-scribble.mp3',
      hover: '/sounds/hover.mp3',
      advertisement: '/sounds/advertisement.mp3'
    };
    
    const loadedAudio: Record<string, HTMLAudioElement> = {};
    
    // Load each sound
    Object.entries(baseSounds).forEach(([key, src]) => {
      const audio = new Audio();
      audio.src = src;
      audio.volume = volume;
      audio.preload = 'auto';
      loadedAudio[key] = audio;
    });
    
    setAudioElements(loadedAudio);
    setSoundsLoaded(true);
    
    // Cleanup
    return () => {
      Object.values(loadedAudio).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [volume]);
  
  // Set volume for all sounds
  useEffect(() => {
    Object.values(audioElements).forEach(audio => {
      audio.volume = volume;
    });
  }, [volume, audioElements]);
  
  // Play a sound
  const play = useCallback((soundType: SoundType, volumeMultiplier = 1) => {
    if (disabled || !soundsLoaded) return;
    
    const audio = audioElements[soundType];
    if (audio) {
      // Reset sound and play
      audio.currentTime = 0;
      // Adjust volume if multiplier is provided
      if (volumeMultiplier !== 1) {
        audio.volume = volume * volumeMultiplier;
      }
      audio.play().catch(err => {
        console.warn(`Error playing sound ${soundType}:`, err);
      });
    } else {
      console.warn(`Sound not found: ${soundType}`);
    }
  }, [audioElements, disabled, soundsLoaded, volume]);
  
  // Provide a better-named interface for components
  const playSound = useCallback((soundType: SoundType, volumeMultiplier = 1) => {
    play(soundType, volumeMultiplier);
  }, [play]);
  
  return { play, playSound };
};

export default useSound;
