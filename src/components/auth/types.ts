
// Authentication form types
export interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onSuccess?: () => void;
}

export interface RegisterFormProps {
  onSwitchToLogin?: () => void;
  onSuccess?: () => void;
}

// Payment Modal type
export interface PaymentModalProps {
  amount: number;
  onSuccess: (amount: number) => void | Promise<void>;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
