
import { SoundType } from '@/types/sound-types';

interface PremiumSoundPack {
  name: string;
  description: string;
  baseUrl: string;
  soundMappings: Record<string, SoundType>;
  customVolumes?: Partial<Record<SoundType, number>>;
}

export const premiumSoundPacks: Record<string, PremiumSoundPack> = {
  royal: {
    name: 'Royal Court',
    description: 'Elegant and regal sounds befitting your noble status',
    baseUrl: '/sounds/premium/royal/',
    soundMappings: {
      'success.mp3': 'success',
      'error.mp3': 'error',
      'notification.mp3': 'notification',
      'achievement.mp3': 'achievement',
      'purchase.mp3': 'purchase',
      'deposit.mp3': 'deposit',
      'withdrawal.mp3': 'withdrawal',
      'rank_up.mp3': 'rank_up',
      'mockery.mp3': 'mockery',
      'royal.mp3': 'royal',
      'click.mp3': 'click',
      'message.mp3': 'message',
      'coin.mp3': 'coin',
      'level_up.mp3': 'level_up',
      'throne.mp3': 'throne',
      'boost.mp3': 'boost',
      'shame.mp3': 'shame',
      'reward.mp3': 'reward',
      'chime.mp3': 'chime',
      'fanfare.mp3': 'fanfare',
      'coinDrop.mp3': 'coinDrop'
    },
    customVolumes: {
      'success': 0.7,
      'error': 0.6,
      'notification': 0.5,
      'achievement': 0.8,
      'coin': 0.4,
      'level_up': 0.9,
      'royal': 0.7,
      'mockery': 0.8,
      'throne': 0.9,
      'shame': 0.75
    }
  },
  
  medieval: {
    name: 'Medieval Ambiance',
    description: 'Authentic sounds from the days of old',
    baseUrl: '/sounds/premium/medieval/',
    soundMappings: {
      'success.mp3': 'success',
      'error.mp3': 'error',
      'notification.mp3': 'notification',
      'achievement.mp3': 'achievement',
      'purchase.mp3': 'purchase',
      'deposit.mp3': 'deposit',
      'withdrawal.mp3': 'withdrawal',
      'rank_up.mp3': 'rank_up',
      'mockery.mp3': 'mockery',
      'royal.mp3': 'royal',
      'click.mp3': 'click',
      'message.mp3': 'message',
      'coin.mp3': 'coin',
      'level_up.mp3': 'level_up'
    }
  },
  
  minimal: {
    name: 'Minimalist',
    description: 'Subtle, unobtrusive sounds for focused users',
    baseUrl: '/sounds/premium/minimal/',
    soundMappings: {
      'success.mp3': 'success',
      'error.mp3': 'error',
      'notification.mp3': 'notification',
      'click.mp3': 'click'
    }
  }
};

export default premiumSoundPacks;
