
// Sound types
export type SoundType = 
  | 'coinDrop'
  | 'reward'
  | 'notification'
  | 'click'
  | 'success'
  | 'error'
  | 'royalAnnouncement'
  | 'levelUp'
  | 'purchase'
  | 'shame'
  | 'swordClash'
  | 'pageTransition'
  | 'wish'
  | 'pageChange'
  | 'parchmentUnfurl'
  | 'medallion'
  | 'seal'
  | 'trumpet'
  | 'noblesLaugh'
  | 'inkScribble';

// Sound map type
export interface SoundMap {
  [key: string]: HTMLAudioElement;
}

// Audio loader return type
export interface AudioLoaderReturn {
  loadedSounds: string[];
  isLoading: boolean;
  error: Error | null;
  audioElements?: Record<string, HTMLAudioElement>;
}

// Premium sound pack options
export type PremiumSoundPack = 
  | 'royal'
  | 'medieval'
  | 'fantasy'
  | 'comedy'
  | 'elegant';

export interface PremiumSoundPackDetails {
  id: PremiumSoundPack;
  name: string;
  description: string;
  price: number;
  sounds: SoundType[];
  previewSound: SoundType;
  isPurchased: boolean;
}

// Enum for sound categories for better TypeScript support
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
  pageChange = 'pageChange',
  parchmentUnfurl = 'parchmentUnfurl',
  medallion = 'medallion',
  seal = 'seal',
  trumpet = 'trumpet',
  noblesLaugh = 'noblesLaugh',
  inkScribble = 'inkScribble'
}
