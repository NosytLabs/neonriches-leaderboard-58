
import { ReactNode } from 'react';
import { ToastProps } from '@/components/ui/toast';

export interface ExtendedToastProps extends Omit<ToastProps, 'title' | 'description'> {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'outline' | 'secondary' | 'royal';
  className?: string;
}
