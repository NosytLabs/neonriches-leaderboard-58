
/**
 * Sound system type definitions
 */

import { SoundType as CoreSoundType, SoundOptions as CoreSoundOptions } from './mockery-types';

export type SoundType = CoreSoundType | 
  'chime' | 'levelUp' | 'claim' | 'swoosh' | 'message' | 'reward' | 
  'fanfare' | 'rankUp' | 'transfer' | 'unlock' | 'loading' | 
  'complete' | 'alert' | 'join' | 'leave' | 'badge' | 'protection' | 
  'sparkle';

export type SoundPackType = 
  | 'default'
  | 'premium'
  | 'royal'
  | 'minimal'
  | 'classic'
  | 'modern'
  | 'retro'
  | 'medieval'
  | 'fantasy';

export interface SoundOptions extends CoreSoundOptions {
  interrupt?: boolean;
  onEnded?: () => void;
  onComplete?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: SoundPackType;
  muted: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  icon?: string;
  preview?: string;
  previewSound: SoundType;
  sounds: SoundType[];
  features?: string[];
  enabled?: boolean;
  tags?: string[];
}

export interface AudioOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
  delay?: number;
}

export type NotificationSoundOptions = AudioOptions;

export interface AudioLoaderReturn {
  audio: Record<SoundType, HTMLAudioElement>;
  volume: number;
  setVolume: (volume: number) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isLoaded: boolean;
}

export interface UseSoundReturn {
  play: (sound: SoundType, options?: AudioOptions) => void;
  stop: (sound: SoundType) => void;
  stopAll: () => void;
}

export interface Sound {
  id: string;
  type: SoundType;
  src: string;
  volume?: number;
  loop?: boolean;
}

export interface SoundState {
  enabled: boolean;
  muted: boolean;
  volume: number;
  currentSound?: string;
  playing: boolean;
}

export interface SoundContextType {
  sounds: Sound[];
  state: SoundState;
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleMute: () => void;
  toggleSounds: () => void;
  setVolume: (volume: number) => void;
  isPlaying: (type?: SoundType) => boolean;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type?: SoundType) => boolean;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleMuted: () => boolean;
  toggleSounds: () => boolean;
  setVolume: (volume: number) => void;
}
