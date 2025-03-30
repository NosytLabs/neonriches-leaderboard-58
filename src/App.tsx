import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutPage from '@/pages/About';
import FAQ from '@/pages/FAQ';
import Features from '@/pages/Features';
import StatusThroughHistory from '@/pages/StatusThroughHistory';
import HistoricalAbsurdities from '@/pages/HistoricalAbsurdities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/features" element={<Features />} />
        <Route path="/status-through-history" element={<StatusThroughHistory />} />
        <Route path="/historical-absurdities" element={<HistoricalAbsurdities />} />
      </Routes>
    </Router>
  );
}

export default App;
