
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import RoyalPrestige from "./pages/RoyalPrestige";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/royal-prestige" element={<Layout><RoyalPrestige /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
