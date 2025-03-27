
/**
 * Performance monitoring utilities to track Core Web Vitals
 */

export interface PerformanceMetrics {
  fcp: number | null;  // First Contentful Paint
  lcp: number | null;  // Largest Contentful Paint
  fid: number | null;  // First Input Delay
  cls: number | null;  // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  };

  constructor() {
    this.initPerformanceObservers();
  }

  private initPerformanceObservers(): void {
    // Only run in browser environment
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcpEntry = entries[entries.length - 1];
          this.metrics.fcp = fcpEntry.startTime;
          console.log(`[Performance] FCP: ${this.metrics.fcp.toFixed(2)}ms`);
        }
      });
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
      console.error('FCP monitoring error:', e);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lcpEntry = entries[entries.length - 1];
          this.metrics.lcp = lcpEntry.startTime;
          console.log(`[Performance] LCP: ${this.metrics.lcp.toFixed(2)}ms`);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.error('LCP monitoring error:', e);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const firstInput = entries[0];
          this.metrics.fid = firstInput.processingStart - firstInput.startTime;
          console.log(`[Performance] FID: ${this.metrics.fid.toFixed(2)}ms`);
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      console.error('FID monitoring error:', e);
    }

    // Cumulative Layout Shift
    try {
      let clsValue = 0;
      let clsEntries: any[] = [];
      
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        
        entries.forEach(entry => {
          // Only count layout shifts without recent user input
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            clsEntries.push(entry);
          }
        });
        
        this.metrics.cls = clsValue;
        console.log(`[Performance] CLS: ${this.metrics.cls.toFixed(3)}`);
      });
      
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.error('CLS monitoring error:', e);
    }

    // Time to First Byte (using Navigation Timing API)
    try {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            this.metrics.ttfb = navigationEntry.responseStart;
            console.log(`[Performance] TTFB: ${this.metrics.ttfb.toFixed(2)}ms`);
          }
        }, 0);
      });
    } catch (e) {
      console.error('TTFB monitoring error:', e);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public logMetricsToConsole(): void {
    console.table(this.metrics);
  }
}

// Create and export a singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize performance monitoring in the main entry file
export const initPerformanceMonitoring = (): void => {
  performanceMonitor.initPerformanceObservers;
};
