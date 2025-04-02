
import React, { createContext, useContext, useState, ReactNode, ReactElement } from 'react';
import { Toast, ToastActionElement } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';

export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id?: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  action?: ReactElement;
}

export interface ToastContextType {
  toast: (props: ToastProps) => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  
  const toast = (props: ToastProps) => {
    const id = props.id || `toast-${Date.now()}`;
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
  };
  
  const dismissAll = () => {
    setToasts([]);
  };
  
  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      {children}
      <Toaster>
        {toasts.map((t) => (
          <Toast key={t.id} {...t} />
        ))}
      </Toaster>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
