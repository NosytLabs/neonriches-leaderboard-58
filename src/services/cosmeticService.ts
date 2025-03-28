
import { CosmeticItem, CosmeticRarity, CosmeticCategory, getRandomCosmetic } from '@/types/cosmetics';
import { UserProfile } from '@/types/user';

// Simplified database of cosmetic items with lower prices and medieval themes
const COSMETIC_DATABASE: CosmeticItem[] = [
  // Borders
  {
    id: 'border-parchment',
    name: 'Parchment Border',
    description: 'A simple yet elegant parchment-style border',
    cost: 0.50,
    rarity: 'common',
    category: 'border'
  },
  {
    id: 'border-royal-frame',
    name: 'Royal Frame',
    description: 'An ornate golden frame fit for nobility',
    cost: 1.00,
    rarity: 'uncommon',
    category: 'border'
  },
  {
    id: 'border-dragon-scales',
    name: 'Dragon Scales',
    description: 'A border of shimmering dragon scales',
    cost: 2.50,
    rarity: 'rare',
    category: 'border'
  },
  {
    id: 'border-arcane-runes',
    name: 'Arcane Runes',
    description: 'Mysterious glowing runes encircle your profile',
    cost: 4.00,
    rarity: 'epic',
    category: 'border'
  },
  {
    id: 'border-kings-decree',
    name: "King's Decree",
    description: 'The ultimate border reserved for those of true royal blood',
    cost: 7.50,
    rarity: 'legendary',
    category: 'border'
  },
  {
    id: 'border-modern-minimalist',
    name: 'Modern Minimalist',
    description: 'A sleek, modern border with clean lines',
    cost: 0.75,
    rarity: 'common',
    category: 'border'
  },
  {
    id: 'border-neon-pulse',
    name: 'Neon Pulse',
    description: 'A contemporary border with pulsing neon effects',
    cost: 1.50,
    rarity: 'uncommon',
    category: 'border'
  },
  {
    id: 'border-digital-circuit',
    name: 'Digital Circuit',
    description: 'A border styled like a futuristic circuit board',
    cost: 3.00,
    rarity: 'rare',
    category: 'border'
  },
  
  // Colors
  {
    id: 'color-peasant-brown',
    name: 'Peasant Brown',
    description: 'The humble color of the common folk',
    cost: 0.25,
    rarity: 'common',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-royal-purple',
    name: 'Royal Purple',
    description: 'The classic color of nobility',
    cost: 0.75,
    rarity: 'common',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-golden-hue',
    name: 'Golden Hue',
    description: 'A rich gold tone that speaks of wealth',
    cost: 1.00,
    rarity: 'uncommon',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-crusader-crimson',
    name: 'Crusader Crimson',
    description: 'The bold red of medieval knights',
    cost: 1.50,
    rarity: 'rare',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-alchemist-azure',
    name: 'Alchemist Azure',
    description: 'The mystical blue of medieval scholars',
    cost: 2.00,
    rarity: 'epic',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-dragon-emerald',
    name: 'Dragon Emerald',
    description: 'A shimmering green like a dragon\'s eye',
    cost: 3.00,
    rarity: 'legendary',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-neon-pink',
    name: 'Neon Pink',
    description: 'A vibrant and modern neon pink',
    cost: 0.50,
    rarity: 'common',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-cyber-blue',
    name: 'Cyber Blue',
    description: 'A futuristic blue with digital flair',
    cost: 1.25,
    rarity: 'uncommon',
    category: 'color' as CosmeticCategory
  },
  {
    id: 'color-sunset-orange',
    name: 'Sunset Orange',
    description: 'A warm, contemporary orange hue',
    cost: 1.75,
    rarity: 'rare',
    category: 'color' as CosmeticCategory
  },
  
  // Fonts
  {
    id: 'font-scribe',
    name: 'Scribe Script',
    description: 'The careful handwriting of a medieval scribe',
    cost: 0.50,
    rarity: 'common',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-gothic-script',
    name: 'Gothic Script',
    description: 'A medieval-inspired gothic font',
    cost: 1.00,
    rarity: 'uncommon',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-calligraphy',
    name: 'Royal Calligraphy',
    description: 'Elegant flowing script for the elite',
    cost: 1.50,
    rarity: 'rare',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-mystic-runes',
    name: 'Mystic Runes',
    description: 'A font inspired by ancient magical runes',
    cost: 2.50,
    rarity: 'epic',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-sovereign-decree',
    name: 'Sovereign Decree',
    description: 'The font used by digital royalty',
    cost: 5.00,
    rarity: 'legendary',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-modern-sans',
    name: 'Modern Sans',
    description: 'A clean, contemporary sans-serif font',
    cost: 0.75,
    rarity: 'common',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-tech-mono',
    name: 'Tech Mono',
    description: 'A modern monospace font with a digital feel',
    cost: 1.25,
    rarity: 'uncommon',
    category: 'font' as CosmeticCategory
  },
  {
    id: 'font-geometric-display',
    name: 'Geometric Display',
    description: 'A bold, geometric font with modern styling',
    cost: 2.00,
    rarity: 'rare',
    category: 'font' as CosmeticCategory
  },
  
  // Emojis
  {
    id: 'emoji-jester',
    name: 'Jester',
    description: 'A medieval court jester emoji',
    cost: 0.25,
    rarity: 'common',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-goblet',
    name: 'Royal Goblet',
    description: 'A golden goblet fit for a feast',
    cost: 0.75,
    rarity: 'uncommon',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-dragon',
    name: 'Dragon',
    description: 'A fearsome dragon emoji',
    cost: 1.50,
    rarity: 'rare',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-castle',
    name: 'Castle',
    description: 'A grand medieval castle emoji',
    cost: 2.00,
    rarity: 'epic',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-crown-jewel',
    name: 'Crown Jewel',
    description: 'The ultimate symbol of your royal status',
    cost: 4.00,
    rarity: 'legendary',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-moneybag',
    name: 'Money Bag',
    description: 'Show off your wealth with this emoji',
    cost: 0.50,
    rarity: 'common',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-diamond',
    name: 'Diamond',
    description: 'A sparkling diamond emoji',
    cost: 1.00,
    rarity: 'uncommon',
    category: 'emoji' as CosmeticCategory
  },
  {
    id: 'emoji-rocket',
    name: 'Rocket',
    description: 'To the moon!',
    cost: 1.75,
    rarity: 'rare',
    category: 'emoji' as CosmeticCategory
  },
  
  // Titles
  {
    id: 'title-peasant',
    name: 'Peasant',
    description: 'A humble beginning',
    cost: 0.25,
    rarity: 'common',
    category: 'title'
  },
  {
    id: 'title-squire',
    name: 'Squire',
    description: 'An apprentice to knighthood',
    cost: 0.75,
    rarity: 'common',
    category: 'title'
  },
  {
    id: 'title-knight',
    name: 'Knight',
    description: 'A noble warrior',
    cost: 1.50,
    rarity: 'uncommon',
    category: 'title'
  },
  {
    id: 'title-baron',
    name: 'Baron',
    description: 'A lord of the realm',
    cost: 2.50,
    rarity: 'rare',
    category: 'title'
  },
  {
    id: 'title-duke',
    name: 'Duke',
    description: 'A high-ranking noble',
    cost: 4.00,
    rarity: 'epic',
    category: 'title'
  },
  {
    id: 'title-sovereign',
    name: 'Sovereign',
    description: 'The ruler of all',
    cost: 7.50,
    rarity: 'legendary',
    category: 'title'
  },
  {
    id: 'title-ceo',
    name: 'CEO',
    description: 'Chief Executive Officer',
    cost: 1.00,
    rarity: 'uncommon',
    category: 'title'
  },
  {
    id: 'title-influencer',
    name: 'Influencer',
    description: 'A modern nobility',
    cost: 1.75,
    rarity: 'rare',
    category: 'title'
  },
  {
    id: 'title-crypto-whale',
    name: 'Crypto Whale',
    description: 'A big player in the digital seas',
    cost: 3.50,
    rarity: 'epic',
    category: 'title'
  },
  {
    id: 'title-founder',
    name: 'Founder',
    description: 'One of the first to join',
    cost: 10.00,
    rarity: 'legendary',
    category: 'title'
  },
  
  // NEW: Themes (complete profile themes)
  {
    id: 'theme-medieval-court',
    name: 'Medieval Court',
    description: 'Transform your profile into a royal medieval court',
    cost: 5.00,
    rarity: 'rare',
    category: 'theme' as CosmeticCategory
  },
  {
    id: 'theme-digital-kingdom',
    name: 'Digital Kingdom',
    description: 'A futuristic, neon-infused royal aesthetic',
    cost: 5.00,
    rarity: 'rare',
    category: 'theme' as CosmeticCategory
  },
  {
    id: 'theme-crypto-royalty',
    name: 'Crypto Royalty',
    description: 'Show off your blockchain kingdom',
    cost: 7.50,
    rarity: 'epic',
    category: 'theme' as CosmeticCategory
  },
  {
    id: 'theme-founders-hall',
    name: "Founder's Hall",
    description: 'Exclusive theme only for founding members',
    cost: 15.00,
    rarity: 'legendary',
    category: 'theme' as CosmeticCategory
  },
  {
    id: 'theme-marketing-guru',
    name: 'Marketing Guru',
    description: 'Professional theme optimized for marketing your presence',
    cost: 3.50,
    rarity: 'uncommon',
    category: 'theme' as CosmeticCategory
  },
  
  // NEW: Effects (animated effects for profiles)
  {
    id: 'effect-golden-shimmer',
    name: 'Golden Shimmer',
    description: 'Add a subtle golden shimmer to your profile',
    cost: 2.00,
    rarity: 'uncommon',
    category: 'effect'
  },
  {
    id: 'effect-flame-border',
    name: 'Flame Border',
    description: 'Animated flames dance around your profile',
    cost: 4.50,
    rarity: 'rare',
    category: 'effect'
  },
  {
    id: 'effect-royal-sparkle',
    name: 'Royal Sparkle',
    description: 'Sparkling effects that follow your profile interactions',
    cost: 6.00,
    rarity: 'epic',
    category: 'effect'
  },
  {
    id: 'effect-crown-aura',
    name: 'Crown Aura',
    description: 'A majestic aura that shows your royal status',
    cost: 10.00,
    rarity: 'legendary',
    category: 'effect'
  },
  
  // NEW: Backgrounds
  {
    id: 'background-castle',
    name: 'Castle Interior',
    description: 'The grand hall of a medieval castle',
    cost: 1.50,
    rarity: 'uncommon',
    category: 'background'
  },
  {
    id: 'background-throne-room',
    name: 'Throne Room',
    description: 'A royal throne room fit for a king or queen',
    cost: 3.00,
    rarity: 'rare',
    category: 'background'
  },
  {
    id: 'background-treasure-vault',
    name: 'Treasure Vault',
    description: 'A vault filled with gold and treasure',
    cost: 5.00,
    rarity: 'epic',
    category: 'background'
  },
  {
    id: 'background-digital-realm',
    name: 'Digital Realm',
    description: 'A futuristic digital landscape',
    cost: 2.50,
    rarity: 'rare',
    category: 'background'
  },
  
  // NEW: Marketing-focused badges
  {
    id: 'badge-influencer',
    name: 'Influencer Badge',
    description: 'Show your marketing prowess with this badge',
    cost: 3.00,
    rarity: 'uncommon',
    category: 'badge'
  },
  {
    id: 'badge-trendsetter',
    name: 'Trendsetter Badge',
    description: 'Mark yourself as a trendsetter in the community',
    cost: 4.50,
    rarity: 'rare',
    category: 'badge'
  },
  {
    id: 'badge-brand-ambassador',
    name: 'Brand Ambassador',
    description: 'Perfect for showcasing your promotional capabilities',
    cost: 6.00,
    rarity: 'epic',
    category: 'badge'
  },
  {
    id: 'badge-founder',
    name: 'Founder Badge',
    description: 'Exclusive badge for founding members',
    cost: 15.00,
    rarity: 'legendary',
    category: 'badge'
  }
];

// For backward compatibility - map cost to price
COSMETIC_DATABASE.forEach(item => {
  if (!item.price) {
    (item as any).price = item.cost;
  }
});

// Get all cosmetic items
export const getAllCosmetics = (): CosmeticItem[] => {
  return COSMETIC_DATABASE;
};

// Get cosmetic items by category
export const getCosmeticsByCategory = (category: string): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => item.category === category);
};

// Get cosmetic items by rarity
export const getCosmeticsByRarity = (rarity: CosmeticRarity): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => item.rarity === rarity);
};

// Get a cosmetic item by ID
export const getCosmeticById = (id: string): CosmeticItem | undefined => {
  return COSMETIC_DATABASE.find(item => item.id === id);
};

// Check if user owns a cosmetic
export const userOwnsCosmetic = (user: UserProfile, cosmeticId: string): boolean => {
  if (!user.cosmetics) return false;
  
  // Find the category that contains this cosmetic
  for (const [category, items] of Object.entries(user.cosmetics)) {
    if (Array.isArray(items) && items.includes(cosmeticId)) {
      return true;
    }
  }
  
  return false;
};

// Get all cosmetic categories
export const getCosmeticCategories = (): string[] => {
  const categories = new Set<string>();
  COSMETIC_DATABASE.forEach(item => categories.add(item.category));
  return Array.from(categories);
};

// Calculate discount based on user tier/spending
export const getDiscountedPrice = (basePrice: number, amountSpent: number): number => {
  // Higher spenders get better discounts
  let discount = 0;
  
  if (amountSpent >= 50) {
    discount = 0.30; // 30% off for whales
  } else if (amountSpent >= 25) {
    discount = 0.20; // 20% off for high spenders
  } else if (amountSpent >= 10) {
    discount = 0.15; // 15% off for medium spenders
  } else if (amountSpent >= 5) {
    discount = 0.10; // 10% off for low spenders
  }
  
  // Calculate discounted price, round to 2 decimal places
  return Math.max(0.25, parseFloat((basePrice * (1 - discount)).toFixed(2)));
};

// Award a random cosmetic based on wish amount
export const awardRandomCosmetic = (
  user: UserProfile, 
  amount: number,
  preferredCategory?: string
): { 
  cosmeticItem: CosmeticItem | null;
  rarity: CosmeticRarity;
} => {
  // Determine the rarity based on amount spent
  const rarity = getRandomCosmetic(amount, preferredCategory);
  
  // Filter items by rarity and optionally by category
  let eligibleItems = COSMETIC_DATABASE.filter(item => item.rarity === rarity);
  
  if (preferredCategory) {
    const categoryItems = eligibleItems.filter(item => item.category === preferredCategory);
    // If there are items in the preferred category, use those, otherwise use all items of that rarity
    if (categoryItems.length > 0) {
      eligibleItems = categoryItems;
    }
  }
  
  // Filter out items the user already owns
  const unownedItems = eligibleItems.filter(item => !userOwnsCosmetic(user, item.id));
  
  // If user owns all items of this rarity/category, try to give them any item they don't have
  const itemPool = unownedItems.length > 0 ? unownedItems : COSMETIC_DATABASE.filter(item => !userOwnsCosmetic(user, item.id));
  
  // If somehow user owns absolutely everything, return null
  if (itemPool.length === 0) {
    return { cosmeticItem: null, rarity };
  }
  
  // Pick a random item from the pool
  const randomIndex = Math.floor(Math.random() * itemPool.length);
  return { cosmeticItem: itemPool[randomIndex], rarity };
};

// Get Founder exclusive cosmetics
export const getFounderExclusiveCosmetics = (): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => 
    item.id === 'theme-founders-hall' || 
    item.id === 'badge-founder' || 
    item.id === 'title-founder' ||
    item.rarity === 'legendary'
  );
};

// Get Marketing themed cosmetics
export const getMarketingCosmetics = (): CosmeticItem[] => {
  return COSMETIC_DATABASE.filter(item => 
    item.id === 'theme-marketing-guru' || 
    item.category === 'badge' || 
    item.id.includes('influencer') ||
    item.id.includes('marketing')
  );
};
