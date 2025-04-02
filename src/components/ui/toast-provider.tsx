
import React, { useState } from "react";
import { ToastContext, type Toast } from "./use-toast";

type ToasterToast = Toast & {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

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
              t.id === (toast.id || "") ? { ...t, open } : t
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
