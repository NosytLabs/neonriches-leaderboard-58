import React from 'react';
import Router from './components/Router';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import ProfileEnhancements from '@/pages/ProfileEnhancements';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/profile-enhancements" element={<ProfileEnhancements />} />
    </Routes>
  );
}

export default App;
