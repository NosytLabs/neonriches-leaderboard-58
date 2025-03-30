
export interface PaymentModalProps {
  title: string;
  description: string;
  amount: number;
  onSuccess: () => void;
  trigger: React.ReactNode;
  url?: string;
}

export interface PaymentResult {
  success: boolean;
  subscriptionId?: string;
  error?: string;
  url?: string;
}

export interface PaymentMethodProps {
  onPaymentComplete: (result: boolean) => void;
  amount: number;
  description: string;
}
