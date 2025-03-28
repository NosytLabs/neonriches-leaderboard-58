
export type TitleCategory = 'noble' | 'royal' | 'military' | 'scholarly' | 'common' | 'founder';

export interface MedievalTitle {
  id: string;
  name: string;
  category: TitleCategory;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  description: string;
  unlockRequirement?: string;
  displayPrefix?: boolean;
}

// Collection of medieval titles that can be purchased or unlocked
export const MEDIEVAL_TITLES: MedievalTitle[] = [
  // Common Titles (Inexpensive)
  {
    id: 'squire',
    name: 'Squire',
    category: 'common',
    price: 0.50,
    rarity: 'common',
    description: 'An apprentice to knighthood, learning the ways of nobility',
    displayPrefix: true
  },
  {
    id: 'yeoman',
    name: 'Yeoman',
    category: 'common',
    price: 0.50,
    rarity: 'common',
    description: 'A free man who owns and cultivates a small farm',
    displayPrefix: true
  },
  {
    id: 'page',
    name: 'Page',
    category: 'common',
    price: 0.75,
    rarity: 'common',
    description: 'A young nobleman serving as an attendant',
    displayPrefix: true
  },
  {
    id: 'jester',
    name: 'Jester',
    category: 'common',
    price: 1.00,
    rarity: 'common',
    description: 'The court fool, entertaining the nobility',
    displayPrefix: true
  },
  {
    id: 'minstrel',
    name: 'Minstrel',
    category: 'common',
    price: 1.25,
    rarity: 'common',
    description: 'A medieval singer or musician',
    displayPrefix: true
  },
  
  // Noble Titles (Mid-range)
  {
    id: 'knight',
    name: 'Knight',
    category: 'noble',
    price: 5.00,
    rarity: 'uncommon',
    description: 'A mounted warrior in the service of their liege',
    displayPrefix: true
  },
  {
    id: 'baronet',
    name: 'Baronet',
    category: 'noble',
    price: 7.50,
    rarity: 'uncommon',
    description: 'The lowest hereditary title in the British system',
    displayPrefix: true
  },
  {
    id: 'baron',
    name: 'Baron',
    category: 'noble',
    price: 10.00,
    rarity: 'uncommon',
    description: 'A nobleman of the lowest rank in the peerage',
    displayPrefix: true
  },
  {
    id: 'viscount',
    name: 'Viscount',
    category: 'noble',
    price: 15.00,
    rarity: 'rare',
    description: 'A nobleman ranking above a baron and below an earl',
    displayPrefix: true
  },
  {
    id: 'earl',
    name: 'Earl',
    category: 'noble',
    price: 20.00,
    rarity: 'rare',
    description: 'A British nobleman of a rank between a marquess and a viscount',
    displayPrefix: true
  },
  
  // Royal Titles (Higher-end)
  {
    id: 'duke',
    name: 'Duke',
    category: 'royal',
    price: 25.00,
    rarity: 'epic',
    description: 'A male ruler of a small state or member of the nobility',
    displayPrefix: true
  },
  {
    id: 'duchess',
    name: 'Duchess',
    category: 'royal',
    price: 25.00,
    rarity: 'epic',
    description: 'A female ruler of a small state or member of the nobility',
    displayPrefix: true
  },
  {
    id: 'prince',
    name: 'Prince',
    category: 'royal',
    price: 35.00,
    rarity: 'epic',
    description: 'A male member of a royal family other than the monarch',
    displayPrefix: true
  },
  {
    id: 'princess',
    name: 'Princess',
    category: 'royal',
    price: 35.00,
    rarity: 'epic',
    description: 'A female member of a royal family other than the monarch',
    displayPrefix: true
  },
  {
    id: 'king',
    name: 'King',
    category: 'royal',
    price: 50.00,
    rarity: 'legendary',
    description: 'The male ruler of an independent state',
    unlockRequirement: 'Reach rank #1 on the leaderboard',
    displayPrefix: true
  },
  {
    id: 'queen',
    name: 'Queen',
    category: 'royal',
    price: 50.00,
    rarity: 'legendary',
    description: 'The female ruler of an independent state',
    unlockRequirement: 'Reach rank #1 on the leaderboard',
    displayPrefix: true
  },
  
  // Military Titles
  {
    id: 'commander',
    name: 'Commander',
    category: 'military',
    price: 8.00,
    rarity: 'uncommon',
    description: 'A person who exercises authority or control over troops',
    displayPrefix: true
  },
  {
    id: 'captain',
    name: 'Captain',
    category: 'military',
    price: 12.00,
    rarity: 'rare',
    description: 'A military officer of middle rank',
    displayPrefix: true
  },
  {
    id: 'general',
    name: 'General',
    category: 'military',
    price: 18.00,
    rarity: 'epic',
    description: 'A senior military officer, usually in command of a large formation',
    displayPrefix: true
  },
  
  // Scholarly Titles
  {
    id: 'scholar',
    name: 'Scholar',
    category: 'scholarly',
    price: 5.00,
    rarity: 'uncommon',
    description: 'A learned or erudite person, especially one who has profound knowledge',
    displayPrefix: true
  },
  {
    id: 'alchemist',
    name: 'Alchemist',
    category: 'scholarly',
    price: 8.00,
    rarity: 'rare',
    description: 'A person who practices alchemy, blending science and magic',
    displayPrefix: true
  },
  {
    id: 'sage',
    name: 'Sage',
    category: 'scholarly',
    price: 15.00,
    rarity: 'epic',
    description: 'A person who has attained wisdom and enlightenment',
    displayPrefix: true
  },
  
  // Founder Title (Special)
  {
    id: 'founder',
    name: 'Founder',
    category: 'founder',
    price: 100.00,
    rarity: 'legendary',
    description: 'A prestigious title reserved for the original patrons of the kingdom',
    unlockRequirement: 'Purchase the Founder\'s Pass',
    displayPrefix: true
  }
];

// Function to get titles by category
export const getTitlesByCategory = (category: TitleCategory): MedievalTitle[] => {
  return MEDIEVAL_TITLES.filter(title => title.category === category);
};

// Function to get titles by rarity
export const getTitlesByRarity = (rarity: string): MedievalTitle[] => {
  return MEDIEVAL_TITLES.filter(title => title.rarity === rarity);
};

// Function to get a title by ID
export const getTitleById = (id: string): MedievalTitle | undefined => {
  return MEDIEVAL_TITLES.find(title => title.id === id);
};

// Function to calculate discounted price based on user tier/spending
export const getDiscountedTitlePrice = (title: MedievalTitle, amountSpent: number): number => {
  // Higher spenders get better discounts
  let discount = 0;
  
  if (amountSpent >= 100) {
    discount = 0.30; // 30% off for whales
  } else if (amountSpent >= 50) {
    discount = 0.20; // 20% off for high spenders
  } else if (amountSpent >= 25) {
    discount = 0.15; // 15% off for medium spenders
  } else if (amountSpent >= 10) {
    discount = 0.10; // 10% off for low spenders
  }
  
  // Calculate discounted price, round to 2 decimal places
  return Math.max(0.50, parseFloat((title.price * (1 - discount)).toFixed(2)));
};
