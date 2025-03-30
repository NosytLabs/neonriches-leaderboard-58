
import { useToast as useToastBase } from "@/components/ui/use-toast";
import { type ExtendedToastProps } from "@/types/toast-extended";

export function useToast() {
  const { toast } = useToastBase();

  return {
    toast: {
      ...toast,
      // Add extended variant support
      default: (props: ExtendedToastProps) => toast({ ...props, variant: "default" }),
      success: (props: ExtendedToastProps) => toast({ ...props, variant: "success" }),
      error: (props: ExtendedToastProps) => toast({ ...props, variant: "destructive" }),
      warning: (props: ExtendedToastProps) => toast({ ...props, variant: "destructive" }),
      royal: (props: ExtendedToastProps) => toast({ ...props, variant: "royal" }),
      loading: (props: ExtendedToastProps) => 
        toast({
          ...props,
          variant: "default",
          title: props.title || "Loading...",
          description: props.description || "Please wait while we process your request."
        })
    }
  };
}
