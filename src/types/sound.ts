
export type SoundType = 
  | "click"
  | "hover"
  | "success"
  | "error"
  | "notification"
  | "warning"
  | "purchase"
  | "rankUp"
  | "coinDrop"
  | "achievement"
  | "trumpets"
  | "fanfare"
  | "shame"
  | "parchment"
  | "royal"
  | "medieval"
  | "crown"
  | "info"
  | "message"
  | "seal"
  | "deposit"
  | "reward"
  | "pageChange"
  | "noblesLaugh"
  | "smoke"
  | "coins"
  | "inkScribble"
  | "advertisement";

export interface SoundConfig {
  enabled: boolean;
  volume: number;
  effects: {
    [key in SoundType]?: boolean;
  };
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
