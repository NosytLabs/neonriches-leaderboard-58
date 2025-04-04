
import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { SoundType, SoundOptions, SoundHook, SoundConfig } from '@/types/sound-types';

// Get initial sound settings from localStorage or use defaults
const getInitialSoundConfig = (): SoundConfig => {
  if (typeof window === 'undefined') {
    return {
      enabled: true,
      muted: false,
      volume: 0.5
    };
  }

  try {
    const storedConfig = localStorage.getItem('soundConfig');
    if (storedConfig) {
      return JSON.parse(storedConfig);
    }
  } catch (error) {
    console.error('Error parsing sound config from localStorage:', error);
  }

  return {
    enabled: true,
    muted: false,
    volume: 0.5
  };
};

// Save sound settings to localStorage
const saveSoundConfig = (config: SoundConfig): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(config));
    } catch (error) {
      console.error('Error saving sound config to localStorage:', error);
    }
  }
};

// Sound paths mapping
const soundPaths: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  coin: '/sounds/coin.mp3',
  purchase: '/sounds/purchase.mp3',
  deposit: '/sounds/deposit.mp3',
  withdrawal: '/sounds/withdrawal.mp3',
  levelUp: '/sounds/level-up.mp3',
  level_up: '/sounds/level-up.mp3',
  boost: '/sounds/boost.mp3',
  message: '/sounds/message.mp3',
  mockery: '/sounds/mockery.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  shame: '/sounds/shame.mp3',
  fanfare: '/sounds/fanfare.mp3',
  royal: '/sounds/royal.mp3',
  protection: '/sounds/protection.mp3',
  sparkle: '/sounds/sparkle.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  trumpet: '/sounds/trumpet.mp3',
  medallion: '/sounds/medallion.mp3',
  seal: '/sounds/seal.mp3',
  transfer: '/sounds/transfer.mp3',
  unlock: '/sounds/unlock.mp3',
  team: '/sounds/team.mp3',
  rank_up: '/sounds/rank-up.mp3',
  reward: '/sounds/reward.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  pageChange: '/sounds/page-change.mp3',
  wish: '/sounds/wish.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  hover: '/sounds/hover.mp3',
  advertisement: '/sounds/advertisement.mp3'
};

// Create the context
export const SoundContext = createContext<SoundHook | null>(null);

// Sound provider component
export interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(getInitialSoundConfig);
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  
  // Save settings whenever they change
  useEffect(() => {
    saveSoundConfig(soundConfig);
  }, [soundConfig]);
  
  // Cleanup audio elements when component unmounts
  useEffect(() => {
    return () => {
      Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [audioElements]);
  
  // Toggle sound effects on/off
  const toggleEnabled = useCallback((): boolean => {
    setSoundConfig(prev => ({ ...prev, enabled: !prev.enabled }));
    return !soundConfig.enabled;
  }, [soundConfig.enabled]);

  // Toggle muted state
  const toggleMuted = useCallback((): boolean => {
    setSoundConfig(prev => ({ ...prev, muted: !prev.muted }));
    return !soundConfig.muted;
  }, [soundConfig.muted]);

  // Legacy toggle mute function for backward compatibility
  const toggleMute = toggleMuted;
  
  // Set volume level
  const setVolume = useCallback((volume: number): void => {
    setSoundConfig(prev => ({ ...prev, volume: Math.min(1, Math.max(0, volume)) }));
  }, []);
  
  // Get volume level
  const getVolume = useCallback((): number => {
    return soundConfig.volume;
  }, [soundConfig.volume]);
  
  // Mute and unmute helpers
  const mute = useCallback((): void => {
    setSoundConfig(prev => ({ ...prev, muted: true }));
  }, []);
  
  const unmute = useCallback((): void => {
    setSoundConfig(prev => ({ ...prev, muted: false }));
  }, []);
  
  /**
   * Play a sound with options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    const soundPath = soundPaths[type];
    if (!soundPath) {
      console.warn(`Sound path for type ${type} not found`);
      return;
    }
    
    try {
      // Check if we already have an audio element for this sound
      let audio = audioElements[type];
      
      // If not, create a new one
      if (!audio) {
        audio = new Audio(soundPath);
        setAudioElements(prev => ({ ...prev, [type]: audio }));
      } else {
        // Reset the audio element if it exists
        audio.pause();
        audio.currentTime = 0;
      }
      
      // Set volume
      audio.volume = options?.volume !== undefined 
        ? options.volume 
        : soundConfig.volume;
      
      // Set playback rate if provided
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      // Set loop option
      audio.loop = options?.loop || false;
      
      // Handle onEnd callback
      if (options?.onEnd) {
        audio.onended = () => {
          setIsPlaying(prev => ({ ...prev, [type]: false }));
          options.onEnd?.();
        };
      } else {
        audio.onended = () => {
          setIsPlaying(prev => ({ ...prev, [type]: false }));
        };
      }
      
      // Play the sound
      const playPromise = audio.play();
      setIsPlaying(prev => ({ ...prev, [type]: true }));
      
      // Handle errors
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn(`Error playing sound (${type}):`, err);
          setIsPlaying(prev => ({ ...prev, [type]: false }));
        });
      }
    } catch (err) {
      console.error(`Error setting up sound (${type}):`, err);
    }
  }, [soundConfig, audioElements]);
  
  // Alias for playSound for backward compatibility
  const play = playSound;
  
  /**
   * Stop a playing sound
   */
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(prev => ({ ...prev, [type]: false }));
      }
    } else {
      // Stop all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.pause();
        audio.currentTime = 0;
      });
      setIsPlaying({});
    }
  }, [audioElements]);
  
  /**
   * Pause a sound without resetting it
   */
  const pauseSound = useCallback((type?: SoundType) => {
    if (type) {
      // Pause a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.pause();
        setIsPlaying(prev => ({ ...prev, [type]: false }));
      }
    } else {
      // Pause all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.pause();
      });
      setIsPlaying({});
    }
  }, [audioElements]);
  
  /**
   * Resume a paused sound
   */
  const resumeSound = useCallback((type?: SoundType) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    if (type) {
      // Resume a specific sound
      const audio = audioElements[type];
      if (audio) {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
        setIsPlaying(prev => ({ ...prev, [type]: true }));
      }
    } else {
      // Resume all sounds
      Object.entries(audioElements).forEach(([type, audio]) => {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
        setIsPlaying(prev => ({ ...prev, [type]: true }));
      });
    }
  }, [soundConfig, audioElements]);
  
  /**
   * Check if a sound is currently playing
   */
  const isSoundPlaying = useCallback((type: SoundType) => {
    return isPlaying[type] || false;
  }, [isPlaying]);
  
  // The context value
  const contextValue: SoundHook = {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    toggleMuted,
    toggleMute, // Backward compatibility
    toggleEnabled,
    setVolume,
    getVolume,
    mute,
    unmute,
    isEnabled: soundConfig.enabled,
    isMuted: soundConfig.muted,
    isSoundEnabled: !soundConfig.muted && soundConfig.enabled,
    isPlaying: isSoundPlaying,
    currentVolume: soundConfig.volume,
    soundConfig
  };
  
  return (
    <SoundContext.Provider value={contextValue}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom hook for using the sound context
export const useSoundsContext = (): SoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    console.warn('useSoundsContext must be used within a SoundProvider');
    
    // Return a fallback implementation when used outside of context
    return {
      playSound: () => {},
      play: () => {},
      stopSound: () => {},
      pauseSound: () => {},
      resumeSound: () => {},
      toggleMuted: () => false,
      toggleMute: () => false,
      setVolume: () => {},
      isMuted: false,
      isSoundEnabled: false,
      isPlaying: () => false,
      currentVolume: 0
    };
  }
  
  return context;
};

export default SoundProvider;
