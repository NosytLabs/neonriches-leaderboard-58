
import { useCallback, useEffect, useState } from 'react';
import { useAudioLoader } from './use-audio-loader';
import { SoundType } from '@/types/sound-types';

export interface UseSoundProps {
  sound?: SoundType;
  volume?: number;
  muted?: boolean;
}

export const useSound = (props?: UseSoundProps) => {
  const { sound, volume = 0.5, muted = false } = props || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const { sounds, loadingComplete } = useAudioLoader();
  
  // Create a map of all available sounds with their volume levels
  const soundVolumes: Record<SoundType, number> = {
    click: 0.4,
    hover: 0.2,
    success: 0.7,
    error: 0.6,
    notification: 0.6,
    purchase: 0.8,
    rankUp: 0.8,
    coinDrop: 0.7,
    achievement: 0.8,
    trumpets: 0.9,
    fanfare: 0.9,
    shame: 0.7,
    parchment: 0.6,
    treasure: 0.8,
    royal: 0.8,
    crown: 0.7,
    pageTransition: 0.5,
    parchmentUnfurl: 0.6,
    info: 0.5,
    seal: 0.7,
    deposit: 0.7,
    reward: 0.8,
    win: 0.9,
    warning: 0.6,
    medallion: 0.7,
    trumpet: 0.8,
    royalAnnouncement: 0.9
  };
  
  // Play a sound
  const play = useCallback(
    (soundToPlay: SoundType = sound as SoundType) => {
      if (isMuted || !loadingComplete || !soundToPlay) return;
      
      const audio = sounds[soundToPlay];
      if (!audio) return;
      
      // Set volume and play
      audio.volume = soundVolumes[soundToPlay] || volume;
      audio.currentTime = 0;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Sound playback failed:', error);
            setIsPlaying(false);
          });
      }
    },
    [sounds, loadingComplete, isMuted, sound, volume, soundVolumes]
  );
  
  // Stop a sound
  const stop = useCallback(
    (soundToStop: SoundType = sound as SoundType) => {
      if (!loadingComplete || !soundToStop) return;
      
      const audio = sounds[soundToStop];
      if (!audio) return;
      
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    },
    [sounds, loadingComplete, sound]
  );
  
  // Toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      if (sound && sounds[sound]) {
        sounds[sound]?.pause();
      }
    };
  }, [sound, sounds]);
  
  return {
    play,
    stop,
    isPlaying,
    isMuted,
    toggleMute,
    // Backward compatibility for existing code that uses playSound
    playSound: play
  };
};
