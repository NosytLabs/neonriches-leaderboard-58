
export type TransactionType = 
  | 'deposit'
  | 'withdrawal'
  | 'purchase'
  | 'refund'
  | 'transfer'
  | 'bonus'
  | 'cosmetic'
  | 'event'
  | 'protection'
  | 'mockery_protection'
  | 'founder'
  | 'wish';

export type TransactionStatus = 
  | 'pending'
  | 'confirmed'
  | 'failed'
  | 'cancelled';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
  createdAt: string;
  updatedAt?: string;
  metadata?: Record<string, any>;
  description?: string;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  totalDeposited: number;
  currentBalance?: number;
  team?: string;
  profileImage?: string;
  lastDepositDate: string;
  joinDate?: string;
  tier?: string;
}

export interface DbLeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  total_deposited: number;
  current_balance: number;
  team: "red" | "green" | "blue" | null;
  profile_image: string;
  joined_at: string;
  tier: string;
}
