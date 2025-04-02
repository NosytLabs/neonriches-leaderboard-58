
import { useState, useCallback } from 'react';

type SoundEffect = 'click' | 'success' | 'error' | 'notification' | 'mockery';

interface UseSoundEffectResult {
  play: (effect: SoundEffect) => void;
  isPlaying: boolean;
  setVolume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
}

const useSoundEffect = (): UseSoundEffectResult => {
  const [sounds] = useState<Record<SoundEffect, HTMLAudioElement | null>>({
    click: typeof Audio !== 'undefined' ? new Audio('/sounds/click.mp3') : null,
    success: typeof Audio !== 'undefined' ? new Audio('/sounds/success.mp3') : null,
    error: typeof Audio !== 'undefined' ? new Audio('/sounds/error.mp3') : null,
    notification: typeof Audio !== 'undefined' ? new Audio('/sounds/notification.mp3') : null,
    mockery: typeof Audio !== 'undefined' ? new Audio('/sounds/mockery.mp3') : null,
  });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  
  const play = useCallback((effect: SoundEffect) => {
    if (isMuted || !sounds[effect]) return;
    
    try {
      const sound = sounds[effect];
      if (sound) {
        sound.volume = volume;
        sound.currentTime = 0;
        setIsPlaying(true);
        
        sound.play()
          .then(() => {
            // Sound started playing
          })
          .catch((error) => {
            // Sound failed to play, probably due to browser policy
            console.error("Error playing sound:", error);
          })
          .finally(() => {
            setIsPlaying(false);
          });
      }
    } catch (error) {
      console.error("Error in play sound:", error);
      setIsPlaying(false);
    }
  }, [sounds, volume, isMuted]);
  
  const setVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    
    // Update volume for all sounds
    Object.values(sounds).forEach(sound => {
      if (sound) {
        sound.volume = clampedVolume;
      }
    });
  }, [sounds]);
  
  const mute = useCallback(() => {
    setIsMuted(true);
  }, []);
  
  const unmute = useCallback(() => {
    setIsMuted(false);
  }, []);
  
  return {
    play,
    isPlaying,
    setVolume,
    mute,
    unmute,
    isMuted
  };
};

export default useSoundEffect;
