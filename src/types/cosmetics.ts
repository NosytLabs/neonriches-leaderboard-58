
export type CosmeticCategory = 'appearance' | 'profile' | 'interaction';
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'royal';
export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'badge' | 'title' | 'background' | 'effect' | 'theme';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: CosmeticCategory;
  type: CosmeticType;
  rarity: CosmeticRarity;
  image?: string;
  value?: string;
  unlockCondition?: string;
  dateAdded?: string;
  isLimited?: boolean;
}

export interface UserCosmetics {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
}

export interface CosmeticState {
  selectedCategory: CosmeticCategory | null;
  selectedType: CosmeticType | null;
  ownedCosmetics: CosmeticItem[];
  availableCosmetics: CosmeticItem[];
}

export type UserCosmeticState = CosmeticState;
