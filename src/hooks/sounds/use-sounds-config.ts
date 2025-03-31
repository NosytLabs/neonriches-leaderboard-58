
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { SoundConfig } from '@/types/sound-types';

export const useSoundsConfig = () => {
  const [config, setConfig] = useLocalStorage<SoundConfig>('sound-config', {
    volume: 0.5,
    enabled: true,
    muted: false,
    premium: false
  });

  const setVolume = (volume: number) => {
    setConfig({ ...config, volume });
    localStorage.setItem('soundVolume', volume.toString());
  };

  const toggleEnabled = () => {
    const newEnabled = !config.enabled;
    setConfig({ ...config, enabled: newEnabled });
    localStorage.setItem('soundEnabled', JSON.stringify(newEnabled));
  };

  const toggleMute = () => {
    const newMuted = !config.muted;
    setConfig({ ...config, muted: newMuted });
    localStorage.setItem('soundsMuted', JSON.stringify(newMuted));
  };

  const togglePremium = () => {
    const newPremium = !config.premium;
    setConfig({ ...config, premium: newPremium });
    localStorage.setItem('premiumSounds', JSON.stringify(newPremium));
  };

  // Return the configuration and functions to update it
  return {
    config,
    setVolume,
    toggleEnabled,
    toggleMute,
    togglePremium
  };
};

export default useSoundsConfig;
