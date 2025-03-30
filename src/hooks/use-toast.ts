
import {
  Toast,
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast";
import { ReactNode } from "react";

import {
  useToast as useToastOriginal,
} from "@/components/ui/use-toast";

type ExtendedToastProps = Omit<ToastProps, 'title' | 'description'> & {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'outline' | 'secondary' | 'royal';
};

export const useToast = () => {
  const { toast: originalToast, ...rest } = useToastOriginal();
  
  // Create wrapped functions for common toast types
  const toast = (props: ExtendedToastProps) => {
    return originalToast(props as any);
  };

  const default_toast = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'default',
    } as any);
  };

  const success = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'success',
    } as any);
  };

  const error = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'destructive',
    } as any);
  };

  const warning = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'outline',
    } as any);
  };

  const info = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'secondary',
    } as any);
  };

  const royal = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'royal',
    } as any);
  };

  // Add missing methods that are referenced in other components
  const stopSound = () => {
    // Placeholder function to prevent the TS error
    console.log('stopSound called (placeholder)');
  };
  
  const playSuccess = () => {
    // Placeholder function to prevent the TS error
    console.log('playSuccess called (placeholder)');
  };

  return {
    ...rest,
    toast,
    default: default_toast,
    success,
    error,
    warning,
    info,
    royal,
    stopSound,
    playSuccess,
  };
};

export type { ExtendedToastProps };
export { toast } from "@/components/ui/use-toast";
