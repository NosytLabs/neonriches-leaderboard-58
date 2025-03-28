
import React, { createContext, useContext, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

type ToastVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info' | 'royal';

interface ToastActionElement {
  altText?: string;
  onClick: () => void;
  children: React.ReactNode;
}

interface ToastOptions {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
  className?: string;
}

interface ToastContextType {
  addToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { playSound } = useNotificationSounds();

  const addToast = useCallback(
    ({ title, description, action, variant = 'default', duration = 3000, className }: ToastOptions) => {
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

      // Custom styling for variants
      let customClassName = className;
      
      if (variant === 'royal') {
        customClassName = 'border-royal-gold/50 bg-gradient-to-r from-background to-royal-purple/10';
      } else if (variant === 'warning') {
        customClassName = 'border-amber-500/50 bg-amber-500/10';
      } else if (variant === 'info') {
        customClassName = 'border-blue-500/50 bg-blue-500/10';
      }

      // Convert variant to supported variant
      const toastVariant = variant === 'success' ? 'default' : 
                          variant === 'warning' ? 'default' : 
                          variant === 'info' ? 'default' : 
                          variant === 'royal' ? 'default' : 
                          variant;

      toast({
        title,
        description,
        action,
        variant: toastVariant,
        duration,
        className: customClassName
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
