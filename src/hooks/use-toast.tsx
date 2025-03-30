
import { createContext, useContext, ReactNode } from 'react';

type ToastVariant = 'default' | 'destructive' | 'success';

interface Toast {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  toast: (toast: Toast) => void;
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export const useToast = () => useContext(ToastContext);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  // In a real app, this would show real toasts
  // Here we're just logging to console for demo purposes
  const showToast = (toast: Toast) => {
    console.log(`[Toast ${toast.variant || 'default'}]: ${toast.title} - ${toast.description || ''}`);
  };
  
  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
