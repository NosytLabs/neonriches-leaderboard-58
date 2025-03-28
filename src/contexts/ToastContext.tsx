
import React, { createContext, useContext, useCallback } from 'react';
import { toast, ToastActionElement, ToastProps } from '@/components/ui/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

type ToastVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info' | 'royal';

interface ToastOptions {
  title?: string;
  description?: string;
  action?: ToastActionElement;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  addToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { playSound } = useNotificationSounds();

  const addToast = useCallback(
    ({ title, description, action, variant = 'default', duration = 3000 }: ToastOptions) => {
      // Play sound based on variant
      switch (variant) {
        case 'success':
          playSound('success', 0.4);
          break;
        case 'destructive':
          playSound('error', 0.4);
          break;
        case 'warning':
          playSound('notification', 0.4);
          break;
        case 'royal':
          playSound('royalAnnouncement', 0.5);
          break;
        default:
          playSound('notification', 0.3);
      }

      // Map our custom variants to the toast component variants
      let toastVariant: ToastProps['variant'] = 'default';
      
      if (variant === 'success' || variant === 'destructive') {
        toastVariant = variant;
      }
      
      // Custom styling for royal variant
      const className = variant === 'royal' 
        ? 'border-royal-gold/50 bg-gradient-to-r from-background to-royal-purple/10'
        : variant === 'warning'
        ? 'border-amber-500/50 bg-amber-500/10'
        : variant === 'info'
        ? 'border-blue-500/50 bg-blue-500/10'
        : undefined;

      toast({
        title,
        description,
        action,
        variant: toastVariant,
        duration,
        className
      });
    },
    [playSound]
  );

  return <ToastContext.Provider value={{ addToast }}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  
  return context;
};
