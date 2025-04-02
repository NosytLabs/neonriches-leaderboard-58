
// Centralized sound types to fix cross-reference issues
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'transfer'
  | 'level_up'
  | 'level-up'
  | 'rank_up'
  | 'rank-up'
  | 'reward'
  | 'coin'
  | 'chime'
  | 'alert'
  | 'fanfare';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  rate?: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  preview: string;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  enabled: boolean;  // Required property
}

export interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  label: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  entries?: PerformanceEntry[];
}

export const DEFAULT_SOUND_OPTIONS: SoundOptions = {
  volume: 0.5,
  loop: false,
  rate: 1.0
};

export const DEFAULT_SOUND_MAPPING: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  purchase: '/sounds/purchase.mp3',
  transfer: '/sounds/transfer.mp3',
  level_up: '/sounds/level_up.mp3',
  'level-up': '/sounds/level_up.mp3',
  rank_up: '/sounds/rank_up.mp3',
  'rank-up': '/sounds/rank_up.mp3',
  reward: '/sounds/reward.mp3',
  coin: '/sounds/coin.mp3',
  chime: '/sounds/chime.mp3',
  alert: '/sounds/alert.mp3',
  fanfare: '/sounds/fanfare.mp3'
};
