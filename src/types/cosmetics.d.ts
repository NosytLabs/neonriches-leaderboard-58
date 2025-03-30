
export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'theme'
  | 'badge';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  rarity: CosmeticRarity;
  isUnlocked?: boolean;
  imageSrc?: string;
}

export type CosmeticType = CosmeticCategory;

export interface UserCosmeticState {
  // Currently active cosmetics
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  
  // Unlocked cosmetics
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // For legacy support
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
}
