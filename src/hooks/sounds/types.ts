
import { SoundNames } from "./sound-assets";

export type SoundType = SoundNames;

export enum SoundCategoryEnum {
  coinDrop = 'coinDrop',
  reward = 'reward',
  notification = 'notification',
  click = 'click',
  success = 'success',
  error = 'error',
  royalAnnouncement = 'royalAnnouncement',
  levelUp = 'levelUp',
  purchase = 'purchase',
  shame = 'shame',
  swordClash = 'swordClash',
  pageTransition = 'pageTransition',
  wish = 'wish',
  pageChange = 'pageChange'
}

// Define the SoundMap type for use in the audio loader
export interface SoundMap {
  [key: string]: {
    src: string;
    volume?: number;
  };
}

// Define the AudioLoaderReturn interface
export interface AudioLoaderReturn {
  audioElements: {[key: string]: HTMLAudioElement};
  loadedSounds: string[];
  isInitialLoadComplete: boolean;
  preloadCoreSounds: (soundMap: SoundMap) => void;
  loadSound: (type: string, soundInfo: SoundMap[string]) => Promise<HTMLAudioElement | null>;
  pauseAllSounds: () => void;
}
