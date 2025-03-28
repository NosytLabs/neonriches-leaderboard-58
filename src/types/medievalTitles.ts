
export interface MedievalTitle {
  id: string;
  name: string;
  description: string;
  price?: number;
  rarity?: string;
  exclusive?: boolean;
}

const medievalTitles: MedievalTitle[] = [
  {
    id: 'king',
    name: 'King',
    description: 'The highest royal title, reserved for the #1 spender',
    rarity: 'legendary',
    exclusive: true
  },
  {
    id: 'queen',
    name: 'Queen',
    description: 'The highest royal title, reserved for the #1 spender',
    rarity: 'legendary',
    exclusive: true
  },
  {
    id: 'duke',
    name: 'Duke',
    description: 'A high noble title',
    price: 100,
    rarity: 'epic'
  },
  {
    id: 'duchess',
    name: 'Duchess',
    description: 'A high noble title',
    price: 100,
    rarity: 'epic'
  },
  {
    id: 'count',
    name: 'Count',
    description: 'A noble title of prestige',
    price: 75,
    rarity: 'rare'
  },
  {
    id: 'countess',
    name: 'Countess',
    description: 'A noble title of prestige',
    price: 75,
    rarity: 'rare'
  },
  {
    id: 'baron',
    name: 'Baron',
    description: 'A respected noble title',
    price: 50,
    rarity: 'uncommon'
  },
  {
    id: 'baroness',
    name: 'Baroness',
    description: 'A respected noble title',
    price: 50,
    rarity: 'uncommon'
  },
  {
    id: 'knight',
    name: 'Knight',
    description: 'A title of honor',
    price: 25,
    rarity: 'common'
  },
  {
    id: 'dame',
    name: 'Dame',
    description: 'A title of honor',
    price: 25,
    rarity: 'common'
  },
  {
    id: 'jester',
    name: 'Jester',
    description: 'A humorous title',
    price: 15,
    rarity: 'common'
  },
  {
    id: 'founder',
    name: 'Founder',
    description: 'A special title for early supporters',
    rarity: 'legendary',
    exclusive: true
  }
];

export const getTitleById = (id: string): MedievalTitle | undefined => {
  return medievalTitles.find(title => title.id === id);
};

export const getAllTitles = (): MedievalTitle[] => {
  return medievalTitles;
};

export const getPurchasableTitles = (): MedievalTitle[] => {
  return medievalTitles.filter(title => title.price && !title.exclusive);
};

export default medievalTitles;
