
import React, { createContext, useContext } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ToastProps } from '@/components/ui/toast';

interface ToastContextProps {
  addToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();

  const addToast = (props: ToastProps) => {
    toast(props);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
