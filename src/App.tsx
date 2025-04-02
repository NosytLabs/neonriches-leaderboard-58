
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Signup from '@/pages/SignUp';
import Settings from '@/pages/Settings';
import Chat from '@/pages/Chat';
import { AuthProvider } from '@/contexts/auth';
import SoundProvider from '@/hooks/sounds/SoundProvider';

const App: React.FC = () => {
  // Create a context object for react-helmet-async
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <SoundProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
          <Toaster />
        </SoundProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
