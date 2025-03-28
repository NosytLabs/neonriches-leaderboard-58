
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import { ToastProvider } from '@/contexts/ToastContext';
import { AuthProvider } from '@/contexts/auth';
import Loading from '@/components/Loading';

// Lazy-loaded pages
const Index = React.lazy(() => import('@/pages/Index'));
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const Leaderboard = React.lazy(() => import('@/pages/Leaderboard'));
const About = React.lazy(() => import('@/pages/About'));
const Events = React.lazy(() => import('@/pages/Events'));
const FAQ = React.lazy(() => import('@/pages/FAQ'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Auth = React.lazy(() => import('@/pages/Auth'));
const Teams = React.lazy(() => import('@/pages/Teams'));
const Features = React.lazy(() => import('@/pages/Features'));
const Certificate = React.lazy(() => import('@/pages/Certificate'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
// Updated import: RoyalCouncil instead of Community
const RoyalCouncil = React.lazy(() => import('@/pages/RoyalCouncil'));

// Error Boundary
const ErrorFallback = React.lazy(() => import('@/components/ErrorFallback'));

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <HelmetProvider>
      <AuthProvider>
        <ToastProvider>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/features" element={<Features />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/certificate" element={<Certificate />} />
              {/* Updated route: /royal-council instead of /community */}
              <Route path="/royal-council" element={<RoyalCouncil />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          
          <Toaster />
        </ToastProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
