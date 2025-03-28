
import { useState, useEffect } from 'react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveContext {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: Breakpoint;
  width: number;
  height: number;
}

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive(): ResponsiveContext {
  const [state, setState] = useState<ResponsiveContext>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    breakpoint: 'lg',
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let currentBreakpoint: Breakpoint = 'xs';
      
      if (width >= breakpoints['2xl']) {
        currentBreakpoint = '2xl';
      } else if (width >= breakpoints.xl) {
        currentBreakpoint = 'xl';
      } else if (width >= breakpoints.lg) {
        currentBreakpoint = 'lg';
      } else if (width >= breakpoints.md) {
        currentBreakpoint = 'md';
      } else if (width >= breakpoints.sm) {
        currentBreakpoint = 'sm';
      }
      
      setState({
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        breakpoint: currentBreakpoint,
        width,
        height,
      });
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
