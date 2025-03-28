
// We're adding the formatCurrency function which was missing
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useResponsive } from "@/hooks/use-responsive";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency with appropriate precision based on device size
export function formatCurrency(amount: number, options: { compact?: boolean } = {}): string {
  const { isMobile } = useResponsive();
  const { compact = isMobile } = options;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: compact && amount >= 10000 ? 'compact' : 'standard',
    compactDisplay: 'short',
  });
  
  return formatter.format(amount);
}

// Format date for display on different screen sizes
export function formatDate(dateString: string, options: { compact?: boolean } = {}): string {
  const { isMobile } = useResponsive();
  const { compact = isMobile } = options;
  
  const date = new Date(dateString);
  
  if (compact) {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// For consistent grid layouts across device sizes
export function responsiveGridCols(mobile: number, tablet: number, desktop: number): string {
  const { isMobile, isTablet } = useResponsive();
  
  if (isMobile) return `grid-cols-${mobile}`;
  if (isTablet) return `grid-cols-${tablet}`;
  return `grid-cols-${desktop}`;
}
