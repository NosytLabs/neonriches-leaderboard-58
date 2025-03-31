
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatNumber, formatCurrency } from "@/utils/formatters";
import { formatDate } from "@/utils/dateUtils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export formatters for convenience
export { formatNumber, formatCurrency, formatDate };
