
import { useCallback, useState, useEffect, useRef } from 'react';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';

export function useSound(initialSound?: SoundType, options?: UseSoundOptions): UseSoundReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(options?.muted || false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Mapping of sound types to file paths
  const soundPaths: Record<SoundType, string> = {
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3',
    warning: '/sounds/warning.mp3',
    info: '/sounds/info.mp3',
    notification: '/sounds/notification.mp3',
    achievement: '/sounds/achievement.mp3',
    purchase: '/sounds/purchase.mp3',
    levelUp: '/sounds/level-up.mp3',
    royal: '/sounds/royal.mp3',
    trumpets: '/sounds/trumpets.mp3',
    fanfare: '/sounds/fanfare.mp3',
    coins: '/sounds/coins.mp3',
    spend: '/sounds/spend.mp3',
    deposit: '/sounds/deposit.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    click: '/sounds/click.mp3',
    hover: '/sounds/hover.mp3',
    tab: '/sounds/tab.mp3',
    shame: '/sounds/shame.mp3',
    taunt: '/sounds/taunt.mp3',
    mockery: '/sounds/mockery.mp3',
    shatter: '/sounds/shatter.mp3',
    sweep: '/sounds/sweep.mp3',
    pop: '/sounds/pop.mp3',
    swoosh: '/sounds/swoosh.mp3',
    chime: '/sounds/chime.mp3',
    bell: '/sounds/bell.mp3',
    alert: '/sounds/alert.mp3',
    drum: '/sounds/drum.mp3',
    throne: '/sounds/throne.mp3',
    applause: '/sounds/applause.mp3',
    boo: '/sounds/boo.mp3',
    medal: '/sounds/medal.mp3',
    medallion: '/sounds/medallion.mp3',
    certificate: '/sounds/certificate.mp3',
    coinDrop: '/sounds/coin-drop.mp3',
    swordClash: '/sounds/sword-clash.mp3',
    noblesLaugh: '/sounds/nobles-laugh.mp3'
  };
  
  // Mapping of sound types to volume levels
  const soundVolumes: Record<SoundType, number> = {
    success: 0.7,
    error: 0.7,
    warning: 0.7,
    info: 0.6,
    notification: 0.7,
    achievement: 0.8,
    purchase: 0.8,
    levelUp: 0.8,
    royal: 0.8,
    trumpets: 0.8,
    fanfare: 0.8,
    coins: 0.6,
    spend: 0.6,
    deposit: 0.7,
    withdrawal: 0.7,
    click: 0.4,
    hover: 0.3,
    tab: 0.4,
    shame: 0.7,
    taunt: 0.7,
    mockery: 0.7,
    shatter: 0.7,
    sweep: 0.7,
    pop: 0.6,
    swoosh: 0.6,
    chime: 0.6,
    bell: 0.7,
    alert: 0.7,
    drum: 0.7,
    throne: 0.8,
    applause: 0.7,
    boo: 0.7,
    medal: 0.7,
    medallion: 0.7,
    certificate: 0.7,
    coinDrop: 0.7,
    swordClash: 0.8,
    noblesLaugh: 0.7
  };
  
  // Initialize audio
  useEffect(() => {
    if (initialSound && typeof window !== 'undefined') {
      audioRef.current = new Audio(soundPaths[initialSound]);
      audioRef.current.volume = (options?.volume !== undefined) ? options.volume : soundVolumes[initialSound];
      audioRef.current.muted = isMuted;
      
      if (options?.autoplay) {
        audioRef.current.play().catch(err => console.error('Error auto-playing sound:', err));
        setIsPlaying(true);
      }
      
      if (options?.loop) {
        audioRef.current.loop = true;
      }
      
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, [initialSound]);
  
  // Update muted state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  
  // Play a sound
  const play = useCallback((sound?: SoundType) => {
    const soundToPlay = sound || initialSound;
    
    if (!soundToPlay || isMuted) return;
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    
    const audio = new Audio(soundPaths[soundToPlay]);
    audio.volume = (options?.volume !== undefined) ? options.volume : soundVolumes[soundToPlay];
    audio.muted = isMuted;
    
    if (options?.loop) {
      audio.loop = true;
    }
    
    audio.play().catch(err => console.error('Error playing sound:', err));
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    audioRef.current = audio;
    setIsPlaying(true);
  }, [initialSound, isMuted, options]);
  
  // Pause current sound
  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);
  
  // Stop current sound
  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);
  
  // Set volume
  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);
  
  // Toggle mute
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  // Play a random sound from a list
  const playRandom = useCallback((sounds: SoundType[]) => {
    if (sounds.length === 0 || isMuted) return;
    
    const randomIndex = Math.floor(Math.random() * sounds.length);
    play(sounds[randomIndex]);
  }, [play, isMuted]);
  
  return {
    play,
    pause,
    stop,
    isPlaying,
    isMuted,
    setVolume,
    toggleMute,
    playRandom
  };
}
