
// Consolidated web vitals type definitions

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType?: string;
  entries?: PerformanceEntry[];
}

export type WebVitalsName = 
  | 'CLS'   // Cumulative Layout Shift
  | 'FID'   // First Input Delay
  | 'LCP'   // Largest Contentful Paint
  | 'FCP'   // First Contentful Paint
  | 'TTFB'  // Time to First Byte
  | 'INP';  // Interaction to Next Paint

export interface PerformanceMetrics {
  cls?: number;
  fid?: number;
  lcp?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
  [key: string]: number | undefined;
}

export interface PerformanceReport {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  deviceMemory?: number;
  hardwareConcurrency?: number;
}

export interface ExtendedPerformanceNavigationTiming extends PerformanceNavigationTiming {
  timeOrigin?: number;
  domLoading?: number;
}

export interface ExtendedPerformanceEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}
