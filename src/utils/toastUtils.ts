
import { toast, ExtendedToastProps } from '@/hooks/use-toast';
import { useToast } from '@/hooks/use-toast';

/**
 * Create a toast notification with standard styling
 */
export const createToast = (props: ExtendedToastProps) => {
  return toast(props);
};

/**
 * Create a success toast
 */
export const createSuccessToast = (title: string, description?: string) => {
  return toast({
    title,
    description,
    variant: 'success'
  });
};

/**
 * Create an error toast
 */
export const createErrorToast = (title: string, description?: string) => {
  return toast({
    title,
    description,
    variant: 'destructive'
  });
};

/**
 * Create a warning toast
 */
export const createWarningToast = (title: string, description?: string) => {
  return toast({
    title,
    description,
    variant: 'outline'
  });
};

/**
 * Create an info toast
 */
export const createInfoToast = (title: string, description?: string) => {
  return toast({
    title,
    description,
    variant: 'secondary'
  });
};

/**
 * Create a royal toast
 */
export const createRoyalToast = (title: string, description?: string) => {
  return toast({
    title,
    description,
    variant: 'royal'
  });
};

export default {
  createToast,
  createSuccessToast,
  createErrorToast,
  createWarningToast,
  createInfoToast,
  createRoyalToast
};
