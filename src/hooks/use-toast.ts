
// Re-export from both files to maintain compatibility
export { useToast, toast, ToastContext, type ToastActionElement, type ToastProps, type ToastOptions, type Toast } from '@/components/ui/use-toast';
export { ToastProvider } from '@/components/ui/toast-provider';

// Export useToastContext for backward compatibility
export const useToastContext = () => {
  const context = useToast();
  return context;
};
