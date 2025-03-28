
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Teams from './pages/Teams';
import Profile from './pages/Profile';
import Features from './pages/Features';
import Settings from './pages/Settings';
import Events from './pages/Events';
import Mockery from './pages/Mockery';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="teams" element={<Teams />} />
              <Route path="profile/:username" element={<Profile />} />
              <Route path="features" element={<Features />} />
              <Route path="settings" element={<Settings />} />
              <Route path="events" element={<Events />} />
              <Route path="mockery" element={<Mockery />} />
              <Route path="help" element={<Help />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
