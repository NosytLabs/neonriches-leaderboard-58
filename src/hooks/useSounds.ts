
import { useCallback } from 'react';
import { useAudioLoader } from './sounds/use-audio-loader';
import { SoundType, AudioOptions } from '@/types/sound-types';

export function useSounds() {
  const { audio, isEnabled, volume: globalVolume } = useAudioLoader();
  
  const play = useCallback((sound: SoundType, options?: AudioOptions) => {
    if (!isEnabled || !audio[sound]) return;
    
    try {
      const audioElem = audio[sound].cloneNode() as HTMLAudioElement;
      
      // Set volume
      audioElem.volume = (options?.volume !== undefined ? options.volume : 1) * globalVolume;
      
      // Set loop if specified
      if (options?.loop) {
        audioElem.loop = options.loop;
      }
      
      // Play the sound
      audioElem.play().catch(error => {
        console.error('Failed to play sound:', error);
      });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [audio, isEnabled, globalVolume]);
  
  const stop = useCallback((sound: SoundType) => {
    // This is a simplified version that could be enhanced
    try {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(el => {
        if (el.src.includes(sound)) {
          el.pause();
          el.currentTime = 0;
        }
      });
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  }, []);
  
  const stopAll = useCallback(() => {
    try {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(el => {
        el.pause();
        el.currentTime = 0;
      });
    } catch (error) {
      console.error('Error stopping all sounds:', error);
    }
  }, []);
  
  return { play, stop, stopAll };
}

export default useSounds;
