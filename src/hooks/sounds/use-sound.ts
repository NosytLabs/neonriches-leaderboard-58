import { useState, useCallback } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from '@/types/sound-types';

// Sound paths could be configured here or imported from another file
const SOUND_PATHS: Record<string, string> = {
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  // ... other sound paths
};

export const useSound = (): UseSoundHook => {
  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSound = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (isMuted) return;
    
    const soundPath = SOUND_PATHS[sound] || `/sounds/${sound}.mp3`;
    const soundOptions = {
      volume: options?.volume !== undefined ? options.volume : volume,
      loop: options?.loop || false,
      // Add any other options you need
    };
    
    try {
      // This is just a mock implementation since we don't have actual Audio API access
      console.log(`Playing sound: ${sound} with options:`, soundOptions);
      setCurrentSound(sound);
      setIsPlaying(true);
      
      // Simulate sound completion
      if (!soundOptions.loop) {
        setTimeout(() => {
          setIsPlaying(false);
          setCurrentSound(null);
          if (options?.onEnd) {
            options.onEnd();
          }
        }, 1000); // Simulating a 1-second sound
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [isMuted, volume]);

  const stopSound = useCallback((sound?: SoundType) => {
    console.log(`Stopping sound: ${sound || 'current'}`);
    setIsPlaying(false);
    setCurrentSound(null);
  }, []);

  const toggleMuted = useCallback((): boolean => {
    setIsMuted(prev => !prev);
    return !isMuted;
  }, [isMuted]);

  const mute = useCallback(() => {
    setIsMuted(true);
  }, []);

  const unmute = useCallback(() => {
    setIsMuted(false);
  }, []);

  const handleSetVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
  }, []);

  return {
    playSound,
    pauseSound: stopSound,
    resumeSound: () => setIsPlaying(true),
    currentSound,
    currentVolume: volume,
    isSoundEnabled: !isMuted,
    isMuted,
    soundConfig: {
      enabled: !isMuted,
      muted: isMuted,
      volume
    },
    toggleMuted,
    mute,
    unmute,
    setVolume: handleSetVolume,
    stopSound,
    isPlaying,
    play: playSound // Alias for playSound for compatibility
  };
};
