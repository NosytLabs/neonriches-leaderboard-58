
import { ReactNode } from 'react';
import { ToastProps, ToastActionElement } from '@/components/ui/toast';
import { VariantProps } from 'class-variance-authority';

export interface ExtendedToastProps {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  action?: ToastActionElement;
  duration?: number;
  className?: string;
}

export interface ToasterToast extends ExtendedToastProps {
  id: string;
  dismiss: () => void;
}

export type ToastOptions = ExtendedToastProps;
