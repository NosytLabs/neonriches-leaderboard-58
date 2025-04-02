
import React, { createContext, useContext, useState } from 'react';
import { Toast } from '@/components/ui/toast';
import { toast as toastFunction, ToastProps, ToastActionElement } from '@/hooks/use-toast';

export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  action?: ToastActionElement;
}

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning";
  duration?: number;
  action?: ToastActionElement;
}

export interface ToastContextType {
  toast: (options: ToastOptions | string) => void;
  addToast: (options: ToastOptions | string) => void;
  toasts: ToastData[];
  removeToast: (id: string) => void;
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

  const addToast = (options: ToastOptions | string) => {
    // Handle both string and object arguments
    if (typeof options === 'string') {
      // Use the shadcn toast function with string as title
      toastFunction({
        title: options,
      });
    } else {
      // Use the shadcn toast function with options object
      toastFunction({
        title: options.title,
        description: options.description,
        variant: options.variant || 'default',
        duration: options.duration || 5000,
        action: options.action,
      });
    }
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
