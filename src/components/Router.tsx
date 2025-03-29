
import React from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { AnimatePresence } from 'framer-motion';

// Public pages
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Leaderboard from '@/pages/Leaderboard';
import About from '@/pages/About';
import Profile from '@/pages/Profile';
import Teams from '@/pages/Teams';
import Mockery from '@/pages/Mockery';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CodeAnalysis from '@/pages/CodeAnalysis';
import CodeAnalysisReport from '@/pages/CodeAnalysisReport';
import RoyalPrestige from '@/pages/RoyalPrestige';
import EventsPage from '@/pages/EventsPage';
import BrandKitPage from '@/pages/BrandKitPage';

// Protected pages
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';
import PayWithCrypto from '@/pages/PayWithCrypto';
import PayWithFiat from '@/pages/PayWithFiat';

// 404
import NotFound from '@/pages/NotFound';

// Layout wrapper for Protected routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const Router: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/mockery" element={<Mockery />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/code-analysis" element={<CodeAnalysis />} />
        <Route path="/code-analysis/report" element={<CodeAnalysisReport />} />
        <Route path="/royal-prestige" element={<RoyalPrestige />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/brand-kit" element={<BrandKitPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pay/crypto"
          element={
            <ProtectedRoute>
              <PayWithCrypto />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pay/fiat"
          element={
            <ProtectedRoute>
              <PayWithFiat />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
