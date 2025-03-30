
import { useToast as useToastOriginal, toast } from "@/components/ui/use-toast";

export const useToast = useToastOriginal;
export { toast };
export type { ToastOptions } from "@/components/ui/use-toast";
