
export interface SoundAsset {
  url: string;
  volume: number;
  description: string;
}

export interface SoundAssets {
  [key: string]: SoundAsset;
}

export interface SoundInfo {
  id: string;
  url: string;
  description: string;
}

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
