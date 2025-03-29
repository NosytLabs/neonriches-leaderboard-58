import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider"
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';
import AuthContext from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import RoyalPrestige from './pages/RoyalPrestige';
import Leaderboard from './pages/Leaderboard';
import Mockery from './pages/Mockery';
import MockeryGuide from './pages/MockeryGuide';

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
        <Skeleton className="w-[200px] h-[50px] rounded-md mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/prestige" element={<RoyalPrestige />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

          {/* Mockery Routes */}
          <Route path="/mockery" element={<Mockery />} />
          <Route path="/mockery-guide" element={<MockeryGuide />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </Router>
  );
}

export default App;
