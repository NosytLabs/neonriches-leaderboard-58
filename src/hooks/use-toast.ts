
import { useToast as useToastBase } from "@/components/ui/use-toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const baseToast = useToastBase();
  
  return {
    toast: {
      ...baseToast.toast,
      // Add extended variant support
      default: (props: ExtendedToastProps) => baseToast.toast({ ...props, variant: "default" }),
      success: (props: ExtendedToastProps) => baseToast.toast({ ...props, variant: "success" }),
      error: (props: ExtendedToastProps) => baseToast.toast({ ...props, variant: "destructive" }),
      warning: (props: ExtendedToastProps) => baseToast.toast({ ...props, variant: "destructive" }),
      royal: (props: ExtendedToastProps) => baseToast.toast({ ...props, variant: "royal" }),
      loading: (props: ExtendedToastProps) => 
        baseToast.toast({
          ...props,
          variant: "default",
          title: props.title || "Loading...",
          description: props.description || "Please wait while we process your request."
        })
    },
    dismiss: baseToast.dismiss, // Expose dismiss function
    toasts: baseToast.toasts   // Expose toasts array
  };
}
