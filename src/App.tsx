
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import Leaderboard from '@/pages/Leaderboard';
import Settings from '@/pages/Settings';
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';
import Marketing from '@/pages/Marketing';
import Subscription from '@/pages/Subscription';
import RoyalPrestige from '@/pages/RoyalPrestige';
import Certificate from '@/pages/Certificate';
import NotFound from '@/pages/NotFound';
import ComingSoonPage from '@/pages/ComingSoonPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription/success" element={<ComingSoonPage title="Subscription Success" description="Thank you for your royal subscription!" />} />
        <Route path="/prestige" element={<RoyalPrestige />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:id" element={<Certificate />} />
        
        {/* Coming Soon Pages */}
        <Route path="/teams" element={<ComingSoonPage title="Royal Houses" description="Choose your alliance among the prestigious royal houses." />} />
        <Route path="/events" element={<ComingSoonPage title="Royal Events" description="Special events and tournaments for the royal court." />} />
        <Route path="/marketplace" element={<ComingSoonPage title="Royal Marketplace" description="Exchange goods and services with other noble members." />} />
        <Route path="/gallery" element={<ComingSoonPage title="Royal Gallery" description="View the most prestigious achievements and certificates." />} />
        <Route path="/challenges" element={<ComingSoonPage title="Royal Challenges" description="Compete in special challenges to earn rewards and recognition." />} />
        <Route path="/rewards" element={<ComingSoonPage title="Royal Rewards" description="Claim your rewards for loyal service to the throne." />} />
        <Route path="/referrals" element={<ComingSoonPage title="Royal Referrals" description="Invite new nobles to join the kingdom and earn rewards." />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
