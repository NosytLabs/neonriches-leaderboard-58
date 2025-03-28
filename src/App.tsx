
import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initPerformanceMonitoring } from '@/utils/performanceMonitoring';

// Suspense fallback component with loading states
const PageLoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-background to-background/95">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
    <p className="text-white/70 animate-pulse">Loading experience...</p>
  </div>
);

// Lazy loaded components with route-based code splitting
const Index = lazy(() => import('./pages/Index'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./pages/LeaderboardPage'));
const Events = lazy(() => import('./pages/EventsPage'));
const Profile = lazy(() => import('./pages/Profile'));

// Group related pages in separate chunks
const ContentPages = lazy(() => import('./pages/ContentPages').then(module => {
  // This module is a facade that re-exports these components
  return { default: module.Updates };
}));
const Updates = lazy(() => import('./pages/ContentPages').then(module => {
  return { default: module.Updates };
}));

// Transaction-related pages in one chunk
const TransactionPages = lazy(() => import('./pages/TransactionPages').then(module => {
  return { default: module.PaymentSuccess };
}));
const PaymentSuccess = lazy(() => import('./pages/TransactionPages').then(module => {
  return { default: module.PaymentSuccess };
}));
const SubscriptionSuccess = lazy(() => import('./pages/TransactionPages').then(module => {
  return { default: module.SubscriptionSuccess };
}));

// Info pages in one chunk
const InfoPages = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.Terms };
}));
const Terms = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.Terms };
}));
const TermsOfService = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.TermsOfService };
}));
const About = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.About };
}));
const FAQ = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.FAQ };
}));
const Privacy = lazy(() => import('./pages/InfoPages').then(module => {
  return { default: module.Privacy };
}));

// Less frequently accessed pages
const Auth = lazy(() => import('./pages/Auth'));
const AdminSettings = lazy(() => import('./pages/AdminSettings'));
const Features = lazy(() => import('./pages/Features'));
const Community = lazy(() => import('./pages/Community'));
const NotFound = lazy(() => import('./pages/NotFound'));

// New Code Analysis page
const CodeAnalysis = lazy(() => import('./pages/CodeAnalysis'));
const CodeAnalysisReport = lazy(() => import('./pages/CodeAnalysisReport'));

function App() {
  useEffect(() => {
    // Initialize performance monitoring when the app loads
    initPerformanceMonitoring();

    // Prefetch critical routes that are likely to be accessed next
    const prefetchCriticalRoutes = () => {
      // Create a list of routes that will be prefetched
      const routesToPrefetch = [
        './pages/Dashboard',
        './pages/LeaderboardPage',
        './pages/EventsPage'
      ];

      // Use requestIdleCallback to prefetch during browser idle time
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          routesToPrefetch.forEach(route => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = route;
            link.as = 'script';
            document.head.appendChild(link);
          });
        });
      }
    };

    // Call prefetch after initial load
    window.addEventListener('load', prefetchCriticalRoutes);

    return () => {
      window.removeEventListener('load', prefetchCriticalRoutes);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/subscription-success" element={<SubscriptionSuccess />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route path="/code-analysis" element={<CodeAnalysis />} />
          <Route path="/code-analysis/report" element={<CodeAnalysisReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
