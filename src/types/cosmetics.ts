
export type CosmeticCategory = 
  | 'appearance' 
  | 'profile' 
  | 'interaction'
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme';

export type CosmeticRarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  description?: string;
  category?: CosmeticCategory;
  type?: string;
  rarity?: CosmeticRarity | string;
  cost?: number;
  price: number;
  cssClass?: string;
  imageSrc?: string;
  allowStacking?: boolean;
}

export interface UserCosmeticItem extends CosmeticItem {
  purchasedOn?: string;
  expiresOn?: string | null;
  isActive?: boolean;
}

// Helper functions to get colors based on rarity
export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'text-orange-400';
    case 'epic': return 'text-purple-400';
    case 'rare': return 'text-blue-400';
    case 'uncommon': return 'text-green-400';
    case 'common':
    default: return 'text-gray-400';
  }
};

export const getRarityBgColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'bg-orange-400/20';
    case 'epic': return 'bg-purple-400/20';
    case 'rare': return 'bg-blue-400/20';
    case 'uncommon': return 'bg-green-400/20';
    case 'common':
    default: return 'bg-gray-400/20';
  }
};

export const getRarityBorderColor = (rarity: string): string => {
  switch (rarity) {
    case 'legendary': return 'border-orange-400/30';
    case 'epic': return 'border-purple-400/30';
    case 'rare': return 'border-blue-400/30';
    case 'uncommon': return 'border-green-400/30';
    case 'common':
    default: return 'border-gray-400/30';
  }
};

// Predefined cosmetic items
export const COSMETIC_ITEMS: CosmeticItem[] = [
  {
    id: "cosmetic-royal-crown",
    name: "Royal Crown",
    description: "A majestic crown to display your royal status",
    category: "profile",
    type: "badge",
    rarity: "legendary",
    price: 10000,
    cssClass: "royal-crown",
    imageSrc: "/assets/cosmetics/crown.png"
  },
  {
    id: "cosmetic-golden-border",
    name: "Golden Border",
    description: "Surround your profile with a shimmering golden border",
    category: "border",
    rarity: "epic",
    price: 7500,
    cssClass: "golden-border"
  },
  {
    id: "cosmetic-royal-title",
    name: "Royal Title",
    description: "Add a prestigious title to your profile",
    category: "title",
    rarity: "rare",
    price: 5000,
    cssClass: "royal-title"
  },
  {
    id: "cosmetic-throne-emoji",
    name: "Throne Emoji",
    description: "Special emoji that appears next to your messages",
    category: "emoji",
    rarity: "uncommon",
    price: 2000,
    cssClass: "throne-emoji"
  },
  {
    id: "cosmetic-fancy-font",
    name: "Fancy Font",
    description: "Display your name in an elegant script",
    category: "font",
    rarity: "common",
    price: 1000,
    cssClass: "fancy-font"
  },
  {
    id: "cosmetic-neon-glow",
    name: "Neon Glow",
    description: "Your profile radiates with a neon glow effect",
    category: "effect",
    rarity: "epic",
    price: 8000,
    cssClass: "neon-glow"
  },
  {
    id: "cosmetic-royal-theme",
    name: "Royal Theme",
    description: "A complete royal makeover for your profile page",
    category: "theme",
    rarity: "legendary",
    price: 15000,
    cssClass: "royal-theme"
  }
];
