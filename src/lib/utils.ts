
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatCurrency, formatNumber, formatDate } from "@/utils/formatters";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export formatters from our main utility for convenience
export {
  formatCurrency,
  formatNumber,
  formatDate
};
