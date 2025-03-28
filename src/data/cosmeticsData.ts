
import { CosmeticItem } from '@/types/cosmetics';

// Profile borders
export const profileBorders: CosmeticItem[] = [
  {
    id: 'border-royal-gold',
    name: 'Royal Gold Border',
    description: 'A luxurious gold border fit for royalty',
    category: 'borders',
    rarity: 'legendary',
    cost: 100,
    type: 'border',
    cssClass: 'border-4 border-royal-gold shadow-gold'
  },
  {
    id: 'border-royal-purple',
    name: 'Royal Purple Border',
    description: 'An elegant purple border with royal flair',
    category: 'borders',
    rarity: 'epic',
    cost: 50,
    type: 'border',
    cssClass: 'border-4 border-purple-600 shadow-purple'
  },
  {
    id: 'border-royal-blue',
    name: 'Royal Blue Border',
    description: 'A distinguished blue border for nobles',
    category: 'borders',
    rarity: 'rare',
    cost: 25,
    type: 'border',
    cssClass: 'border-4 border-blue-600 shadow-blue'
  },
  {
    id: 'border-silver',
    name: 'Silver Border',
    description: 'A polished silver border for your profile',
    category: 'borders',
    rarity: 'uncommon',
    cost: 15,
    type: 'border',
    cssClass: 'border-4 border-gray-300 shadow-silver'
  },
  {
    id: 'border-bronze',
    name: 'Bronze Border',
    description: 'A sturdy bronze border for your profile',
    category: 'borders',
    rarity: 'common',
    cost: 5,
    type: 'border',
    cssClass: 'border-4 border-amber-700 shadow-bronze'
  }
];

// Profile colors
export const profileColors: CosmeticItem[] = [
  {
    id: 'color-royal-gold',
    name: 'Royal Gold Color',
    description: 'Text shimmers with the richness of royal gold',
    category: 'colors',
    rarity: 'legendary',
    cost: 100,
    type: 'color',
    imageSrc: '/assets/cosmetics/colors/gold.png'
  },
  {
    id: 'color-royal-purple',
    name: 'Royal Purple Color',
    description: 'Text glows with royal purple nobility',
    category: 'colors',
    rarity: 'epic',
    cost: 50,
    type: 'color',
    imageSrc: '/assets/cosmetics/colors/purple.png'
  },
  {
    id: 'color-sapphire',
    name: 'Sapphire Blue Color',
    description: 'Text shines with deep sapphire blue',
    category: 'colors',
    rarity: 'rare',
    cost: 25,
    type: 'color',
    imageSrc: '/assets/cosmetics/colors/sapphire.png'
  },
  {
    id: 'color-emerald',
    name: 'Emerald Color',
    description: 'Text gleams with emerald brilliance',
    category: 'colors',
    rarity: 'uncommon',
    cost: 15,
    type: 'color',
    imageSrc: '/assets/cosmetics/colors/emerald.png'
  },
  {
    id: 'color-ruby',
    name: 'Ruby Color',
    description: 'Text glows with ruby red intensity',
    category: 'colors',
    rarity: 'common',
    cost: 5,
    type: 'color',
    imageSrc: '/assets/cosmetics/colors/ruby.png'
  }
];

// Profile fonts
export const profileFonts: CosmeticItem[] = [
  {
    id: 'font-royal-script',
    name: 'Royal Script',
    description: 'An elegant calligraphy font for true royalty',
    category: 'fonts',
    rarity: 'legendary',
    cost: 100,
    type: 'font',
    imageSrc: '/assets/cosmetics/fonts/royal-script.png'
  },
  {
    id: 'font-gothic',
    name: 'Medieval Gothic',
    description: 'A bold gothic font from medieval times',
    category: 'fonts',
    rarity: 'epic',
    cost: 50,
    type: 'font',
    imageSrc: '/assets/cosmetics/fonts/gothic.png'
  },
  {
    id: 'font-uncial',
    name: 'Uncial Script',
    description: 'An ancient script used by medieval monks',
    category: 'fonts',
    rarity: 'rare',
    cost: 25,
    type: 'font',
    imageSrc: '/assets/cosmetics/fonts/uncial.png'
  },
  {
    id: 'font-blackletter',
    name: 'Blackletter',
    description: 'Traditional medieval blackletter script',
    category: 'fonts',
    rarity: 'uncommon',
    cost: 15,
    type: 'font',
    imageSrc: '/assets/cosmetics/fonts/blackletter.png'
  },
  {
    id: 'font-ancient',
    name: 'Ancient Runes',
    description: 'Mysterious runic symbols from the old world',
    category: 'fonts',
    rarity: 'common',
    cost: 5,
    type: 'font',
    imageSrc: '/assets/cosmetics/fonts/ancient.png'
  }
];

// Special emojis
export const specialEmojis: CosmeticItem[] = [
  {
    id: 'emoji-royal-crown',
    name: 'Royal Crown Emoji',
    description: 'A special crown emoji that animates on hover',
    category: 'emojis',
    rarity: 'legendary',
    cost: 100,
    type: 'emoji'
  },
  {
    id: 'emoji-scepter',
    name: 'Royal Scepter Emoji',
    description: 'A gleaming scepter emoji for royal commands',
    category: 'emojis',
    rarity: 'epic',
    cost: 50,
    type: 'emoji'
  },
  {
    id: 'emoji-knight',
    name: 'Knight Emoji',
    description: 'A valiant knight emoji for your messages',
    category: 'emojis',
    rarity: 'rare',
    cost: 25,
    type: 'emoji'
  },
  {
    id: 'emoji-castle',
    name: 'Castle Emoji',
    description: 'A majestic castle emoji for your profile',
    category: 'emojis',
    rarity: 'uncommon',
    cost: 15,
    type: 'emoji'
  },
  {
    id: 'emoji-shield',
    name: 'Shield Emoji',
    description: 'A protective shield emoji for your comments',
    category: 'emojis',
    rarity: 'common',
    cost: 5,
    type: 'emoji'
  }
];

// Royal titles
export const royalTitles: CosmeticItem[] = [
  {
    id: 'title-sovereign',
    name: 'The Sovereign',
    description: 'The highest title in the land, reserved for the most esteemed nobles',
    category: 'titles',
    rarity: 'legendary',
    cost: 100,
    type: 'title',
    cssClass: 'text-royal-gold font-bold'
  },
  {
    id: 'title-grand-duke',
    name: 'Grand Duke/Duchess',
    description: 'A title of grand nobility, second only to the sovereign',
    category: 'titles',
    rarity: 'epic',
    cost: 50,
    type: 'title',
    cssClass: 'text-purple-500 font-bold'
  },
  {
    id: 'title-count',
    name: 'Count/Countess',
    description: 'A title of high standing in the royal court',
    category: 'titles',
    rarity: 'rare',
    cost: 25,
    type: 'title',
    cssClass: 'text-blue-500 font-bold'
  },
  {
    id: 'title-baron',
    name: 'Baron/Baroness',
    description: 'A title of nobility granted for loyalty to the crown',
    category: 'titles',
    rarity: 'uncommon',
    cost: 15,
    type: 'title',
    cssClass: 'text-green-500 font-bold'
  },
  {
    id: 'title-knight',
    name: 'Knight/Dame',
    description: 'A title awarded for service to the realm',
    category: 'titles',
    rarity: 'common',
    cost: 5,
    type: 'title',
    cssClass: 'text-gray-300 font-bold'
  }
];

// Profile backgrounds
export const profileBackgrounds: CosmeticItem[] = [
  {
    id: 'bg-throne-room',
    name: 'Royal Throne Room',
    description: 'A majestic throne room background for your profile',
    category: 'backgrounds',
    rarity: 'legendary',
    cost: 100,
    type: 'background',
    cssClass: 'bg-throne-room bg-cover'
  },
  {
    id: 'bg-castle',
    name: 'Castle Ramparts',
    description: 'The high walls of a medieval castle overlooking the kingdom',
    category: 'backgrounds',
    rarity: 'epic',
    cost: 50,
    type: 'background',
    cssClass: 'bg-castle-ramparts bg-cover'
  },
  {
    id: 'bg-treasure',
    name: 'Royal Treasury',
    description: 'A room filled with gold coins and precious treasures',
    category: 'backgrounds',
    rarity: 'rare',
    cost: 25,
    type: 'background',
    cssClass: 'bg-treasury bg-cover'
  },
  {
    id: 'bg-banquet',
    name: 'Royal Banquet',
    description: 'A grand feast in the royal dining hall',
    category: 'backgrounds',
    rarity: 'uncommon',
    cost: 15,
    type: 'background',
    cssClass: 'bg-banquet bg-cover'
  },
  {
    id: 'bg-courtyard',
    name: 'Castle Courtyard',
    description: 'The peaceful courtyard within the castle walls',
    category: 'backgrounds',
    rarity: 'common',
    cost: 5,
    type: 'background',
    cssClass: 'bg-courtyard bg-cover'
  }
];

// Visual effects
export const visualEffects: CosmeticItem[] = [
  {
    id: 'effect-golden-aura',
    name: 'Golden Aura',
    description: 'Surrounds your profile with a shimmering golden aura',
    category: 'effects',
    rarity: 'legendary',
    cost: 100,
    type: 'effect',
    cssClass: 'golden-aura-effect'
  },
  {
    id: 'effect-royal-sparkles',
    name: 'Royal Sparkles',
    description: 'Adds glittering sparkles that follow your cursor',
    category: 'effects',
    rarity: 'epic',
    cost: 50,
    type: 'effect',
    cssClass: 'royal-sparkles-effect'
  },
  {
    id: 'effect-flame-border',
    name: 'Flame Border',
    description: 'Surrounds your profile with animated flames',
    category: 'effects',
    rarity: 'rare',
    cost: 25,
    type: 'effect',
    cssClass: 'flame-border-effect'
  },
  {
    id: 'effect-water-ripple',
    name: 'Water Ripple',
    description: 'Creates a ripple effect when your profile is viewed',
    category: 'effects',
    rarity: 'uncommon',
    cost: 15,
    type: 'effect',
    cssClass: 'water-ripple-effect'
  },
  {
    id: 'effect-parchment',
    name: 'Parchment Scroll',
    description: 'Displays your profile as an unfolding parchment',
    category: 'effects',
    rarity: 'common',
    cost: 5,
    type: 'effect',
    cssClass: 'parchment-effect'
  }
];

// Achievement badges
export const achievementBadges: CosmeticItem[] = [
  {
    id: 'badge-founder',
    name: 'Founder\'s Badge',
    description: 'An exclusive badge for the founders of the kingdom',
    category: 'badges',
    rarity: 'legendary',
    cost: 100,
    type: 'badge'
  },
  {
    id: 'badge-royal-advisor',
    name: 'Royal Advisor Badge',
    description: 'A badge for those who provide counsel to the court',
    category: 'badges',
    rarity: 'epic',
    cost: 50,
    type: 'badge'
  },
  {
    id: 'badge-top-spender',
    name: 'Top Spender Badge',
    description: 'A badge recognizing significant contributions to the treasury',
    category: 'badges',
    rarity: 'rare',
    cost: 25,
    type: 'badge'
  },
  {
    id: 'badge-loyal-subject',
    name: 'Loyal Subject Badge',
    description: 'A badge for consistent participation in the kingdom',
    category: 'badges',
    rarity: 'uncommon',
    cost: 15,
    type: 'badge'
  },
  {
    id: 'badge-newcomer',
    name: 'Newcomer Badge',
    description: 'A badge welcoming new citizens to the kingdom',
    category: 'badges',
    rarity: 'common',
    cost: 5,
    type: 'badge'
  }
];

// Profile themes
export const profileThemes: CosmeticItem[] = [
  {
    id: 'theme-royal-gold',
    name: 'Royal Gold Theme',
    description: 'A luxurious gold theme for your entire profile',
    category: 'themes',
    rarity: 'legendary',
    cost: 100,
    type: 'theme'
  },
  {
    id: 'theme-dragon',
    name: 'Dragon Theme',
    description: 'A fierce dragon-inspired theme for your profile',
    category: 'themes',
    rarity: 'epic',
    cost: 50,
    type: 'theme'
  },
  {
    id: 'theme-knight',
    name: 'Knight Theme',
    description: 'A noble knight-inspired theme with armor details',
    category: 'themes',
    rarity: 'rare',
    cost: 25,
    type: 'theme'
  },
  {
    id: 'theme-castle',
    name: 'Castle Theme',
    description: 'A stone castle theme with torches and banners',
    category: 'themes',
    rarity: 'uncommon',
    cost: 15,
    type: 'theme'
  },
  {
    id: 'theme-parchment',
    name: 'Parchment Theme',
    description: 'An aged parchment theme for an authentic medieval feel',
    category: 'themes',
    rarity: 'common',
    cost: 5,
    type: 'theme'
  }
];

// All cosmetics combined
export const allCosmetics: CosmeticItem[] = [
  ...profileBorders,
  ...profileColors,
  ...profileFonts,
  ...specialEmojis,
  ...royalTitles,
  ...profileBackgrounds,
  ...visualEffects,
  ...achievementBadges,
  ...profileThemes
];

// Get cosmetics by category
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  return allCosmetics.filter(item => item.category === category);
};

// Get cosmetic by ID
export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  return allCosmetics.find(item => item.id === id);
};
