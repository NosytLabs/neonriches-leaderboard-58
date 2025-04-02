
// Updated use-toast.ts with compatible variant types
import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const TOAST_REMOVE_DELAY = 1000;

export type ToastActionElement = React.ReactElement;

export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: "default" | "destructive" | "success" | "warning" | "gold" | "royal" | "secondary" | "outline";
};

type Toast = {
  id: string;
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

const ToastContext = createContext<ToastContextType | null>(null);

function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToasterToast[]>([]);

  const addToast = (toast: Toast) => {
    setToasts((prevToasts) => {
      const newToast: ToasterToast = {
        ...toast,
        id: toast.id || Math.random().toString(36).substr(2, 9),
        open: true,
        onOpenChange: (open) => {
          setToasts((prevToasts) =>
            prevToasts.map((t) =>
              t.id === toast.id ? { ...t, open } : t
            )
          );
        },
      };

      return [...prevToasts, newToast];
    });
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  };

  const updateToast = (id: string, toast: Partial<Toast>) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (t.id === id ? { ...t, ...toast } : t))
    );
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        updateToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const { addToast, removeToast, updateToast, toasts } = useToastContext();

  return {
    toast: (props: Toast) => {
      addToast(props);
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
  const { toast } = useToast();
  toast(options);
};
