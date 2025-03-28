
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
  success = 'success',
  coinDrop = 'coinDrop',
  click = 'click',
  levelUp = 'levelUp',
  pageTransition = 'pageTransition',
  wish = 'wish'
}

// Update SoundType to allow all the string values used in the app
export type SoundType = keyof typeof SoundCategoryEnum | 
  'notification' | 'purchase' | 'royalAnnouncement' | 'shame' | 
  'reward' | 'rankUp' | 'rankDown' | 'potion' | 'swordClash' | 
  'error' | 'success' | 'coinDrop' | 'click' | 'levelUp' | 
  'pageTransition' | 'wish';

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
