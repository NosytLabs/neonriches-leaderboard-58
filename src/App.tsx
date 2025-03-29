
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from './hooks/useAuth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { Skeleton } from "@/components/ui/skeleton";
import RoyalPrestige from './pages/RoyalPrestige';
import Leaderboard from './pages/Leaderboard';
import Mockery from './pages/Mockery';
import MockeryGuide from './pages/MockeryGuide';
import About from './pages/About';
import StatusThroughHistory from './pages/StatusThroughHistory';

// Consolidating the app structure by eliminating duplicate routes and pages
function App() {
  // Force light/dark mode based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <React.Suspense fallback={
            <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
              <Skeleton className="w-[200px] h-[50px] rounded-md mb-4" />
              <p className="text-muted-foreground">Loading...</p>
            </div>
          }>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* User Account Management */}
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/wallet" element={<Wallet />} />
              
              {/* Feature Pages */}
              <Route path="/prestige" element={<RoyalPrestige />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/mockery" element={<Mockery />} />
              <Route path="/mockery-guide" element={<MockeryGuide />} />
              
              {/* Information Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/status-history" element={<StatusThroughHistory />} />
              
              {/* Catch All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </React.Suspense>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
