
import { CosmeticItem } from './cosmetics';

export type WishResultType = 'success' | 'failure' | 'jackpot';

export interface WishResult {
  type: WishResultType;
  reward?: CosmeticItem;
  message: string;
}

export interface WishingWellState {
  wishes: number;
  lastWishTime?: number;
  dailyWishes: number;
  totalWishes: number;
  rewards: CosmeticItem[];
}

export interface WishResultModalProps {
  result: WishResultType;
  reward: CosmeticItem;
  rarity: string;
  title: string;
  message: string;
  onClose: () => void;
}
