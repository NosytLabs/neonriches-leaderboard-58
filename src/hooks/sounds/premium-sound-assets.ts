import { SoundType } from '@/types/sound-types';

// Rest of file contents
const volumeSettings: Partial<Record<SoundType, number>> = {
  click: 0.3,
  success: 0.4,
  error: 0.3,
  notification: 0.5,
  purchase: 0.6,
  transfer: 0.5,
  level_up: 0.7,  // Fixed from 'levelUp' to 'level_up'
  reward: 0.6,
  coin: 0.4,
  chime: 0.5,
  alert: 0.5,
  fanfare: 0.6
};

export { volumeSettings };
