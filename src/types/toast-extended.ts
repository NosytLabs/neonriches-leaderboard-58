
import { ReactNode } from 'react';
import { ToastActionElement } from '@/components/ui/toast';

export interface ExtendedToastProps {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
  duration?: number;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  className?: string;
  onOpenChange?: (open: boolean) => void;
}
