
import { CosmeticItem } from '@/types/cosmetics';

// Mock cosmetics data
export const allCosmetics: CosmeticItem[] = [
  // BORDERS
  {
    id: "border-royal-gold",
    name: "Royal Gold Border",
    description: "A luxurious gold border fit for royalty",
    category: "border",
    type: "border",
    rarity: "legendary",
    cost: 10000,
    cssClass: "border-royal-gold"
  },
  {
    id: "border-royal-purple",
    name: "Royal Purple Border",
    description: "An elegant purple border with royal flair",
    category: "border",
    type: "border",
    rarity: "epic",
    cost: 5000,
    cssClass: "border-royal-purple"
  },
  {
    id: "border-royal-navy",
    name: "Royal Navy Border",
    description: "A deep navy border with a royal touch",
    category: "border",
    type: "border",
    rarity: "rare",
    cost: 2500,
    cssClass: "border-royal-navy"
  },
  {
    id: "border-emerald",
    name: "Emerald Border",
    description: "A vibrant emerald border with a royal touch",
    category: "border",
    type: "border",
    rarity: "uncommon",
    cost: 1000,
    cssClass: "border-emerald"
  },
  {
    id: "border-silver",
    name: "Silver Border",
    description: "A sleek silver border to highlight your profile",
    category: "border",
    type: "border",
    rarity: "common",
    cost: 500,
    cssClass: "border-silver"
  },
  
  // COLORS
  {
    id: "color-royal-gold",
    name: "Royal Gold Color",
    description: "A luxurious gold color for your profile elements",
    category: "color",
    type: "color",
    rarity: "legendary",
    cost: 10000,
    imageSrc: "/colors/royal-gold.png"
  },
  {
    id: "color-royal-purple",
    name: "Royal Purple Color",
    description: "An elegant purple color with royal flair",
    category: "color",
    type: "color",
    rarity: "epic",
    cost: 5000,
    imageSrc: "/colors/royal-purple.png"
  },
  {
    id: "color-royal-navy",
    name: "Royal Navy Color",
    description: "A deep navy color with a royal touch",
    category: "color",
    type: "color",
    rarity: "rare",
    cost: 2500,
    imageSrc: "/colors/royal-navy.png"
  },
  {
    id: "color-emerald",
    name: "Emerald Color",
    description: "A vibrant emerald color with a royal touch",
    category: "color",
    type: "color",
    rarity: "uncommon",
    cost: 1000,
    imageSrc: "/colors/emerald.png"
  },
  {
    id: "color-silver",
    name: "Silver Color",
    description: "A sleek silver color for your profile elements",
    category: "color",
    type: "color",
    rarity: "common",
    cost: 500,
    imageSrc: "/colors/silver.png"
  },
  
  // FONTS
  {
    id: "font-royal-script",
    name: "Royal Script",
    description: "An elegant script font fit for royalty",
    category: "font",
    type: "font",
    rarity: "legendary",
    cost: 10000,
    imageSrc: "/fonts/royal-script.png"
  },
  {
    id: "font-gothic",
    name: "Gothic Font",
    description: "A classic gothic font with medieval style",
    category: "font",
    type: "font",
    rarity: "epic",
    cost: 5000,
    imageSrc: "/fonts/gothic.png"
  },
  {
    id: "font-calligraphy",
    name: "Calligraphy Font",
    description: "A beautiful calligraphy font with flowing lines",
    category: "font",
    type: "font",
    rarity: "rare",
    cost: 2500,
    imageSrc: "/fonts/calligraphy.png"
  },
  {
    id: "font-serif",
    name: "Elegant Serif",
    description: "A classic serif font with timeless appeal",
    category: "font",
    type: "font",
    rarity: "uncommon",
    cost: 1000,
    imageSrc: "/fonts/serif.png"
  },
  {
    id: "font-sans",
    name: "Modern Sans",
    description: "A clean sans-serif font for a modern look",
    category: "font",
    type: "font",
    rarity: "common",
    cost: 500,
    imageSrc: "/fonts/sans.png"
  },
  
  // EMOJIS
  {
    id: "emoji-king",
    name: "King Emoji",
    description: "A regal king emoji to show your status",
    category: "emoji",
    type: "emoji",
    rarity: "legendary",
    cost: 10000
  },
  {
    id: "emoji-crown",
    name: "Crown Emoji",
    description: "A golden crown emoji to signify royalty",
    category: "emoji",
    type: "emoji",
    rarity: "epic",
    cost: 5000
  },
  {
    id: "emoji-money",
    name: "Money Bag Emoji",
    description: "A money bag emoji to showcase your wealth",
    category: "emoji",
    type: "emoji",
    rarity: "rare",
    cost: 2500
  },
  {
    id: "emoji-gem",
    name: "Gem Emoji",
    description: "A sparkling gem emoji to add flair",
    category: "emoji",
    type: "emoji",
    rarity: "uncommon",
    cost: 1000
  },
  {
    id: "emoji-star",
    name: "Star Emoji",
    description: "A glowing star emoji to add some shine",
    category: "emoji",
    type: "emoji",
    rarity: "common",
    cost: 500
  },
  
  // THEMES
  {
    id: "theme-royal-gold",
    name: "Royal Gold Theme",
    description: "A luxurious gold theme for your profile",
    category: "theme",
    type: "theme",
    rarity: "legendary",
    cost: 25000,
    cssClass: "theme-royal-gold"
  },
  {
    id: "theme-royal-purple",
    name: "Royal Purple Theme",
    description: "An elegant purple theme with royal flair",
    category: "theme",
    type: "theme",
    rarity: "epic",
    cost: 10000,
    cssClass: "theme-royal-purple"
  },
  {
    id: "theme-royal-navy",
    name: "Royal Navy Theme",
    description: "A deep navy theme with a royal touch",
    category: "theme",
    type: "theme",
    rarity: "rare",
    cost: 5000,
    cssClass: "theme-royal-navy"
  },
  {
    id: "theme-emerald",
    name: "Emerald Theme",
    description: "A vibrant emerald theme with a royal touch",
    category: "theme",
    type: "theme",
    rarity: "uncommon",
    cost: 2500,
    cssClass: "theme-emerald"
  },
  {
    id: "theme-silver",
    name: "Silver Theme",
    description: "A sleek silver theme for your profile",
    category: "theme",
    type: "theme",
    rarity: "common",
    cost: 1000,
    cssClass: "theme-silver"
  },
  
  // BADGES
  {
    id: "badge-king",
    name: "King Badge",
    description: "A royal badge showing your status as king",
    category: "badge",
    type: "badge",
    rarity: "legendary",
    cost: 25000,
    cssClass: "badge-king"
  },
  {
    id: "badge-nobility",
    name: "Nobility Badge",
    description: "A badge showing your noble status",
    category: "badge",
    type: "badge",
    rarity: "epic",
    cost: 10000,
    cssClass: "badge-nobility"
  },
  {
    id: "badge-wealthy",
    name: "Wealthy Badge",
    description: "A badge showcasing your immense wealth",
    category: "badge",
    type: "badge",
    rarity: "rare",
    cost: 5000,
    cssClass: "badge-wealthy"
  },
  {
    id: "badge-merchant",
    name: "Merchant Badge",
    description: "A badge showing your trading prowess",
    category: "badge",
    type: "badge",
    rarity: "uncommon",
    cost: 2500,
    cssClass: "badge-merchant"
  },
  {
    id: "badge-peasant",
    name: "Peasant Badge",
    description: "A humble badge for those starting their journey",
    category: "badge",
    type: "badge",
    rarity: "common",
    cost: 1000,
    cssClass: "badge-peasant"
  },
  
  // TITLES
  {
    id: "title-emperor",
    name: "Emperor Title",
    description: "The highest royal title possible",
    category: "title",
    type: "title",
    rarity: "legendary",
    cost: 50000
  },
  {
    id: "title-king",
    name: "King Title",
    description: "A regal title fit for royalty",
    category: "title",
    type: "title",
    rarity: "epic",
    cost: 25000
  },
  {
    id: "title-duke",
    name: "Duke Title",
    description: "A noble title of high rank",
    category: "title",
    type: "title",
    rarity: "rare",
    cost: 10000
  },
  {
    id: "title-baron",
    name: "Baron Title",
    description: "A respectable title of nobility",
    category: "title",
    type: "title",
    rarity: "uncommon",
    cost: 5000
  },
  {
    id: "title-knight",
    name: "Knight Title",
    description: "An honorable title for brave individuals",
    category: "title",
    type: "title",
    rarity: "common",
    cost: 2500
  }
];

// Helper functions
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  return allCosmetics.filter(item => item.category === category);
};

export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  return allCosmetics.find(item => item.id === id);
};

// Mock data for Fire Sale event
export const mockedCosmeticsData = allCosmetics.slice(0, 10);
