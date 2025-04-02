
import React, { createContext, useContext, useState } from 'react';
import { Toast } from '@/components/ui/toast';
import { toast as toastFunction } from '@/hooks/use-toast';

export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastContextType {
  toast: (title: string, description?: string, type?: ToastType, duration?: number) => void;
  addToast: (title: string, description?: string, type?: ToastType, duration?: number) => void;
  toasts: ToastData[];
  removeToast: (id: string) => void;
}

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

const defaultToastContext: ToastContextType = {
  toast: () => {},
  addToast: () => {},
  toasts: [],
  removeToast: () => {},
};

export const ToastContext = createContext<ToastContextType>(defaultToastContext);

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (title: string, description?: string, type: ToastType = 'default', duration?: number) => {
    // Use the shadcn toast function
    toastFunction({
      title,
      description,
      variant: type === 'error' ? 'destructive' : 
               type === 'success' ? 'success' :
               type === 'warning' ? 'warning' : 'default',
      duration: duration || 5000,
    });
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        toast: addToast,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
