
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
    return originalToast(props as Toast);
  };

  const success = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'success',
    } as Toast);
  };

  const error = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'destructive',
    } as Toast);
  };

  const warning = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'outline',
    } as Toast);
  };

  const info = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'secondary',
    } as Toast);
  };

  const royal = (props: Omit<ExtendedToastProps, 'variant'>) => {
    return originalToast({
      ...props,
      variant: 'royal',
    } as Toast);
  };

  return {
    ...rest,
    toast,
    default: toast,
    success,
    error,
    warning,
    info,
    royal
  };
};

export type { ExtendedToastProps };
export { toast } from "@/components/ui/use-toast";
