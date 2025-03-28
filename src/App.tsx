
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@/contexts/ToastContext';
import { ThemeProvider } from '@/providers/theme-provider';
import { AuthProvider } from '@/contexts/auth'; 

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Features from '@/pages/Features';
import Leaderboard from '@/pages/Leaderboard';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import Auth from '@/pages/Auth';
import NotFound from '@/pages/NotFound';

// Import styles
import './styles/main.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="spendthrone-theme">
        <ToastProvider>
          <AuthProvider>
            <BrowserRouter>
              <Helmet titleTemplate="%s | SpendThrone" defaultTitle="SpendThrone - Where Your Wallet Determines Your Worth">
                <meta name="description" content="A satirical pay-to-win social platform where your rank is determined solely by how much you spend. Join the royal hierarchy today!" />
                <meta name="theme-color" content="#0D0D20" />
                <link rel="canonical" href="https://spendthrone.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SpendThrone - Where Your Wallet Determines Your Worth" />
                <meta property="og:description" content="A satirical pay-to-win social platform where your rank is determined solely by how much you spend." />
                <meta property="og:site_name" content="SpendThrone" />
                <meta property="og:url" content="https://spendthrone.com" />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SpendThrone - Where Your Wallet Determines Your Worth" />
                <meta name="twitter:description" content="A satirical pay-to-win social platform where your rank is determined solely by how much you spend." />
                <meta name="twitter:image" content="/images/og-image.jpg" />
              </Helmet>
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
