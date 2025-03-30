
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
  type?: string;
  cssClass?: string;
  minTier?: string;
  allowStacking?: boolean;
  tier?: string; 
  durationDays?: number;
  previewImage?: string;
}

export type BoostEffectType = 
  | 'appearance'
  | 'animation'
  | 'visibility'
  | 'effect'
  | 'protection'
  | 'enhancement';

// Predefined boost effects
export const BOOST_EFFECTS: BoostEffect[] = [
  {
    id: "boost-royal-presence",
    name: "Royal Presence",
    description: "Your profile radiates a majestic aura that commands respect",
    duration: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    price: 5000,
    icon: "crown",
    type: "appearance",
    cssClass: "royal-aura",
    tier: "epic",
    durationDays: 7
  },
  {
    id: "boost-golden-name",
    name: "Golden Name",
    description: "Your name appears in shimmering gold throughout the kingdom",
    duration: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
    price: 2500,
    icon: "sparkles",
    type: "appearance",
    cssClass: "golden-text",
    tier: "rare",
    durationDays: 3
  },
  {
    id: "boost-visibility",
    name: "Enhanced Visibility",
    description: "Your throne position appears more prominently in the leaderboard",
    duration: 5 * 24 * 60 * 60 * 1000, // 5 days in milliseconds
    price: 3000,
    icon: "eye",
    type: "visibility",
    tier: "uncommon",
    durationDays: 5
  },
  {
    id: "boost-protection",
    name: "Royal Guard",
    description: "Protection from mockery effects for a limited time",
    duration: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
    price: 7500,
    icon: "shield",
    type: "protection",
    tier: "legendary",
    durationDays: 2
  },
  {
    id: "boost-animation",
    name: "Grand Entrance",
    description: "Special animation when your profile is viewed",
    duration: 4 * 24 * 60 * 60 * 1000, // 4 days in milliseconds
    price: 4000,
    icon: "zap",
    type: "animation",
    cssClass: "grand-entrance",
    tier: "epic",
    durationDays: 4
  }
];
