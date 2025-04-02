
import { useSound } from './use-sound';
import { SoundType, SoundOptions, UseNotificationSoundsReturn } from '@/types/sound-types';

export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const { playSound, toggleMuted, soundConfig, mute, unmute, setVolume, currentVolume } = useSound();

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
      alert: 'alert' as SoundType,
      success: 'success',
      error: 'error',
      reward: 'reward',
      chime: 'chime' as SoundType,
      badge: 'badge' as SoundType,
      toggle: 'toggle' as SoundType,
      upgrade: 'upgrade' as SoundType,
      down: 'down' as SoundType,
      up: 'up' as SoundType,
      withdraw: 'withdraw' as SoundType,
      warning: 'warning' as SoundType,
      team: 'team',
      royalAnnouncement: 'royalAnnouncement',
      fanfare: 'fanfare',
      trumpet: 'trumpet',
      medallion: 'medallion'
    };

    // Use the mapped sound type or fallback to notification
    const soundType = soundTypeMap[type] || 'notification';

    playSound(soundType, soundOptions);
  };

  return { 
    playSound, 
    mute, 
    unmute, 
    isMuted: soundConfig?.muted || false, 
    toggleMuted: toggleMuted || (() => false), 
    setVolume, 
    currentVolume: currentVolume || 0.5,
    playNotificationSound 
  };
};

export default useNotificationSounds;
