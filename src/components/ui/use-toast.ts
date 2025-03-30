
// Re-export from the Toast component
export { useToast } from "@radix-ui/react-toast";
export { type ToastProps, type ToastActionElement } from "@/components/ui/toast";

export const toast = (props: any) => {
  console.warn("Toast function called directly. Use the useToast hook instead.");
  return null;
};
