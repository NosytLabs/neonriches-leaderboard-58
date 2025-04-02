
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/auth';
import { SolanaProvider } from '@/contexts/SolanaContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Leaderboard from '@/pages/LeaderboardPage';
import MockeryPage from '@/pages/MockeryPage';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';

const App: React.FC = () => {
  // Create a context object for react-helmet-async
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <SolanaProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Leaderboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/mockery/:username" element={<MockeryPage />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
          <Toaster />
        </AuthProvider>
      </SolanaProvider>
    </HelmetProvider>
  );
};

export default App;
