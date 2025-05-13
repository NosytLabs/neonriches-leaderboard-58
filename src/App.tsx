
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold mb-4">SpendThrone</h1>
              <p className="text-xl mb-8">The ultimate pay-to-win leaderboard</p>
              <ComingSoon title="SpendThrone" description="Where your money defines your status." />
            </div>
          } />
          <Route path="/leaderboard" element={<ComingSoon title="Leaderboard" />} />
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
