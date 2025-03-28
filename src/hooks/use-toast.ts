
import { useState, useCallback } from 'react';
import { ToastActionElement, ToastProps } from '@/components/ui/toast';

const TOAST_LIMIT = 5;
export const TOAST_REMOVE_DELAY = 3000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

let count = 0;

function generateId() {
  return `toast-${count++}`;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToasterToast[]>([]);

  const addToast = useCallback(
    (props: Omit<ToasterToast, "id">) => {
      const id = props.id || generateId();

      const newToast = {
        ...props,
        id,
      };

      setToasts((prevToasts) => {
        if (prevToasts.length >= TOAST_LIMIT) {
          return [...prevToasts.slice(1), newToast];
        }
        return [...prevToasts, newToast];
      });

      setTimeout(() => {
        dismissToast(id);
      }, TOAST_REMOVE_DELAY);

      return id;
    },
    [setToasts]
  );

  const dismissToast = useCallback(
    (id: string) => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, open: false } : toast
        )
      );

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 300);
    },
    [setToasts]
  );

  const updateToast = useCallback(
    (id: string, props: Partial<ToasterToast>) => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, ...props } : toast
        )
      );
    },
    [setToasts]
  );

  // Create success and error convenience methods
  const success = useCallback(
    (props: Omit<ToasterToast, "id" | "variant">) => {
      return addToast({ ...props, variant: 'default' });
    },
    [addToast]
  );

  const error = useCallback(
    (props: Omit<ToasterToast, "id" | "variant">) => {
      return addToast({ ...props, variant: 'destructive' });
    },
    [addToast]
  );

  return {
    toasts,
    addToast,
    dismissToast,
    updateToast,
    success,
    error,
  };
}

// Create a singleton version of the toast function for non-hook components
let addToastFn: (props: Omit<ToasterToast, "id">) => string = () => "";
let successToastFn: (props: Omit<ToasterToast, "id" | "variant">) => string = () => "";
let errorToastFn: (props: Omit<ToasterToast, "id" | "variant">) => string = () => "";

export const setToastFunction = (
  add: (props: Omit<ToasterToast, "id">) => string,
  success: (props: Omit<ToasterToast, "id" | "variant">) => string,
  error: (props: Omit<ToasterToast, "id" | "variant">) => string
) => {
  addToastFn = add;
  successToastFn = success;
  errorToastFn = error;
};

// Standalone toast object for use in non-hook contexts
export const toast = {
  // Direct access to addToast
  addToast: (props: Omit<ToasterToast, "id">) => {
    return addToastFn(props);
  },
  
  // Convenience methods
  success: (props: Omit<ToasterToast, "id" | "variant">) => {
    return successToastFn(props);
  },
  
  error: (props: Omit<ToasterToast, "id" | "variant">) => {
    return errorToastFn(props);
  }
};
