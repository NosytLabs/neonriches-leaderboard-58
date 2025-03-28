
import { ToastProps } from "@/components/ui/toast";

// Extend the existing ToastProps to include description
export interface ExtendedToastProps extends ToastProps {
  description?: string;
  variant?: "default" | "destructive" | "royal" | "success";
}
