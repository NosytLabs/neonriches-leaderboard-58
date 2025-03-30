
export interface PaymentModalProps {
  title: string;
  description: string;
  amount: number;
  onSuccess: () => void;
  trigger: React.ReactNode;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  url?: string;
  subscriptionId?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  isDefault: boolean;
}

export type PaymentType = 'oneTime' | 'subscription' | 'donation';
