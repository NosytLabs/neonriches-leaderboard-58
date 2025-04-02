
export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}

export type WebVitalsName = 
  | 'CLS' 
  | 'FID' 
  | 'LCP' 
  | 'FCP' 
  | 'TTFB' 
  | 'INP';

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
