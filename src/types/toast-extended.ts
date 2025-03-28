
import { ToastProps } from "@/components/ui/toast";

// Define ToasterToast to match the structure expected
export interface ToasterToast extends ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

// Extend the default toast props to include our custom variant types
export interface ExtendedToastProps extends Omit<ToasterToast, 'id'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  action?: React.ReactNode;
  sound?: string;
}
