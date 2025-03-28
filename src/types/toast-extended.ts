
import { ReactNode } from 'react';
import { ToastActionElement, ToastProps } from '@/components/ui/toast';

// Define ToasterToast to match the structure expected
export interface ToasterToast extends Omit<ToastProps, 'title'> {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
  variant?: 'default' | 'destructive' | 'royal' | 'success';
}

// Extend the default toast props to include our custom variant types
export interface ExtendedToastProps extends Omit<ToasterToast, "id"> {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'royal' | 'success';
  action?: ToastActionElement;
  sound?: string;
}
