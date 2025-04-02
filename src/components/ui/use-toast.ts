
// Updated use-toast.ts with compatible variant types
import * as React from "react";
import { createContext, useContext } from "react";

const TOAST_REMOVE_DELAY = 1000;

export type ToastActionElement = React.ReactElement;

export type ToastProps = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: "default" | "destructive" | "success" | "warning" | "gold" | "royal" | "secondary" | "outline";
};

export type Toast = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive" | "success" | "warning" | "gold" | "royal" | "secondary" | "outline";
};

type ToasterToast = Toast & {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type ToastContextType = {
  toasts: ToasterToast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
  updateToast: (id: string, toast: Partial<Toast>) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

// Export the context without using JSX
export { useToastContext };

export function useToast() {
  const { addToast, removeToast, updateToast, toasts } = useToastContext();

  return {
    toast: (props: Toast) => {
      const toastWithId = { ...props, id: props.id || Math.random().toString(36).substr(2, 9) };
      addToast(toastWithId);
    },
    dismiss: (toastId?: string) => {
      if (toastId) {
        removeToast(toastId);
      }
    },
    update: (toastId: string, props: Partial<Toast>) => {
      updateToast(toastId, props);
    },
    toasts,
  };
}

// Additional interface to ensure compatibility
export interface ToastOptions extends Toast {
  variant?: "default" | "destructive" | "success" | "warning" | "gold" | "royal" | "secondary" | "outline";
}

// Simple function to toast - helpful for imperative calls
export const toast = (options: ToastOptions) => {
  try {
    const { toast } = useToast();
    const toastWithId = { ...options, id: options.id || Math.random().toString(36).substr(2, 9) };
    toast(toastWithId);
  } catch (error) {
    console.error("Toast error:", error);
    // Silent failure if used outside provider
  }
};
