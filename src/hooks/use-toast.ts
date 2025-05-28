
import { useState } from 'react';

interface Toast {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toastData: Toast) => {
    console.log('Toast:', toastData);
    setToasts(prev => [...prev, toastData]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 3000);
  };

  return { toast, toasts };
};
