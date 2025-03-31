
import { useCallback, useState } from 'react';
import { useAudioLoader } from './sounds/use-audio-loader';
import { SoundType } from '@/types/sound-types';

interface UseSoundsOptions {
  volume?: number;
  interrupt?: boolean;
}

export function useSounds() {
  const { audio, isEnabled, volume: globalVolume } = useAudioLoader();
  const [playingAudios, setPlayingAudios] = useState<Record<SoundType, HTMLAudioElement | null>>({} as Record<SoundType, HTMLAudioElement | null>);
  
  const play = useCallback((sound: SoundType, options?: UseSoundsOptions) => {
    if (!isEnabled || !audio[sound]) return;
    
    try {
      // If the sound is already playing and we should interrupt it
      if (playingAudios[sound] && options?.interrupt) {
        playingAudios[sound]?.pause();
        playingAudios[sound]?.load();
      }
      
      // If the sound is not currently playing or if we want to play it again
      if (!playingAudios[sound] || options?.interrupt) {
        // Clone the audio element to allow for multiple plays
        const audioElem = audio[sound].cloneNode() as HTMLAudioElement;
        
        // Set volume
        audioElem.volume = (options?.volume !== undefined ? options.volume : 1) * globalVolume;
        
        // Play the sound
        const playPromise = audioElem.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setPlayingAudios(prev => ({
                ...prev,
                [sound]: audioElem
              }));
              
              // When the sound ends, clean up
              audioElem.onended = () => {
                setPlayingAudios(prev => ({
                  ...prev,
                  [sound]: null
                }));
              };
            })
            .catch(error => {
              console.error('Failed to play sound:', error);
            });
        }
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [audio, isEnabled, globalVolume, playingAudios]);
  
  const stop = useCallback((sound: SoundType) => {
    if (playingAudios[sound]) {
      playingAudios[sound]?.pause();
      setPlayingAudios(prev => ({
        ...prev,
        [sound]: null
      }));
    }
  }, [playingAudios]);
  
  const stopAll = useCallback(() => {
    Object.keys(playingAudios).forEach(key => {
      const soundKey = key as SoundType;
      if (playingAudios[soundKey]) {
        playingAudios[soundKey]?.pause();
      }
    });
    
    setPlayingAudios({} as Record<SoundType, HTMLAudioElement | null>);
  }, [playingAudios]);
  
  return { play, stop, stopAll };
}
