
import React, { createContext, useContext, useCallback, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { toast } from '@/components/ui/use-toast';

interface ExtendedToastProps {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'gold' | 'royal';
  duration?: number;
  action?: ReactNode;
}

const ToastContext = createContext<{
  showToast: (props: ExtendedToastProps) => void;
  dismissToast: (id: string) => void;
}>({
  showToast: () => {},
  dismissToast: () => {},
});

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toast: hookToast, dismiss } = useToast();

  const showToast = useCallback((props: ExtendedToastProps) => {
    hookToast({
      ...props,
      title: String(props.title || ''),
      description: props.description,
      duration: props.duration,
      variant: props.variant,
      action: props.action,
    });
  }, [hookToast]);

  const dismissToast = useCallback((id: string) => {
    dismiss(id);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useCustomToast = () => useContext(ToastContext);
