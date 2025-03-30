
import { ToastActionElement, ToastProps } from "@/components/ui/toast";

export interface ExtendedToastProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive" | "success" | "royal";
  duration?: number;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}
