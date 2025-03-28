
import * as React from "react";
import { ToasterToast, ExtendedToastProps } from "@/types/toast-extended";

// Create a placeholder function that we'll replace later
let internalToastFunction = (props: ExtendedToastProps) => {
  // Default initial implementation
  return { id: crypto.randomUUID(), ...props };
};

// Define the function to set the toast function
export const setToastFunction = (fn: typeof internalToastFunction) => {
  internalToastFunction = fn;
};

// Export the placeholder toast function that uses the internal one
export const toast = (props: ExtendedToastProps) => {
  return internalToastFunction(props);
};

// Define the useToast hook
export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const addToast = React.useCallback((props: ExtendedToastProps) => {
    const toast = internalToastFunction(props);
    
    setToasts((prev) => {
      // If there's a toast with the same ID, remove it before adding the new one
      if (prev.find((t) => t.id === toast.id)) {
        return [...prev.filter((t) => t.id !== toast.id), toast];
      }
      return [...prev, toast];
    });

    // Play sound if specified
    if (props.sound) {
      const audio = new Audio(`/sounds/${props.sound}.mp3`);
      audio.volume = 0.6; // Set to 60% volume for better user experience
      audio.play().catch(e => console.error("Error playing sound:", e));
    }

    return toast.id;
  }, []);

  const dismissToast = React.useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }, []);

  const dismiss = React.useCallback((toastId?: string) => {
    if (toastId) {
      dismissToast(toastId);
    } else {
      setToasts([]);
    }
  }, [dismissToast]);

  return {
    toasts,
    toast: addToast,
    dismiss,
  };
};
