
export interface UserSubscription {
  id: string;
  tier: string;
  status: 'active' | 'canceled' | 'expired';
  startDate: Date;
  endDate: Date;
  renewalDate?: Date;
  paymentMethod: string;
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'quarterly' | 'annual';
  features: string[];
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  profileImage?: string;
  tier: 'free' | 'pro' | 'royal';
  subscription?: UserSubscription;
  walletBalance: number;
  amountSpent: number;
  rank: number;
  role?: string;
}
