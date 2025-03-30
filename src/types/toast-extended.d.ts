
import { ReactNode } from 'react';
import { ToastProps } from '@/components/ui/toast';

export interface ExtendedToastProps extends Partial<ToastProps> {
  title?: string | ReactNode;
  description?: string | ReactNode;
  duration?: number;
}
