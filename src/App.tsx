
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Features from './pages/Features';
import Teams from './pages/Teams';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PaymentSuccess from './pages/PaymentSuccess';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StatusThroughHistory from './pages/StatusThroughHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/features" element={<Features />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/status-through-history" element={<StatusThroughHistory />} />
    </Routes>
  );
}

export default App;
