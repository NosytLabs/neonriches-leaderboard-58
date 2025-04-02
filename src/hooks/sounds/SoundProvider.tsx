import React, { useEffect, useState, useRef, useCallback } from 'react';
import { SoundContext } from '@/contexts/SoundContext';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { premiumSoundAssets, defaultSoundAssets } from './premium-sound-assets';

interface SoundProviderProps {
  children: React.ReactNode;
  initialMuted?: boolean;
  initialVolume?: number;
  enabled?: boolean;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({
  children,
  initialMuted = false,
  initialVolume = 0.5,
  enabled = true
}) => {
  const [muted, setMuted] = useState<boolean>(initialMuted);
  const [volume, setVolume] = useState<number>(initialVolume);
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Create a complete sound map with all required SoundType values
  const soundAssets: Record<SoundType, string> = {
    // Combine premium and default assets
    ...defaultSoundAssets as Record<SoundType, string>,
    ...premiumSoundAssets as Record<SoundType, string>,
    // Ensure all required properties exist
    click: '/assets/sounds/premium/click.mp3',
    success: '/assets/sounds/premium/success.mp3',
    error: '/assets/sounds/premium/error.mp3',
    notification: '/assets/sounds/premium/notification.mp3',
    achievement: '/assets/sounds/premium/achievement.mp3',
    purchase: '/assets/sounds/premium/purchase.mp3',
    levelUp: '/assets/sounds/premium/level-up.mp3',
    transaction: '/assets/sounds/premium/transaction.mp3',
    warning: '/assets/sounds/premium/warning.mp3',
    message: '/assets/sounds/premium/message.mp3',
    ui: '/assets/sounds/premium/ui.mp3',
    transition: '/assets/sounds/premium/transition.mp3',
    hover: '/assets/sounds/premium/hover.mp3',
    shame: '/assets/sounds/premium/shame.mp3',
    royal: '/assets/sounds/premium/royal.mp3',
    coin: '/assets/sounds/premium/coin.mp3',
    coinDrop: '/assets/sounds/premium/coin-drop.mp3',
    team: '/assets/sounds/premium/team.mp3',
    badge: '/assets/sounds/premium/badge.mp3',
    alert: '/assets/sounds/premium/alert.mp3',
    chime: '/assets/sounds/premium/chime.mp3',
    reward: '/assets/sounds/premium/reward.mp3',
    toggle: '/assets/sounds/premium/toggle.mp3',
    upgrade: '/assets/sounds/premium/upgrade.mp3',
    down: '/assets/sounds/premium/down.mp3',
    up: '/assets/sounds/premium/up.mp3',
    withdraw: '/assets/sounds/premium/withdraw.mp3',
    royalAnnouncement: '/assets/sounds/premium/royal-announcement.mp3',
    fanfare: '/assets/sounds/premium/fanfare.mp3',
    trumpet: '/assets/sounds/premium/trumpet.mp3',
    medallion: '/assets/sounds/premium/medallion.mp3',
    protection: '/assets/sounds/premium/protection.mp3',
    taunt: '/assets/sounds/premium/taunt.mp3',
    mock: '/assets/sounds/premium/mock.mp3',
    challenge: '/assets/sounds/premium/challenge.mp3',
    joust: '/assets/sounds/premium/joust.mp3',
    duel: '/assets/sounds/premium/duel.mp3',
    crown: '/assets/sounds/premium/crown.mp3',
    stocks: '/assets/sounds/premium/stocks.mp3',
    silence: '/assets/sounds/premium/silence.mp3',
    courtJester: '/assets/sounds/premium/court-jester.mp3',
    smokeBomb: '/assets/sounds/premium/smoke-bomb.mp3',
    putridEgg: '/assets/sounds/premium/putrid-egg.mp3',
    fish: '/assets/sounds/premium/fish.mp3',
    deposit: '/assets/sounds/premium/deposit.mp3',
    rank_up: '/assets/sounds/premium/rank-up.mp3',
    mockery: '/assets/sounds/premium/mockery.mp3',
    level_up: '/assets/sounds/premium/level-up.mp3',
    throne: '/assets/sounds/premium/throne.mp3',
    boost: '/assets/sounds/premium/boost.mp3',
    unlock: '/assets/sounds/premium/unlock.mp3'
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      audioRef.current.volume = volume;
    }
  }, [muted, volume]);

  const playSound = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (!isEnabled || muted) return;

    const soundFile = soundAssets[sound];
    if (!soundFile) {
      console.warn(`Sound "${sound}" not found.`);
      return;
    }

    const audio = new Audio(soundFile);
    audioRef.current = audio;

    if (options) {
      audio.volume = options.volume || volume;
      audio.loop = options.loop || false;
      if (options.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      if (options.onEnd) {
        audio.addEventListener('ended', options.onEnd);
      }
    } else {
      audio.volume = volume;
    }

    audio.muted = muted;

    audio.play()
      .catch(error => console.error("Failed to play sound:", error));

  }, [isEnabled, muted, volume, soundAssets]);

  const stopSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const pauseSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const resumeSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
    return !muted;
  }, [muted]);

  const setVolumeLevel = useCallback((newVolume: number) => {
    setVolume(newVolume);
  }, []);

  const getVolume = useCallback(() => {
    return volume;
  }, [volume]);

  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  return (
    <SoundContext.Provider value={{
      playSound,
      stopSound,
      pauseSound,
      resumeSound,
      toggleMute,
      isMuted: muted,
      setVolume: setVolumeLevel,
      getVolume,
      isEnabled,
      toggleEnabled,
      mute: () => setMuted(true),
      unmute: () => setMuted(false),
      toggleMuted: toggleMute,
      currentVolume: volume,
      soundConfig: {
        enabled: isEnabled,
        volume: volume,
        muted: muted
      }
    }}>
      {children}
    </SoundContext.Provider>
  );
};
