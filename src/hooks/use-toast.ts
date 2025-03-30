
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

  return {
    ...rest,
    toast,
    default: default_toast,
    success,
    error,
    warning,
    info,
    royal,
    stopSound: () => {}, // Added to fix useShameEffect.ts
    playSuccess: () => {}, // Added for compatibility
  };
};

export type { ExtendedToastProps };
export { toast } from "@/components/ui/use-toast";
