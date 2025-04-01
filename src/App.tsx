import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth/AuthProvider';
import { ThemeProvider } from '@/providers/theme-provider';

// Core pages
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import Leaderboard from '@/pages/Leaderboard';
import NotFound from '@/pages/NotFound';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Profile from '@/pages/Profile';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import StatusCenter from '@/pages/StatusCenter';
import Mockery from '@/pages/Mockery';
import Features from '@/pages/Features';
import Teams from '@/pages/Teams';
import Deposit from '@/pages/Deposit';
import Stats from '@/pages/Stats';
import ProfileEnhancements from '@/pages/ProfileEnhancements';
import Marketing from '@/pages/Marketing';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="spendthrone-theme">
        <AuthProvider>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Main App Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/status-through-history" element={<StatusCenter />} />
            <Route path="/mockery" element={<Mockery />} />
            <Route path="/features" element={<Features />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/profile-enhancements" element={<ProfileEnhancements />} />
            <Route path="/marketing" element={<Marketing />} />
            
            {/* Protected User Pages */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="/profile/:username" element={<Profile />} />
            
            {/* Redirection routes for backwards compatibility */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
