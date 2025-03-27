
// This file re-exports the toast implementation from hooks/use-toast.ts for backward compatibility
// We're standardizing on using the hooks/use-toast.ts implementation
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
