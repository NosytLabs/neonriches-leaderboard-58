
import * as React from "react";
import { ToastActionElement, ToastProps } from "@/components/ui/toast";
import { ExtendedToastProps, ToasterToast, ToastOptions } from "@/types/toast-extended";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToastProps = Omit<ToasterToast, "id">;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type State = {
  toasts: ToasterToast[];
};

type Action =
  | {
      type: "ADD_TOAST";
      toast: ToasterToast;
    }
  | {
      type: "UPDATE_TOAST";
      toast: Partial<ToasterToast>;
      id: string;
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: string;
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: string;
    };

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // If no toast id, dismiss all
      if (toastId === undefined) {
        return {
          ...state,
          toasts: state.toasts.map((t) => ({
            ...t,
            open: false,
          })),
        };
      }

      // Dismiss the toast with the matching id
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    case "REMOVE_TOAST": {
      const { toastId } = action;

      if (toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== toastId),
      };
    }
  }
};

const useToast = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    toasts: [],
  });

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.open === false && !toastTimeouts.has(toast.id)) {
        const timeout = setTimeout(() => {
          toastTimeouts.delete(toast.id);
          dispatch({
            type: "REMOVE_TOAST",
            toastId: toast.id,
          });
        }, TOAST_REMOVE_DELAY);

        toastTimeouts.set(toast.id, timeout);
      }
    });
  }, [state.toasts]);

  const dismiss = React.useCallback((toastId?: string) => {
    dispatch({
      type: "DISMISS_TOAST",
      toastId,
    });
  }, []);

  const toast = React.useMemo(
    () => ({
      toasts: state.toasts,
      dismiss,
      default: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "default",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
      success: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "success",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
      error: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "destructive",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
      warning: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "default",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
      royal: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "royal",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
      loading: (props: ToastOptions) => {
        const id = genId();
        const newToast: ToasterToast = {
          id,
          ...props,
          open: true,
          variant: "default",
          dismiss: () => dismiss(id),
        };
        dispatch({
          type: "ADD_TOAST",
          toast: newToast,
        });
        return id;
      },
    }),
    [dismiss, state.toasts]
  );

  return { toast };
};

export { useToast };
