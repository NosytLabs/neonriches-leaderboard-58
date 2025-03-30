
import { useToast as useShadcnToast } from "@/components/ui/use-toast";
import { type ToastProps } from "@/components/ui/toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const { toast: baseToast, dismiss, toasts } = useShadcnToast();
  
  // Convert ReactNode to string if needed
  const ensureString = (value: any): string => {
    if (value === null || value === undefined) return "";
    return value.toString();
  };
  
  return {
    toast: baseToast,
    dismiss,
    toasts,
    default: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "default",
        title: ensureString(props.title) || "",
        description: ensureString(props.description) || ""
      }),
    success: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "success",
        title: ensureString(props.title) || "",
        description: ensureString(props.description) || ""
      }),
    error: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: ensureString(props.title) || "",
        description: ensureString(props.description) || ""
      }),
    warning: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: ensureString(props.title) || "",
        description: ensureString(props.description) || ""
      }),
    royal: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "default",
        title: ensureString(props.title) || "",
        description: ensureString(props.description) || ""
      }),
    loading: (props: ExtendedToastProps) => 
      baseToast({
        ...props,
        variant: "default",
        title: ensureString(props.title || "Loading..."),
        description: ensureString(props.description || "Please wait while we process your request.")
      })
  };
}

export default useToast;
