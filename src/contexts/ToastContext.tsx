
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast, ToastActionElement } from '@/components/ui/toast';
import { useToast as useShadcnToast } from '@/hooks/use-toast';

export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id?: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  action?: React.ReactElement;
}

export interface ToastContextType {
  toast: (props: ToastProps) => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const shadcnToast = useShadcnToast();
  
  const toast = (props: ToastProps) => {
    const id = props.id || `toast-${Date.now()}`;
    
    // Map our ToastType to variant prop expected by shadcn/ui
    const variantMap: Record<ToastType, any> = {
      default: 'default',
      success: 'success',
      error: 'destructive',
      warning: 'warning',
      info: 'default'
    };
    
    // Use the shadcn toast
    shadcnToast.toast({
      title: props.title,
      description: props.description,
      variant: variantMap[props.type || 'default'],
      duration: props.duration,
      action: props.action as ToastActionElement
    });
    
    setToasts((prev) => [...prev, { ...props, id }]);
    
    // Auto-dismiss after duration
    if (props.duration !== 0) {
      setTimeout(() => {
        dismiss(id);
      }, props.duration || 5000);
    }
  };
  
  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    shadcnToast.dismiss(id);
  };
  
  const dismissAll = () => {
    setToasts([]);
  };
  
  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
