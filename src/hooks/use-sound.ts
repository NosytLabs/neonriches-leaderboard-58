
import { useState, useCallback } from 'react';
import { SoundType, SoundOptions, SoundConfig } from '@/hooks/sound-types';

const DEFAULT_SOUND_CONFIG: SoundConfig = {
  enabled: true,
  volume: 0.5,
  muted: false
};

export const useSound = () => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    // Try to get stored config from localStorage
    try {
      const storedConfig = localStorage.getItem('soundConfig');
      if (storedConfig) {
        return { ...DEFAULT_SOUND_CONFIG, ...JSON.parse(storedConfig) };
      }
    } catch (error) {
      console.error('Error parsing sound config from localStorage:', error);
    }
    return DEFAULT_SOUND_CONFIG;
  });

  const saveConfig = useCallback((config: SoundConfig) => {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(config));
    } catch (error) {
      console.error('Error saving sound config to localStorage:', error);
    }
  }, []);

  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    // Simple console log for demo purposes
    console.log(`Playing sound: ${type}`, options);
    
    // In a real implementation, this would play actual sounds
    return true;
  }, [soundConfig.enabled, soundConfig.muted]);

  const stopSound = useCallback((fade?: boolean) => {
    console.log(`Stopping sound ${fade ? 'with fade' : 'immediately'}`);
  }, []);

  const pauseSound = useCallback(() => {
    console.log('Pausing sound');
  }, []);

  const resumeSound = useCallback(() => {
    console.log('Resuming sound');
  }, []);

  const toggleMute = useCallback(() => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, muted: !prev.muted };
      saveConfig(newConfig);
      return newConfig;
    });
    return !soundConfig.muted; // Return the new state
  }, [soundConfig.muted, saveConfig]);

  const mute = useCallback(() => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, muted: true };
      saveConfig(newConfig);
      return newConfig;
    });
  }, [saveConfig]);

  const unmute = useCallback(() => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, muted: false };
      saveConfig(newConfig);
      return newConfig;
    });
  }, [saveConfig]);

  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, volume: Math.max(0, Math.min(1, volume)) };
      saveConfig(newConfig);
      return newConfig;
    });
  }, [saveConfig]);

  const getVolume = useCallback(() => {
    return soundConfig.volume;
  }, [soundConfig.volume]);

  const toggleEnabled = useCallback(() => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, enabled: !prev.enabled };
      saveConfig(newConfig);
      return newConfig;
    });
  }, [saveConfig]);

  return {
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
    
    // Additional properties for compatibility
    toggleMuted: toggleMute,
    soundConfig,
    mute,
    unmute,
    currentVolume: soundConfig.volume
  };
};

export default useSound;
