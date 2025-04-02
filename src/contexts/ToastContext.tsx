
import React, { createContext, useContext, ReactNode } from 'react';
import { useToast as useShadcnToast } from '@/components/ui/use-toast';

type ToastVariant = 'default' | 'destructive' | 'success' | 'warning' | 'gold' | 'royal' | 'secondary' | 'outline';

interface ToastContextProps {
  toast: (props: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: ToastVariant;
    action?: React.ReactNode;
    duration?: number;
  }) => void;
  // Add the missing 'addToast' property that components are looking for
  addToast: (props: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: ToastVariant;
    action?: React.ReactNode;
    duration?: number;
  }) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toast } = useShadcnToast();

  const showToast = (props: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: ToastVariant;
    action?: React.ReactNode;
    duration?: number;
  }) => {
    toast({
      title: props.title,
      description: props.description,
      variant: props.variant as any,
      action: props.action,
      duration: props.duration,
    });
  };

  return (
    <ToastContext.Provider value={{ 
      toast: showToast,
      // Add addToast as an alias for toast for backward compatibility
      addToast: showToast 
    }}>
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
