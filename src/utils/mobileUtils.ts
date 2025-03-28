
import { useResponsive } from '@/hooks/use-responsive';

// Helper to determine if a viewport is larger than a breakpoint
export function isViewportLargerThan(minBreakpoint: string): boolean {
  const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };
  
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  return windowWidth >= breakpoints[minBreakpoint];
}

// Function to get appropriate padding based on screen size
export function getResponsivePadding(defaultPadding: string = 'p-4'): string {
  const { isMobile, isTablet } = useResponsive();
  
  if (isMobile) return 'p-3';
  if (isTablet) return 'p-4';
  return defaultPadding;
}

// Function to get appropriate font size based on screen size
export function getResponsiveFontSize(size: 'h1' | 'h2' | 'h3' | 'h4' | 'p'): string {
  const { isMobile } = useResponsive();
  
  const fontSizes = {
    h1: isMobile ? 'text-2xl' : 'text-3xl',
    h2: isMobile ? 'text-xl' : 'text-2xl',
    h3: isMobile ? 'text-lg' : 'text-xl',
    h4: isMobile ? 'text-base' : 'text-lg',
    p: isMobile ? 'text-sm' : 'text-base',
  };
  
  return fontSizes[size];
}

// Helper for detecting touch devices
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Function to handle different column counts based on screen size
export function getResponsiveGridCols(xs: number, sm: number, md: number, lg: number): string {
  const { breakpoint } = useResponsive();
  
  const columns = {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: lg,
    '2xl': lg,
  };
  
  return `grid-cols-${columns[breakpoint]}`;
}

// Function to get optimal button sizes for touch
export function getTouchFriendlyButtonSize(): string {
  const { isMobile } = useResponsive();
  return isMobile ? 'h-12 min-w-[44px]' : 'h-10';
}
