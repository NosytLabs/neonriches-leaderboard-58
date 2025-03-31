
import { useCallback } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { SoundConfig } from '@/types/sound-types';

const defaultSoundConfig: SoundConfig = {
  volume: 0.5,
  enabled: true,
  muted: false,
  premium: false
};

export const useSoundsConfig = () => {
  const [soundConfig, setSoundConfig] = useLocalStorage<SoundConfig>('sound-config', defaultSoundConfig);

  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      volume: Math.max(0, Math.min(1, volume))
    }));
  }, [setSoundConfig]);

  const toggleSounds = useCallback(() => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      enabled: !prevConfig.enabled
    }));
  }, [setSoundConfig]);

  const toggleMuted = useCallback(() => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      muted: !prevConfig.muted
    }));
  }, [setSoundConfig]);

  const togglePremium = useCallback(() => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      premium: !prevConfig.premium
    }));
  }, [setSoundConfig]);

  return {
    soundConfig,
    setVolume,
    toggleSounds,
    toggleMuted,
    togglePremium
  };
};
