
import React, { createContext, useState, useEffect, useRef } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { SoundType, SoundOptions, SoundConfig, SoundHook } from '../sound-types';

// Create context with default values
export const SoundContext = createContext<SoundHook>({
  playSound: () => {},
  stopSound: () => {},
  pauseSound: () => {},
  resumeSound: () => {},
  toggleMute: () => {},
  isMuted: false,
  setVolume: () => {},
  getVolume: () => 0,
  isEnabled: true,
  toggleEnabled: () => {},
  toggleMuted: () => {},
  mute: () => {},
  unmute: () => {},
  currentVolume: 0,
  soundConfig: { enabled: true, volume: 0.5, muted: false }
});

// Sound Provider Component
export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sound configuration stored in localStorage
  const [soundConfig, setSoundConfig] = useLocalStorage<SoundConfig>(
    'sound-config',
    { enabled: true, volume: 0.5, muted: false }
  );
  
  // Refs to hold audio elements
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});
  const activeSound = useRef<SoundType | null>(null);
  
  // Preload common sounds
  useEffect(() => {
    const commonSounds: SoundType[] = ['click', 'success', 'error', 'notification'];
    
    commonSounds.forEach(sound => {
      const audio = new Audio(`/sounds/${sound}.mp3`);
      audio.preload = 'auto';
      audioRefs.current[sound] = audio;
    });
    
    return () => {
      // Cleanup audio elements
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      audioRefs.current = {};
    };
  }, []);
  
  // Play a sound
  const playSound = (sound: SoundType, options: SoundOptions = {}) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    // Get or create audio element
    let audio = audioRefs.current[sound];
    if (!audio) {
      audio = new Audio(`/sounds/${sound}.mp3`);
      audioRefs.current[sound] = audio;
    }
    
    // Reset and configure audio
    audio.pause();
    audio.currentTime = 0;
    audio.volume = options.volume !== undefined ? options.volume : soundConfig.volume;
    audio.loop = options.loop || false;
    audio.playbackRate = options.playbackRate || 1;
    
    // Handle end event if provided
    if (options.onEnd) {
      const handleEnded = () => {
        options.onEnd?.();
        audio.removeEventListener('ended', handleEnded);
      };
      audio.addEventListener('ended', handleEnded);
    }
    
    // Play with delay if specified
    if (options.delay) {
      setTimeout(() => {
        audio.play().catch(err => console.error(`Error playing sound ${sound}:`, err));
      }, options.delay);
    } else {
      audio.play().catch(err => console.error(`Error playing sound ${sound}:`, err));
    }
    
    activeSound.current = sound;
  };
  
  // Stop current sound
  const stopSound = (fade: boolean = false) => {
    if (!activeSound.current) return;
    
    const audio = audioRefs.current[activeSound.current];
    if (!audio) return;
    
    if (fade) {
      // Implement fade out
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          clearInterval(fadeInterval);
          audio.pause();
          audio.currentTime = 0;
          audio.volume = soundConfig.volume; // Reset volume
        }
      }, 50);
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    
    activeSound.current = null;
  };
  
  // Pause current sound
  const pauseSound = () => {
    if (!activeSound.current) return;
    
    const audio = audioRefs.current[activeSound.current];
    if (audio) {
      audio.pause();
    }
  };
  
  // Resume current sound
  const resumeSound = () => {
    if (!activeSound.current) return;
    
    const audio = audioRefs.current[activeSound.current];
    if (audio) {
      audio.play().catch(err => console.error('Error resuming sound:', err));
    }
  };
  
  // Toggle mute state
  const toggleMute = () => {
    setSoundConfig(prev => ({
      ...prev,
      muted: !prev.muted
    }));
    
    // Mute or unmute active sound
    if (activeSound.current) {
      const audio = audioRefs.current[activeSound.current];
      if (audio) {
        audio.muted = !soundConfig.muted;
      }
    }
    
    return !soundConfig.muted;
  };
  
  // Set volume
  const setVolume = (volume: number) => {
    if (volume < 0 || volume > 1) return;
    
    setSoundConfig(prev => ({
      ...prev,
      volume
    }));
    
    // Update volume of active sound
    if (activeSound.current) {
      const audio = audioRefs.current[activeSound.current];
      if (audio) {
        audio.volume = volume;
      }
    }
  };
  
  // Get current volume
  const getVolume = () => soundConfig.volume;
  
  // Toggle enabled state
  const toggleEnabled = () => {
    setSoundConfig(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
    
    // Stop active sound if disabling
    if (soundConfig.enabled && activeSound.current) {
      stopSound();
    }
    
    return !soundConfig.enabled;
  };
  
  // Alias methods for backward compatibility
  const mute = () => {
    if (!soundConfig.muted) {
      toggleMute();
    }
  };
  
  const unmute = () => {
    if (soundConfig.muted) {
      toggleMute();
    }
  };
  
  return (
    <SoundContext.Provider
      value={{
        playSound,
        stopSound,
        pauseSound,
        resumeSound,
        toggleMute,
        isMuted: soundConfig.muted,
        setVolume,
        getVolume,
        isEnabled: soundConfig.enabled,
        toggleEnabled,
        // Compatibility properties
        toggleMuted: toggleMute,
        soundConfig,
        mute,
        unmute,
        currentVolume: soundConfig.volume
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
