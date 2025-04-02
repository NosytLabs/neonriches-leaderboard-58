
/**
 * Sound system type definitions
 */

import { SoundType, SoundOptions } from './mockery-types';

// Re-export types for backwards compatibility
export type { SoundType, SoundOptions };

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  pack: string;
  muted: boolean;
}

export interface Sound {
  id: string;
  type: SoundType;
  url: string;
  volume?: number;
  duration?: number;
  pack?: string;
}

export interface SoundPack {
  id: string;
  name: string;
  description: string;
  author: string;
  sounds: Record<SoundType, string>;
  isDefault?: boolean;
  isPremium?: boolean;
  price?: number;
}

export interface SoundState {
  isPlaying: boolean;
  currentSound: string | null;
  volume: number;
  muted: boolean;
}

export type PlaySoundFunction = (
  sound: SoundType,
  options?: SoundOptions
) => void;

export type StopSoundFunction = (sound?: SoundType) => void;
