
import { useToast as useShadcnToast } from "@/components/ui/use-toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const { toast: baseToast, dismiss, toasts } = useShadcnToast();
  
  return {
    toast: baseToast,
    dismiss,
    toasts,
    default: (props: ExtendedToastProps) => 
      baseToast({ ...props, variant: "default" }),
    success: (props: ExtendedToastProps) => 
      baseToast({ ...props, variant: "success" }),
    error: (props: ExtendedToastProps) => 
      baseToast({ ...props, variant: "destructive" }),
    warning: (props: ExtendedToastProps) => 
      baseToast({ ...props, variant: "destructive" }),
    royal: (props: ExtendedToastProps) => 
      baseToast({ ...props, variant: "royal" }),
    loading: (props: ExtendedToastProps) => 
      baseToast({
        ...props,
        variant: "default",
        title: props.title || "Loading...",
        description: props.description || "Please wait while we process your request."
      })
  };
}

export default useToast;
