
import { toast } from '@/components/ui/use-toast';
import { ExtendedToastProps } from '@/types/toast-extended';

/**
 * Show a toast notification using the standardized format
 */
export const showToast = (props: ExtendedToastProps) => {
  // Convert ReactNode title to string if needed
  const sanitizedProps = {
    ...props,
    // Ensure title is string compatible
    title: props.title ? (typeof props.title === 'string' ? props.title : String(props.title)) : undefined
  };
  
  return toast(sanitizedProps as any);
};

/**
 * Show a success toast
 */
export const showSuccessToast = (title: string, description?: string) => {
  return showToast({
    title,
    description,
    variant: 'success'
  });
};

/**
 * Show an error toast
 */
export const showErrorToast = (title: string, description?: string) => {
  return showToast({
    title,
    description,
    variant: 'destructive'
  });
};

/**
 * Show a royal toast for premium features
 */
export const showRoyalToast = (title: string, description?: string) => {
  return showToast({
    title,
    description,
    variant: 'royal'
  });
};

// Aliases for backward compatibility
export const createSuccessToast = showSuccessToast;
export const createErrorToast = showErrorToast;
export const createRoyalToast = showRoyalToast;

