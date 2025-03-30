
import { useEffect, useState, useCallback } from 'react';
import { SoundType } from '@/types/sound-types';
import { useSettingsStore } from '@/stores/settingsStore';

interface NotificationSoundsReturn {
  playSound: (sound: SoundType) => void;
  isLoaded: boolean;
  isMuted: boolean;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
}

// Map of sound types to their file paths
const soundMap: Record<SoundType, string> = {
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

// Audio cache to prevent recreating Audio objects
const audioCache: Record<string, HTMLAudioElement> = {};

const useNotificationSounds = (): NotificationSoundsReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { soundEffects, volume, setVolume } = useSettingsStore();
  
  useEffect(() => {
    // Pre-load commonly used sounds
    const commonSounds: SoundType[] = ['notification', 'success', 'error', 'purchase'];
    
    commonSounds.forEach(sound => {
      if (!audioCache[sound]) {
        const audio = new Audio(soundMap[sound]);
        audio.preload = 'auto';
        audio.volume = volume || 0.5;
        audioCache[sound] = audio;
      }
    });
    
    setIsLoaded(true);
    
    return () => {
      // Clean up audio objects
      Object.values(audioCache).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [volume]);
  
  const playSound = useCallback((sound: SoundType) => {
    if (!soundEffects || !soundMap[sound]) return;
    
    // Use cached audio or create a new one
    if (!audioCache[sound]) {
      const audio = new Audio(soundMap[sound]);
      audio.volume = volume || 0.5;
      audioCache[sound] = audio;
    }
    
    const audio = audioCache[sound];
    
    // Reset and play
    audio.currentTime = 0;
    audio.play().catch(err => {
      console.error('Error playing sound:', err);
    });
  }, [soundEffects, volume]);
  
  const toggleMute = useCallback(() => {
    useSettingsStore.setState(state => ({ 
      soundEffects: !state.soundEffects 
    }));
  }, []);
  
  return {
    playSound,
    isLoaded,
    isMuted: !soundEffects,
    toggleMute,
    setVolume
  };
};

export default useNotificationSounds;
