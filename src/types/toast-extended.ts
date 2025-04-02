
import { ToastActionElement, ToastProps } from "@/components/ui/toast";
import { ReactNode } from "react";

export type ExtendedToastProps = Omit<ToastProps, 'title' | 'description'> & {
  title?: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'outline' | 'secondary' | 'royal';
  action?: ToastActionElement;
};
