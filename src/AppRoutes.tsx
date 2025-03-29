
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
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={
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
        
        {/* Content pages with unified component */}
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
        <Route path="/updates" element={
          <Suspense fallback={<LoadingScreen />}>
            <ContentPage pageKey="updates" />
          </Suspense>
        } />
        <Route path="/code-analysis" element={
          <Suspense fallback={<LoadingScreen />}>
            <ContentPage pageKey="code-analysis" />
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
