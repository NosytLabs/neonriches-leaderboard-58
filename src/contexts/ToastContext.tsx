
import React, { createContext, useContext } from 'react';
import { useToast as useShadcnToast } from '@/hooks/use-toast';
import { ExtendedToastProps } from '@/types/toast-extended';

interface ToastContextType {
  addToast: (toast: ExtendedToastProps) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
  dismissToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast, dismiss } = useShadcnToast();

  const addToast = (toastProps: ExtendedToastProps) => {
    toast(toastProps);
  };

  const dismissToast = (id: string) => {
    dismiss(id);
  };

  return (
    <ToastContext.Provider value={{ addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
};
