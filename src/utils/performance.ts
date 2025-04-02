// Modify the type of __PERFORMANCE_METRICS to be consistent
declare global {
  interface Window {
    __PERFORMANCE_METRICS: any; // Use 'any' to handle different types
  }
}

// Fix the navigationStart property for modern browsers
// Modern browsers use timeOrigin + startTime instead
const getNavigationStart = (entry: PerformanceNavigationTiming): number => {
  return entry.timeOrigin || (entry as any).navigationStart || 0;
};

// Fix the push method issue by ensuring __PERFORMANCE_METRICS is an array
if (!window.__PERFORMANCE_METRICS || !Array.isArray(window.__PERFORMANCE_METRICS)) {
  window.__PERFORMANCE_METRICS = [];
}

import { WebVitalMetric } from '@/types/web-vitals';

export interface PerformanceMetrics {
  fcp: number | undefined;
  lcp: number | undefined;
  fid: number | undefined;
  cls: number | undefined;
  ttfb: number | undefined;
  fp: number | undefined;
  domLoad: number | undefined;
  windowLoad: number | undefined;
  network: number | undefined;
  domProcessing: number | undefined;
  domInteractive: number | undefined;
  domComplete: number | undefined;
  navigationStart: number | undefined;
  domContentLoadedEventStart: number | undefined;
  domContentLoadedEventEnd: number | undefined;
  loadEventStart: number | undefined;
  loadEventEnd: number | undefined;
  firstByte: number | undefined;
  dnsLookup: number | undefined;
  initialConnection: number | undefined;
  sslHandshake: number | undefined;
  requestResponse: number | undefined;
  domElements: number | undefined;
  resources: number | undefined;
}

/**
 * Collect performance metrics
 */
export const collectPerformanceMetrics = (): PerformanceMetrics => {
  if (typeof window === 'undefined' || !window.performance) {
    return {
      fcp: undefined,
      lcp: undefined,
      fid: undefined,
      cls: undefined,
      ttfb: undefined,
      fp: undefined,
      domLoad: undefined,
      windowLoad: undefined,
      network: undefined,
      domProcessing: undefined,
      domInteractive: undefined,
      domComplete: undefined,
      navigationStart: undefined,
      domContentLoadedEventStart: undefined,
      domContentLoadedEventEnd: undefined,
      loadEventStart: undefined,
      loadEventEnd: undefined,
      firstByte: undefined,
      dnsLookup: undefined,
      initialConnection: undefined,
      sslHandshake: undefined,
      requestResponse: undefined,
      domElements: undefined,
      resources: undefined
    };
  }

  const performance = window.performance;
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  const resourceEntries = performance.getEntriesByType('resource');

  const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint') as PerformanceEntry;
  const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;

  const navigationStart = getNavigationStart(navigationEntry);

  const ttfb = navigationEntry?.responseStart ? navigationEntry.responseStart - navigationStart : undefined;
  const fp = paintEntries.find(entry => entry.name === 'first-paint')?.startTime;
  const domLoad = navigationEntry?.domInteractive ? navigationEntry.domInteractive - navigationStart : undefined;
  const windowLoad = navigationEntry?.loadEventEnd ? navigationEntry.loadEventEnd - navigationStart : undefined;
  const network = navigationEntry?.domainLookupEnd ? navigationEntry.domainLookupEnd - navigationStart : undefined;
  const domProcessing = navigationEntry?.domLoading ? navigationEntry.domLoading - navigationStart : undefined;
  const domInteractive = navigationEntry?.domInteractive ? navigationEntry.domInteractive - navigationStart : undefined;
  const domComplete = navigationEntry?.domComplete ? navigationEntry.domComplete - navigationStart : undefined;
  const domContentLoadedEventStart = navigationEntry?.domContentLoadedEventStart ? navigationEntry.domContentLoadedEventStart - navigationStart : undefined;
  const domContentLoadedEventEnd = navigationEntry?.domContentLoadedEventEnd ? navigationEntry.domContentLoadedEventEnd - navigationStart : undefined;
  const loadEventStart = navigationEntry?.loadEventStart ? navigationEntry.loadEventStart - navigationStart : undefined;
  const loadEventEnd = navigationEntry?.loadEventEnd ? navigationEntry.loadEventEnd - navigationStart : undefined;

  const firstByte = navigationEntry?.responseStart ? navigationEntry.responseStart - navigationEntry.requestStart : undefined;
  const dnsLookup = navigationEntry?.domainLookupEnd && navigationEntry?.domainLookupStart ? navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart : undefined;
  const initialConnection = navigationEntry?.connectEnd && navigationEntry.connectStart ? navigationEntry.connectEnd - navigationEntry.connectStart : undefined;
  const sslHandshake = navigationEntry?.secureConnectionStart && navigationEntry.connectEnd ? navigationEntry.connectEnd - navigationEntry.secureConnectionStart : undefined;
  const requestResponse = navigationEntry?.responseEnd && navigationEntry.responseStart ? navigationEntry.responseEnd - navigationEntry.responseStart : undefined;

  const domElements = navigationEntry?.domComplete ? performance.getEntriesByType('mark').length : undefined;
  const resources = resourceEntries ? resourceEntries.length : undefined;

  return {
    fcp: fcpEntry ? fcpEntry.startTime : undefined,
    lcp: lcpEntry ? lcpEntry.startTime : undefined,
    fid: performance.getEntriesByType('first-input')[0]?.startTime || undefined,
    cls: (performance.getEntriesByType('layout-shift') as PerformanceEntryList)
      .filter(entry => !entry.hadRecentInput)
      .reduce((total, entry) => total + entry.value, 0),
    ttfb,
    fp,
    domLoad,
    windowLoad,
    network,
    domProcessing,
    domInteractive,
    domComplete,
    navigationStart,
    domContentLoadedEventStart,
    domContentLoadedEventEnd,
    loadEventStart,
    loadEventEnd,
    firstByte,
    dnsLookup,
    initialConnection,
    sslHandshake,
    requestResponse,
    domElements,
    resources
  };
};

/**
 * Report performance metrics to a logging service
 */
export const reportPerformanceMetrics = async (metrics: PerformanceMetrics): Promise<void> => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Log metrics to console
    console.table(metrics);

    // Send metrics to logging service (e.g., Google Analytics, Datadog)
    // Example:
    // await fetch('/api/log-metrics', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(metrics),
    // });
  } catch (error) {
    console.error('Failed to report performance metrics:', error);
  }
};

/**
 * Collect and report performance metrics on window load
 */
export const onWindowLoad = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.addEventListener('load', async () => {
    const metrics = collectPerformanceMetrics();
    await reportPerformanceMetrics(metrics);
  });
};

/**
 * Collect and report web vitals
 */
export const reportWebVitals = (metric: WebVitalMetric): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.__PERFORMANCE_METRICS) {
    window.__PERFORMANCE_METRICS = [];
  }

  if (!Array.isArray(window.__PERFORMANCE_METRICS)) {
    console.warn('__PERFORMANCE_METRICS is not an array. Metrics may be lost.');
    return;
  }

  window.__PERFORMANCE_METRICS.push(metric);

  try {
    // Log metric to console
    console.log(metric);

    // Send metric to logging service (e.g., Google Analytics, Datadog)
    // Example:
    // navigator.sendBeacon('/api/log-metric', JSON.stringify(metric));
  } catch (error) {
    console.error('Failed to report web vital metric:', error);
  }
};
