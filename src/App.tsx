
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from './hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import LoadingScreen from '@/components/ui/LoadingScreen';
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
const StatusThroughHistory = lazy(() => import('./pages/StatusThroughHistory'));
const Updates = lazy(() => import('./pages/Updates'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Teams = lazy(() => import('./pages/Teams'));
const Deposit = lazy(() => import('./pages/Deposit'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const ProfileEnhancements = lazy(() => import('./pages/ProfileEnhancements'));

function App() {
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
              
              {/* Profile & Account Pages */}
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
              <Route path="/profile-enhancements" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ProfileEnhancements />
                </Suspense>
              } />
              <Route path="/settings" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Settings />
                </Suspense>
              } />
              
              {/* Authentication Pages */}
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
              
              {/* Finance & Payment Pages */}
              <Route path="/wallet" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Wallet />
                </Suspense>
              } />
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
              <Route path="/subscription" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Subscription />
                </Suspense>
              } />
              
              {/* Team & Competition Pages */}
              <Route path="/teams" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Teams />
                </Suspense>
              } />
              <Route path="/leaderboard" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Leaderboard />
                </Suspense>
              } />
              <Route path="/prestige" element={
                <Suspense fallback={<LoadingScreen />}>
                  <RoyalPrestige />
                </Suspense>
              } />
              
              {/* Social Interaction Pages */}
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
                  <ContentPage pageKey="about" />
                </Suspense>
              } />
              <Route path="/status-history" element={
                <Suspense fallback={<LoadingScreen />}>
                  <StatusThroughHistory />
                </Suspense>
              } />
              <Route path="/updates" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="updates" />
                </Suspense>
              } />
              
              {/* Legal & Policy Pages */}
              <Route path="/terms" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="terms" />
                </Suspense>
              } />
              <Route path="/privacy" element={
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
              
              {/* Redirect aliases for common URL variations */}
              <Route path="/terms-of-service" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="terms" />
                </Suspense>
              } />
              <Route path="/privacy-policy" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ContentPage pageKey="privacy" />
                </Suspense>
              } />
              
              {/* Catch All for 404 */}
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
