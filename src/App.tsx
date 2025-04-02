
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/auth';
import Leaderboard from '@/pages/LeaderboardPage';
import MockeryPage from '@/pages/MockeryPage';
import Auth from '@/pages/Auth';

const App: React.FC = () => {
  // Create a context object for react-helmet-async
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/mockery/:username" element={<MockeryPage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
