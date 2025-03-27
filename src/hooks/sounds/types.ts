
export interface SoundAsset {
  url: string;
  volume: number;
  description: string;
}

export interface SoundAssets {
  [key: string]: SoundAsset;
}

export enum SoundCategoryEnum {
  notification = 'notification',
  purchase = 'purchase',
  royalAnnouncement = 'royalAnnouncement',
  shame = 'shame',
  reward = 'reward',
  rankUp = 'rankUp',
  rankDown = 'rankDown',
  potion = 'potion',
  swordClash = 'swordClash',
  error = 'error',
  success = 'success'
}

export type SoundType = keyof typeof SoundCategoryEnum;

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

export interface UseNotificationSoundsReturn {
  playSound: (type: SoundType, volumeMultiplier?: number) => void;
  preloadSounds: () => void;
  pauseAllSounds: () => void;
  soundsLoaded: boolean;
  loadedSoundTypes: string[];
  isMuted: boolean;
  toggleMute: () => void;
}

export interface AudioLoaderReturn {
  audioElements: {[key: string]: HTMLAudioElement};
  loadedSounds: string[];
  isInitialLoadComplete: boolean;
  preloadCoreSounds: (soundMap: SoundMap) => void;
  loadSound: (type: string, soundInfo: SoundMap[string]) => Promise<HTMLAudioElement | null>;
  pauseAllSounds: () => void;
}
