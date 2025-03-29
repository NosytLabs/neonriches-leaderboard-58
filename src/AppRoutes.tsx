
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Teams = lazy(() => import('./pages/Teams'));
const Deposit = lazy(() => import('./pages/Deposit'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const ProfileEnhancements = lazy(() => import('./pages/ProfileEnhancements'));
const Mockery = lazy(() => import('./pages/Mockery'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const StatusThroughHistory = lazy(() => import('./pages/StatusThroughHistory'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Index = lazy(() => import('./pages/Index'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const Subscription = lazy(() => import('./pages/Subscription'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Updates = lazy(() => import('./pages/Updates'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={
          <Suspense fallback={<LoadingScreen />}>
            <Index />
          </Suspense>
        } />
        <Route path="/home" element={
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        } />
        <Route path="/leaderboard" element={
          <Suspense fallback={<LoadingScreen />}>
            <Leaderboard />
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
        <Route path="/teams" element={
          <Suspense fallback={<LoadingScreen />}>
            <Teams />
          </Suspense>
        } />
        <Route path="/signin" element={
          <Suspense fallback={<LoadingScreen />}>
            <Signin />
          </Suspense>
        } />
        <Route path="/signup" element={
          <Suspense fallback={<LoadingScreen />}>
            <Signup />
          </Suspense>
        } />
        <Route path="/subscription" element={
          <Suspense fallback={<LoadingScreen />}>
            <Subscription />
          </Suspense>
        } />
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
        <Route path="/profile-enhancements" element={
          <Suspense fallback={<LoadingScreen />}>
            <ProfileEnhancements />
          </Suspense>
        } />
        <Route path="/mockery" element={
          <Suspense fallback={<LoadingScreen />}>
            <Mockery />
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
        
        {/* Unified Content pages */}
        <Route path="/about" element={
          <Suspense fallback={<LoadingScreen />}>
            <ContentPage pageKey="about" />
          </Suspense>
        } />
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
        
        {/* Catch all route */}
        <Route path="*" element={
          <Suspense fallback={<LoadingScreen />}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
