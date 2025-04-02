
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth';
import { SolanaProvider } from '@/contexts/SolanaContext';
import { ToastProvider } from '@/components/ui/toast-provider';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Leaderboard from '@/pages/LeaderboardPage';
import MockeryPage from '@/pages/MockeryPage';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';
import Events from '@/pages/Events';
import Community from '@/pages/Community';
import Teams from '@/pages/Teams';

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
              <Route path="/" element={<Leaderboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/mockery" element={<MockeryPage />} />
              <Route path="/mockery/:action" element={<MockeryPage />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/register" element={<Auth />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/events" element={<Events />} />
              <Route path="/community" element={<Community />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
            <Toaster />
          </AuthProvider>
        </SolanaProvider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;
