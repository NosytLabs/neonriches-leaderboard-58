
import { SoundType, SoundOptions } from '@/types/sound-types';

// Extended sound types
export interface ExtendedSoundOptions extends SoundOptions {
  playbackRate?: number;
  onEnd?: () => void;
}

// Extended sound types
export type ExtendedSoundType = 
  | SoundType 
  | 'deposit'
  | 'withdraw'
  | 'unlock'
  | 'toggle'
  | 'alert'
  | 'badge'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'fanfare'
  | 'royal'
  | 'warning'
  | 'levelUp';
