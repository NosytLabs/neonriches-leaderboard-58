
export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
}

export interface BoostItem {
  id: string;
  name: string;
  description: string;
  type: string;
  level: number;
  duration: number; // in hours
  price: number;
  icon: string;
  effects: string[];
  strength: number;
}

export interface UserBoost {
  id: string;
  userId: string;
  boostId: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  purchasedAt: string;
  boost?: BoostItem;
}

export type BoostType = 
  | 'general'
  | 'rank'
  | 'exposure'
  | 'protection'
  | 'spending'
  | 'visibility'
  | 'royal';
