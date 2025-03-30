
import { useState, useCallback, useEffect } from 'react';
import { SoundType, NotificationSoundOptions } from '@/types/sound-types';

interface UseNotificationSoundOptions {
  volume?: number;
  defaultEnabled?: boolean;
}

export const useNotificationSound = (options: UseNotificationSoundOptions = { volume: 0.5, defaultEnabled: true }) => {
  const [isEnabled, setIsEnabled] = useState(options.defaultEnabled ?? true);
  const [volume, setVolume] = useState(options.volume ?? 0.5);

  const playSound = useCallback((sound: SoundType, soundOptions?: NotificationSoundOptions) => {
    if (!isEnabled) return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const soundPath = `/sounds/${sound}.mp3`;
      
      fetch(soundPath)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          const source = audioContext.createBufferSource();
          source.buffer = audioBuffer;
          
          const gainNode = audioContext.createGain();
          gainNode.gain.value = soundOptions?.volume ?? volume;
          
          source.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          source.loop = soundOptions?.loop ?? false;
          
          if (soundOptions?.delay) {
            setTimeout(() => source.start(0), soundOptions.delay);
          } else {
            source.start(0);
          }
          
          if (!source.loop) {
            source.onended = () => {
              source.disconnect();
              gainNode.disconnect();
            };
          }
        })
        .catch(error => {
          console.error('Error loading sound:', error);
        });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [isEnabled, volume]);

  const toggleSound = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  return {
    playSound,
    isEnabled,
    setIsEnabled,
    toggleSound,
    volume,
    setVolume
  };
};

export default useNotificationSound;
