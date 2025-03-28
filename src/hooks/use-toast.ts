
import { useState, useEffect, createContext, useContext } from 'react';
import { toast as toastFunction } from "@/components/ui/use-toast";
import { ExtendedToastProps, ToasterToast } from "@/types/toast-extended";
import useNotificationSounds from './use-notification-sounds';

const ToastContext = createContext({
  toasts: [] as ToasterToast[],
  toast: toastFunction,
  dismissToast: (id: string) => {},
  dismiss: (id: string) => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);
  const { playSound } = useNotificationSounds();

  const toast = (props: ExtendedToastProps) => {
    // Play sound effect if specified
    if (props.sound) {
      playSound(props.sound as any, 0.5);
    } else {
      // Play default sound based on variant
      switch (props.variant) {
        case 'destructive':
          playSound('error', 0.5);
          break;
        case 'success':
          playSound('success', 0.5);
          break;
        case 'royal':
          playSound('royalAnnouncement', 0.3);
          break;
        default:
          playSound('notification', 0.5);
          break;
      }
    }

    return context.toast(props as any);
  };

  return { ...context, toast };
};

export const setToastFunction = (fn: typeof toastFunction) => {
  // This is a helper function to set the toast function
  // It's used to override the default toast function in tests
  toastFunction = fn;
};

export { toast, toastFunction };
