
export interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onSuccess?: () => void;
}

export interface RegisterFormProps {
  onSwitchToLogin?: () => void;
  onSuccess?: () => void;
}
