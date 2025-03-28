
import React, { createContext, useContext, useEffect } from "react";
import { useToast, setToastFunction } from "@/hooks/use-toast";

type ToastContextType = ReturnType<typeof useToast>;

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toastMethods = useToast();
  
  // Register the addToast function globally
  useEffect(() => {
    setToastFunction(toastMethods.addToast);
  }, [toastMethods.addToast]);
  
  return (
    <ToastContext.Provider value={toastMethods}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  
  return context;
}
