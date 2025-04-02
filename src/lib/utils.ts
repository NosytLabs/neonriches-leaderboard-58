
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatNumber, formatCurrency, formatDate } from "@/utils/formatters/index";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export formatters for convenience
export { formatNumber, formatCurrency, formatDate };
