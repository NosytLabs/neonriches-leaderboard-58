
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './contexts/auth/AuthProvider';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            
            {/* Coming Soon Pages */}
            <Route path="/teams" element={<ComingSoonPage title="Teams" description="Join forces with other royals to achieve greatness together. Coming soon!" />} />
            <Route path="/events" element={<ComingSoonPage title="Royal Events" description="Participate in exclusive events and competitions. Coming soon!" />} />
            <Route path="/marketplace" element={<ComingSoonPage title="Royal Marketplace" description="Buy and sell exclusive items and boost your status. Coming soon!" />} />
            <Route path="/leaderboard" element={<ComingSoonPage title="Leaderboards" description="See who rules the kingdom with their spending power. Coming soon!" />} />
            <Route path="/achievements" element={<ComingSoonPage title="Achievements" description="Earn royal achievements through your spending habits. Coming soon!" />} />
            <Route path="/subscription" element={<ComingSoonPage title="Royal Subscriptions" description="Subscribe to exclusive premium features. Coming soon!" />} />
            <Route path="/certificate" element={<ComingSoonPage title="Royal Certificates" description="Earn certified status for your spending accomplishments. Coming soon!" />} />
            <Route path="/features" element={<ComingSoonPage title="Premium Features" description="Unlock premium features through spending. Coming soon!" />} />
            <Route path="/community" element={<ComingSoonPage title="Royal Community" description="Connect with fellow royals and expand your influence. Coming soon!" />} />
            <Route path="/chat" element={<ComingSoonPage title="Royal Messengers" description="Chat with other members of the royal court. Coming soon!" />} />
            <Route path="/referrals" element={<ComingSoonPage title="Royal Referrals" description="Invite others to join the court and earn rewards. Coming soon!" />} />
            
            {/* Fallback for all other routes */}
            <Route path="*" element={<ComingSoonPage title="Under Construction" description="This part of the kingdom is still being built. Check back soon!" />} />
          </Routes>
          
          <Toaster />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
