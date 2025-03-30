
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Leaderboard from '@/pages/Leaderboard';
import Profile from '@/pages/Profile';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from '@/pages/Dashboard';
import Deposit from '@/pages/Deposit';
import { AuthProvider } from '@/hooks/useAuth';
import { ToastProvider } from '@/contexts/ToastContext';
import { SolanaProvider } from '@/contexts/SolanaContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <SolanaProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/deposit" element={<Deposit />} />
            </Routes>
            <Toaster />
          </SolanaProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
