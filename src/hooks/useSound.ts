
import { useSettings } from '@/contexts/SettingsContext';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { useCallback } from 'react';

// Sound mapping - centralized to avoid duplication
const SOUND_FILES: Record<SoundType, string> = {
  'coin': '/sounds/coin.mp3',
  'success': '/sounds/success.mp3',
  'error': '/sounds/error.mp3',
  'click': '/sounds/click.mp3',
  'notification': '/sounds/notification.mp3',
  'achievement': '/sounds/achievement.mp3',
  'purchase': '/sounds/purchase.mp3',
  'deposit': '/sounds/deposit.mp3',
  'mockery': '/sounds/mockery.mp3',
  'fanfare': '/sounds/fanfare.mp3',
  'levelUp': '/sounds/level-up.mp3',
  'level_up': '/sounds/level-up.mp3',
  'rank_up': '/sounds/rank-up.mp3',
  'shame': '/sounds/shame.mp3',
  'protection': '/sounds/protection.mp3',
  'sparkle': '/sounds/sparkle.mp3',
  'message': '/sounds/message.mp3',
  'boost': '/sounds/boost.mp3',
  'reward': '/sounds/reward.mp3',
  'royal': '/sounds/royal.mp3',
  'withdrawal': '/sounds/withdrawal.mp3',
  'royalAnnouncement': '/sounds/royal-announcement.mp3',
  'trumpet': '/sounds/trumpet.mp3', 
  'trumpets': '/sounds/trumpets.mp3',
  'medallion': '/sounds/medallion.mp3',
  'seal': '/sounds/seal.mp3',
  'coinDrop': '/sounds/coin-drop.mp3'
};

// Simplified dummy implementation
export const useSound = () => {
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    console.log(`Playing sound: ${type}`);
    // Simplified implementation
  }, []);

  const stopSound = useCallback((type?: SoundType) => {
    // Simplified implementation
  }, []);

  return {
    playSound,
    stopSound,
    play: playSound,
    isSoundEnabled: true,
    currentVolume: 0.5
  };
};

export default useSound;
