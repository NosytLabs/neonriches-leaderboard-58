
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/layouts/MainLayout';
import Chat from '@/pages/Chat';
import Login from '@/pages/Login';
import Signup from '@/pages/SignUp';
import Settings from '@/pages/Settings';
import SoundProvider from '@/hooks/sounds/SoundProvider';
import { AuthProvider } from '@/contexts/auth';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <SoundProvider>
          <Routes>
            <Route path="/" element={<MainLayout><Chat /></MainLayout>} />
            <Route path="/chat" element={<MainLayout><Chat /></MainLayout>} />
            <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
            <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          </Routes>
          <Toaster />
        </SoundProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
