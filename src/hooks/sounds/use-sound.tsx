
import React, { useState, useCallback, useContext, createContext } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from '@/types/sound-types';

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundContext = createContext<UseSoundHook>({
  playSound: () => {},
  stopSound: () => {},
  toggleSounds: () => {},
  isSoundEnabled: true,
  setVolume: () => {},
});

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [volume, setVolumeState] = useState<number>(0.5);
  const [muted, setMuted] = useState<boolean>(false);
  
  // Map to store currently playing sounds
  const audioMap = React.useRef<Map<SoundType, HTMLAudioElement>>(new Map());
  
  // Basic sound paths
  const soundPaths: Record<string, string> = {
    coin: '/sounds/coin.mp3',
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3',
    click: '/sounds/click.mp3',
    notification: '/sounds/notification.mp3',
    achievement: '/sounds/achievement.mp3',
    purchase: '/sounds/purchase.mp3',
    deposit: '/sounds/deposit.mp3',
    mockery: '/sounds/mockery.mp3',
    fanfare: '/sounds/fanfare.mp3',
    levelUp: '/sounds/level-up.mp3',
    shame: '/sounds/shame.mp3',
    reward: '/sounds/reward.mp3',
    boost: '/sounds/boost.mp3',
    coinDrop: '/sounds/coin-drop.mp3',
    message: '/sounds/message.mp3',
    level_up: '/sounds/level-up.mp3',
    royal: '/sounds/royal.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    sparkle: '/sounds/sparkle.mp3',
    protection: '/sounds/protection.mp3',
    transfer: '/sounds/transfer.mp3',
    unlock: '/sounds/unlock.mp3',
    noblesLaugh: '/sounds/nobles-laugh.mp3',
    team: '/sounds/team.mp3',
    rank_up: '/sounds/rank-up.mp3',
    trumpets: '/sounds/trumpets.mp3',
    trumpet: '/sounds/trumpet.mp3',
    medallion: '/sounds/medallion.mp3',
    seal: '/sounds/seal.mp3',
    swordClash: '/sounds/sword-clash.mp3',
    royalAnnouncement: '/sounds/royal-announcement.mp3'
  };
  
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (muted || !isSoundEnabled) return;

    try {
      // Stop any existing sound of this type
      if (audioMap.current.has(type)) {
        const existingAudio = audioMap.current.get(type);
        if (existingAudio) {
          existingAudio.pause();
          existingAudio.currentTime = 0;
        }
      }
      
      // Get the sound path or use a default
      const soundPath = soundPaths[type] || soundPaths.notification;
      if (!soundPath) return;
      
      // Create a new audio element
      const audio = new Audio(soundPath);
      
      // Set volume
      audio.volume = options?.volume !== undefined ? options.volume : volume;
      
      if (options?.loop) {
        audio.loop = true;
      }
      
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      if (options?.onEnd) {
        audio.onended = options.onEnd;
      }
      
      // Store reference to this audio element
      audioMap.current.set(type, audio);
      
      // Play the sound
      audio.play().catch(e => {
        console.warn(`Failed to play sound: ${type}`, e);
      });
    } catch (error) {
      console.warn(`Error playing sound: ${type}`, error);
    }
  }, [isSoundEnabled, volume, muted]);
  
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audioMap.current.delete(type);
      }
    } else {
      // Stop all sounds
      audioMap.current.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioMap.current.clear();
    }
  }, []);
  
  const pauseSound = useCallback((type?: SoundType) => {
    if (type) {
      // Pause specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.pause();
      }
    } else {
      // Pause all sounds
      audioMap.current.forEach((audio) => {
        audio.pause();
      });
    }
  }, []);
  
  const resumeSound = useCallback((type?: SoundType) => {
    if (!isSoundEnabled || muted) return;

    if (type) {
      // Resume specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
      }
    } else {
      // Resume all sounds
      audioMap.current.forEach(audio => {
        audio.play().catch(err => {
          console.warn(`Error resuming sound:`, err);
        });
      });
    }
  }, [isSoundEnabled, muted]);
  
  const isPlaying = useCallback((type: SoundType): boolean => {
    const audio = audioMap.current.get(type);
    return !!(audio && !audio.paused);
  }, []);
  
  const toggleSounds = useCallback(() => {
    setSoundEnabled(prev => !prev);
    
    // If turning off sounds, stop all currently playing sounds
    if (isSoundEnabled) {
      stopSound();
    }
  }, [isSoundEnabled, stopSound]);
  
  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(prev => {
      const clampedVolume = Math.min(Math.max(newVolume, 0), 1);
      
      // Update volume for all currently loaded audio instances
      audioMap.current.forEach(audio => {
        audio.volume = clampedVolume;
      });
      
      return clampedVolume;
    });
  }, []);
  
  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const newMuted = !prev;
      
      // If unmuting, do nothing to current sounds
      // If muting, pause all sounds
      if (newMuted) {
        audioMap.current.forEach(audio => {
          audio.pause();
        });
      }
      
      return newMuted;
    });
    return !muted;
  }, [muted]);
  
  // For backward compatibility
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  const value: UseSoundHook = {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    toggleSounds,
    isSoundEnabled,
    setVolume,
    currentVolume: volume,
    play,
    isMuted: muted,
    toggleMute,
    setMuted,
    volume
  };
  
  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): UseSoundHook => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

export default useSound;
