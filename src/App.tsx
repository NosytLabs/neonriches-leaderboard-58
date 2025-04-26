
import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import RoyalPrestige from "./pages/RoyalPrestige";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/royal-prestige" element={<Layout><RoyalPrestige /></Layout>} />
    </Routes>
  );
}

export default App;
