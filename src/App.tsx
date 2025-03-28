
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy loaded components for better performance
const Index = lazy(() => import('./pages/Index'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./pages/LeaderboardPage'));
const Events = lazy(() => import('./pages/EventsPage'));
const Profile = lazy(() => import('./pages/Profile'));
const Updates = lazy(() => import('./pages/Updates'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const SubscriptionSuccess = lazy(() => import('./pages/SubscriptionSuccess'));
const Terms = lazy(() => import('./pages/Terms'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminSettings = lazy(() => import('./pages/AdminSettings'));
const Auth = lazy(() => import('./pages/Auth'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Features = lazy(() => import('./pages/Features'));
const Community = lazy(() => import('./pages/Community'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/subscription-success" element={<SubscriptionSuccess />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
