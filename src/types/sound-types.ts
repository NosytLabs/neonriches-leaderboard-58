
// Define the types of sounds available in the application
export type SoundType = 
  | 'achievement'
  | 'boost'
  | 'button_click'
  | 'challenge'
  | 'coins_drop'
  | 'coins_multiple'
  | 'deposit'
  | 'error'
  | 'level_up'
  | 'message'
  | 'mockery'
  | 'notification'
  | 'purchase'
  | 'rank_change'
  | 'rank_up'
  | 'shame'
  | 'success'
  | 'team_join'
  | 'transaction'
  | 'upgrade'
  | 'wishingwell'
  | 'parchment';

export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export interface AudioLoaderReturn {
  audio: HTMLAudioElement | null;
  isLoading: boolean;
  error: Error | null;
  load: () => void;
}

export interface UseSoundReturn {
  play: (options?: { volume?: number; interrupt?: boolean }) => void;
  stop: () => void;
  isPlaying: boolean;
  duration: number;
}
