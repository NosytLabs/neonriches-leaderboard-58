
export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface CosmeticItem {
  id: string;
  name: string;
  category: string;
  type: string;
  rarity: CosmeticRarity;
  description: string;
  imageUrl: string;
  cost: number;
}
