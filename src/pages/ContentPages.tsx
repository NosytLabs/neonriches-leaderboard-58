
import React, { lazy, Suspense } from 'react';

// Lazy load pages for code splitting
const Updates = lazy(() => import('./Updates'));
const About = lazy(() => import('./About'));
const CodeAnalysis = lazy(() => import('./CodeAnalysis'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-gold"></div>
  </div>
);

// Wrapped components with Suspense
export const LazyUpdates = () => (
  <Suspense fallback={<PageLoader />}>
    <Updates />
  </Suspense>
);

export const LazyAbout = () => (
  <Suspense fallback={<PageLoader />}>
    <About />
  </Suspense>
);

export const LazyCodeAnalysis = () => (
  <Suspense fallback={<PageLoader />}>
    <CodeAnalysis />
  </Suspense>
);

// Named exports
export {
  Updates,
  About,
  CodeAnalysis
};

// Default export as a map for dynamic imports
export default {
  Updates,
  About,
  CodeAnalysis
};
