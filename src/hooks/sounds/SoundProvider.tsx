
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

// Define the basic sound configuration type
export interface SoundConfig {
  enabled: boolean;
  volume: number;
  muted: boolean;
}

// Define the context interface
interface SoundContextType {
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
  toggleMute: () => boolean;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isEnabled: boolean;
  toggleEnabled: () => void;
  soundConfig: SoundConfig;
  mute: () => void;
  unmute: () => void;
  currentVolume: number;
}

// Create the context with a default value
export const SoundContext = createContext<SoundContextType | null>(null);

// Define the paths for sound files
const soundPaths: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  purchase: '/sounds/purchase.mp3',
  levelUp: '/sounds/level-up.mp3',
  transaction: '/sounds/transaction.mp3',
  message: '/sounds/message.mp3',
  ui: '/sounds/ui.mp3',
  transition: '/sounds/transition.mp3',
  hover: '/sounds/hover.mp3',
  shame: '/sounds/shame.mp3',
  royal: '/sounds/royal.mp3',
  coin: '/sounds/coin.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  team: '/sounds/team.mp3',
  badge: '/sounds/badge.mp3',
  alert: '/sounds/alert.mp3',
  warning: '/sounds/warning.mp3',
  chime: '/sounds/chime.mp3',
  reward: '/sounds/reward.mp3',
  toggle: '/sounds/toggle.mp3',
  upgrade: '/sounds/upgrade.mp3',
  down: '/sounds/down.mp3',
  up: '/sounds/up.mp3',
  withdraw: '/sounds/withdraw.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  fanfare: '/sounds/fanfare.mp3',
  trumpet: '/sounds/trumpet.mp3',
  medallion: '/sounds/medallion.mp3',
  protection: '/sounds/protection.mp3',
  taunt: '/sounds/taunt.mp3',
  mock: '/sounds/mock.mp3',
  challenge: '/sounds/challenge.mp3',
  joust: '/sounds/joust.mp3',
  duel: '/sounds/duel.mp3',
  crown: '/sounds/crown.mp3',
  stocks: '/sounds/stocks.mp3',
  putridEgg: '/sounds/putrid-egg.mp3',
  silence: '/sounds/silence.mp3',
  courtJester: '/sounds/court-jester.mp3',
  smokeBomb: '/sounds/smoke-bomb.mp3',
  fish: '/sounds/fish.mp3'
};

// Create a component provider
export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for sound settings
  const [soundConfig, setSoundConfig] = useState<SoundConfig>({
    enabled: true,
    volume: 0.5,
    muted: false
  });

  // Reference to the current sound
  const [currentSound, setCurrentSound] = useState<Howl | null>(null);

  // Load sound settings from local storage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('soundConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setSoundConfig(parsedConfig);
      } catch (err) {
        console.error('Error loading sound settings:', err);
      }
    }
  }, []);

  // Save sound settings to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
  }, [soundConfig]);

  // Function to play a sound
  const playSound = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (!soundConfig.enabled || !soundPaths[sound]) return;

    try {
      // Stop the current sound if one is playing
      if (currentSound) {
        currentSound.stop();
      }

      // Create a new Howl instance
      const howl = new Howl({
        src: [soundPaths[sound]],
        volume: options?.volume !== undefined 
          ? options.volume * soundConfig.volume
          : soundConfig.volume,
        loop: options?.loop || false,
        mute: soundConfig.muted,
        onend: () => {
          if (options?.onEnd) {
            options.onEnd();
          }
        }
      });

      // Apply playback rate if specified
      if (options?.playbackRate) {
        howl.rate(options.playbackRate);
      }

      // Play the sound with delay if specified
      if (options?.delay) {
        setTimeout(() => howl.play(), options.delay);
      } else {
        howl.play();
      }

      // Store the current sound
      setCurrentSound(howl);
    } catch (error) {
      console.error(`Error playing sound ${sound}:`, error);
    }
  }, [soundConfig, currentSound]);

  // Function to stop the current sound
  const stopSound = useCallback((fade: boolean = false) => {
    if (currentSound) {
      if (fade) {
        currentSound.fade(currentSound.volume(), 0, 500);
        setTimeout(() => {
          currentSound.stop();
          setCurrentSound(null);
        }, 500);
      } else {
        currentSound.stop();
        setCurrentSound(null);
      }
    }
  }, [currentSound]);

  // Function to pause the current sound
  const pauseSound = useCallback(() => {
    if (currentSound) {
      currentSound.pause();
    }
  }, [currentSound]);

  // Function to resume the current sound
  const resumeSound = useCallback(() => {
    if (currentSound) {
      currentSound.play();
    }
  }, [currentSound]);

  // Function to toggle mute
  const toggleMute = useCallback((): boolean => {
    setSoundConfig(prev => {
      const newMuted = !prev.muted;
      
      // Also mute the current sound if one is playing
      if (currentSound) {
        currentSound.mute(newMuted);
      }
      
      return { ...prev, muted: newMuted };
    });
    
    return !soundConfig.muted;
  }, [soundConfig.muted, currentSound]);

  // Explicit mute and unmute functions
  const mute = useCallback(() => {
    setSoundConfig(prev => {
      // Only update if not already muted
      if (!prev.muted) {
        // Also mute the current sound if one is playing
        if (currentSound) {
          currentSound.mute(true);
        }
        return { ...prev, muted: true };
      }
      return prev;
    });
  }, [currentSound]);

  const unmute = useCallback(() => {
    setSoundConfig(prev => {
      // Only update if currently muted
      if (prev.muted) {
        // Also unmute the current sound if one is playing
        if (currentSound) {
          currentSound.mute(false);
        }
        return { ...prev, muted: false };
      }
      return prev;
    });
  }, [currentSound]);

  // Function to set the volume
  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prev => {
      const newVolume = Math.max(0, Math.min(1, volume));
      
      // Also update the volume of the current sound if one is playing
      if (currentSound) {
        currentSound.volume(newVolume);
      }
      
      return { ...prev, volume: newVolume };
    });
  }, [currentSound]);

  // Function to get the current volume
  const getVolume = useCallback(() => {
    return soundConfig.volume;
  }, [soundConfig.volume]);

  // Function to toggle sound enabled/disabled
  const toggleEnabled = useCallback(() => {
    setSoundConfig(prev => {
      const newEnabled = !prev.enabled;
      
      // If disabling, also stop any current sound
      if (!newEnabled && currentSound) {
        currentSound.stop();
        setCurrentSound(null);
      }
      
      return { ...prev, enabled: newEnabled };
    });
  }, [currentSound]);

  // Provide the context value
  const contextValue: SoundContextType = {
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
    soundConfig,
    mute,
    unmute,
    currentVolume: soundConfig.volume
  };

  return (
    <SoundContext.Provider value={contextValue}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom hook to use the sound context
export const useSoundContext = (): SoundContextType => {
  const context = useContext(SoundContext);
  
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  
  return context;
};

export default SoundProvider;
