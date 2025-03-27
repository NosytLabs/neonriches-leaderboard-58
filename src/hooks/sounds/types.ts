
export type SoundType = 'shame' | 'reward' | 'notification' | 'rankUp' | 'rankDown' | 'potion' | 'swordClash' | 'royalAnnouncement' | 'purchase';

export interface SoundInfo {
  src: string;
  description: string;
  volume: number;
}

export interface SoundMap {
  [key: string]: SoundInfo;
}

export interface UseNotificationSoundsReturn {
  playSound: (type: SoundType, volumeMultiplier?: number) => Promise<void>;
  preloadSounds: () => void;
  soundsLoaded: boolean;
  loadedSoundTypes: string[];
}
