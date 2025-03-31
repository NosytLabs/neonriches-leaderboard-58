
/**
 * Sound system type definitions
 */

export type SoundType = 
  | 'coin' 
  | 'success' 
  | 'error' 
  | 'click' 
  | 'notification' 
  | 'achievement' 
  | 'purchase' 
  | 'deposit'
  | 'mockery'
  | 'fanfare'
  | 'levelUp'
  | 'shame'
  | 'protection'
  | 'sparkle'
  | 'message'
  | 'boost'
  | 'level_up'
  | 'rank_up'
  | 'reward'
  | 'royal'
  | 'withdrawal'
  // Premium sound types
  | 'royalAnnouncement'
  | 'trumpet'
  | 'trumpets'
  | 'medallion'
  | 'seal'
  | 'coinDrop';

export interface SoundCategory {
  name: string;
  sounds: SoundFile[];
}

export interface SoundFile {
  id: string;
  name: string;
  file: string;
  duration?: number;
  category: string;
  description?: string;
}

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundConfig {
  enabled: boolean;
  muted?: boolean;
  volume: number;
  premium?: boolean;
  effects: Record<string, boolean>;
  music: boolean;
  musicVolume: number;
}

export interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
}

export interface PerformanceMetrics {
  FCP?: WebVitalMetric;
  LCP?: WebVitalMetric;
  CLS?: WebVitalMetric;
  FID?: WebVitalMetric;
  INP?: WebVitalMetric;
  TTFB?: WebVitalMetric;
}

export interface UseAudioReturn {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  currentVolume: number;
}

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  toggleSounds: () => void;
  isSoundEnabled: boolean;
  setVolume: (volume: number) => void;
  play?: (type: SoundType, options?: SoundOptions) => void;  // For backward compatibility
  currentVolume?: number;
  toggleMuted?: () => void; 
  togglePremium?: () => void;
  pauseSound?: (type?: SoundType) => void;
  resumeSound?: (type?: SoundType) => void;
  isPlaying?: (type: SoundType) => boolean;
}

export interface PremiumSoundPackDetails {
  name: string;
  description: string;
  price: number;
  soundCount: number;
  previewSounds: SoundType[];
  features: string[];
}

export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
}
