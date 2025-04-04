
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth';
import { SolanaProvider } from '@/contexts/SolanaContext';
import { ToastProvider } from '@/components/ui/toast-provider';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Pages
import Leaderboard from '@/pages/LeaderboardPage';
import MockeryPage from '@/pages/MockeryPage';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';
import Events from '@/pages/Events';
import Community from '@/pages/Community';
import Teams from '@/pages/Teams';
import ProfilePage from '@/pages/ProfilePage';
import WalletPage from '@/pages/WalletPage';
import SettingsPage from '@/pages/SettingsPage';
import AboutPage from '@/pages/AboutPage';
import FeaturesPage from '@/pages/FeaturesPage';
import HistoryPage from '@/pages/HistoryPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Use dynamic import for react-helmet-async to handle cases where it might not be available yet
let HelmetProvider: React.ComponentType<{children: React.ReactNode, context?: object}>;
try {
  HelmetProvider = require('react-helmet-async').HelmetProvider;
} catch (e) {
  // Use a fallback if react-helmet-async is not available
  HelmetProvider = ({ children }) => <>{children}</>;
  console.warn('Using fallback HelmetProvider. Some SEO features may be limited.');
}

const App: React.FC = () => {
  // Create a context object for react-helmet-async
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ToastProvider>
        <SolanaProvider>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Leaderboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/register" element={<Auth />} />
              <Route path="/status-through-history" element={<HistoryPage />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/mockery" element={
                <ProtectedRoute>
                  <MockeryPage />
                </ProtectedRoute>
              } />
              <Route path="/mockery/:action" element={
                <ProtectedRoute>
                  <MockeryPage />
                </ProtectedRoute>
              } />
              <Route path="/chat" element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              } />
              <Route path="/events" element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              } />
              <Route path="/community" element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="/wallet" element={
                <ProtectedRoute>
                  <WalletPage />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              } />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
          </AuthProvider>
        </SolanaProvider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;
