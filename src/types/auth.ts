
export interface UserSubscription {
  id: string;
  tier: 'free' | 'pro';
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  renewalDate: Date;
  paymentMethod: 'credit_card' | 'paypal' | 'crypto';
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'yearly' | 'quarterly';
  features: string[];
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface MarketingStats {
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
}
