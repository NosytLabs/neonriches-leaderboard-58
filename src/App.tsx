
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import Home from './pages/Home';
import Leaderboard from './components/Leaderboard';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/features" element={<ComingSoon title="Features" />} />
          <Route path="/teams" element={<ComingSoon title="Teams" />} />
          <Route path="/status-through-history" element={<ComingSoon title="Status Through History" />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" description="The page you're looking for doesn't exist." />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
