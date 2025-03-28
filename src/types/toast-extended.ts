
import { ToastProps } from "@/components/ui/toast";
import React from "react";

// Define ToasterToast to match the structure expected
export interface ToasterToast extends Omit<ToastProps, "ref"> {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success" | "royal";
}

// Extend the default toast props to include our custom variant types
export interface ExtendedToastProps extends Omit<ToasterToast, "id"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  action?: React.ReactNode;
  sound?: string;
}
