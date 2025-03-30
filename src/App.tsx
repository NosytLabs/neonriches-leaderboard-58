import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import Leaderboard from '@/pages/Leaderboard';
import Auth from '@/pages/Auth';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import NotFound from '@/pages/NotFound';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Features from '@/pages/Features';
import Teams from '@/pages/Teams';
import StatusThroughHistory from '@/pages/StatusThroughHistory';
import Profile from '@/pages/Profile';
import Wallet from '@/pages/Wallet';
import Deposit from '@/pages/Deposit';
import Withdraw from '@/pages/Withdraw';
import Mockery from '@/pages/Mockery';
import Events from '@/pages/Events';
import Settings from '@/pages/Settings';
import Chat from '@/pages/Chat';
import RoyalCouncil from '@/pages/RoyalCouncil';
import AdminSettings from '@/pages/AdminSettings';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/features" element={<Features />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/status-through-history" element={<StatusThroughHistory />} />
            
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
            <Route 
              path="/wallet" 
              element={
                <ProtectedRoute>
                  <Wallet />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/deposit" 
              element={
                <ProtectedRoute>
                  <Deposit />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/withdraw" 
              element={
                <ProtectedRoute>
                  <Withdraw />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } 
            />
            
            {/* Feature Pages */}
            <Route 
              path="/mockery" 
              element={<Mockery />} 
            />
            <Route 
              path="/events" 
              element={<Events />} 
            />
            <Route 
              path="/chat" 
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/royal-council" 
              element={
                <ProtectedRoute>
                  <RoyalCouncil />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Pages */}
            <Route 
              path="/admin-settings" 
              element={
                <ProtectedRoute>
                  <AdminSettings />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
