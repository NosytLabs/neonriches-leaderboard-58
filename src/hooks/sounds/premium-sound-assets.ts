
// Import partial type from sound-types
import { SoundType } from '@/types/sound-types';

type PremiumSoundAsset = {
  name: string;
  description: string;
  source: string;
  volume: number;
};

// Define premium sound assets
export const premiumSoundAssets: Record<string, PremiumSoundAsset> = {
  'royal-notification': {
    name: 'Royal Notification',
    description: 'A majestic notification sound for royalty',
    source: '/sounds/premium/royal-notification.mp3',
    volume: 0.7
  },
  'royal-success': {
    name: 'Royal Success',
    description: 'Celebrate success with royal fanfare',
    source: '/sounds/premium/royal-success.mp3',
    volume: 0.7
  },
  'royal-error': {
    name: 'Royal Error',
    description: 'A dignified error tone',
    source: '/sounds/premium/royal-error.mp3',
    volume: 0.6
  },
  'level-up': {
    name: 'Level Up',
    description: 'Classic gaming level up sound',
    source: '/sounds/premium/level-up.mp3',
    volume: 0.7
  },
  'game-over': {
    name: 'Game Over',
    description: 'Retro game over tone',
    source: '/sounds/premium/game-over.mp3',
    volume: 0.6
  },
  'power-up': {
    name: 'Power Up',
    description: 'Arcade-style power up sound',
    source: '/sounds/premium/power-up.mp3',
    volume: 0.7
  },
  'gentle-stream': {
    name: 'Gentle Stream',
    description: 'Calming water sounds',
    source: '/sounds/premium/gentle-stream.mp3',
    volume: 0.5
  },
  'forest-birds': {
    name: 'Forest Birds',
    description: 'Peaceful bird chirping',
    source: '/sounds/premium/forest-birds.mp3',
    volume: 0.5
  },
  'ocean-waves': {
    name: 'Ocean Waves',
    description: 'Soothing ocean wave sounds',
    source: '/sounds/premium/ocean-waves.mp3',
    volume: 0.5
  }
};

// Define volume adjustments for different sound types
export const soundTypeVolumes: Partial<Record<SoundType, number>> = {
  click: 0.4,
  success: 0.7,
  error: 0.6,
  notification: 0.7,
  achievement: 0.8,
  levelUp: 0.7,
  purchase: 0.6,
  royal: 0.8,
  claim: 0.7,
  coin: 0.6,
  swoosh: 0.5,
  message: 0.7,
  reward: 0.8,
  fanfare: 0.7,
  rank_up: 0.8,
  transfer: 0.6
};
