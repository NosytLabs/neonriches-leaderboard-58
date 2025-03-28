
import { ToastProps } from "@/components/ui/toast";
import { ToasterToast } from "@/components/ui/use-toast";

// Extend the default toast props to include our custom variant types
export interface ExtendedToastProps extends Omit<ToasterToast, 'id'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'royal';
  action?: React.ReactNode;
  sound?: string;
}
