
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatNumber, formatDate, formatCurrency } from "@/utils/formatters";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export formatters for convenience
export { formatNumber, formatDate, formatCurrency };
