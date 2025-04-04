
import { UserProfile } from '@/types/user-consolidated';

export interface LoginFormProps {
  onSuccess?: () => void;
  onSwitchToRegister?: () => void;
}

export interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export interface SignUpFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

export interface FormErrorProps {
  message: string;
}

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showVisibilityToggle?: boolean;
}

export interface AuthButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}
