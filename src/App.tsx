
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutPage from '@/pages/About';
import FAQ from '@/pages/FAQ';
import Features from '@/pages/Features';
import StatusThroughHistory from '@/pages/StatusThroughHistory';
import HistoricalAbsurdities from '@/pages/HistoricalAbsurdities';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import SignIn from '@/pages/SignIn';
import { AuthProvider } from '@/contexts/auth/AuthContext';
import Leaderboard from '@/pages/Leaderboard';
import CodeAnalysis from '@/pages/CodeAnalysis';
import CodeAnalysisReport from '@/pages/CodeAnalysisReport';
import CodeCleanupReport from '@/pages/CodeCleanupReport';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/features" element={<Features />} />
          <Route path="/status-through-history" element={<StatusThroughHistory />} />
          <Route path="/historical-absurdities" element={<HistoricalAbsurdities />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/code-analysis" element={<CodeAnalysis />} />
          <Route path="/code-analysis/report" element={<CodeAnalysisReport />} />
          <Route path="/code-cleanup" element={<CodeCleanupReport />} />
          <Route path="/auth/signin" element={<Auth />} />
          <Route path="/auth/signup" element={<Auth />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
