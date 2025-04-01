
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/layouts/MainLayout';
import Chat from '@/pages/Chat';
import Login from '@/pages/Login';
import Signup from '@/pages/SignUp';
import Settings from '@/pages/Settings';
import SoundProvider from '@/hooks/sounds/SoundProvider';

const App: React.FC = () => {
  return (
    <SoundProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Toaster />
      </MainLayout>
    </SoundProvider>
  );
};

export default App;
