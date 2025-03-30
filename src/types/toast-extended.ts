
import { ReactNode } from 'react';
import { ToastActionElement } from '@/components/ui/toast';

export interface ExtendedToastProps {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  action?: ToastActionElement;
  duration?: number;
  className?: string;
  open?: boolean;
}

export interface ToasterToast extends ExtendedToastProps {
  id: string;
  dismiss: () => void;
  open: boolean;
}

export type ToastOptions = ExtendedToastProps;
