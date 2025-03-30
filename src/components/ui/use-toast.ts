
import * as React from "react";
import { useToast as useHookToast } from "@/hooks/use-toast";

// We export the original hook as `useToast`
export const useToast = useHookToast;

// Export the necessary types and functions
export type { ToastProps, ToastActionElement } from "@/components/ui/toast";
export type ToastOptions = Parameters<typeof useHookToast.toast>[0];

// Directly export the toast function from the hook
export const toast = useHookToast.toast;
