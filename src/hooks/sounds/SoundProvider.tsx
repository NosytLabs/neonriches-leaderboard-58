import React, { createContext, useState, useContext, useEffect } from 'react';
import { SoundType, SoundOptions, SoundHook } from '../sound-types';
import useLocalStorage from '../useLocalStorage';

// Create a context with the updated interface
const SoundContext = createContext<SoundHook>({
  playSound: () => {},
  stopSound: () => {},
  toggleMute: () => {},
  isMuted: false,
  setVolume: () => {},
  getVolume: () => 1,
  isEnabled: true,
  toggleEnabled: () => {}
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enabled, setEnabled] = useLocalStorage('sound-enabled', true);
  const [muted, setMuted] = useLocalStorage('sound-muted', false);
  const [volume, setVolumeState] = useLocalStorage('sound-volume', 0.5);
  const [sounds, setSounds] = useState<Record<string, HTMLAudioElement>>({});

  // Create an adapter function to bridge the different stopSound signatures
  const adaptedStopSound = (soundOrFade?: SoundType | boolean) => {
    // If soundOrFade is a boolean, it's the fade parameter from the old interface
    if (typeof soundOrFade === 'boolean') {
      // Stop all sounds
      Object.values(sounds).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    } else if (typeof soundOrFade === 'string') {
      // Stop a specific sound
      const audio = sounds[soundOrFade];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } else {
      // No parameter, stop all sounds
      Object.values(sounds).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  };

  useEffect(() => {
    const loadSound = (type: SoundType) => {
      if (!sounds[type]) {
        const audio = new Audio(`/sounds/${type}.mp3`);
        setSounds(prev => ({ ...prev, [type]: audio }));
      }
    };

    if (enabled) {
      loadSound('click');
      loadSound('success');
      loadSound('error');
      loadSound('notification');
      loadSound('achievement');
      loadSound('purchase');
      loadSound('coin');
      loadSound('level_up');
      loadSound('boost');
      loadSound('royal');
    }

    return () => {
      Object.values(sounds).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [enabled]);

  const playSound = (type: SoundType, options?: SoundOptions) => {
    if (!enabled || muted) return;

    const audio = sounds[type];
    if (audio) {
      audio.volume = options?.volume ?? volume;
      audio.loop = options?.loop ?? false;
      audio.onended = options?.onEnd;
      audio.currentTime = 0;
      audio.play().catch(error => console.error("Failed to play sound:", error));
    }
  };

  // Return the context value with the adapted stopSound function
  return (
    <SoundContext.Provider value={{
      playSound: (sound, options) => {
        if (!enabled || muted) return;

        const audio = sounds[sound];
        if (audio) {
          audio.volume = options?.volume ?? volume;
          audio.loop = options?.loop ?? false;
          audio.onended = options?.onEnd;
          audio.currentTime = 0;
          audio.play().catch(error => console.error("Failed to play sound:", error));
        }
      },
      stopSound: adaptedStopSound,
      toggleMute: () => setMuted(!muted),
      isMuted: muted,
      setVolume: setVolumeState,
      getVolume: () => volume,
      isEnabled: enabled,
      toggleEnabled: () => setEnabled(!enabled)
    }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
