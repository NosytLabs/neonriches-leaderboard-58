
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
    default: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "";
      const description = props.description ? ensureString(props.description) : "";
      
      return baseToast({ 
        ...props, 
        variant: "default",
        title,
        description
      });
    },
    success: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "";
      const description = props.description ? ensureString(props.description) : "";
      
      return baseToast({ 
        ...props, 
        variant: "success",
        title,
        description
      });
    },
    error: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "";
      const description = props.description ? ensureString(props.description) : "";
      
      return baseToast({ 
        ...props, 
        variant: "destructive",
        title,
        description
      });
    },
    warning: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "";
      const description = props.description ? ensureString(props.description) : "";
      
      return baseToast({ 
        ...props, 
        variant: "destructive",
        title,
        description
      });
    },
    royal: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "";
      const description = props.description ? ensureString(props.description) : "";
      
      return baseToast({ 
        ...props, 
        // For now, use default variant since royal isn't available in the component
        variant: "default",
        title,
        description
      });
    },
    loading: (props: ExtendedToastProps) => {
      const title = props.title ? ensureString(props.title) : "Loading...";
      const description = props.description ? ensureString(props.description) : "Please wait while we process your request.";
      
      return baseToast({
        ...props,
        variant: "default",
        title,
        description
      });
    }
  };
}

export default useToast;
