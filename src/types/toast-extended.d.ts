
import { ReactNode } from 'react';
import { Toast } from '@/components/ui/use-toast';

export interface ExtendedToastProps extends Omit<Toast, 'title' | 'description'> {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'outline' | 'secondary' | 'royal';
  className?: string;
}
