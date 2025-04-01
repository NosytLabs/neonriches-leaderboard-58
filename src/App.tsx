
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth/AuthProvider';

// Pages
import Index from '@/pages/Index';
import Features from '@/pages/Features';
import Mockery from '@/pages/Mockery';
import ComingSoon from '@/components/ComingSoon';

// We'll use the ComingSoon component for pages that aren't fully implemented yet
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mockery" element={<Mockery />} />
          
          {/* Placeholder pages using ComingSoon */}
          <Route path="/leaderboard" element={<ComingSoon title="Royal Leaderboard" description="See who's spending the most in our satirical kingdom." />} />
          <Route path="/deposit" element={<ComingSoon title="Royal Treasury" description="Add to your coffers and climb the ranks." />} />
          <Route path="/profile" element={<ComingSoon title="Noble Profile" description="View your royal status and mockery history." />} />
          <Route path="/stats" element={<ComingSoon title="Kingdom Statistics" description="Analyze spending patterns across the realm." />} />
          <Route path="/teams" element={<ComingSoon title="Royal Alliances" description="Form teams with other nobles to showcase collective wealth." />} />
          <Route path="/login" element={<ComingSoon title="Royal Authentication" description="Access your noble account." />} />
          <Route path="/signup" element={<ComingSoon title="Join the Nobility" description="Create your account and begin your ascent." />} />
          <Route path="/status-through-history" element={<ComingSoon title="Status Through History" description="Learn how wealth has been flaunted throughout the ages." />} />
          
          {/* Redirect for any unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </>
  );
};

export default App;
