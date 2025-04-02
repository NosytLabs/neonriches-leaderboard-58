
import { SoundType, SoundOptions } from './types';

/**
 * A utility function to normalize sound types across the application
 * This helps handle legacy sound types and new ones
 */
export const normalizeSoundType = (soundType: string): SoundType => {
  // Map of legacy sound types to new format
  const legacyMap: Record<string, SoundType> = {
    'rank-up': 'rank_up',
    'level-up': 'level_up',
  };
  
  // Return the normalized sound type
  return (legacyMap[soundType] || soundType) as SoundType;
};

/**
 * Utility for checking if sound type exists in the system
 */
export const isSupportedSoundType = (soundType: string): boolean => {
  const validSoundTypes: SoundType[] = [
    'success',
    'error',
    'notification',
    'achievement',
    'deposit',
    'withdraw',
    'unlock',
    'level_up',
    'rank_up',
    'click',
    'toggle',
    'alert',
    'badge',
    'coin',
    'upgrade',
    'down',
    'up',
    'fanfare'
  ];
  
  const normalizedType = normalizeSoundType(soundType);
  return validSoundTypes.includes(normalizedType);
};

/**
 * Get default options for a sound type
 */
export const getDefaultSoundOptions = (soundType: SoundType): SoundOptions => {
  // Different sound types might have different default configurations
  switch (soundType) {
    case 'success':
    case 'achievement':
    case 'rank_up':
      return { volume: 0.6, playbackRate: 1.0 };
    case 'error':
    case 'alert':
      return { volume: 0.7, playbackRate: 1.0 };
    case 'notification':
      return { volume: 0.5, playbackRate: 1.0 };
    default:
      return { volume: 0.5, playbackRate: 1.0 };
  }
};

/**
 * Get the URL for a sound type based on the current theme/pack
 */
export const getSoundUrl = (soundType: SoundType, theme: string = 'default'): string => {
  // Base path for sound files
  const basePath = '/sounds';
  
  // Different themes might have different sound files
  const themePath = theme === 'default' ? '' : `/${theme}`;
  
  // Get the file name for the sound type
  const fileName = `${soundType.replace('_', '-')}.mp3`;
  
  return `${basePath}${themePath}/${fileName}`;
};
