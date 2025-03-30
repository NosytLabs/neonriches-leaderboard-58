
import { ReactNode } from 'react';
import { ToastProps } from '@/components/ui/toast';

export interface ExtendedToastProps extends Partial<ToastProps> {
  title?: string;
  description?: string | ReactNode;
  duration?: number;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
}
