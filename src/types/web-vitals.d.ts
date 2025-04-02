
// Type definitions for web vitals metrics

declare module '@/types/web-vitals' {
  // Basic web vitals metrics interface
  export interface WebVitalsMetric {
    id: string;
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    entries: PerformanceEntry[];
  }

  // Core Web Vitals metrics
  export type Metric = 
    | 'CLS'   // Cumulative Layout Shift
    | 'FID'   // First Input Delay
    | 'LCP'   // Largest Contentful Paint
    | 'FCP'   // First Contentful Paint
    | 'TTFB'  // Time to First Byte
    | 'INP';  // Interaction to Next Paint

  // Extended Performance Navigation Timing
  export interface ExtendedPerformanceNavigationTiming extends PerformanceNavigationTiming {
    timeOrigin?: number;
    domLoading?: number;
  }

  // Extended Performance Entry
  export interface ExtendedPerformanceEntry extends PerformanceEntry {
    hadRecentInput?: boolean;
    value?: number;
  }
}
