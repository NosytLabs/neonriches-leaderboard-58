
export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  type: 'border' | 'color' | 'font' | 'emoji' | 'background' | 'effect' | 'title';
  rarity: 'common' | 'rare' | 'legendary';
  cost: number;
  imageUrl?: string;
  preview?: string;
}

export interface CosmeticCollection {
  borders: CosmeticItem[];
  colors: CosmeticItem[];
  fonts: CosmeticItem[];
  emojis: CosmeticItem[];
  backgrounds: CosmeticItem[];
  effects: CosmeticItem[];
  titles: CosmeticItem[];
}
