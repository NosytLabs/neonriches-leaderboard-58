import { CosmeticItem, CosmeticCategory, CosmeticType, CosmeticRarity } from '@/types/cosmetics';

// This is a mock database of cosmetic items
export const mockedCosmeticsData: CosmeticItem[] = [
  {
    id: 'border-001',
    name: 'Royal Crest Border',
    description: 'A border fit for royalty, displaying the royal crest.',
    category: 'border' as CosmeticCategory,
    type: 'profile',
    rarity: 'rare' as CosmeticRarity,
    cost: 5,
    imageSrc: '/cosmetics/borders/royal-crest-border.png'
  },
  {
    id: 'border-002',
    name: 'Knightly Armor Border',
    description: 'A sturdy border resembling a knight\'s armor.',
    category: 'border' as CosmeticCategory,
    type: 'profile',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 3,
    imageSrc: '/cosmetics/borders/knightly-armor-border.png'
  },
  {
    id: 'border-003',
    name: 'Elven Vines Border',
    description: 'An elegant border adorned with elven vines.',
    category: 'border' as CosmeticCategory,
    type: 'profile',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 3,
    imageSrc: '/cosmetics/borders/elven-vines-border.png'
  },
  {
    id: 'border-004',
    name: 'Oceanic Depths Border',
    description: 'A mystical border inspired by the depths of the ocean.',
    category: 'border' as CosmeticCategory,
    type: 'profile',
    rarity: 'rare' as CosmeticRarity,
    cost: 5,
    imageSrc: '/cosmetics/borders/oceanic-depths-border.png'
  },
  {
    id: 'border-005',
    name: 'Fiery Flames Border',
    description: 'A border engulfed in fiery flames.',
    category: 'border' as CosmeticCategory,
    type: 'profile',
    rarity: 'epic' as CosmeticRarity,
    cost: 8,
    imageSrc: '/cosmetics/borders/fiery-flames-border.png'
  },
  {
    id: 'color-001',
    name: 'Midnight Majesty',
    description: 'A color scheme of deep blues and purples, reminiscent of a midnight sky.',
    category: 'color' as CosmeticCategory,
    type: 'color',
    rarity: 'rare' as CosmeticRarity,
    cost: 6,
    imageSrc: '/cosmetics/colors/midnight-majesty.png'
  },
  {
    id: 'color-002',
    name: 'Emerald Forest',
    description: 'A vibrant green color scheme inspired by lush forests.',
    category: 'color' as CosmeticCategory,
    type: 'color',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 4,
    imageSrc: '/cosmetics/colors/emerald-forest.png'
  },
  {
    id: 'color-003',
    name: 'Crimson Sunset',
    description: 'A warm color scheme of reds and oranges, like a setting sun.',
    category: 'color' as CosmeticCategory,
    type: 'color',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 4,
    imageSrc: '/cosmetics/colors/crimson-sunset.png'
  },
  {
    id: 'color-004',
    name: 'Icy Peaks',
    description: 'A cool color scheme of blues and whites, inspired by snowy mountains.',
    category: 'color' as CosmeticCategory,
    type: 'color',
    rarity: 'rare' as CosmeticRarity,
    cost: 6,
    imageSrc: '/cosmetics/colors/icy-peaks.png'
  },
  {
    id: 'color-005',
    name: 'Golden Sands',
    description: 'A bright color scheme of golds and yellows, reminiscent of desert sands.',
    category: 'color' as CosmeticCategory,
    type: 'color',
    rarity: 'epic' as CosmeticRarity,
    cost: 9,
    imageSrc: '/cosmetics/colors/golden-sands.png'
  },
  {
    id: 'font-001',
    name: 'Royal Script',
    description: 'An elegant, flowing script fit for royal decrees.',
    category: 'font' as CosmeticCategory,
    type: 'text',
    rarity: 'rare' as CosmeticRarity,
    cost: 7
  },
  {
    id: 'font-002',
    name: 'Knightly Bold',
    description: 'A strong, bold font inspired by knights and chivalry.',
    category: 'font' as CosmeticCategory,
    type: 'text',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 5
  },
  {
    id: 'font-003',
    name: 'Elven Calligraphy',
    description: 'A delicate, flowing font reminiscent of elven script.',
    category: 'font' as CosmeticCategory,
    type: 'text',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 5
  },
  {
    id: 'font-004',
    name: 'Oceanic Runes',
    description: 'A mysterious, runic font inspired by the ocean depths.',
    category: 'font' as CosmeticCategory,
    type: 'text',
    rarity: 'rare' as CosmeticRarity,
    cost: 7
  },
  {
    id: 'font-005',
    name: 'Fiery Gothic',
    description: 'A dramatic, gothic font engulfed in flames.',
    category: 'font' as CosmeticCategory,
    type: 'text',
    rarity: 'epic' as CosmeticRarity,
    cost: 10
  },
  {
    id: 'emoji-001',
    name: 'Royal Crown Emoji',
    description: 'A sparkling emoji of a royal crown.',
    category: 'emoji' as CosmeticCategory,
    type: 'emoji',
    rarity: 'rare' as CosmeticRarity,
    cost: 8,
    cssClass: 'text-royal-gold'
  },
  {
    id: 'emoji-002',
    name: 'Knight Shield Emoji',
    description: 'A sturdy emoji of a knight\'s shield.',
    category: 'emoji' as CosmeticCategory,
    type: 'emoji',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 6,
    cssClass: 'text-gray-400'
  },
  {
    id: 'emoji-003',
    name: 'Elven Leaf Emoji',
    description: 'A delicate emoji of an elven leaf.',
    category: 'emoji' as CosmeticCategory,
    type: 'emoji',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 6,
    cssClass: 'text-green-400'
  },
  {
    id: 'emoji-004',
    name: 'Ocean Wave Emoji',
    description: 'A swirling emoji of an ocean wave.',
    category: 'emoji' as CosmeticCategory,
    type: 'emoji',
    rarity: 'rare' as CosmeticRarity,
    cost: 8,
    cssClass: 'text-blue-400'
  },
  {
    id: 'emoji-005',
    name: 'Fireball Emoji',
    description: 'A blazing emoji of a fiery fireball.',
    category: 'emoji' as CosmeticCategory,
    type: 'emoji',
    rarity: 'epic' as CosmeticRarity,
    cost: 11,
    cssClass: 'text-red-500'
  },
  {
    id: 'title-001',
    name: 'His Majesty',
    description: 'A title of great respect and power.',
    category: 'title' as CosmeticCategory,
    type: 'text',
    rarity: 'common' as CosmeticRarity,
    cost: 2
  },
  {
    id: 'title-002',
    name: 'Her Majesty',
    description: 'A title of great respect and power.',
    category: 'title' as CosmeticCategory,
    type: 'text',
    rarity: 'common' as CosmeticRarity,
    cost: 2
  },
  {
    id: 'title-003',
    name: 'The Honorable',
    description: 'A title of great respect and integrity.',
    category: 'title' as CosmeticCategory,
    type: 'text',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 4
  },
  {
    id: 'title-004',
    name: 'The Valiant',
    description: 'A title of great courage and bravery.',
    category: 'title' as CosmeticCategory,
    type: 'text',
    rarity: 'uncommon' as CosmeticRarity,
    cost: 4
  },
  {
    id: 'title-005',
    name: 'The Wise',
    description: 'A title of great knowledge and wisdom.',
    category: 'title' as CosmeticCategory,
    type: 'text',
    rarity: 'rare' as CosmeticRarity,
    cost: 6
  }
].map(item => ({
  ...item,
  placement: 'profile'
}));

export default mockedCosmeticsData;
