
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { SolanaProvider } from './contexts/SolanaContext';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './contexts/auth';
import './styles/profile-boost.css';

const SolanaApp: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <SolanaProvider>
          <AppRoutes />
          <Toaster />
        </SolanaProvider>
      </AuthProvider>
    </Router>
  );
};

export default SolanaApp;
