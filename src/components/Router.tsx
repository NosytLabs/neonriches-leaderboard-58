
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
import FAQ from '@/pages/FAQ';
import Features from '@/pages/Features';
import RoyalPrestige from '@/pages/RoyalPrestige';
import EventsPage from '@/pages/EventsPage';
import BrandKitPage from '@/pages/BrandKitPage';
import Certificate from '@/pages/Certificate';
import Contact from '@/pages/Contact';
import Terms from '@/pages/Terms';

// Protected pages
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';
import PayWithCrypto from '@/pages/PayWithCrypto';
import PayWithFiat from '@/pages/PayWithFiat';
import Chat from '@/pages/Chat';

// 404
import NotFound from '@/pages/NotFound';

// Layout wrapper for Protected routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
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
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/features" element={<Features />} />
        <Route path="/royal-prestige" element={<RoyalPrestige />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/brand-kit" element={<BrandKitPage />} />
        <Route path="/certificate/:username" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />

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
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
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
