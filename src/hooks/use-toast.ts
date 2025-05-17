
import { useState, useCallback } from 'react';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'destructive' | 'info';

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastAPI {
  toast: (options: ToastOptions) => void;
  closeToast: (id: string) => void;
  toasts: Toast[];
}

interface Toast extends ToastOptions {
  id: string;
}

// Simple toast implementation that doesn't actually render toasts
// In a real app, this would manage visible toasts
export const useToast = (): ToastAPI => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, variant = 'default', duration = 5000 }: ToastOptions) => {
    const id = Date.now().toString();
    const newToast = { id, title, description, variant, duration };
    
    setToasts((currentToasts) => [...currentToasts, newToast]);
    
    // Log toast to console for development
    console.log(`TOAST [${variant}]: ${title}${description ? ` - ${description}` : ''}`);
    
    // Auto-remove toast after duration
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter(t => t.id !== id));
    }, duration);
    
    return id;
  }, []);

  const closeToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toast,
    closeToast,
    toasts
  };
};
