
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';
export type CosmeticCategory = 'border' | 'color' | 'font' | 'emoji' | 'title' | 'background' | 'effect' | 'badge' | 'theme' | 
                               'appearance' | 'profile' | 'interaction';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CosmeticCategory;
  type: string;
  rarity: CosmeticRarity;
  imageSrc?: string;
  image?: string;
}

export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  foundersPass?: boolean;

  // Legacy properties for compatibility
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  unlockedBorders?: string[];
  unlockedColors?: string[];
  unlockedFonts?: string[];
  unlockedEmojis?: string[];
  unlockedTitles?: string[];
  unlockedBackgrounds?: string[];
  unlockedEffects?: string[];
  unlockedBadges?: string[];
  unlockedThemes?: string[];
}

export interface CosmeticStoreItem extends CosmeticItem {
  isPurchased?: boolean;
  isNew?: boolean;
  isVipOnly?: boolean;
  isEquipped?: boolean;
}

export interface BoostEffectType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: string;
  tier: string;
  price: number;
  duration: number;
  icon: string;
}

export interface ProfileAvatar {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  url: string;
}

export interface ProfileBackground {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  url: string;
}

export interface ProfileBorder {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  cssClass: string;
}

export interface ProfileFilter {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  cssClass: string;
}

export interface ProfileNameColor {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  cssClass: string;
  color: string;
}

export interface ProfileNameFont {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  cssClass: string;
  fontFamily: string;
}

export interface ProfileTrophy {
  id: string;
  name: string;
  description: string;
  tierRequired: string;
  icon: string;
}

export type ProfileCosmeticTypes = 
  | ProfileAvatar
  | ProfileBackground
  | ProfileBorder
  | ProfileFilter
  | ProfileNameColor
  | ProfileNameFont
  | ProfileTrophy;
