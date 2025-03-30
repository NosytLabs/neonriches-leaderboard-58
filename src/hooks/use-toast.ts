
import { useToast as useShadcnToast } from "@/components/ui/use-toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const { toast: baseToast, dismiss, toasts } = useShadcnToast();
  
  // Convert ReactNode to string if needed
  const ensureString = (value: any): string => {
    if (value === null || value === undefined) return "";
    return String(value);
  };
  
  return {
    toast: baseToast,
    dismiss,
    toasts,
    default: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "default",
        title: props.title || "",
        description: props.description || ""
      }),
    success: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "success",
        title: props.title || "",
        description: props.description || ""
      }),
    error: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: props.title || "",
        description: props.description || ""
      }),
    warning: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: props.title || "",
        description: props.description || ""
      }),
    royal: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        // For now, use default variant since royal isn't available in the component
        variant: "default",
        title: props.title || "",
        description: props.description || ""
      }),
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
