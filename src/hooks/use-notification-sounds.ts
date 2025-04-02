
import { useSound } from './useSound';
import { SoundType, SoundOptions, UseNotificationSoundsReturn } from '@/types/sound-types';

export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const { 
    playSound, 
    toggleMute,
    isMuted, 
    mute, 
    unmute, 
    setVolume, 
    currentVolume 
  } = useSound();

  const playNotificationSound = (type: string = 'notification', options?: SoundOptions) => {
    const soundOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };

    // Map common notification types to valid sound types
    const soundTypeMap: Record<string, SoundType> = {
      notification: 'notification',
      achievement: 'achievement',
      message: 'message',
      alert: 'alert',
      success: 'success',
      error: 'error',
      reward: 'reward',
      chime: 'chime',
      badge: 'badge',
      toggle: 'toggle',
      upgrade: 'upgrade',
      down: 'down',
      up: 'up',
      withdraw: 'withdraw',
      warning: 'warning',
      team: 'team',
      royalAnnouncement: 'royalAnnouncement',
      fanfare: 'fanfare',
      trumpet: 'trumpet',
      medallion: 'medallion',
      protection: 'protection',
      shame: 'shame',
      coin: 'coin',
      coinDrop: 'coinDrop',
      crown: 'crown',
      stocks: 'stocks',
      putridEgg: 'putridEgg',
      silence: 'silence',
      courtJester: 'courtJester',
      smokeBomb: 'smokeBomb',
      taunt: 'taunt',
      mock: 'mock',
      challenge: 'challenge',
      joust: 'joust',
      duel: 'duel',
      fish: 'fish',
      deposit: 'deposit',
      rank_up: 'rank_up',
      level_up: 'level_up',
      throne: 'throne',
      boost: 'boost',
      unlock: 'unlock',
      mockery: 'mockery'
    };

    // Use the mapped sound type or fallback to notification
    const soundType = soundTypeMap[type] || 'notification';

    playSound(soundType as SoundType, soundOptions);
  };

  // Return a slightly modified interface to match the expected UseNotificationSoundsReturn
  const toggleMuted = () => {
    return toggleMute();
  };

  return { 
    playSound, 
    mute, 
    unmute, 
    isMuted, 
    toggleMuted, 
    setVolume, 
    currentVolume,
    playNotificationSound 
  };
};

export default useNotificationSounds;
