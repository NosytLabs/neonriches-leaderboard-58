
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useNotificationSounds from '@/hooks/use-notification-sounds';

// Pages
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import ProfilePage from '@/pages/ProfilePage';
import EventsPage from '@/pages/EventsPage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import RoyalPrestige from '@/pages/RoyalPrestige';
import Auth from '@/pages/Auth';

// Import CSS files
import './index.css';
import './styles/medieval-animations.css';
import './styles/cosmetics.css';

// Import fonts
const importFonts = () => {
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap',
    'https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap',
  ];
  
  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
};

function App() {
  const { preloadSounds } = useNotificationSounds();
  
  useEffect(() => {
    // Preload sound assets when the app starts
    preloadSounds();
    
    // Import additional fonts
    importFonts();
  }, [preloadSounds]);
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/royal-prestige" element={<RoyalPrestige />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
