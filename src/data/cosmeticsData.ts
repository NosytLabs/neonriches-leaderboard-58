
import { CosmeticItem } from '@/types/cosmetics';

// Borders
export const borderItems: CosmeticItem[] = [
  {
    id: 'border_legendary_1',
    name: 'Royal Gold Filigree',
    description: 'An exquisite golden border with intricate filigree designs fit for royalty',
    category: 'borders',
    rarity: 'legendary',
    cost: 100,
    type: 'border',
    cssClass: 'border-royal-gold border-4 shadow-gold'
  },
  {
    id: 'border_epic_1',
    name: 'Amethyst Edge',
    description: 'A rich purple border that shimmers with mystical energy',
    category: 'borders',
    rarity: 'epic',
    cost: 50,
    type: 'border',
    cssClass: 'border-purple-500 border-3 shadow-purple'
  },
  {
    id: 'border_rare_1',
    name: 'Sapphire Trim',
    description: 'A sophisticated blue border that creates an aura of nobility',
    category: 'borders',
    rarity: 'rare',
    cost: 30,
    type: 'border',
    cssClass: 'border-blue-500 border-2 shadow-blue'
  },
  {
    id: 'border_uncommon_1',
    name: 'Emerald Line',
    description: 'A sleek green border symbolizing prosperity',
    category: 'borders',
    rarity: 'uncommon',
    cost: 15,
    type: 'border',
    cssClass: 'border-green-500 border-2'
  },
  {
    id: 'border_common_1',
    name: 'Silver Edge',
    description: 'A simple but elegant silver border',
    category: 'borders',
    rarity: 'common',
    cost: 5,
    type: 'border',
    cssClass: 'border-gray-300 border'
  }
];

// Backgrounds
export const backgroundItems: CosmeticItem[] = [
  {
    id: 'bg_legendary_1',
    name: 'Royal Throne Room',
    description: 'A majestic background featuring a golden throne room',
    category: 'backgrounds',
    rarity: 'legendary',
    cost: 120,
    type: 'background',
    imageSrc: '/assets/cosmetics/bg_throne_room.jpg'
  },
  {
    id: 'bg_epic_1',
    name: 'Castle Battlements',
    description: 'A dramatic castle view overlooking the kingdom',
    category: 'backgrounds',
    rarity: 'epic',
    cost: 60,
    type: 'background',
    imageSrc: '/assets/cosmetics/bg_castle.jpg'
  },
  {
    id: 'bg_rare_1',
    name: 'Royal Garden',
    description: 'A serene garden with fountains and topiary',
    category: 'backgrounds',
    rarity: 'rare',
    cost: 35,
    type: 'background',
    imageSrc: '/assets/cosmetics/bg_garden.jpg'
  },
  {
    id: 'bg_uncommon_1',
    name: 'Library Scrolls',
    description: 'A cozy library with ancient scrolls and books',
    category: 'backgrounds',
    rarity: 'uncommon',
    cost: 20,
    type: 'background',
    imageSrc: '/assets/cosmetics/bg_library.jpg'
  },
  {
    id: 'bg_common_1',
    name: 'Stone Wall',
    description: 'A simple but elegant stone wall texture',
    category: 'backgrounds',
    rarity: 'common',
    cost: 10,
    type: 'background',
    imageSrc: '/assets/cosmetics/bg_stone.jpg'
  }
];

// Effects
export const effectItems: CosmeticItem[] = [
  {
    id: 'effect_legendary_1',
    name: 'Golden Aura',
    description: 'A shimmering golden aura surrounds your profile',
    category: 'effects',
    rarity: 'legendary',
    cost: 150,
    type: 'effect',
    imageSrc: '/assets/cosmetics/effect_gold_aura.png'
  },
  {
    id: 'effect_epic_1',
    name: 'Magic Sparkle',
    description: 'Magical sparkles float around your profile',
    category: 'effects',
    rarity: 'epic',
    cost: 75,
    type: 'effect',
    imageSrc: '/assets/cosmetics/effect_sparkle.png'
  },
  {
    id: 'effect_rare_1',
    name: 'Royal Glow',
    description: 'A subtle glow emanates from your profile',
    category: 'effects',
    rarity: 'rare',
    cost: 40,
    type: 'effect',
    imageSrc: '/assets/cosmetics/effect_glow.png'
  },
  {
    id: 'effect_uncommon_1',
    name: 'Shadow Presence',
    description: 'A mysterious shadow effect adds depth to your profile',
    category: 'effects',
    rarity: 'uncommon',
    cost: 25,
    type: 'effect',
    imageSrc: '/assets/cosmetics/effect_shadow.png'
  },
  {
    id: 'effect_common_1',
    name: 'Soft Vignette',
    description: 'A simple vignette effect frames your profile',
    category: 'effects',
    rarity: 'common',
    cost: 15,
    type: 'effect',
    imageSrc: '/assets/cosmetics/effect_vignette.png'
  }
];

// Titles
export const titleItems: CosmeticItem[] = [
  {
    id: 'title_legendary_1',
    name: 'The Magnificent',
    description: 'A legendary title reserved for the true elite',
    category: 'titles',
    rarity: 'legendary',
    cost: 200,
    type: 'title'
  },
  {
    id: 'title_epic_1',
    name: 'Grand Duke/Duchess',
    description: 'A prestigious title of high nobility',
    category: 'titles',
    rarity: 'epic',
    cost: 100,
    type: 'title'
  },
  {
    id: 'title_rare_1',
    name: 'Count/Countess',
    description: 'A distinguished title of respect',
    category: 'titles',
    rarity: 'rare',
    cost: 50,
    type: 'title'
  },
  {
    id: 'title_uncommon_1',
    name: 'Baron/Baroness',
    description: 'A respectable title of minor nobility',
    category: 'titles',
    rarity: 'uncommon',
    cost: 30,
    type: 'title'
  },
  {
    id: 'title_common_1',
    name: 'Knight/Dame',
    description: 'A modest title of recognition',
    category: 'titles',
    rarity: 'common',
    cost: 20,
    type: 'title'
  }
];

// Colors
export const colorItems: CosmeticItem[] = [
  {
    id: 'color_legendary_1',
    name: 'Royal Gold',
    description: 'A shimmering golden hue for your profile text',
    category: 'colors',
    rarity: 'legendary',
    cost: 80,
    type: 'color',
    cssClass: 'text-royal-gold'
  },
  {
    id: 'color_epic_1',
    name: 'Royal Purple',
    description: 'A rich purple color fit for nobility',
    category: 'colors',
    rarity: 'epic',
    cost: 40,
    type: 'color',
    cssClass: 'text-royal-purple'
  },
  {
    id: 'color_rare_1',
    name: 'Royal Crimson',
    description: 'A deep crimson color for dramatic effect',
    category: 'colors',
    rarity: 'rare',
    cost: 25,
    type: 'color',
    cssClass: 'text-royal-crimson'
  },
  {
    id: 'color_uncommon_1',
    name: 'Royal Navy',
    description: 'A sophisticated navy blue for your profile text',
    category: 'colors',
    rarity: 'uncommon',
    cost: 15,
    type: 'color',
    cssClass: 'text-royal-navy'
  },
  {
    id: 'color_common_1',
    name: 'Silver Shine',
    description: 'A sleek silver color for your profile text',
    category: 'colors',
    rarity: 'common',
    cost: 10,
    type: 'color',
    cssClass: 'text-gray-300'
  }
];

// Fonts
export const fontItems: CosmeticItem[] = [
  {
    id: 'font_legendary_1',
    name: 'Royal Script',
    description: 'An elegant calligraphic font fit for royalty',
    category: 'fonts',
    rarity: 'legendary',
    cost: 90,
    type: 'font',
    cssClass: 'font-royal-script'
  },
  {
    id: 'font_epic_1',
    name: 'Noble Serif',
    description: 'A distinguished serif font with classical appeal',
    category: 'fonts',
    rarity: 'epic',
    cost: 45,
    type: 'font',
    cssClass: 'font-royal-serif'
  },
  {
    id: 'font_rare_1',
    name: 'Medieval Blackletter',
    description: 'An authentic medieval style font',
    category: 'fonts',
    rarity: 'rare',
    cost: 30,
    type: 'font',
    cssClass: 'font-medieval'
  },
  {
    id: 'font_uncommon_1',
    name: 'Regal Sans',
    description: 'A clean, modern font with a royal touch',
    category: 'fonts',
    rarity: 'uncommon',
    cost: 20,
    type: 'font',
    cssClass: 'font-royal-sans'
  },
  {
    id: 'font_common_1',
    name: 'Court Hand',
    description: 'A simple but refined handwritten style',
    category: 'fonts',
    rarity: 'common',
    cost: 15,
    type: 'font',
    cssClass: 'font-court-hand'
  }
];

// Emojis
export const emojiItems: CosmeticItem[] = [
  {
    id: 'emoji_legendary_1',
    name: 'Royal Crown Set',
    description: 'A set of exclusive crown emojis',
    category: 'emojis',
    rarity: 'legendary',
    cost: 70,
    type: 'emoji'
  },
  {
    id: 'emoji_epic_1',
    name: 'Noble Expressions',
    description: 'A set of aristocratic emotion emojis',
    category: 'emojis',
    rarity: 'epic',
    cost: 35,
    type: 'emoji'
  },
  {
    id: 'emoji_rare_1',
    name: 'Castle & Knights',
    description: 'Medieval themed emojis featuring castles and knights',
    category: 'emojis',
    rarity: 'rare',
    cost: 25,
    type: 'emoji'
  },
  {
    id: 'emoji_uncommon_1',
    name: 'Royal Animals',
    description: 'Emojis featuring animals associated with nobility',
    category: 'emojis',
    rarity: 'uncommon',
    cost: 15,
    type: 'emoji'
  },
  {
    id: 'emoji_common_1',
    name: 'Basic Royal Set',
    description: 'A starter set of royal themed emojis',
    category: 'emojis',
    rarity: 'common',
    cost: 10,
    type: 'emoji'
  }
];

// Badges
export const badgeItems: CosmeticItem[] = [
  {
    id: 'badge_legendary_1',
    name: 'Founder\'s Badge',
    description: 'An exclusive badge for the founding members',
    category: 'badges',
    rarity: 'legendary',
    cost: 0,
    type: 'badge'
  },
  {
    id: 'badge_epic_1',
    name: 'Whale Badge',
    description: 'A badge for the biggest spenders',
    category: 'badges',
    rarity: 'epic',
    cost: 0,
    type: 'badge'
  },
  {
    id: 'badge_rare_1',
    name: 'Early Adopter',
    description: 'For those who joined in the early days',
    category: 'badges',
    rarity: 'rare',
    cost: 0,
    type: 'badge'
  },
  {
    id: 'badge_uncommon_1',
    name: 'Team Champion',
    description: 'For users whose team won a competition',
    category: 'badges',
    rarity: 'uncommon',
    cost: 0,
    type: 'badge'
  },
  {
    id: 'badge_common_1',
    name: 'First Purchase',
    description: 'Commemorating your first expenditure',
    category: 'badges',
    rarity: 'common',
    cost: 0,
    type: 'badge'
  }
];

// All items
export const allCosmeticItems: CosmeticItem[] = [
  ...borderItems,
  ...backgroundItems,
  ...effectItems,
  ...titleItems,
  ...colorItems,
  ...fontItems,
  ...emojiItems,
  ...badgeItems
];
