
import React, { createContext, useContext, ReactNode } from 'react';
import { useToast as useShadcnToast, ToastActionElement } from '@/components/ui/use-toast';

type ToastVariant = 'default' | 'destructive' | 'success' | 'warning' | 'gold' | 'royal' | 'secondary' | 'outline';

interface ToastContextProps {
  toast: (props: {
    title?: ReactNode;
    description?: ReactNode;
    variant?: ToastVariant;
    action?: ToastActionElement;
    duration?: number;
  }) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toast } = useShadcnToast();

  const showToast = (props: {
    title?: ReactNode;
    description?: ReactNode;
    variant?: ToastVariant;
    action?: ToastActionElement;
    duration?: number;
  }) => {
    toast({
      title: props.title,
      description: props.description,
      variant: props.variant as any,
      action: props.action as any,  // Cast to any to fix type issue
      duration: props.duration,
    });
  };

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

export default ToastContext;
