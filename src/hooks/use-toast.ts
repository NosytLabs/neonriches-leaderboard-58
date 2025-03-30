
import { toast as sonnerToast } from "sonner";

type ToastType = "default" | "success" | "error" | "warning" | "loading";

type ToastOptions = {
  id?: string;
  title?: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success" | "royal";
  duration?: number;
  className?: string;
};

export const toast = {
  dismiss: (toastId?: string) => {
    sonnerToast.dismiss(toastId);
  },
  
  default: (options: ToastOptions) => {
    return sonnerToast(options.title || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  success: (options: ToastOptions) => {
    return sonnerToast.success(options.title || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  error: (options: ToastOptions) => {
    return sonnerToast.error(options.title || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: options.className,
    });
  },
  
  warning: (options: ToastOptions) => {
    return sonnerToast(options.title || "", {
      id: options.id,
      description: options.description,
      action: options.action,
      duration: options.duration,
      className: `bg-amber-100 text-amber-900 ${options.className || ""}`,
    });
  },
  
  loading: (options: ToastOptions) => {
    return sonnerToast.loading(options.title || "", {
      id: options.id,
      description: options.description,
      duration: options.duration,
      className: options.className,
    });
  },
};

// Compatibility layer with any existing shadcn/ui toast usage
export const useToast = () => {
  return {
    toast: (options: ToastOptions) => {
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
    },
    dismiss: toast.dismiss,
  };
};

export default useToast;
