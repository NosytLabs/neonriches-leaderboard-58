
import { toast as sonnerToast } from "sonner";
import { ToastOptions } from '@/types/toast-extended';

type ToastType = "default" | "success" | "error" | "warning" | "loading";

export const toast = {
  dismiss: (toastId?: string) => {
    sonnerToast.dismiss(toastId);
  },
  
  default: (options: ToastOptions) => {
    return sonnerToast(options.title?.toString() || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  success: (options: ToastOptions) => {
    return sonnerToast.success(options.title?.toString() || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  error: (options: ToastOptions) => {
    return sonnerToast.error(options.title?.toString() || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  warning: (options: ToastOptions) => {
    return sonnerToast(options.title?.toString() || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: `bg-amber-100 text-amber-900 ${options.className || ""}`,
    });
  },
  
  loading: (options: ToastOptions) => {
    return sonnerToast.loading(options.title?.toString() || "", {
      id: options.id,
      description: options.description,
      duration: options.duration,
      className: options.className,
    });
  },

  // Call method for direct usage with any options
  call: (options: ToastOptions) => {
    const { variant = "default", ...rest } = options;
    
    switch (variant) {
      case "success":
        return toast.success(rest);
      case "destructive":
        return toast.error(rest);
      case "royal":
        return toast.default({
          ...rest,
          className: `bg-royal-purple/20 border-royal-purple/30 text-royal-gold ${rest.className || ""}`,
        });
      default:
        return toast.default(rest);
    }
  }
};

// Compatibility layer with any existing shadcn/ui toast usage
export const useToast = () => {
  return {
    toast: toast.call,
    dismiss: toast.dismiss,
  };
};

export default useToast;
