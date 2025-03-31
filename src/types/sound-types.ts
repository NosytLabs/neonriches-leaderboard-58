
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export type SoundType = 
  | 'click'
  | 'coins'
  | 'coins_drop'
  | 'success'
  | 'error'
  | 'purchase'
  | 'trumpets'
  | 'notification'
  | 'achievement'
  | 'rankUp'
  | 'button'
  | 'hover'
  | 'deposit'
  | 'withdraw'
  | 'levelUp'
  | 'fanfare'
  | 'wish'
  | 'royalAnnouncement'
  | 'victory'
  | 'defeat'
  | 'upgrade'
  | 'shame';

export interface UseSoundOptions {
  volume?: number;
  interrupt?: boolean;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  previewSound: SoundType;
  sounds: SoundType[];
  features: string[];
  tags: string[];
}
