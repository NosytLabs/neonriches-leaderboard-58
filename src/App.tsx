
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from './hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import { Skeleton } from "@/components/ui/skeleton";
import MainLayout from './layouts/MainLayout';

// Lazy loaded components for better performance
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Subscription = lazy(() => import('./pages/Subscription'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Wallet = lazy(() => import('./pages/Wallet'));
const RoyalPrestige = lazy(() => import('./pages/RoyalPrestige'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Mockery = lazy(() => import('./pages/Mockery'));
const MockeryGuide = lazy(() => import('./pages/MockeryGuide'));
const About = lazy(() => import('./pages/About'));
const StatusThroughHistory = lazy(() => import('./pages/StatusThroughHistory'));
const Updates = lazy(() => import('./pages/Updates'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Teams = lazy(() => import('./pages/Teams'));
const Deposit = lazy(() => import('./pages/Deposit'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const ProfileEnhancements = lazy(() => import('./pages/ProfileEnhancements'));

// Loading component for suspense fallback
const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
    <Skeleton className="w-[200px] h-[50px] rounded-md mb-4" />
    <p className="text-muted-foreground">Loading...</p>
  </div>
);

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
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* Main Pages */}
              <Route index element={
                <Suspense fallback={<LoadingScreen />}>
                  <Home />
                </Suspense>
              } />
              <Route path="/dashboard" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Dashboard />
                </Suspense>
              } />
              <Route path="/profile/:username" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Profile />
                </Suspense>
              } />
              <Route path="/profile" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Profile />
                </Suspense>
              } />
              <Route path="/settings" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Settings />
                </Suspense>
              } />
              
              {/* User Account Management */}
              <Route path="/subscription" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Subscription />
                </Suspense>
              } />
              <Route path="/login" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Login />
                </Suspense>
              } />
              <Route path="/signup" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Signup />
                </Suspense>
              } />
              <Route path="/wallet" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Wallet />
                </Suspense>
              } />
              
              {/* Spending & Team Features */}
              <Route path="/deposit" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Deposit />
                </Suspense>
              } />
              <Route path="/withdraw" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Withdraw />
                </Suspense>
              } />
              <Route path="/teams" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Teams />
                </Suspense>
              } />
              <Route path="/profile-enhancements" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ProfileEnhancements />
                </Suspense>
              } />
              
              {/* Feature Pages */}
              <Route path="/prestige" element={
                <Suspense fallback={<LoadingScreen />}>
                  <RoyalPrestige />
                </Suspense>
              } />
              <Route path="/leaderboard" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Leaderboard />
                </Suspense>
              } />
              <Route path="/mockery" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Mockery />
                </Suspense>
              } />
              <Route path="/mockery-guide" element={
                <Suspense fallback={<LoadingScreen />}>
                  <MockeryGuide />
                </Suspense>
              } />
              
              {/* Information Pages */}
              <Route path="/about" element={
                <Suspense fallback={<LoadingScreen />}>
                  <About />
                </Suspense>
              } />
              <Route path="/status-through-history" element={
                <Suspense fallback={<LoadingScreen />}>
                  <StatusThroughHistory />
                </Suspense>
              } />
              <Route path="/updates" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Updates />
                </Suspense>
              } />
              
              {/* Content Pages (consolidated) */}
              <Route path="/terms" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="terms" />
                </Suspense>
              } />
              <Route path="/terms-of-service" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="terms" />
                </Suspense>
              } />
              <Route path="/privacy" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="privacy" />
                </Suspense>
              } />
              <Route path="/privacy-policy" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="privacy" />
                </Suspense>
              } />
              <Route path="/features" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="features" />
                </Suspense>
              } />
              <Route path="/faq" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="faq" />
                </Suspense>
              } />
              
              {/* Catch All */}
              <Route path="*" element={
                <Suspense fallback={<LoadingScreen />}>
                  <NotFound />
                </Suspense>
              } />
            </Route>
          </Routes>
          <Toaster />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
