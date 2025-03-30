
import { useToast as useShadcnToast } from "@/components/ui/use-toast";
import { type ToastProps } from "@/components/ui/toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const { toast: baseToast, dismiss, toasts } = useShadcnToast();
  
  return {
    toast: baseToast,
    dismiss,
    toasts,
    default: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "default",
        title: props.title?.toString() || "",
        description: props.description?.toString() || ""
      }),
    success: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "success",
        title: props.title?.toString() || "",
        description: props.description?.toString() || ""
      }),
    error: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: props.title?.toString() || "",
        description: props.description?.toString() || ""
      }),
    warning: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "destructive",
        title: props.title?.toString() || "",
        description: props.description?.toString() || ""
      }),
    royal: (props: ExtendedToastProps) => 
      baseToast({ 
        ...props, 
        variant: "default",
        title: props.title?.toString() || "",
        description: props.description?.toString() || ""
      }),
    loading: (props: ExtendedToastProps) => 
      baseToast({
        ...props,
        variant: "default",
        title: (props.title || "Loading...").toString(),
        description: (props.description || "Please wait while we process your request.").toString()
      })
  };
}

export default useToast;
