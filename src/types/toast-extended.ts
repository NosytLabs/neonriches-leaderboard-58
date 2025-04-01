
import { Toast, ToastProps } from '@/components/ui/toast';
import { ReactNode } from 'react';

// Extended toast props that allow ReactNode for title instead of just string
export interface ExtendedToastProps {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal' | 'outline' | 'secondary';
  duration?: number;
  action?: ReactNode;
  error?: string;
  success?: boolean;
}

// Create a type-safe toast utility function
export const createExtendedToast = (props: ExtendedToastProps): Toast => {
  // Convert ReactNode title to string if needed
  const sanitizedProps = {
    ...props,
    // Ensure title is string compatible
    title: props.title ? (typeof props.title === 'string' ? props.title : String(props.title)) : undefined
  } as Toast;
  
  return sanitizedProps;
};
