
export interface SoundAssets {
  [key: string]: {
    url: string;
    volume: number;
    description: string;
  };
}

export interface SoundInfo {
  id: string;
  url: string;
  description: string;
}

// Add the missing types
export interface SoundMap {
  [key: string]: {
    src: string;
    description: string;
    volume: number;
  };
}

export type SoundType = string;

export interface UseNotificationSoundsReturn {
  playSound: (type: SoundType, volumeMultiplier?: number) => void;
  preloadSounds: () => void;
  soundsLoaded: boolean;
  loadedSoundTypes: string[];
}
