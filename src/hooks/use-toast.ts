
import { toast as toastFn, useToast as useShadcnToast } from "@/components/ui/use-toast";

// Re-export the toast function
export const toast = toastFn;

// Re-export the useToast hook
export const useToast = useShadcnToast;

// Export useToastContext for backward compatibility
export const useToastContext = useShadcnToast;

export { ToastProvider } from '@/components/ui/toast-provider';
export { ToastContext, type ToastActionElement, type ToastProps, type ToastOptions, type Toast } from '@/components/ui/use-toast';
