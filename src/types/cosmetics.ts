
export enum CosmeticCategory {
  TITLE = 'title',
  BADGE = 'badge',
  BACKGROUND = 'background',
  BORDER = 'border',
  EFFECT = 'effect',
  EMOJI = 'emoji',
  FONT = 'font',
  THEME = 'theme',
  COLOR = 'color'
}

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type: string;
  category?: CosmeticCategory;
  rarity: string;
  price: number;
  cost: number;
  image?: string;
  cssClass?: string;
  unlockRequirement?: string;
  imageSrc?: string;
}

export interface CosmeticState {
  selectedBadge: string | null;
  selectedTitle: string | null;
  selectedBorder: string | null;
  selectedBackground: string | null;
  selectedEffect: string | null;
  selectedEmoji: string | null;
}

export type UserCosmeticState = CosmeticState;
