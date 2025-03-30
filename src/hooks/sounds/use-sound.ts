
import { useCallback, useState } from 'react';
import { SoundType } from '@/types/sound-types';

export interface UseSoundReturn {
  play: (sound: SoundType, volume?: number) => void;
  isPlaying: boolean;
  stop: () => void;
}

export const useSound = (): UseSoundReturn => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getSoundUrl = (sound: SoundType): string => {
    const soundMap: Record<SoundType, string> = {
      notification: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
      success: 'https://assets.mixkit.co/sfx/preview/mixkit-game-success-alert-2039.mp3',
      error: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-remove-2576.mp3',
      purchase: 'https://assets.mixkit.co/sfx/preview/mixkit-coins-handling-1939.mp3',
      trumpets: 'https://assets.mixkit.co/sfx/preview/mixkit-medieval-show-fanfare-announcement-226.mp3',
      achievement: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
      deposit: 'https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3',
      shame: 'https://assets.mixkit.co/sfx/preview/mixkit-crowd-boo-and-whistle-733.mp3',
      click: 'https://assets.mixkit.co/sfx/preview/mixkit-click-melodic-tone-1129.mp3',
      royal: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3',
      levelUp: 'https://assets.mixkit.co/sfx/preview/mixkit-player-boost-recharging-2040.mp3'
    };

    return soundMap[sound] || soundMap.notification;
  };

  const play = useCallback((sound: SoundType, volume: number = 0.3) => {
    try {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      const newAudio = new Audio(getSoundUrl(sound));
      newAudio.volume = Math.min(1, Math.max(0, volume)); // Clamp volume between 0 and 1
      
      newAudio.onplaying = () => setIsPlaying(true);
      newAudio.onended = () => setIsPlaying(false);
      newAudio.onpause = () => setIsPlaying(false);
      newAudio.onerror = () => {
        console.error('Error playing sound:', sound);
        setIsPlaying(false);
      };
      
      setAudio(newAudio);
      newAudio.play().catch(e => {
        console.error('Failed to play sound:', e);
        setIsPlaying(false);
      });
    } catch (error) {
      console.error('Error in sound hook:', error);
      setIsPlaying(false);
    }
  }, [audio]);

  const stop = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  }, [audio]);

  return {
    play,
    isPlaying,
    stop
  };
};

export default useSound;
